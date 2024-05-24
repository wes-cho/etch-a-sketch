let startButton = document.getElementById("button");
startButton.addEventListener("click", () => {    
    let userInput = prompt("How many squares per side would you like your board to be between 2 and 100?");
    let boardSize = Number(userInput);

    //remove old board
    container.replaceChildren();

    // creates rows according to user input with unique ids
    for(let i=0; i<boardSize; i++){
        let row = document.createElement("row");
        row.classList.add('row');
        row.setAttribute("id", `row${i+1}`);
        let heightInPercent = 100/boardSize;
        row.style.height = `${heightInPercent}%`;
        container.appendChild(row);
    }

    //creates squares dynamically according to user input for each row
    for(let i=0; i<boardSize; i++){
        let row = document.getElementById(`row${i+1}`);
        for(let j=0; j<boardSize; j++){
            let col = document.createElement("div");
            let widthInPercent = 100/boardSize;
            col.style.width = `${widthInPercent}%`;
            col.classList.add("col");
            col.setAttribute("id", `col${j+1}`);
            row.appendChild(col);
        };
    };

    //adds hover effect to all squares in grid
    let nodeListOfTiles = document.getElementsByClassName("col");
    for(let i=0; i<boardSize**2; i++){
        let tile = nodeListOfTiles[i];
        tile.addEventListener("mouseover", () => {
            tile.classList.add("hover");
        });
    };
});