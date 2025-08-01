console.warn(`
⚠️ NOTICE: Recipes in this project are original content and are protected under the 
Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 License.

You are STRICTLY NOT ALLOWED to:
- Copy or reuse the recipes for commercial purposes.
- Modify or redistribute them in any form.

For more information, please read:
- README: https://github.com/daBest222/TheFoodForge/blob/main/README.md
- License: https://github.com/daBest222/TheFoodForge/blob/main/LICENSE

Thank you for respecting the terms.
`);

var data = {};
var favouriteRecipes = {};

function toggleFavourite(favouriteButton)
{
    if (favouriteRecipes[favouriteButton.id]) {
        setFavourite(favouriteButton.id, false);
        setFavouriteButtonState(favouriteButton, false);
    }
    else
    {
        setFavourite(favouriteButton.id, true);
        setFavouriteButtonState(favouriteButton, true);
    }
}

function loadFavourite()
{
    if (localStorage.getItem("favouriteRecipes") === null)
    {
        for (var recipe of data.recipes)
        {
            favouriteRecipes[recipe.id] = false;
        }
        localStorage.setItem("favouriteRecipes", JSON.stringify(favouriteRecipes));
    }
    else
    {
        favouriteRecipes = JSON.parse(localStorage.getItem("favouriteRecipes"));
    }
}

function setFavourite(recipeId, isFavourite)
{
    favouriteRecipes[recipeId] = isFavourite;
    localStorage.setItem("favouriteRecipes", JSON.stringify(favouriteRecipes));
}

function setFavouriteButtonState(favouriteButton, isFavourite)
{
    if (isFavourite)
    {
        favouriteButton.innerHTML = "❤️ Remove from favourites";
    }
    else
    {
        favouriteButton.innerHTML = "❤️ Add to favourites";
    }
}

function setFavouriteButton(favouriteButton, recipeId)
{
    if (favouriteRecipes[recipeId])
    {
        setFavouriteButtonState(favouriteButton, true);
    }
    else
    {
        setFavouriteButtonState(favouriteButton, false);
    }
}

async function loadData()
{
    var loaded = false;
    var attemptsLeft = 5;

    while (!loaded)
    {
        try
        {
            const response = await fetch("data/data.json");
            data = await response.json();
            loaded = true;
        }
        catch (error)
        {
            console.error("Error loading data:", error);
            attemptsLeft--;

            if (attemptsLeft === 0)
            {
                console.error("Failed to load data after multiple attempts.");
                alert("Failed to load data. Please try again later or press 'OK' to reload the page.");
                window.location.reload();
            }
        }
    }
}

loadData().then(() => {
    loadFavourite();

    if (window.location.pathname.endsWith("/TheFoodForge/"))
    {
        displayRecipes(data.recipes);

        var randomIndex = Math.floor(Math.random() * data.taglines.length);
        document.getElementById("tagline").innerHTML = data.taglines[randomIndex];
    }
    else if (window.location.pathname.endsWith("/TheFoodForge/recipe.html"))
    {
        var urlParams = new URLSearchParams(window.location.search);
        var recipeId = urlParams.get("id");
        var recipe = findRecipeById(recipeId);

        if (recipe)
        {
            displayRecipe(recipe);
        }
        else
        {
            window.location.href = "404.html";
        }
    }
});

function findRecipeById(id) {
    return data.recipes.find(recipe => recipe.id === id);
}