var wakeLock = null;

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

    ingredientsList = document.getElementById("ingredientsList");
    ingredientsList.innerHTML = "";
    recipe.ingredients.forEach(ingredient => 
    {
        var li = document.createElement("li");
        li.innerHTML = ingredient;
        ingredientsList.appendChild(li);
    });

    var instructionsList = document.getElementById("instructionsList");
    instructionsList.innerHTML = "";
    recipe.instructions.forEach(instruction => 
    {
        var li = document.createElement("li");
        li.innerHTML = instruction;
        instructionsList.appendChild(li);
    });
}

function enableCookingMode()
{
    if ("wakeLock" in navigator)
    {
        navigator.wakeLock.request("screen")
            .then(lock => 
            {
                wakeLock = lock;
            })
            .catch(err => 
            {
                console.error("Wake Lock error:", err);
            });
    }
    else
    {
        alert("Cooking mode is not supported on this device/browser.");
    }
}

function disableCookingMode()
{
    if (wakeLock)
    {
        wakeLock.release();
        wakeLock = null;
    }
}

function toggleCookingMode(isEnabled)
{
    if (isEnabled)
    {
        enableCookingMode();
    }
    else
    {
        disableCookingMode();
    }
}