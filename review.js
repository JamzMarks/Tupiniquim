async function insertReview(elementId, dataUrl){
    const reviewClasses = {
        card: "reviewCard",
        rating: "starRate",
        userContainer: "user",
        user: "userName",
        check: {
            url: "images/reviews/check.svg",
            alt: 'checkmark'
        },
        review: "review"
    }
    const data = await fetchData(dataUrl);
    const element = document.getElementById(elementId);

    data.forEach(item => {
        const {user, review, rating} = item

        const reviewCard = document.createElement('article');
        reviewCard.classList.add(reviewClasses.card);

        const rateElement = document.createElement('div');
        rateElement.classList.add(reviewClasses.rating)
        
        const rateText = document.createElement('p');
        rateElement.appendChild(rateText);
        rateText.textContent = rating.rate;

        const userContainer = document.createElement('div');
        userContainer.classList.add(reviewClasses.userContainer);

        const userElement = document.createElement('p');
        userElement.classList.add(reviewClasses.user);
        userElement.textContent = user;

        const checkElement = document.createElement('img');
        checkElement.setAttribute('src', reviewClasses.check.url);
        checkElement.setAttribute('alt', reviewClasses.check.alt);

        userContainer.appendChild(userElement);
        userContainer.appendChild(checkElement);

        const reviewElement = document.createElement('p');
        reviewElement.classList.add(reviewClasses.review);
        reviewElement.textContent = review;

        reviewCard.appendChild(rateElement);
        reviewCard.appendChild(userContainer);
        reviewCard.appendChild(reviewElement);

        element.appendChild(reviewCard);
        getStarRating(rateElement);
    });
}


function moveSlide(direction, windowMobile) {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.reviewCard');
    const totalSlides = slides.length;
  
    currentIndex += direction;
  
    if (currentIndex < 0) {
      currentIndex = totalSlides - visibleSlides;
    } else if (currentIndex > totalSlides - visibleSlides) {
      currentIndex = 0;
    }
  
    const slideWidth = slides[0].offsetWidth;
    const offset = -(currentIndex * slideWidth);
    
    document.querySelector('.reviewList').style.transform = `translateX(${offset}px)`;
}

const reviewContainer = document.getElementById("reviewList");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function getReviewValues() {
    const firstCard = reviewContainer.querySelector('.reviewCard');
    const secondCard = reviewContainer.children[1];
    if (!firstCard || !secondCard) return { cardWidth: 0, gapBetweenCards: 0, totalCardWidth: 0 };

    let cardWidth = firstCard.offsetWidth; 
    let gapBetweenCards = secondCard.offsetLeft - (firstCard.offsetLeft + cardWidth);

    let totalCardWidth = cardWidth + gapBetweenCards;

    return { cardWidth, gapBetweenCards, totalCardWidth };
}

nextBtn.addEventListener('click', () => {
    const { totalCardWidth } = getReviewValues();
    reviewContainer.scrollLeft += totalCardWidth;
    console.log(totalCardWidth)
    setTimeout(() => {
        if (reviewContainer.scrollLeft + reviewContainer.offsetWidth >= reviewContainer.scrollWidth) {
            reviewContainer.style.scrollBehavior = "auto"; // Remove animação
            reviewContainer.scrollLeft = 0; // Retorna para o início
            reviewContainer.style.scrollBehavior = "smooth"; // Reaplica animação
        }
    }, 300);
});

prevBtn.addEventListener('click', () => {
    const { totalCardWidth } = getReviewValues();
    reviewContainer.scrollLeft -= totalCardWidth;

    // Se chegou ao início, volta para o final sem transição
    setTimeout(() => {
        if (reviewContainer.scrollLeft <= 0) {
            reviewContainer.style.scrollBehavior = "auto"; // Remove animação
            reviewContainer.scrollLeft = reviewContainer.scrollWidth - reviewContainer.offsetWidth; // Vai para o final
            reviewContainer.style.scrollBehavior = "smooth"; // Reaplica animação
        }
    }, 300);
});
