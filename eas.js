let num = 16;
// MAKE the global variable num with the value 16. This will be the default value.

const container = document.querySelector("#container");

let gridSquare;

function createGrid() {
    const product = num * num;
    for (let i = 1; i <= product; i++) {
        gridSquare = document.createElement("div");
        gridSquare.classList.toggle("gridDiv");
        container.appendChild(gridSquare);
    };
};
/*
*   MAKE the function createGrid.
*   MAKE the variable product and set its value to num times num.
*   MAKE for loop and have it loop until the iteration 
*   equals product. 
*   CREATE the element gridSquare inside of the loop, then give it the class
*   gridDiv.
*   APPEND gridSquare to container.
*/

// CALL createGrid.
createGrid();

const allGridSquares = document.querySelectorAll(".gridDiv");

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    while (true) {
        num = prompt("Input a number");
        if (num > 0 && num < 100) {
            num = +num;

            allGridSquares.forEach(square => {
                square.remove();
            });
            
            createGrid();
            
            break;
        } else if (num === null) {
            break;
        } else {
            alert("Please input a valid value");
        };
    };
});
/* 
*   MAKE a reference to btn using querySelector.
*   MAKE btn respond to being clicked by using addEventListener.
*   ASK the user to input a value for num by using PROMPT. IF the user
*   inputs a value less than 100, run the rest of the code. ELSE, alert
*   the user that num was too large and to please input a number less
*   than 100, then BREAK.
*   MAKE the variable allGridSquares and use querySelectorAll to select
*   every instance of gridSquare.
*   REMOVE all instances of gridSquare by using forEach on 
*   allGridSquares, then element.remove.
*   CALL createGrid.
*/

allGridSquares.forEach(square => {
    square.addEventListener("mouseenter", () => {
        square.setAttribute("style", "background-color: black;")
    });
});
/* 
*   MAKE the background-color of gridSquare change to black when 
*   hovering and make each squareGrid 1px wide. Once that is working,
*   RANDOMIZE the background-color of gridSquare when hovering. This 
*   will likely require the use of Math.random, Math.floor, and 
*   Math.ceil.
*   IF hover, darken each gridSquare by 10%. May need to enable hover with
*   addEventListener instead to get this working.
*/