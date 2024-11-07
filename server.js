const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample data for products (this would usually come from a database)
let products = [
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

// Endpoint to get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Endpoint to add items to cart (for now, this is a placeholder)
app.post('/api/cart', (req, res) => {
    const { productId, quantity } = req.body;
    // Here, you would handle adding items to a cart database or session
    res.json({ message: "Product added to cart", productId, quantity });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
