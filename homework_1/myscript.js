//1. Write a JavaScript program that calculates the total price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%. Print the result in the console.

let priceOfOnePhone = 119.95;
let taxRate = 5;
let numberOfPhones = 30;
let totalPrice = numberOfPhones * priceOfOnePhone * (1 + taxRate/100);

console.log("The total price is:", totalPrice);

//2. Write a JavaScript program that takes minutes and converts them to seconds. Print the result in the console.

let minutes = 24;
const secondsPerMinute = 60;
let totalSeconds = minutes * secondsPerMinute;

console.log("Seconds:", totalSeconds);

//3. Write a JavaScript program that takes a number and increments the number by +1 and prints the result in the console.

let number = 5;
let increment = number+1;

console.log("Incremented number:", increment);

//4. Write a JavaScript program that takes the base and height of a triangle and calculates its area. Print the result in the console.

let triangleBase = 20;
let triangleHeight = 14;
let triangleArea = triangleBase * triangleHeight / 2;

console.log("The area of your triangle is:", triangleArea);

//5. Write a JavaScript program that takes length and width of a rectangle and finds its perimeter. Print the result in the console.

let rectangleHeight = 3;
let rectangleWidth = 6;
let rectanglePerimeter = 2 * (rectangleHeight + rectangleWidth);

console.log("The perimeter of your rectangle is:", rectanglePerimeter);

//6. Write a JavaScript program that will calculate area of circle. Print the result in the console.

let radius = prompt("Enter the radius of your circle:");
let pi = Math.PI;
let area = radius ** 2 * pi;

console.log("The area of your circle is:", area);