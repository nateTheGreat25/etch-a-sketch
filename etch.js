const containerDiv = document.querySelector("#container");

// makes div row to put div sqaures in
function makeRow () {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("rowDiv");
    rowDiv.setAttribute("id", "rowDiv");
    
    containerDiv.appendChild(rowDiv);
}



function makeSquare (squares) {
    const rowDiv = document.querySelector("#rowDiv");
    for (let i = 0; i < squares; i++) {
        const drawSquare = document.createElement("div");
        drawSquare.classList.add("square");
        drawSquare.setAttribute("id", "square");    
        rowDiv.appendChild(drawSquare);
        //console.log("test");
    }
}

makeRow();
makeSquare(16);