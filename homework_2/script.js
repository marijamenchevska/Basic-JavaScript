// 1. Write a program to find maximum between two numbers.

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

if (num1 === "" || num2 === "" || num1 === null || num2 === null) {
    alert("Can't perform comparison: some value is missing.");
}
else if (isNaN(num1) || isNaN(num2)) {
    alert("Enter a valid value for both numbers.");
}
else {
    if (Number(num1) > Number(num2)) {
        alert("The maximum number is " + num1);
    }
    else {
        alert("The maximum number is " + num2);
    }
}

/* isNaN() tries to convert the value to a number, Number.isNaN takes it as it is. 
   Here we know for sure the type of the variables - string - and we need them converted to type number, so isNaN fits well.
   If instead we use Number.isNaN, and try to input a letter/word and a number, we would get:
   Number.isNaN(num1) == false (string is not NaN) and Number.isNaN(num2) == false (string is not NaN),
   which means we enter 'else' and get unpredictable results.
   With isNaN(), we only enter else if both values are NOT NaN when converted to numbers. */



// 2. Write a program to find maximum between three numbers.

// I

let num3 = prompt("Enter the first number:");
let num4 = prompt("Enter the second number:");
let num5 = prompt("Enter the third number:");

let convertedNum3 = Number(num3);
let convertedNum4 = Number(num4);
let convertedNum5 = Number(num5);

if (num3 === "" || num4 === "" || num5 === "" || num3 === null || num4 === null || num5 === null) {
    alert("Can't perform comparison: some value is missing.");
}
else if (isNaN(num3) || isNaN(num4) || isNaN(num5)) {
    alert("Enter a valid value for all numbers.");
}
else {
    if (convertedNum3 > convertedNum4 && convertedNum3 > convertedNum5) {
        alert("The maximum number is " + num3);
    }
    else if (convertedNum4 > convertedNum5) {
        alert("The maximum number is " + num4);
    }
    else {
        alert(`The maximum number is ${num5}`);
    }
}

// II

if (num3 === "" || num4 === "" || num5 === "" || num3 === null || num4 === null || num5 === null) {
    alert("Can't perform comparison: some value is missing.");
}
else if (isNaN(num3) || isNaN(num4) || isNaN(num5)) {
    alert("Enter a valid value for all numbers.");
}
else {
    alert("The maximum number is " + Math.max(convertedNum3, convertedNum4, convertedNum5));
}



// 3. Write a program to check whether a number is negative, positive or zero.

// I 

/* With parseFloat decimal numbers from a string can be extracted, while with parseInt only integers. 
   Attention: when using parsing, the prompt string may be a combination of letters and numbers 
   (yet numbers will still be extracted), which we may not want. */

let num6 = parseFloat(prompt("Enter your number:"));

if (num6 === "" || num6 === null || isNaN(num6)) {
    alert("Can't perform assessment: please enter a number.");
}
else if (num6 > 0) {
    alert("Your number is positive.");
}
else if (num6 < 0) {
    alert("Your number is negative.");
}
else {
    alert("Your number is zero.");
}

// II

if (num6 === "" || num6 === null || isNaN(num6)) { //isNaN is needed to check whether a non-number string has been input.
    alert("Can't perform assessment: please enter a number.");
}
else if (num6 >= 0) {
    if (num6 == 0) { // No need to check variable type, parseFloat type is a number.
        alert("Your number is zero.");
    }
    else {
        alert("Your number is positive.");
    }
}
else {
    alert("Your number is negative.");
}

// III

if (num6 === "" || num6 === null || isNaN(num6)) { 
    alert("Can't perform assessment: please enter a number.");
}
else {
    switch (Math.sign(num6)) {
        case 1: 
            alert("Your number is positive.");
            break;
        case -1:
            alert("Your number is negative.");
            break;
        default:
            alert("Your number is zero.");
    }
}

// IV

if (num6 === "" || num6 === null || isNaN(num6)) { 
    alert("Can't perform assessment: please enter a number.");
}
else {
    num6 > 0 ? alert("Your number is positive.") :
        num6 < 0 ? alert("Your number is negative.") :
            alert("Your number is zero.");
}



// 4. Write a program that will accept user input between 1-7 (week number) and print week day.

// I

let num7 = prompt("Enter your number:", "1-7");
let parsedNum7 = parseFloat(num7);

if (num7 === "" || num7 === null || isNaN(parsedNum7)) { 
    alert("Can't continue: please enter a number.");
}
else if (parsedNum7 < 1 || parsedNum7 > 7) {
    alert("Please enter a number between 1 and 7.");
}
else {
    if (parsedNum7 == 1) {
        alert("The first day of the week is Monday.");
    }
    else if (parsedNum7 == 2) {
        alert("The second day of the week is Tuesday.");
    }
    else if (parsedNum7 == 3) {
        alert("The third day of the week is Wednesday.");
    }
    else if (parsedNum7 == 4) {
        alert("The fourth day of the week is Thursday.");
    }
    else if (parsedNum7 == 5) {
        alert("The fifth day of the week is Friday.");
    }
    else if (parsedNum7 == 6) {
        alert("The sixth day of the week is Saturday.");
    }
    else {
        alert("The seventh day of the week is Sunday.");
    }
}

// II

if (num7 === "" || num7 === null || isNaN(parsedNum7)) { 
    alert("Can't continue: please enter a number.");
}
else {
    switch (parsedNum7) {
    case 1:
        alert("The first day of the week is Monday.");
        break;
    case 2:
        alert("The second day of the week is Tuesday.");
        break;
    case 3:
        alert("The third day of the week is Wednesday.");
        break;
    case 4:
        alert("The fourth day of the week is Thursday.");
        break;
    case 5:
        alert("The fifth day of the week is Friday.");
        break;
    case 6:
        alert("The sixth day of the week is Saturday.");
        break;
    case 7:
        alert("The seventh day of the week is Sunday.");
        break;
    default:
        alert("Please enter a number between 1 and 7.");
    }
}



// 5. Write a program that will check if user typed an input that is a number or not.

let num8 = prompt("Enter input:");

if (num8 === "" || num8 === null) { 
    alert("Please enter a value.");
}
else if (isNaN(parseFloat(num8))) {
    alert("Your input is not a number.");
}
else {
    alert("Your input is a number.");
}



// 6. Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following: Percentage >= 90% : Grade A Percentage >= 80% : Grade B Percentage >= 70% : Grade C Percentage >= 60% : Grade D Percentage >= 40% : Grade E Percentage < 40% : Grade F.

let scores = prompt("Enter your scores for Physics, Chemistry, Biology, Mathematics and Computer Science separated by an empty space.");

if (scores === "" || scores === null) { 
    alert("Please enter subject scores.");
}
else {
    let individualScore = scores.split(" ");

    let physicsScore = parseInt(individualScore[0]);
    let chemistryScore = parseInt(individualScore[1]);
    let biologyScore = parseInt(individualScore[2]);
    let mathScore = parseInt(individualScore[3]);
    let comSciScore = parseInt(individualScore[4]);

    let physicsGrade;
    let chemistryGrade;
    let biologyGrade;
    let mathGrade;
    let comSciGrade;

    let scoreCheck = [physicsScore, chemistryScore, biologyScore, mathScore, comSciScore];

    let averageScore = Math.round((physicsScore + chemistryScore + biologyScore + mathScore + comSciScore) / scoreCheck.length);

    let averageGrade;

    if (individualScore.length !=5) {
        alert("Please enter 5 numbers.");
    }
    else if (scoreCheck.includes(NaN)) {
        alert("Please enter only numbers for all subjects.");
    }
    else {
        if (physicsScore >= 90 && physicsScore <= 100) {
            physicsGrade = "A";
        }
        else if (physicsScore >= 80) {
            physicsGrade = "B";
        }
        else if (physicsScore >= 70) {
            physicsGrade = "C";
        }
        else if (physicsScore >= 60) {
            physicsGrade = "D";
        }
        else if (physicsScore >= 40) {
            physicsGrade = "E";
        }
        else if (physicsScore >= 0 && physicsScore < 40) {
            physicsGrade = "F";
        }
        else {
            physicsGrade = "Invalid";
        }

        if (chemistryScore >= 90) {
            chemistryGrade = "A";
        }
        else if (chemistryScore >= 80) {
            chemistryGrade = "B";
        }
        else if (chemistryScore >= 70) {
            chemistryGrade = "C";
        }
        else if (chemistryScore >= 60) {
            chemistryGrade = "D";
        }
        else if (chemistryScore >= 40) {
            chemistryGrade = "E";
        }
        else if (chemistryScore >= 0 && chemistryScore < 40) {
            chemistryGrade = "F";
        }
        else {
            chemistryGrade = "Invalid";
        }

        if (biologyScore >= 90) {
            biologyGrade = "A";
        }
        else if (biologyScore >= 80) {
            biologyGrade = "B";
        }
        else if (biologyScore >= 70) {
            biologyGrade = "C";
        }
        else if (biologyScore >= 60) {
            biologyGrade = "D";
        }
        else if (biologyScore >= 40) {
            biologyGrade = "E";
        }
        else if (biologyScore >= 0 && biologyScore < 40) {
            biologyGrade = "F";
        }
        else {
            biologyGrade = "Invalid";
        }

        if (mathScore >= 90) {
            mathGrade = "A";
        }
        else if (mathScore >= 80) {
            mathGrade = "B";
        }
        else if (mathScore >= 70) {
            mathGrade = "C";
        }
        else if (mathScore >= 60) {
            mathGrade = "D";
        }
        else if (mathScore >= 40) {
            mathGrade = "E";
        }
        else if (mathScore >= 0 && mathScore < 40) {
            mathGrade = "F";
        }
        else {
            mathGrade = "Invalid";
        }

        if (comSciScore >= 90) {
            comSciGrade = "A";
        }
        else if (comSciScore >= 80) {
            comSciGrade = "B";
        }
        else if (comSciScore >= 70) {
            comSciGrade = "C";
        }
        else if (comSciScore >= 60) {
            comSciGrade = "D";
        }
        else if (comSciScore >= 40) {
            comSciGrade = "E";
        }
        else if (comSciScore >= 0 && comSciScore < 40) {
            comSciGrade = "F";
        }
        else {
            comSciGrade = "Invalid";
        }

        if (physicsGrade == "Invalid" || chemistryGrade == "Invalid" || biologyGrade == "Invalid" || mathGrade == "Invalid" || comSciGrade == "Invalid") {
            alert("Please enter only numbers from 0 to 100.");
        }
        else {
            if (averageScore >= 90) {
                averageGrade = "A";
            }
            else if (averageScore >= 80) {
                averageGrade = "B";
            }
            else if (averageScore >= 70) {
                averageGrade = "C";
            }
            else if (averageScore >= 60) {
                averageGrade = "D";
            }
            else if (averageScore >= 40) {
                averageGrade = "E";
            }
            else {
                averageGrade = "F";
            }

            alert(`Your Physics grade is ${physicsGrade}.\nYour Chemistry grade is ${chemistryGrade}.\nYour Biology grade is ${biologyGrade}.\nYour Mathematics grade is ${mathGrade}.\nYour Computer Science grade is ${comSciGrade}.\nYour average score is ${averageScore}%, and your average grade is ${averageGrade}.`);
        }
        console.log("What is happening?");
    }
}



/* 7. Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

0 - Rat
1 - Ox
2 - Tiger
3 - Rabbit
4 - Dragon
5 - Snake
6 - Horse
7 - Goat
8 - Monkey
9 - Rooster
10 - Dog
11 - Pig
*/

let userYear = prompt("Enter your birth year:");
let numberYear = Number(userYear);
let remainder = (numberYear - 4) % 12;

if (userYear === "" || userYear === null) {
    alert("Please enter a value.");
}
else if (isNaN(userYear)) {
    alert("Please enter a valid number.");
}
else {
    if (remainder === 0) {
        alert("Your Chinese Zodiac sign is Rat.");
    }
    else if (remainder === 1) {
        alert("Your Chinese Zodiac is Ox.");
    }
    else if (remainder === 2) {
        alert("Your Chinese Zodiac sign is Tiger.");
    }
    else if (remainder === 3) {
        alert("Your Chinese Zodiac sign is Rabbit.");
    }
    else if (remainder === 4) {
        alert("Your Chinese Zodiac sign is Dragon.");
    }
    else if (remainder === 5) {
        alert("Your Chinese Zodiac sign is Snake.");
    }
    else if (remainder === 6) {
        alert("Your Chinese Zodiac sign is Horse.");
    }
    else if (remainder === 7) {
        alert("Your Chinese Zodiac sign is Goat.");
    }
    else if (remainder === 8) {
        alert("Your Chinese Zodiac sign is Monkey.");
    }
    else if (remainder === 9) {
        alert("Your Chinese Zodiac sign is Rooster.");
    }
    else if (remainder === 10) {
        alert("Your Chinese Zodiac sign is Dog.");
    }
    else {
        alert("Your Chinese Zodiac sign is Pig.");
    }
}


