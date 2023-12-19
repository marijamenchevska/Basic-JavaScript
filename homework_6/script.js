let divField = document.getElementById("inputFields");
divField.style.marginTop = "50px";
divField.style.textAlign = "center";

let rowNumber = document.getElementById("rows");
let columnNumber = document.getElementById("columns");
let submitButton = document.getElementById("submit");

function tableCreation (rows, columns) {
    let table = "<table style = 'margin: auto; margin-top: 100px; border: 1px solid black; border-spacing: 0' cellpadding = 10px><tbody>";

    for (let i = 0; i < parseInt(rows.value); i++) {
        table += "<tr>";
        
        for (let j = 0; j < parseInt(columns.value); j++) {
            table += `<td style = "border: 1px solid black; background-color: teal; color: white">Row ${i + 1}, Column ${j + 1}</td>`;
        }

        table += "</tr>";
    }

    table += "</tbody></table>";

    document.getElementById("table").innerHTML = table;
}

submitButton.addEventListener("click", function () {
    tableCreation (rowNumber, columnNumber);
    rowNumber.value = "";
    columnNumber.value = "";
});
