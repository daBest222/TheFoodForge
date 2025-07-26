function displayRecipes(recipes)
{
    const recipeBoxTemplate = document.getElementById("recipeBoxTemplate");
    recipeBoxTemplate.removeAttribute("id");

    const recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = "";


    for (const recipe of recipes)
    {
        var recipeBox = recipeBoxTemplate.cloneNode(true);
        recipeBox.getElementsByClassName("recipeImage")[0].src = recipe.image;
        recipeBox.getElementsByClassName("recipeName")[0].innerHTML = recipe.name;
        recipeBox.getElementsByClassName("recipeDescription")[0].innerHTML = recipe.description;
        recipeBox.getElementsByClassName("recipeTime")[0].innerHTML += recipe.time
        recipeBox.getElementsByClassName("recipeCategory")[0].innerHTML += recipe.category;

        var favouriteButton = recipeBox.getElementsByClassName("favouriteButton")[0];
        favouriteButton.id = recipe.id;
        setFavouriteButton(favouriteButton, recipe.id);

        recipeBox.style.display = "block";

        recipeContainer.appendChild(recipeBox);
    }
}

displayRecipes(data.recipes);