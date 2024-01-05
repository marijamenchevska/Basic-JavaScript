/* Logic of the calculator:
- Digits and dot are glued to each other to form a number until an operator or "=" is clicked
- The number is then stored in an array which be used for calculations after clicking "="
- Operators are also stored in an array (also used later)
- Calculations are conducted using the numbers and operators array after clicking "="

  Added features/restrictions:
- Only 1 dot per number is allowed
- Operator can be changed after another operator is subsequently clicked
- If input of digits is empty (at the beginning of using the calculator or after clicking an operator), and . is clicked, a 0 is added
- At the beginning of using the calculator, if an operator is first clicked, the first number becomes 0
- The result can be further used for calculations
*/

let digitButtons = document.getElementsByClassName("digits");
let operatorButtons = document.getElementsByClassName("operators");
let dotButton = document.getElementById("dot");
let equalsButton = document.getElementById("equals");
let deleteButton = document.getElementById("delete");
let deleteAllButton = document.getElementById("deleteAll");
let topScreen = document.getElementById("topScreen");
let bottomScreen = document.getElementById("bottomScreen");;
let input = []; // dynamic (deletable) placeholder for number (and dot) buttons clicked - needed for display only
let number = ""; // temporary storage for numbers (and dot) clicked until an operator is clicked
let numbers = []; // storage for finalized numbers before operating with them
let operators = []; // storage for operators
let result = ""; // at the beginning, the result is empty
let dotCounter = 0; // variable used to restrict the number of dots per number
let operatorCounter = 0; // variable used to change the operator if needed

function digitDotCollection (button) {
    input.push(button.innerText);
    number += button.innerText;
    bottomScreen.innerText = number;
}

function zeroFiller () {
    if (number === "") { 
        number = "0";
    }
}

function variableReset () {
    input = [];
    numbers = []; 
    operators = [];
    result = "";
    dotCounter = 0;
    operatorCounter = 0;
}

function parseNumbers (numbersArray) {
    for (let i = 0; i < numbersArray.length; i++) {
        numbersArray[i] = parseFloat(numbersArray[i]);
    };
}

function calculations (numbersArray, operatorsArray) {
    result = numbersArray[0];
    let i = 0;
    
    while (i < operatorsArray.length) { // since the calculation is not done step by step, but all at once, in order to calculate "*" and "/" before "+" and "-", and still continue to calculate correctly, i must be incremented differently 
        if ((operatorsArray[i] === "+") && (operatorsArray[i + 1] === "\u00D7")) {
            result += numbersArray[i + 1] * numbersArray[i + 2];
            i += 2;
        }
        else if ((operatorsArray[i] === "+") && (operatorsArray[i + 1] === "\u00F7")) {
            result += numbersArray[i + 1] / numbersArray[i + 2];
            i += 2;
        }
        else if ((operatorsArray[i] === "-") && (operatorsArray[i + 1] === "\u00D7")) {
            result -= numbersArray[i + 1] * numbersArray[i + 2];
            i += 2;
        }
        else if ((operatorsArray[i] === "-") && (operatorsArray[i + 1] === "\u00F7")) {
            result -= numbersArray[i + 1] / numbersArray[i + 2];
            i += 2;
        }
        else if (operatorsArray[i] === "+") {
            result += numbersArray[i + 1];
            i++;
        }
        else if (operatorsArray[i] === "-") {
            result -= numbersArray[i + 1];
            i++;
        }
        else if (operatorsArray[i] === "\u00D7") {
            result *= numbersArray[i + 1];
            i++;
        }
        else {
            result /= numbersArray[i + 1];
            i++;
        }
    }

    bottomScreen.innerText = result;
}

for (let i = 0; i < digitButtons.length; i++) {
    digitButtons[i].addEventListener("click", function() {
        digitDotCollection(digitButtons[i]);
        operatorCounter = 0; // restart the operatorCounter after entering new digits
    });
}

dotButton.addEventListener("click", function() {
    dotCounter++;
    if (dotCounter === 1) { // limit the number of dots per finalized number, i.e. only 1 dot is accepted
        zeroFiller(); // if we start the calculator or the number with a dot
        digitDotCollection(dotButton);
    }
}); 

deleteButton.addEventListener("click", function() {
    if(input.pop() === ".") { // input stays cut even if the statement is false
        dotCounter = 0; // restart the counter in case a dot is added again further in the same number
    }
    number = input.join("");
    bottomScreen.innerText = number;
});

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", function () {
        if (number.length > 20) { 
            bottomScreen.innerText = "Number too large";
            return;
        }

        operatorCounter++;
        if (operatorCounter === 1) {
            zeroFiller(); // if we start the calculator with an operator
            numbers.push(number);

            if(topScreen.innerText.includes("=")) { // if we want to continue working with the result, the equation in topScreen first needs to be cleared 
                topScreen.innerText = "";
            }

            topScreen.innerText += number + operatorButtons[i].innerText;
        }
        else { // delete the previous operator in the operators array and switch it on screen
            operators.pop();
            topScreen.innerText = topScreen.innerText.slice(0, -1) + operatorButtons[i].innerText;
        }
        
        operators.push(operatorButtons[i].innerText);  
        bottomScreen.innerText = "";

        input = []; // reset input, number and dotCounter variables to create a new finalized number 
        number = "";
        dotCounter = 0;
    })  
}

equalsButton.addEventListener("click", function () {
    if (number.length > 20) { // what if the last number before "=" is too large?
        bottomScreen.innerText = "Number too large";
        return;
    }

    numbers.push(number); // since operators written after numbers are used to "push" numbers, "=" must be used as a "pusher" for the last number
    topScreen.innerText += number + "=";

    if (topScreen.innerText.includes("\u00F70")) { 
        bottomScreen.innerText = "Cannot divide by 0";
    }
    else {
        parseNumbers(numbers);
        calculations(numbers, operators);
        number = `${result}`; // in case the result is needed to continue with calculation
        variableReset();
    }
});

deleteAllButton.addEventListener("click", function() {
    topScreen.innerText = "";
    bottomScreen.innerText = "0";
    number = "";
    variableReset();
})








