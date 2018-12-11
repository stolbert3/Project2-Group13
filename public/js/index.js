
// Get references to page elements and set variables for all individual data that needs to be stored
var allergyGluten = $("#gluten");
var allergyShellfish = $("#shellfish");
var allergyPeanuts = $("#peanuts");
var allergyNutsOther = $("#nutsOther");
var allergydairy = $("#dairy");
var allergyEggs = $("#eggs");
var cuisineType = $("#cuisineType");
var courseType = $("#courseType");
var dishName = $("#dishName");
var recipeIngredient = $("#textAreaIngredient");
var recipeAmount = $("#textAreaAmount");
var measureSolids = $("#measureSolids");
var measureLiquids = $("#measureLiquids");
var recipeInstructions = $("#textAreaInstructions");
var submitBtn = $("#submitBtn");
var privateBtn = $("#privateBtn");
var recipeList = $("#recipeList");



// The API object contains methods for each kind of request we'll make
// URL empty until html routes determined
var API = {
  // Save New Recipe
  saveRecipe: function(recipe) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "",
      data: JSON.stringify(saveRecipe)
    });
  },
  // Get recipe by id
  getRecipe: function() {
    return $.ajax({
      url: "",
      type: "GET"
    });
  },
  // Delete recipe
  deleteRecipe: function(id) {
    return $.ajax({
      url: "" + id,
      type: "DELETE"
    });
  }
  // Edit recipe

  
};

// searchRecipes gets new recipes from the db and repopulates the list
var searchRecipe = function() {
  API.getRecipe().then(function(data) {
    var recipe = data.map(function(recipe) {
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




// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var submitRecipe = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
submitBtn.on("click", handleFormSubmit);
//exampleList.on("click", ".delete", handleDeleteBtnClick);
//addIngredient.on("click", handleRowExpand);

