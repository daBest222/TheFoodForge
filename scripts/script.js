var data = {};
var favouriteRecipes = [];

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
    favouriteRecipes = JSON.parse(localStorage.getItem("favouriteRecipes"));
}

function setFavourite(recipeId, isFavourite)
{
    favouriteRecipes[recipeId] = isFavourite;
    localStorage.setItem("favouriteRecipes", JSON.stringify(favouriteRecipes));
}

function setFavouriteButtonState(favouriteButton, isFavourite)
{
    if (isFavourite) {
        favouriteButton.innerHTML = "❤️ Remove from favourites";
    } else {
        favouriteButton.innerHTML = "🤍 Add to favourites";
    }
}

function setFavouriteButton(favouriteButton, recipeId)
{
    if (favouriteRecipes[recipeId]) {
        setFavouriteButtonState(favouriteButton, true);
    } else {
        setFavouriteButtonState(favouriteButton, false);
    }
}

async function loadData()
{
    const response = await fetch("data/data.json");
    data = await response.json();
}

loadData().then(() => {
    console.log(data);
    loadFavourite();
});