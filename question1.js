let isLoggedIn = true;

let products = [
    { name: "Apple", price: 1.10 },
    { name: "Banana", price: 0.99 },
    { name: "Cantaloupe", price: 2.88 },
    { name: "Pear", price: 0.78 },
    { name: "Orange", price: 0.90 }
];

let cart = [];

function displayAndAddToCart() {
    // Task 1
    if (!isLoggedIn) {
        console.log("Please log in to continue.");
        return; 
    }
// Task 2
    console.log("Product catalog:");
    for (let i = 0; i < products.length; i++) {
        console.log("Product: ", i)
        console.log(products[i].name);
        console.log(products[i].cost);
    }

    console.log("Add items to cart (by index):");
    // example added products:
    addedProducts = [1, 2, 4]

    for (let index of addedProducts) {
        let product = products[index];
        if (product) {
            cart.push(product);
            console.log(`${product.name} added to the cart.`);
        }
    }
}

// Task 3
function calculateTotalCost() {
    let cost = 0;
    if (cart.length === 0) {
        console.log("Your cart is empty.");
        return;
    }

    console.log("Items in your cart:");
    for (let product of cart) {
        cost += product.price;
        console.log(`${product.name} : $${product.price}`);
    }

    console.log(`Total cost: ${cost}`);
}

displayAndAddToCart();
calculateTotalCost();
