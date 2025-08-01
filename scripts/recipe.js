function displayRecipe(recipe)
{
    Array.from(document.getElementsByClassName("recipeName")).forEach(element => 
    {
        element.innerHTML = recipe.name;
    });

    document.getElementById("recipeDescription").innerHTML = recipe.description;
    document.getElementById("recipeImage").src = recipe.image;
    document.getElementById("recipeTime").innerHTML += recipe.time;
    document.getElementById("recipeCategory").innerHTML += recipe.category;

    var favouriteButton = document.getElementsByClassName("favouriteButton")[0];
    favouriteButton.id = recipe.id;
    setFavouriteButton(favouriteButton, recipe.id);
}