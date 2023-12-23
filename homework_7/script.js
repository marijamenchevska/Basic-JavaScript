/* 1. CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
- name
- kind
- speak (method).
This method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

Bonus: enter the values from prompt or from HTML inputs
*/

let nameField = document.getElementById("animalName");
let kindField = document.getElementById("animalKind");
let speakField = document.getElementById("animalSpeak");
let submitButton1 = document.getElementById("submit1");

function animalObject (name, kind) {
    this.name = name;
    this.kind = kind;
    
    this.speak = function(speaking) {
        console.log(`The ${this.kind} ${this.name} says: "${speaking}"`);
    }
}

submitButton1.addEventListener("click", function () {
    let nameInput = nameField.value;
    let kindInput = kindField.value;
    let speakInput = speakField.value;
    let generatedAnimal = new animalObject (nameInput, kindInput);

    if (nameInput === "" || kindInput === "" || speakInput === "") {
        console.log("Please fill out all text fields.");
    }
    else {
        generatedAnimal.speak(speakInput);
    }
})

speakField.addEventListener("keydown", function (event) {
    if (event.key === "Enter"){
        submitButton1.click();
    }
})



/* 2. Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.:

Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).

BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML.
*/

let titleField = document.getElementById("bookTitle");
let authorField = document.getElementById("bookAuthor");
let statusField = document.getElementById("readingStatus");
let submitButton2 = document.getElementById("submit2");

function readingObject (title, author) {
    this.title = title;
    this.author = author;
    
    this.readingStatus = function (status) {
        if (status === "yes") {
            console.log(`Already read "${this.title}" by ${this.author}.`);
        }
        else if (status === "no") {
            console.log(`You still need to read "${this.title}" by ${this.author}.`);
        }
        else {
            console.log("Please enter only yes or no.");
        }
    }
}

submitButton2.addEventListener("click", function() {
    let titleInput = titleField.value;
    let authorInput = authorField.value;
    let statusInput = statusField.value;
    let generatedObject = new readingObject (titleInput, authorInput);

    if (titleInput === "" || authorInput === "" || statusInput === "") {
        console.log("Please fill out all text fields.");
    }
    else {
        generatedObject.readingStatus(statusInput);
    }
})

statusField.addEventListener("keydown", function (event) {
    if (event.key === "Enter"){
        submitButton2.click();
    }
})



/* 3. Create a constructor function named "UserCredentials" that will be used to generate userCredentials objects with the following properties: firstName, lastName, email, and password. Create an HTML form with fields for firstName, lastName, email, and password and a Submit button. On form submission, create a new userCredentials object using the constructor function. Append the created object to a global array named users. Display a success message on the screen saying "Successfully registered."

Bonus: Create a button "Show All Users". On click it should print all the users (only their first name and last name) in a ordered list.
*/

let firstNameField = document.getElementById("firstName");
let lastNameField = document.getElementById("lastName");
let emailField = document.getElementById("email");
let passwordField = document.getElementById("password");
let submitButton3 = document.getElementById("submit3");
let allUsersButton = document.getElementById("allUsers");
let listField = document.getElementById("list");
let users = [];
let nameArray = [];

function UserCredentials (firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;

    // this.nameExtraction = function () {
    //     nameArray.push(`${this.firstName} ${this.lastName}`);
    // }
}

submitButton3.addEventListener("click", function() {
    let firstNameInput = firstNameField.value;
    let lastNameInput = lastNameField.value;
    let emailInput = emailField.value;
    let passwordInput = passwordField.value;
    let userCredentials = new UserCredentials (firstNameInput, lastNameInput, emailInput, passwordInput);

    if (firstNameInput === "" || lastNameInput === "" || emailInput === "" || passwordInput === "") {
        alert("Please fill out all text fields.");
    }
    else {
        // userCredentials.nameExtraction();
        nameArray.push(`${firstNameInput} ${lastNameInput}`); //optional
        users.push(userCredentials);
        alert("Successfully registered!");

        firstNameField.value = "";
        lastNameField.value = "";
        emailField.value = "";
        passwordField.value = "";
    }  
})

passwordField.addEventListener("keydown", function (event) {
    if (event.key === "Enter"){
        submitButton3.click();
    }
})

allUsersButton.addEventListener("click", function() {
    if (nameArray.length === 0) {
        alert("No users have been submitted.");
    }
    else {
        let list = "<ol>";

        for (let listItem of nameArray) {
            list += `<li>${listItem}</li>`;
        }
    
        list += "</ol>";
    
        listField.innerHTML = list;
    }
})

