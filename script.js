let money = 1000;
let stock = 10;
let customers = 0;

function buyStock() {
    if (money >= 100) {
        money -= 100;
        stock += 5;
        updateGame();
        showMessage("You bought 5 products!");
    } else {
        showMessage("Not enough money!");
    }
}

function serveCustomer() {
    if (stock > 0) {
        stock--;
        money += 30;
        customers++;

        updateGame();
        showMessage("Customer served! You earned ₹30.");
    } else {
        showMessage("No stock left! Buy more.");
    }
}

function updateGame() {
    document.getElementById("money").textContent = money;
    document.getElementById("stock").textContent = stock;
    document.getElementById("customers").textContent = customers;
}

function showMessage(message) {
    document.getElementById("message").textContent = message;
}