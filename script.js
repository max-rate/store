// script.js

let products = JSON.parse(localStorage.getItem("products"));

// Function to display products
function displayProducts() {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";

    products.forEach((product) => {
        const productHTML = `
            <div class="product">
                <h2>${product.name}</h2>
                <p>Price: $${product.price}</p>
                <p>Quantity: ${product.quantity}</p>
                <button onclick="sellProduct(${product.id})">Sell</button>
            </div>
        `;
        productsContainer.insertAdjacentHTML("beforeend", productHTML);
    });
}

// Function to sell a product
function sellProduct(productId) {
    const productIndex = products.findIndex((p) => p.id === productId);
    if (productIndex !== -1 && products[productIndex].quantity > 0) {
        products[productIndex].quantity -= 1;
        localStorage.setItem("products", JSON.stringify(products));
        alert(`Sold 1 ${products[productIndex].name}. Remaining quantity: ${products[productIndex].quantity}`);
        displayProducts();
    } else {
        alert("Product out of stock!");
    }
}

// Initialize product display
displayProducts();