// Show alert when button is clicked
function showAlert() {
    alert("Welcome to My Website!");
}

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! We have received your message.`);
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
