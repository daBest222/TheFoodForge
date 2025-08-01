function displayRecipe(recipe)
{
    document.getElementsByClassName("recipeName").array.forEach(element => 
    {
        element.innerHTML = recipe.name;
    });
    document.getElementById("recipeDescription").innerHTML = recipe.description;
    document.getElementById("recipeImage").src = recipe.image;
    document.getElementById("recipeTime").innerHTML += recipe.time;
    document.getElementById("recipeCategory").innerHTML += recipe.category;

    var favouriteButton = document.getElementById("favouriteButton");
    favouriteButton.id = recipe.id;
    setFavouriteButton(favouriteButton, recipe.id);
}