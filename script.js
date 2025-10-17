const icon = document.querySelector('.bouncing-icon');
const popup = document.getElementById('discount-popup');
const closeBtn = document.getElementById('close-popup');

// Show popup on click
icon.addEventListener('click', () => {
    popup.style.display = 'block';
});

// Close popup
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

