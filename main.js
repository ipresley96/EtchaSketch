let color = 'black';


function makeGrid(size){    
    let grid = document.querySelector('.grid');
    // this clears out the exsisting cells for repopulation purposes
    let cells = document.querySelectorAll('div');
    cells.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //This allows the grid to always be a perfect square
    let amount = size * size
    
    // This loop logic allows us to create grid without having to 
    // to copy and paste the amount of cells
    for(let i = 0; i < amount ; i++){
        let cells = document.createElement('div');
        cells.addEventListener('mouseover', colorSquare)
        cells.style.backgroundColor = 'white';
        grid.appendChild(cells)
    }

}

makeGrid(16)
// logic t0 change to size of the grid 
function changeSize(input){
    if(input <= 100 &&  input >= 2){
        makeGrid(input);
    } else {
        console.log("not valid")
    }
}


// This function changes the color of the hover effect. The color condition 
// changes the global varable which manipulates the changeColor function below
function colorSquare() {
    if(color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color
    }
}

//Where able to access this varable because it is a global scoped varable
function changeColor(choice){
    color = choice;
}