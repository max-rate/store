// settings.js

let products = JSON.parse(localStorage.getItem("products")) || [];

// Function to add product
function addProduct(name, price, quantity) {
    const newProduct = {
        id: products.length + 1,
        name,
        price,
        quantity,
    };
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
}

// Function to display products
function displayProducts() {
    const productList = document.getElementById("products");
    productList.innerHTML = "";

    products.forEach((product) => {
        const productHTML = `
            <li>
                ${product.name} - $${product.price} - Quantity: ${product.quantity}
                <button onclick="deleteProduct(${product.id})">Delete</button>
            </li>
        `;
        productList.insertAdjacentHTML("beforeend", productHTML);
    });
}

// Function to delete product
function deleteProduct(productId) {
    products = products.filter((product) => product.id !== productId);
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
}

// Add event listener to add product form
document.getElementById("add-product-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);
    const quantity = parseInt(document.getElementById("quantity").value);
    addProduct(name, price, quantity);
    displayProducts();
    document.getElementById("add-product-form").reset();
});

// Initialize product display
displayProducts();