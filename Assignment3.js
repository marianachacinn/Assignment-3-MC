//Task 1 - Product Price Management
let prices = [1.99, 3.99, 5.99, 6.99, 9.99]; //declaring prices in the array
prices.push(4.99); //adding an extra number
prices.pop(0) // removes the first price
console.log(prices);

//Task 2 - Modifying Customer Orders.
let orders = [3, 7, 2, 10, 5]; //declare 5 values
orders[2] += 5; // Increase the third order quantity by 5
let totalOrders = orders.reduce((sum, quantity) => sum + quantity, 0); //Calculate total
console.log("Updated Orders:", orders);
console.log("Total Orders:", totalOrders);

//Task 3 - Employee Performance Tracking.
let employee = {
    name: "Johnny Square",
    role: "Software Engineer",
    performanceScore: 35,
    isActive: true
};

employee.performanceScore = 90; //Johnny did so well, updating his score
employee.promotionEligible = employee.performanceScore > 80; //Adds a new property to the array
console.log(employee);

//Task 4 - Customer Feedback Records.
let Reviews = [
    { customerName: "Leo", feedbackText: "Great service!", rating: 4 },
    { customerName: "Bob", feedbackText: "NGL, Hated it.", rating: 2 },
    { customerName: "Charlie", feedbackText: "Amaaazing.", rating: 5 }
];

Reviews.push({ customerName: "Dona", feedbackText: "It was alright", rating: 3 }); //add new feedback object to the array
console.log(Reviews);

//Task 5 - Inventory Management System.
let inventory = {
    itemName: "Books",
    stockCount: 20,
    price: 25,

    TotalValue: function () {
        return this.stockCount * this.price;
    } //Calculates total value (count*price)
};

console.log(inventory);
console.log("Total Inventory Value:", inventory.TotalValue());
