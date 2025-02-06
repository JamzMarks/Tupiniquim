async function initialize() {
    await insertData('newArrivals', "data/products.json");
    await insertData('topSelling', "data/products.json" );
    getStarRatings();  
}

initialize();

function getStarRatings() {
    const starElements = document.querySelectorAll(".starRate");
    const ratings = [];

    starElements.forEach(div => {
        const firstP = div.querySelector("p");
        if (firstP) {
            const rating = parseFloat(firstP.textContent.trim(), 10);
            if (!isNaN(rating)) {
                let ratingObj = {
                    element: div,
                    value: rating
                }
                ratings.push(ratingObj);
            }
        }
    });

    insertStarRating(ratings);
}

function insertStarRating(arr){
    arr.forEach(item => {
        const {element, value} = item
        const textP = element.querySelector("p");
        if (textP) {
            textP.remove();
        }
        for (let i = 0; i < Math.floor(value); i++) {
            const starImg = document.createElement("img");
            starImg.src = "images/reviews/starFull.svg";
            starImg.alt = "Star";
            starImg.classList.add("star-icon");
            element.appendChild(starImg);
        }
    })
}