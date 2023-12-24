/* Exercise 11. Write a JavaScript programm called PhoneBook. You should have three input fields in the html, one for firstName, lastName and phoneNumber. After entering the values into each of them, on clicking on a “Save” button, you should display the newly added contact in a table below the inputs. Make sure the user is entering an appropriate values in the fields! Bonus: Add column with delete and edit button so that you can edit or delete a contact! Try to save the newly added contact as an object (literal or construcotr function its up to you) and add it to an array!
*/

let firstNameField = document.getElementById("firstName");
let lastNameField = document.getElementById("lastName");
let phoneNumberField = document.getElementById("phoneNumber");
let saveButton = document.getElementById("button");
let phoneBookArray = [];

function PhoneBook (firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

function inputValidation(input1, input2, input3) {
    if (input1 === "" || input2 === "" || input3 === "") {
        alert("Please fill out all text fields.");
        return 1;
    }
    else if (isNaN(input3) || input3.length !== 9) {
        alert("Please enter a valid number in the third text field.");
        return 1;
    }
}

function tableCreation (contactArray) {
    let table = '<table style="border:1px solid black" cellspacing = 0><tbody><tr><th style="border:1px solid black">First name</th><th style="border:1px solid black">Last name</th><th style="border:1px solid black">Phone number</th><th style="border:1px solid black">Action</th></tr>';

    for (let i = 0; i < contactArray.length; i++) {   
        let input = contactArray[i];         
        table += `<tr class="rows"><td style="border:1px solid black">${input.firstName}</td><td style="border:1px solid black">${input.lastName}</td><td style="border:1px solid black">${input.phoneNumber}</td><td style="border:1px solid black"><button type="button" class="editButtons">Edit contact</button><button type="button" class="deleteButtons">Delete contact</button></td></tr>`;
    }
    
    table += '</tbody></table>';
        
    document.getElementById("table").innerHTML = table;

    let rowArray = document.getElementsByClassName("rows");
    let editButtonArray = document.getElementsByClassName("editButtons");

    for (let i = 0; i < editButtonArray.length; i++) {
        editButtonArray[i].addEventListener("click", function() {
            let input = contactArray[i];
            rowArray[i].innerHTML = `<tr><td style="border:1px solid black"><input type="text" class="editedInput" value=${input.firstName}></td><td style="border:1px solid black"><input type="text" class="editedInput" value=${input.lastName}></td><td style="border:1px solid black"><input type="text" class="editedInput" value=${input.phoneNumber}></td><td style="border:1px solid black"><button type="button" class="saveButtons">Save contact</button><button type="button" class="deleteButtons">Delete contact</button></td></tr>`;
            // contactArray.splice(i, 1);
            // console.log(contactArray);
        });     
    }

    let deleteButtonArray = document.getElementsByClassName("deleteButtons");

    for (let i = 0; i < deleteButtonArray.length; i++) {
        deleteButtonArray[i].addEventListener("click", function() {
            rowArray[i].innerHTML = "";
            contactArray.splice(i, 1);
            console.log(contactArray);

            if (deleteButtonArray.length === 0) { // if all buttons are deleted, empty out the whole (div) element (<tr> elements are "emptied" (thus buttons are overwritten), but still present, so we can't use: rowArray.length === 0)
                document.getElementById("table").innerHTML = "";
            }
        });     
    }
}

saveButton.addEventListener("click", function() {
    let firstName = firstNameField.value;
    let lastName = lastNameField.value;
    let phoneNumber = phoneNumberField.value;
    let phoneBook = new PhoneBook(firstName, lastName, phoneNumber);

    firstNameField.value = "";    
    lastNameField.value = "";    
    phoneNumberField.value = "";    

    if (inputValidation(firstName, lastName, phoneNumber) !== 1) {
        phoneBookArray.push(phoneBook);
        console.log(phoneBookArray);
        tableCreation(phoneBookArray);
    }

});


