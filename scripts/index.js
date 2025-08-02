function displayRecipes(recipes)
{
    const recipeBoxTemplate = document.getElementById("recipeBoxTemplate");
    recipeBoxTemplate.removeAttribute("id");

    const recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = "";

    recipes.forEach(recipe => 
    {
        var recipeBox = recipeBoxTemplate.cloneNode(true);
        recipeBox.getElementsByClassName("recipeImage")[0].src = recipe.image;
        recipeBox.getElementsByClassName("recipeName")[0].innerHTML = recipe.name;
        recipeBox.getElementsByClassName("recipeDescription")[0].innerHTML = recipe.description;
        recipeBox.getElementsByClassName("recipeTime")[0].innerHTML += recipe.time
        recipeBox.getElementsByClassName("recipeCategory")[0].innerHTML += recipe.category;
        recipeBox.getElementsByClassName("recipeServings")[0].innerHTML += recipe.servings;
        recipeBox.getElementsByClassName("recipeDifficulty")[0].innerHTML += recipe.difficulty;
        recipeBox.getElementsByClassName("recipeCuisine")[0].innerHTML += recipe.cuisine;
        recipeBox.getElementsByClassName("recipeDietary")[0].innerHTML += recipe.dietary;

        var favouriteButton = recipeBox.getElementsByClassName("favouriteButton")[0];
        favouriteButton.id = recipe.id;
        setFavouriteButton(favouriteButton, recipe.id);

        recipeBox.getElementsByClassName("viewRecipeButton")[0].onclick = () => 
        {
            window.location.href = "recipe.html?id=" + recipe.id;
        };

        recipeBox.style.display = "block";

        recipeContainer.appendChild(recipeBox);
    })
}