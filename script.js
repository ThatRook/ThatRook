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

// Newsletter form logic
const form = document.getElementById("newsletter-form");
const responseMessage = document.getElementById("response-message");

// Use your Render backend URL
const scriptURL = "https://thatrook-backend.onrender.com/newsletter";

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const category = document.getElementById("category").value;

    try {
        const res = await fetch(scriptURL, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ email, category })
        });

        const data = await res.json();
        responseMessage.textContent = data.message;

        if (data.status === "success") {
            form.reset();
        }
    } catch (err) {
        responseMessage.textContent = "Error submitting form. Try again!";
        console.error(err);
    }
});
