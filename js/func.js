// script to display carr count on all pages with the cart icon
// cart-count.js

// Function to retrieve selected plan data from local storage
function getSelectedPlanData() {
	const planDataJSON = localStorage.getItem("selectedPlanData");
	return JSON.parse(planDataJSON) || [];
}

// Function to update the cart count in the HTML
function updateCartCount() {
	const cartItems = getSelectedPlanData(); // Get the selected plan data from local storage
	const cartCountElement = document.getElementById("cart-count");
	const cartCount = cartItems.length; // Get the number of items in the cart

	// Update the cart count in the HTML
	cartCountElement.textContent = cartCount;
}

// Update the cart count when the page loads
updateCartCount();
