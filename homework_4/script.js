/* 1. Create a function called tellStory(). The function should accept an array of 3 strings as an argument: name, mood, activity (All strings).
      The function should return one big string with a story made from the arguments.

      Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

      The value that is returned from the function should be printed in the console or in alert. 
*/

let inputWords = prompt("Enter a name, mood and activity, separated by an empty space.");

function tellStory (wordArray) {
    console.log(`This is ${wordArray[0]}. ${wordArray[0]} is a nice person. Today they are ${wordArray[1]}. They are ${wordArray[2]} all day. The end.`);
}

if (inputWords === "" || inputWords === null) {
    console.log("Please enter something.");
}
else {
    let strings = inputWords.split(" ");

    function specialCharacterCheck (word) {
        // ASCII codes are backwards compatible with UTF-8 codes (ASCII is a subset of UTF-8)
        for (let i = 0; i < 3; i++) {
            word = strings[i];
            for (let j = 0; j < word.length; j++) { 
                let wordChar = word.charCodeAt(j); 
                if (!(wordChar >= 65 && wordChar <= 90) && !(wordChar >= 97 && wordChar <= 122)) {
                    return 1;
                }
            }
        }
    }

    if (strings.length != 3) {
        console.log("Please enter three inputs.");
    }
    else if (specialCharacterCheck(strings) == 1) {
        console.log("Please use only Latin alphabet letters.");
    }
    else {
        tellStory (strings);
    }
}



/* 2. Write a function that will take an array of 5 numbers as an argument and return the sum. Print it in the console or in alert.

      BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. 
      If one of the numbers of the array is invalid show an error message instead of a result. 
*/

let inputNumbers = prompt("Enter 5 numbers, separated by an empty space.");

function addition (numberArray) {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        sum += parseFloat(numberArray[i]);
    }
    console.log(`The sum of all 5 numbers is ${sum}.`);
}

function validateNumber (numbersInString) {
    for (let i = 0; i < 5; i++) {
        if (isNaN(numbersInString[i])) {
            return 1;
        }
    }
}

if (inputNumbers === "" || inputNumbers === null) {
    console.log("Please enter values.");
}
else {
    let numbers = inputNumbers.split(" ");

    if (numbers.length != 5) {
        console.log ("Please enter exactly 5 numbers.");
    }
    else {
        if (validateNumber(numbers) == 1) {
            console.log(`Can't continue: not all inputs are numbers.`);
        }
        else {
            addition (numbers);       
        }
    }
}



/* 3. Write a javascript function that:
    - When given any array of strings (should work with array with any number of elements)
    - It will create one big string and return it
    - Ex:["Hello", "there", "students", "of", "SEDC", "!"]
    - Result: "Hello there students of SEDC!" 
*/

let strings = prompt("Enter words separated by an empty space:");

function stringAddition (arrayOfStrings) {
    if (arrayOfStrings.length == 1) {
        let bigString = arrayOfStrings[0];
        console.log(`"${bigString}"`);
    }
    else {
        let bigString = '';
        for (let i = 0; i < arrayOfStrings.length - 1; i++) {
            bigString += arrayOfStrings[i] + " ";
        }
        bigString += arrayOfStrings[arrayOfStrings.length - 1]; 
        console.log(`"${bigString}"`);
    }
}

if(strings === "" || strings === null) {
    console.log("Please enter words.");
}
else {
    let stringArray = strings.split(" ");
    stringAddition (stringArray);
}



/* 4. Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, 
      and will add the "\n" new line after every even number otherwise it will add " " empty space. 
*/

// I

let string1 = ''; 

for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        string1 += i + ' ';
    }
    else {
        string1 += i + '\n';
    }
}

console.log(string1);

// II

let string2 = ''; 

for (let i = 1; i <= 20; i++) {
    i % 2 != 0 ? string2 += i + ' ' : string2 += i + '\n';
}

console.log(string2);


/* 5. Write a JavaScript function that will return:
      The sum of the MAX and MIN numbers from an array with numbers
      Ex: arr = [3, 5, 6, 8, 11]
      Output: Max: 11, Min: 3, Sum: 14

      Bonus: Try making the function work if there are other types of items in it 
*/

let userInput = prompt("Write numbers separated by an empty space:");

if(userInput === "" || userInput === null) {
    console.log("Please enter values.");
}
else {
    let numbersInput = userInput.split(" ");

    function minMax (numbersArray) {
        let min = Infinity;
        let max = -Infinity;
        let nonNumberCounter = 0;

        if (numbersArray.length == 1) {
            console.log("Please enter at least two values.");
        }
        else {
            for (let i = 0; i < numbersArray.length; i++) {
                let parsedNumber = parseFloat(numbersArray[i]);
                if (Number.isNaN(parsedNumber)) {
                    nonNumberCounter++;
                    continue;
                }
                else {
                    if (min > parsedNumber) {
                        min = parsedNumber;
                    }

                    if (max < parsedNumber) {
                        max = parsedNumber;
                    }
                }
            }
            
            if(nonNumberCounter == numbersArray.length) {
                console.log("You haven't entered any numbers.");
            }
            else if (nonNumberCounter == numbersArray.length - 1) { // Is there only 1 number in the number-string array?
                console.log("Please enter at least two numbers.");
            }
            else if (min == max) {
                console.log("You've entered equal numbers.");
            }
            else {
                let sum = min + max;
                console.log(`The minimum of your input numbers is ${min}, and the maximum is ${max}. Their sum is ${sum}.`);
            }
        }
    }

    minMax(numbersInput);
}



/* 6. Write a javascript function that:
      When given 2 arrays of students firstNames and lastNames will return a new array with students full names
      Every name should have a numeric value before it
      Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
      Result: full = ["1. Bob Gregory", "2. Jill Wurtz"] 
*/

let userFirstName = prompt("Enter your list of first names, separated by an empty space:");
let userLastName = prompt("Enter your list of last names, separated by an empty space:");

if((userFirstName === "" || userFirstName === null) || (userLastName === "" || userLastName === null)) {
    console.log("Please enter both first and last names.");
}
else {
    let firstNamesArray = userFirstName.split(" ");
    let lastNamesArray = userLastName.split(" ");
    let names = [];

    if (firstNamesArray.length != lastNamesArray.length) {
        console.log("You haven't entered an equal number of first and last names.");
    }
    else {
        function validCharacterCheck (array1, array2) {
            let firstName;
            let lastName;
            let specialChar1 = 0;
            let specialChar2 = 0;
    
            for (let i = 0; i < array1.length; i++) {
                firstName = array1[i];
                for (let j = 0; j < firstName.length; j++) { 
                    let firstNameChar = firstName.charCodeAt(j); 
                    if ((!(firstNameChar >= 65 && firstNameChar <= 90) && !(firstNameChar >= 97 && firstNameChar <= 122)) && firstNameChar != 39) {
                        specialChar1++;
                    }
                }
            }
    
            for (let i = 0; i < array2.length; i++) {
                lastName = array2[i];
                for (let j = 0; j < lastName.length; j++) { 
                    let lastNameChar = lastName.charCodeAt(j); 
                    if ((!(lastNameChar >= 65 && lastNameChar <= 90) && !(lastNameChar >= 97 && lastNameChar <= 122)) && lastNameChar != 39) {
                        specialChar2++;
                    }
                }
            }
    
            if (specialChar1 != 0 || specialChar2 != 0) {
                return 1;
            }
        }

        function nameJoin (totalArray, array1, array2) {
            // It's the same if we use array1.length or array2.length
            for (let i = 0; i < array1.length; i++) { 
                totalArray[i] = (i + 1) + ". " + array1[i] + " " + array2[i];
            }
     
            return totalArray;
        } 

        // This is validated here and not printed out with the check in function validCharacterCheck (array1, array2) because we need a condition for the code in 'else'
        if (validCharacterCheck(firstNamesArray, lastNamesArray) == 1) { 
            console.log("Please enter only Latin alphabet letters (apostrophe is also allowed).");
        }
        else {
            nameJoin(names, firstNamesArray, lastNamesArray);
            console.log(names);
        }

        /*  function nameJoin (totalArray, array1, array2) can also be declared like this:

            for (let i = 0; i < array1.length; i++) {
                totalArray.push((i + 1) + ". " + array1[i] + " " + array2[i]);
            }

            return totalArray;

            or (maybe impractical, but good enough for practice purposes :) ):

            let i = array1.length;

                // If i > 0, i-- is true
                while (i--) {           
                    totalArray.unshift((i + 1) + ". " + array1[i] + " " + array2[i]);
                }            

                return totalArray;
        */  
    }   
}