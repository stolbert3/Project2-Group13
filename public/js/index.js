
// Get references to page elements and set variables for all individual data that needs to be stored
var allergyDairy = $("#dairy").val();
var allergyEggs = $("#eggs").val();
var allergyGluten = $("#gluten").val();
var allergyNutsOther = $("#nutsOther").val();
var allergyPeanuts = $("#peanuts").val();
var allergyShellfish = $("#shellfish").val();
var courseType = $("#courseType").val();
var cuisineType = $("#cuisineType").val();
var dishName = $("#dishName").val();
var measureLiquids = $("#measureLiquids").val();
var measureSolids = $("#measureSolids").val();
var recipeAmount = $("#textAreaAmount").val();
var recipeIngredient = $("#textAreaIngredient").val();
var recipeInstructions = $("#textAreaInstructions").val();

// --------------------------- API object -------------------------------//

var API = {
  // Get all recipes
  getRecipe: function() {
    return $.ajax({
      url: "api/all-recipes",
      type: "GET"
    });
  },
  // Get recipe details by id
  getRecipeId: function(id) {
    return $.ajax({
      url: "api/all-recipes/" + id,
      type: "GET"
    });
  },
  // Get recipe by chef name
  getRecipeChef: function(chef) {
    return $.ajax({
      url: "api/all-recipes/chef/" + chef,
      type: "GET"
    });
  },
  // Save New Recipe
  addRecipe: function() {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/add-recipe",
      data: JSON.stringify(addRecipe)
    });
  },
  // Delete recipe
  deleteRecipe: function(id) {
    return $.ajax({
      url: "api/delete-recipe/" + id,
      type: "DELETE"
    });
  },
  // Edit recipe
  editRecipe: function(id) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "PUT",
      url: "api/update-recipe/" + id,
      data: JSON.stringify(editRecipe)
    });
  }
};

//----------------------------------- Functions ------------------------------------//

// viewAllRecipes gets all recipe names from the db and repopulates the list
var viewAllRecipes = function() {
  API.getRecipe().then(function(data) {
    var recipeInfo = data.map(function(recipe) {
      var $a = $("<a>")
      .text(recipe.recipe_name)
      .attr("href", "api/all-recipes/" + recipe.recipe_id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": recipe.recipe_id
        })
        .append($a);
      console.log($li);
      return $li;
    });

    $("#recipe-list").empty();
    $("#recipe-list").append(recipeInfo);
  });

//showRecipeDetail fills out the recipes.html page with details for individual recipes
var showRecipeDetail = function() {
  API.getRecipeId(searchId).then(function(recipe) {
    $("#recipe-name").empty();
    $("#recipe-name").text(recipe.recipe_name);
    $("#chef-name").empty();
    $("#chef-name").text(recipe.chef_name);
    $("#cuisine-type").empty();
    $("#cuisine-type").text(recipe.cuisine_type);
    $("#course-type").empty();
    $("#course-type").text(recipe.course_type);


  });
};

//searchPageBtn searches for recipes within the database that fit the search paramaters
//returns results on results.html page
var searchRecipes = function() {
  API.getRecipe().then(function(data) {
    var recipeIdList = []
    if (data.cuisine_type === cuisineType && data.course_type === courseType && data.gluten !== allergyGluten && data.shellfish !== allergyShellfish && data.peanuts !== allergyPeanuts && data.nuts_other !== allergyNutsOther && data.dairy !== allergyDairy && data.eggs !== allergyEggs) {
      recipeIdList.append(data.recipe_id);
    }
    return recipeIdList;
  })
  for (i=0; i<=recipeIdList.length, i++) {
    API.getRecipeId(recipeIdList.i).then(function(data) {
      var recipeInfo = data.map(function(recipe) {
        var $a = $("<a>")
        .text(recipe.recipe_name)
        .attr("href", "api/all-recipes/" + recipe.recipe_id);
  
        var $li = $("<li>")
          .attr({
            class: "list-group-item",
            "data-id": recipe.recipe_id
          })
          .append($a);
  
        /*var $button = $("<button>")
          .addClass("btn btn-danger float-right delete")
          .addId("recipeId" + recipe.id)
          .text("View");
  
        $li.append($button);*/
        return $li;
      });
  
      $("#recipe-list").empty();
      $("#recipe-list").append(recipeInfo);
    });
  }
}

// handleRecipeSubmit is called whenever we submit a new recipe
// Save the new recipe to the db and refresh the list
var handleRecipeSubmit = function(event) {
  event.preventDefault();

  var newRecipe = {
    name: dishName.val().trim(),
    chefName: chefName.val().trim(),
    cuisine: cuisineType.val().trim(),
    course: courseType.val().trim(),
    cookingInstructions: recipeInstructions.val().trim()
  };

  var newRecipeIngredients = {
    name: recipeIngredient.val().trim(),
    quantity: recipeAmount.val().trim(),
    measure: measureLiquids.val().trim() + measureSolids.val().trim(),
  };

  var newRecipeAllergens = {
    gluten: allergyGluten.val().trim(),
    shellfish: allergyShellfish.val().trim(),
    peanuts: allergyPeanuts.val().trim(),
    nuts_other: allergyNutsOther.val().trim(),
    dairy: allergyDairy.val().trim(),
    eggs: allergyEggs.val().trim()
  };

  if (!(newRecipe.recipe_name && newRecipe.chef_name && newRecipe.cuisine_type && newRecipe.course_type && newRecipe.cooking_instructions && newRecipeIngredients.name && newRecipeIngredients.quantity && newRecipeIngredients.measure)) {
    alert("You must fill in all fields before submitting!");
    return;
  }

  API.addRecipe(newRecipe).then(function() {
    API.addRecipe(newRecipeIngredients).then(function() {
      API.addRecipe(newRecipeAllergens).then(function() {
        alert("Recipe Added!");
      })
    })
  });

  dishName.val("");
  chefName.val("");
  cuisineType.val("");
  courseType.val("");
  recipeInstructions.val("");
  recipeIngredient.val("");
  recipeAmount.val("");
  measureLiquids.val("");
  measureSolids.val("");

};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .attr("id");

  API.deleteRecipe(idToDelete).then(function() {
    refreshRecipes();
  });
};

//------------------------- Event listeners -------------------------------//

// Function that generates rows in materialize
$(document).ready(function () {
  $('select').formSelect();
});

// Function that generates new ingredient row
$(document).ready(function(){
  console.log("Running?");
  $("#add-button").click(function() {
    console.log("click event?");
      var ingredientRow = document.getElementById("ingredientRow").outerHTML;
      $("#hide").append(ingredientRow);
      console.log(ingredientRow);
  });
});

// Adds new recipe to database
$("#publishBtn").on("click", handleRecipeSubmit());

// Searches for recipes based on search parameters
$("#searchPageBtn").on("click", searchRecipes());

// Shows recipe detail
$("#recipePageBtn").on("click", showRecipeDetail());

// View all recipes
$("#viewAllBtn").on("click", viewAllRecipes());

//exampleList.on("click", ".delete", handleDeleteBtnClick);
//addIngredient.on("click", handleRowExpand);

