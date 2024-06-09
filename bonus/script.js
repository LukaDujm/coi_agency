let feedCount = 0; 

document.getElementById('growButton').addEventListener('click', function() {
    const food = document.createElement('div');
    food.classList.add('food');
    document.querySelector('.container').appendChild(food);

    food.classList.add('fall');

    
    food.addEventListener('animationend', function() {
        food.remove();

        feedCount++;

        if (feedCount >= 5) {
            const fish = document.querySelector('.fish');
            fish.style.transform = 'scale(5)';
        }
    });
});