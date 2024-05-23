// creates 16 rows with unique ids
for(let i=0; i<16; i++){
    let row = document.createElement("row");
    row.classList.add('row');
    row.setAttribute("id", `row${i+1}`);
    container.appendChild(row);
}

//creates 16 square divs per row
for(let i=0; i<16; i++){
    let row = document.getElementById(`row${i+1}`);
    for(let j=0; j<16; j++){
        let col = document.createElement("div");
        col.classList.add("col");

        //col.textContent = 'column';
        row.appendChild(col);
    };
};

let nodeListOfSquares = document.getElementsByClassName("col");
for(let i=0; i<256; i++){
    let individualBox = nodeListOfSquares[i];
    individualBox.addEventListener("mouseover", () => {
        individualBox.classList.add("hover");
    });
};



