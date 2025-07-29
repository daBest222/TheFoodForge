var data = null;
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

function loadData()
{
    fetch("data/data.json")
      .then(response => response.json())
      .then(data => {
        data = data;
      });
}

loadData();
