/* 1. Change the text of all paragraphs and headers with javascript
      Note:The html must not be changed
*/
let divs = document.getElementsByTagName("div");
// let firstHeader = document.getElementById("myTitle");

let firstHeader = document.getElementsByTagName("body")[0].children[0].children[0];

let paragraph = document.querySelectorAll("p");
// let paragraph = document.getElementsByClassName("paragraph");
// let paragraph = document.getElementsByTagName("p");

let textTag = document.getElementsByClassName("second")[0].nextElementSibling;

let secondHeader = document.querySelectorAll("div")[2].firstElementChild;

let thirdHeader = document.getElementsByTagName("h3")[0];

firstHeader.style.fontSize = "26px";
firstHeader.style.color = "cyan";
firstHeader.style.textAlign = "center";
firstHeader.innerText = "This page is changed with Javascript, not CSS!";

for (let i = 0; i < divs.length; i++) {
      divs[i].style.width = "600px";
}

for (let i = 0; i < paragraph.length; i++) {
      paragraph[i].innerHTML += "<br/>" + "You don't simultaneously change attributes of (the array of) all the paragraphs without a loop.";
      paragraph[i].style.color = "#ff7f50";
      paragraph[i].style.fontSize = "18px";
      paragraph[i].style.textAlign = "center";
}

textTag.setAttribute("style", "background-color: cyan; color: darkblue; border: 2px solid black; display: flex; justify-content: center; font-weight: bolder");

secondHeader.textContent = "This IS changed";
secondHeader.setAttribute("style", "text-align: center; font-size: 22px; color: white");

thirdHeader.innerHTML = "And also " + "<i>THIS!</i>";

thirdHeader.setAttribute("style", "color: black; text-align: center");

let addedHTML = thirdHeader.firstElementChild;

addedHTML.style.color = "#ff7f50";



/* 2. - Create an array with numbers
      - Print all numbers from the array in a list element, in a new HTML page
      - Print out the sum of all of the numbers below the list
      - Bonus: Try printing the whole mathematical equation as well ( 2 + 4 + 5 = 11) 
*/

let newPage1 = document.querySelector("body");
newPage1.setAttribute("style", "background-color: darkviolet; font-size: 26px; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif");
newPage1.innerHTML = "";

let inputNumbers = prompt("Enter numbers separated by an empty space:");

function numberCheck (inputArray) {
      for (let i = 0; i < inputArray.length; i++) {
            if (isNaN(inputArray[i])){
                  return 1;
            }
      }
}

function numberList (numberArray) {
      let equation = "";
      let sum = 0;

      newPage1.innerHTML += "<ul>";

      for (let number of numberArray) {
            newPage1.innerHTML += `<li>${number}</li>`;
            sum += parseFloat(number);
      }

      newPage1.innerHTML += "</ul>";

      for(i = 0; i < numberArray.length - 1; i++) {
            equation += numberArray[i] + " + ";
      }

      equation += numberArray[numberArray.length - 1] + ` = ${sum}`;

      newPage1.innerHTML += `The sum of all numbers is: ${equation}.`;
}

if (inputNumbers === "" || inputNumbers === null) {
      alert("Please enter numbers.");
}
else {
      let numbers = inputNumbers.split(" ");

      if (numbers.length == 1) {
            alert("Please enter at least two numbers.");
      }
      else if (numberCheck(numbers) == 1) {
            alert("Not all inputs are numbers.");
      }
      else {
            numberList(numbers);
      }
}



/* 3. BONUS HOMEWORK
    - Ask the user for the name of the recipe
    - Ask the user how many ingredients do we need for the recipe
    - Ask the user for the name of every ingredient
    - Print the name of the recipe in the HTML as heading element, ex: h1-h6
    - Print all ingredients as an unordered list in the HTML
    - Extra: Use a table if you want to be fancy :) 
*/

let newPage2 = document.querySelector("body");
newPage2.innerHTML = "";

let recipeName = prompt("What's the name of your recipe?");

function specialCharacterCheck (promptArray) {
      for (let i = 0; i < promptArray.length; i++) {
          let word = promptArray[i];
          for (let j = 0; j < word.length; j++) { 
              let wordChar = word.charCodeAt(j); 
              if (!(wordChar >= 65 && wordChar <= 90) && !(wordChar >= 97 && wordChar <= 122)) {
                  return 1;
              }
          }
      }
}

function ingredientCheck (ingredientsArray) {
      for (let i = 0; i < ingredientsArray.length; i++) {
            if (ingredientsArray[i].length == 1) {
                  return 1;
            }
      }
}

function tableCreation (ingredientsArray) {
      let table = document.createElement("table");
      table.setAttribute("style", "margin: auto; margin-top: 100px; border: 2px solid black; border-spacing: 0");

      let tbody = document.createElement("tbody");

      let theader = document.createElement("th");
      theader.setAttribute("style", "height: 34px; width: 200px; border: 1px solid black; text-align: center; vertical-align: middle; background-color: #911919");

      let headerSpan = document.createElement("span");
      headerSpan.setAttribute("style", "height: 34px; width: 200px; font-size: 24px; color: white");

      let headerText = document.createTextNode(recipeName);
      
      headerSpan.appendChild(headerText);
      theader.appendChild(headerSpan);

      for (let i = 0; i < ingredientsArray.length; i++) {
            let row = document.createElement("tr");

            let rowCell = document.createElement("td");
            rowCell.setAttribute("style", "height: 25px; border: 1px solid black; text-align: center; vertical-align: middle; background-color: firebrick; color: white");

            let cellText = document.createTextNode(`${ingredientsArray[i]}`);

            rowCell.appendChild(cellText);                              
            row.appendChild(rowCell);
            tbody.appendChild(row);
      }

      table.appendChild(theader);
      table.appendChild(tbody);
      document.body.appendChild(table);
}

if (recipeName === "" || recipeName === null) {
      alert("Please enter a recipe name.");
}
else if (recipeName.length == 1) {
      alert("Please enter a word of at least two letters for your recipe name.");
}
else if (specialCharacterCheck(recipeName) == 1) {
      alert("Please enter just letters, not numbers.");
}
else {
      let ingredientNumber = prompt("How many ingredients does your recipe have?");
      let parsedIngredientNumber = Number(ingredientNumber);

      if (ingredientNumber === "" || ingredientNumber === null) {
            alert("Please enter number of ingredients.");
      }
      else if (isNaN(ingredientNumber)) {
            alert("Please enter a valid number.");
      }
      else if (parsedIngredientNumber == 1) {
            alert("Please choose more than one ingredient.");
      }
      else if (parsedIngredientNumber % 1 != 0) {
            alert("Please enter an integer, not a decimal number.");
      }
      else {
            let ingredientInput = prompt("Enter your ingredients, separated by an empty space:");

            if (ingredientInput === "" || ingredientInput === null) {
                  alert("Please enter your ingredients.");
            }
            else {
                  let ingredientsList = ingredientInput.split(" ");
                  
                  if (specialCharacterCheck(ingredientsList) == 1) {
                        alert("Please enter just letters, not numbers.");
                  }
                  else if (ingredientsList.length != parsedIngredientNumber) {
                        alert(`You didn't enter ${parsedIngredientNumber} ingredients.`);
                  }
                  else if (ingredientCheck(ingredientsList) == 1) {
                        alert("Please enter a word of at least two letters for each ingredient.");
                  }
                  else {
                        tableCreation(ingredientsList);
                  }
            }
      }
}

