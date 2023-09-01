// Function to show an alert when a product is clicked
function showProductAlert(productName) {
    alert("You clicked on " + productName + "!");
}

// Attach click event to product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('click', () => {
        const productName = card.querySelector('.product-name').textContent;
        showProductAlert(productName);
    });
});
