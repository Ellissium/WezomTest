import vars from '../vendor/vars';
vars.reviewsButton.addEventListener('click', (e) => {
    const ratings = document.querySelectorAll('.rating');
    initRatings();
});
const ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {
initRatings();
}
function initRatings() {
	let ratingActive, ratingValue;
    const ratings = document.querySelectorAll('.rating');
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
        console.log(rating);
		initRating(rating);
	}

	function initRating(rating) {
		initRatingVars(rating);

		setRatingActiveWidth();

		if (rating.classList.contains('rating__set')) {
			setRating(rating);
		}
	}

	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}

	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index * 8.3;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}

	function setRating(rating) {
		const ratingItems = rating.querySelectorAll('.rating__item');
			for (let index = 0; index < ratingItems.length; index++) {
				const ratingItem = ratingItems[index];
				ratingItem.addEventListener("mouseenter", function (e){
					initRatingVars(rating);
					setRatingActiveWidth(ratingItem.value);
			});
			ratingItem.addEventListener("mouseleave", function (e) {
				setRatingActiveWidth();
			});
			ratingItem.addEventListener("click", function (e) {
				initRatingVars(rating);

				if (rating.dataset.ajax) {
					setRatingValue(ratingItem.value, rating);
				} else {
					ratingValue.innerHTML = index + 2.4;
					setRatingActiveWidth();
				}
			});

		}
	}

	async function setRatingValue(value, rating) {
		if (!rating,classList.contains('rating__sending')) {
			rating.classList.add('rating__sending');
			let response = await fetch('rating.json', {
				method: 'GET',
				
			//body: JSON.stringify({
			// userRating: value
			//}),
			//headers: {
			// 'content-type': 'application/json'
			//}

			});
			if (response.ok) {
				const result = await response.json();
				const newRating = result.newRating;
				ratingValue.innerHTML = newRating;

				setRatingActiveWidth();

				rating.classList.remove('rating__sending');
			} else {
				alert("Ошибка");
			
				rating,classList.remove('rating__sending');
			}
        }
	}
}
