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

function changeColor (){
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () =>{
            square.style.backgroundColor = 'black';
        });
    });
}

let rows = 16
let squares = 16

for (let i = 0; i < rows; i++){
makeRow(i);

makeSquare(squares, i);
}

changeColor();

// declares varibles  and function to get # of pixels from user
const button = document.getElementById("resetButton");

button.addEventListener("click", getPixels);

function getPixels () {
    const pixels = prompt("Enter how many pixels you would like?");
    if (pixels != null){
        rows = pixels;
        squares = pixels;
        for (let i = 0; i < rows; i++){
            makeRow(i);
            
            makeSquare(squares, i);
            }
    }
   
}