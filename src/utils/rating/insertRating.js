function insertStarRating(obj){
    const {element, value} = obj
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
    if(isDecimal(value)){
        const starImg = document.createElement("img");
        starImg.src = "images/reviews/starPart.svg";
        starImg.alt = "Half star";
        starImg.classList.add("star-icon");
        starImg.classList.add("starPart-icon");
        element.appendChild(starImg);
    }
}
