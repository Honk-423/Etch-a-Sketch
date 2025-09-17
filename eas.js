let num = 16;
// MAKE the global variable num with the value 16. This will be the default value.

const container = document.querySelector("#container");

function createGrid() {
    const product = num * num;
    for (let i = 0; i <= product; i++) {
        let grid = document.createElement("div");
    };
};
/*
*   MAKE the function createGrid.
*   REMOVE any old grids.
*   MAKE the variable product and set its value to num times num.
*   MAKE for loop and have it loop until the iteration 
*   equals product. 
*   CREATE the element grid inside of the loop, then give it the class
*   gridDiv.
*   APPEND grid to container.
*/

// CALL createGrid.
createGrid();

/* 
*   MAKE a reference to btn using querySelector.
*   MAKE btn respond to being clicked by using addEventListener.
*   ASK the user to input a value for num by using PROMPT. IF the user
*   inputs a value less than 100, run the rest of the code. ELSE, alert
*   the user that num was too large and to please input a number less
*   than 100, then BREAK.
*   CALL createGrid.
*/

/* 
*   MAKE the background-color of grid change to black when hovering. 
*   Once that is working, RANDOMIZE the background-color of grid when
*   hovering. This will likely require the use of Math.random, 
*   Math.floor, and Math.ceil.
*   IF hover, darken each grid by 10%. May need to enable hover with
*   addEventListener instead to get this working.
*/