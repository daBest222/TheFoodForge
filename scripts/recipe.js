var wakeLock = null;
var cookingMode = false;

function displayRecipe(recipe)
{
    document.title = recipe.name + " - The Food Forge";

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

    ingredientsList = document.getElementById("ingredientList");
    ingredientsList.innerHTML = "";
    recipe.ingredients.forEach(ingredient => 
    {
        var li = document.createElement("li");
        li.innerHTML = ingredient;
        ingredientsList.appendChild(li);
    });

    var instructionsList = document.getElementById("instructionList");
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
    navigator.wakeLock.request("screen").then(lock => 
    {
        wakeLock = lock;
        cookingMode = true;
        toggleCookingModeButton();
    }).catch(err => 
    {
        console.error("Wake Lock error:", err);
        alert("Failed to enable cooking mode. Please try again later.");
    });
}

function disableCookingMode()
{
    if (wakeLock)
    {
        wakeLock.release();
        wakeLock = null;
        cookingMode = false;
        toggleCookingModeButton();
    }
}

function toggleCookingMode()
{
    if (!(cookingMode))
    {
        enableCookingMode();
    }
    else
    {
        disableCookingMode();
    }
}

function toggleCookingModeButton()
{
    var cookingModeTogglerImage = document.getElementById("cookingModeButton");
    if (cookingMode)
    {
        cookingModeTogglerImage.innerHTML = "On";
    }
    else
    {
        cookingModeTogglerImage.innerHTML = "Off";
    }
}

if (!("wakeLock" in navigator))
{
    document.getElementById("cookingModeButton").style.display = "none";
}