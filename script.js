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
})
// Newsletter form logic
const form = document.getElementById("newsletter-form");
const responseMessage = document.getElementById("response-message");

// Replace with your deployed Apps Script URL
const scriptURL = "https://script.google.com/macros/s/AKfycbxKS1hpmTzsTbGLkvTUD5Y66XI1ErdAWBcBU1ztw_iAefmDja2hTzSVXsqbgo0jLJp8Jg/exec";

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const category = document.getElementById("category").value;

    try {
        const res = await fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify({ email, category }),
            headers: { "Content-Type": "application/json" }
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
