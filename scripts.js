let startButton = document.getElementById("button");

startButton.addEventListener("click", () => {
    container.replaceChildren();
    let gridSize = prompt("How many squares per side would you like your board to be between 2 and 100?");
    if (gridSize > 100){
        alert("Upper limit reached. Try again, or start with this 16x16 sketch pad!")
        gridSize = 16;
    }
    createSketchBoard(gridSize);
});

function createSketchBoard (gridSize) {
    // creates rows according to user input with unique ids
    for(let i=0; i<gridSize; i++){
        let row = document.createElement("row");
        row.classList.add('row');
        row.setAttribute("id", `row${i+1}`);
        let heightInPercent = 100/gridSize;
        row.style.height = `${heightInPercent}%`;
        container.appendChild(row);
    }

    //creates squares dynamically according to user input for each row
    for(let i=0; i<gridSize; i++){
        let row = document.getElementById(`row${i+1}`);
        for(let j=0; j<gridSize; j++){
            let col = document.createElement("div");
            let widthInPercent = 100/gridSize;
            col.style.width = `${widthInPercent}%`;
            col.classList.add("col");
            col.setAttribute("id", `col${j+1}`);
            row.appendChild(col);
        };
    };

    //adds hover effect to all squares in grid
    let nodeListOfTiles = document.getElementsByClassName("col");
    for(let i=0; i<gridSize**2; i++){
        let tile = nodeListOfTiles[i];
        tile.addEventListener("mouseover", () => {
            tile.classList.add("hover");
        });
    };
};
        
