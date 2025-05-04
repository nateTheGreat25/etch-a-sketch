const containerDiv = document.querySelector("#container");

// makes div row to put div sqaures in
function makeRow () {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("rowDiv");
    rowDiv.setAttribute("id", "rowDiv");
    rowDiv.textContent = "Does this work?"
    containerDiv.appendChild(rowDiv);
}

makeRow();