const slider = document.getElementById("reviewList");
let isAnimating = false;

export function moveSlider(direction) {
    const cardWidth = (slider.firstElementChild).offsetWidth + 20;
    console.log(cardWidth)
    if (isAnimating) return;
    isAnimating = true;
    if (direction === "next") {
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(-${cardWidth}px)`;

        setTimeout(() => {
            slider.appendChild(slider.querySelector(".reviewCard:first-child"));
            slider.style.transition = "none"; 
            slider.style.transform = "translateX(0)";
            setTimeout(() => {
                isAnimating = false;
            }, 500);
        }, 500);
    } 
    else if (direction === "prev") {
        slider.prepend(slider.querySelector(".reviewCard:last-child"));
        slider.style.transition = "none";
        slider.style.transform = `translateX(-${cardWidth}px)`;

        setTimeout(() => {
            slider.style.transition = "transform 0.5s ease-in-out";
            slider.style.transform = "translateX(0)";
            setTimeout(() => {
                isAnimating = false;
            }, 500);
        }, 10);
    } 
    else {
        console.log("Not expected!");
    }
}
