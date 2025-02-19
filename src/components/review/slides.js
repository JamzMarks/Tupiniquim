const slider = document.getElementById("reviewList");
let isAnimating = false;

export function moveSlider2(direction) {
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

export function moveSlider(direction) {
    if (isAnimating) return;
    isAnimating = true;

    const cardWidth = slider.firstElementChild.offsetWidth + 20;
    slider.style.transition = "transform 0.5s ease-in-out";

    if (direction === "next") {
        slider.style.transform = `translateX(-${cardWidth}px)`;

        setTimeout(() => {
            const firstCard = slider.querySelector(".reviewCard:first-child");
            firstCard.style.opacity = "0"; // Aplica um fade-out

            setTimeout(() => {
                slider.appendChild(firstCard); // Move o primeiro para o final
                slider.style.transition = "none";
                slider.style.transform = "translateX(0)";
                firstCard.style.opacity = "1"; // Retorna o fade-in
                
                setTimeout(() => {
                    isAnimating = false;
                }, 100);
            }, 300); // Tempo para o fade-out
        }, 500); // Tempo da transição
    } 

    else if (direction === "prev") {
        const lastCard = slider.querySelector(".reviewCard:last-child");
        lastCard.style.opacity = "0"; // Fade-out

        setTimeout(() => {
            slider.prepend(lastCard);
            slider.style.transition = "none";
            slider.style.transform = `translateX(-${cardWidth}px)`;
            lastCard.style.opacity = "1"; // Fade-in

            setTimeout(() => {
                slider.style.transition = "transform 0.5s ease-in-out";
                slider.style.transform = "translateX(0)";

                setTimeout(() => {
                    isAnimating = false;
                }, 500);
            }, 100);
        }, 300);
    } 

    else {
        console.log("Not expected!");
    }
}
