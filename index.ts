#!/usr/bin/env node

import inquirer from "inquirer";

let currency: any = {
    USD: 1, //base currency
    EUR: 0.92,
    PKR: 278,
    GBP: 0.79,
    INR: 83.3,
    CAD: 1.3,
};

let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter The Currency You Want To Convert?",
        type: "list",
        choices: ["USD", "EUR", "PKR", "GBP", "INR", "CAD"],
    },

    {
        name: "to",
        message: "Enter The Currency You Want To Convert In?",
        type: "list",
        choices: ["USD", "EUR", "PKR", "GBP", "INR", "CAD"],
    },

    {
        name: "amount",
        message: "Enter The Amount You Want To Convert?",
        type: "number",
    },
]);

let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(convertedAmount);

console.log("\n\n\nMade By Ayan Alam.");

