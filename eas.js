let num = 16;

const outerContainer = document.querySelector("#outer-container");

const allContainers = outerContainer.children;

let container;

let allGridSquares;

let gridSquare;

function createGrid() {
    const product = num * num;

    for (let i = 1; i <= product; i++) {
        if (i % num === 0) {
            container = document.createElement("div");
            container.classList.toggle("container");
            outerContainer.appendChild(container);
        };
    };

    for (let j = 0; j < allContainers.length; j++) {
        for (let k = 1; k <= num; k++) {
            gridSquare = document.createElement("div");
            gridSquare.classList.toggle("gridDiv");
            allContainers[j].appendChild(gridSquare);
        };
    };

    allGridSquares = document.getElementsByClassName("gridDiv");

    for (let l = 0; l < allGridSquares.length; l++) {
        let opacity = 0;
        allGridSquares[l].addEventListener("mouseenter", (e) => {
            if (opacity <= 100) {
                opacity = opacity + 10;
            };
            
            getRandomRGB();
            e.target.setAttribute(`style`, 
                `background-color: rgb( ${red}, ${green}, ${blue} );
                 opacity: ${opacity}%;`);
        }); 
};
};

createGrid();

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    while (true) {
        num = prompt("Input a number");
        if (num > 0 && num < 100) {
            num = +num;

            outerContainer.replaceChildren();
            
            createGrid();
            
            break;
        } else if (num === null) {
            break;
        } else {
            alert("Please input a valid value");
        };
    };
});

let red;
let green;
let blue;

function getRandomRGB() {
    function getRandomNumber(min, max) {
        min = Math.ceil(0);
        max = Math.floor(255);

        return Math.floor( Math.random() * (max - min + 1) ) + min;
    };
    
    red = getRandomNumber();
    green = getRandomNumber();
    blue = getRandomNumber();

};