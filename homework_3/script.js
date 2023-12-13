/* 1. Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

- object
- boolean
- number
- string
- undefined
*/

function parameterType (input) {
    let inputType = typeof input;
    console.log("The type of your input is: " + inputType + ".");
}

parameterType("It's");
parameterType(true);
parameterType(["that", "homework", "part"]);
parameterType(1);
parameterType(Symbol("gives correct results :D"));
parameterType();



/* 2. Write a JavaScript function that will return:

- Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
- Note: Call the function in console to see answer
- Bonus: Make the same function work for converting dog to human years as well */

let choice = prompt("If you want to convert human to dog years, write D.\nIf you want to convert dog to human years, write H.");

function yearConverter (yearsInput) {
    if (choice == "D") {
        let dogYears = yearsInput * 7 ;
        console.log(`${yearsInput} human years equals ${dogYears} dog years.`)
    }
    else {
        let humanYears = Math.round(yearsInput / 7 * 100) / 100;
        console.log(`${yearsInput} dog years equals ${humanYears} human years.`)
    }
}

if (choice === "" || choice === null) {
    console.log("Please enter your choice.");
}
else if (choice.length > 1) {
    console.log("Please enter just one letter.");
}
else if (choice != "D" && choice != "H") { //no need for !==, choice is a string
    console.log("Please enter either D or H.");
}
else {
    let years = prompt("Enter years:");
    let parsedYears = parseFloat(years);

    if (years === "" || years === null) {
        console.log("Please enter a value.");
    }
    else if (isNaN(parsedYears)) {
        console.log("Please enter a number.");
    }
    else if (choice == "D" && (parsedYears < 0 || parsedYears > 125)) {
        console.log("Please enter human years between 0 and 125 (maximum human lifespan).");
    }
    else if (choice == "H" && (parsedYears < 0 || parsedYears > 18)) {
        console.log("Please enter dog years between 0 and 18 (maximum dog lifespan).");
    }
    else if (parsedYears == 0) { //no need for ===, parsedYears is already a number
        console.log("0 years is not realistic; enter a decimal number if you need years to be less than 1.");
    }
    else {
        yearConverter(parsedYears);
    }   
}



/* 3. Write a javascript function for an ATM:
- The ATM should give cash
- Should return "Not enough money" if you request more money
- Should return the ammount withdrawn and money left on the account if you have enough
- Note: Hardcode your account money in the program
- Bonus: Make it work with prompt()!
*/

// I

let availableMoney = 20000;
let moneyRequest = prompt("How much money would you like to withdraw?");
let parsedMoneyRequest = parseInt(moneyRequest);

function moneyWithdrawal1 (requestedMoney) {
    if (requestedMoney > availableMoney) {
        console.log("Not enough money.");
    }
    else {
        let moneyLeft1 = availableMoney - requestedMoney;
        console.log(`You withdrew ${requestedMoney} MKD, and you have ${moneyLeft1} MKD left.`);
    }
}

if (moneyRequest === "" || moneyRequest === null) {
    console.log("Please enter a value.");
}
else if (isNaN(parsedMoneyRequest)) {
    console.log("Please enter a number.");
}
else if (parsedMoneyRequest < 0) {
    console.log("Please enter a positive number.");
}
else {
    moneyWithdrawal1 (parsedMoneyRequest);
}

// II

function moneyWithdrawal2 (requestedMoney) {
    if (requestedMoney > availableMoney) {
        return 0;
    }
    else {
        return requestedMoney;
    }
}

if (moneyRequest === "" || moneyRequest === null) {
    console.log("Please enter a value.");
}
else if (isNaN(parsedMoneyRequest)) {
    console.log("Please enter a number.");
}
else if (parsedMoneyRequest < 0) {
    console.log("Please enter a positive number.");
}

else {
    let withdrawnMoney2 = moneyWithdrawal2 (parsedMoneyRequest);
    if (withdrawnMoney2 == 0){
        console.log("Not enough money.");
    }
    else {
        let moneyLeft2 = availableMoney - withdrawnMoney2;
        console.log(`You withdrew ${withdrawnMoney2} MKD, and you have ${moneyLeft2} MKD left.`);
    }  
}

// III

function moneyWithdrawal3 (requestedMoney) {
    if (requestedMoney > availableMoney) {
        return 0;
    }
    else {
        return [requestedMoney, availableMoney - requestedMoney];
    }
}

if (moneyRequest === "" || moneyRequest === null) {
    console.log("Please enter a value.");
}
else if (isNaN(parsedMoneyRequest)) {
    console.log("Please enter a number.");
}
else if (parsedMoneyRequest < 0) {
    console.log("Please enter a positive number.");
}

else {
    let withdrawnMoney3 = moneyWithdrawal3 (parsedMoneyRequest);
    if (withdrawnMoney3 == 0){
        console.log("Not enough money.");
    }
    else {
        let [withdrawal, moneyLeft3] = moneyWithdrawal3 (parsedMoneyRequest);
        console.log(`You withdrew ${withdrawal} MKD, and you have ${moneyLeft3} MKD left.`);
    }  
}


