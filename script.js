let rating = 0;

const handleRating = (event) => {
    // deselect rating if the user clicks on the same rating
    if (rating == event.target.dataset.value) {
        const ratingComponent = document.getElementById(`rate${rating}`);
        ratingComponent.style.backgroundColor = 'hsl(213, 19%, 18%)';
        rating = 0;
        return;
    }
    
    // deselect previous rating
    else if (rating > 0) {
        const ratingComponent = document.getElementById(`rate${rating}`);
        ratingComponent.style.backgroundColor = 'hsl(213, 19%, 18%)';
    }

    // select new rating
    rating = event.target.dataset.value;
    const ratingComponent = document.getElementById(event.target.id);
    ratingComponent.style.backgroundColor = 'hsl(217, 12%, 63%)';
}

const handleSubmit = () => {
    const thankyou = document.getElementById('thankyou');
    const ratingComponent = document.getElementById('rating-component');
    ratingComponent.style.display = 'none';
    thankyou.style.display = 'block';

    const rateValue = document.getElementById('rate-value');
    rateValue.innerHTML = rating;
}

const ratingbtn = document.querySelectorAll('.ratings')

ratingbtn.forEach(btn => {
    btn.addEventListener('click', handleRating)
})