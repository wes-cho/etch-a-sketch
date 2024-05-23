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
        row.appendChild(col);
    };
};
