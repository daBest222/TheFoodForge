function setStars(element, rating)
{
    element.classList.add("stars");
    element.innerHTML = "★".repeat(rating) + "☆".repeat(5 - rating);
}