function displayRecipe(recipe)
{
    document.getElementById("recipeName").innerHTML = recipe.name;
    document.getElementById("recipeDescription").innerHTML = recipe.description;
}