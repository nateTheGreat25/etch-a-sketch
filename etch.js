const containerDiv = document.querySelector("#container");

// makes div row to put div sqaures in
function makeRow (i) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("rowDiv");
    rowDiv.setAttribute("id", "rowDiv"+i);
    
    containerDiv.appendChild(rowDiv);
}



function makeSquare (squares, i) {
    const rowDiv = document.querySelector("#rowDiv"+ i);
    for (let i = 0; i < squares; i++) {
        const drawSquare = document.createElement("div");
        drawSquare.classList.add("square");
        drawSquare.setAttribute("id", "square"+ i);    
        rowDiv.appendChild(drawSquare);
        //console.log("test");
    }
}


for (let i = 0; i < 16; i++){
makeRow(i);

makeSquare(16, i);
}