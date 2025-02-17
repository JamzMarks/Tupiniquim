function getStarRating(element) {
    const firstP = element.querySelector("p");
    if (firstP) {
        const rating = parseFloat(firstP.textContent.trim(), 10);
        if (!isNaN(rating)) {
            let ratingObj = {
                element,
                value: rating
            }
            insertStarRating(ratingObj);
        }
    }
}