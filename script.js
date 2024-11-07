const products = [
    { id: 1, name: "Product 1", price: 25, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Product 2", price: 40, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Product 3", price: 30, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Product 4", price: 20, image: "https://via.placeholder.com/200" },
    { id: 5, name: "Product 5", price: 50, image: "https://via.placeholder.com/200" },
    { id: 6, name: "Product 6", price: 35, image: "https://via.placeholder.com/200" },
    { id: 7, name: "Product 7", price: 45, image: "https://via.placeholder.com/200" },
    { id: 8, name: "Product 8", price: 55, image: "https://via.placeholder.com/200" },
    { id: 9, name: "Product 9", price: 65, image: "https://via.placeholder.com/200" },
    { id: 10, name: "Product 10", price: 75, image: "https://via.placeholder.com/200" },
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById("product-list");
    products.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    cart.push(product);
    displayCart();
    updateCartCount();
}

function displayCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <span>${item.name} - $${item.price}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });

    document.getElementById("cart-total").innerText = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
    updateCartCount();
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("open");
}

function checkout() {
    alert("Thank you for your purchase!");
    cart = [];
    displayCart();
    updateCartCount();
}

window.onload = displayProducts;

async function displayProducts() {
    const productList = document.getElementById("product-list");

    // Fetch products from backend
    const response = await fetch('http://localhost:5000/api/products');
    const products = await response.json();

    products.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}
