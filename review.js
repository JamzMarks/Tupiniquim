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


async function insertReview(elementId, dataUrl){
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
    });
}