
// Get references to page elements and set variables for all individual data that needs to be stored
var allergyDairy = $("#dairy");
var allergyEggs = $("#eggs");
var allergyGluten = $("#gluten");
var allergyNutsOther = $("#nutsOther");
var allergyPeanuts = $("#peanuts");
var allergyShellfish = $("#shellfish");
var courseType = $("#courseType");
var cuisineType = $("#cuisineType");
var dishName = $("#dishName");
var measureLiquids = $("#measureLiquids");
var measureSolids = $("#measureSolids");
var recipeAmount = $("#textAreaAmount");
var recipeIngredient = $("#textAreaIngredient");
var recipeInstructions = $("#textAreaInstructions");
var recipeList = $("#recipeList");
var submitBtn = $("#submitBtn");

// The API object contains methods for each kind of request we'll make

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
  addRecipe: function(recipe) {
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

// Login
// Pull recipe names by chef (user account - recipe list)
// Pull recipe names by search terms (search - recipe list)
// Pull recipe details by recipe id (recipe detail page)

// searchRecipes gets new recipes from the db and repopulates the list
var searchRecipe = function() {
  API.getRecipe().then(function(data) {
    var recipes = data.map(function(recipe) {
      var searchedRecipeHolder = $("<#searchedRecipeHolder>")
        .text(recipe.text)
        .attr("href", "/example/" + recipe.id);

      var li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": recipe.id
        })
        .append(searchedRecipeHolder);

      var recipeDeleteButton = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      li.append(recipeDeleteButton);

      return li;
    });

    recipeList.empty();
    recipeList.append(recipes);
  });
};

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

var refreshRecipes = function() {
  API.getRecipeChef().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

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
        refreshRecipes();
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
    .parent()
    .attr("data-id");

  API.deleteRecipe(idToDelete).then(function() {
    refreshRecipes();
  });
};

// Add event listeners to the submit and delete buttons
submitBtn.on("click", handleRecipeSubmit;
//exampleList.on("click", ".delete", handleDeleteBtnClick);
//addIngredient.on("click", handleRowExpand);

