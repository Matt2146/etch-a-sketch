/*we're gonna watch a vid about flexbox
create a container for the 16x16 divs we're making using a loop
do some math functions to determine size of sketch pad
960*960 should be default size
100 x 100 should be max so we don't break the site

Add a button to the top of the screen that will send the user a popup
 asking for the number of squares per side for the new grid.

 Should be able to do this with something about alert and prompt
 maybe? 

 ok size of each box will be determined by user input 
and the default size of 960*960 we will use that to determine
each item in the flexbox's size based on how many per grid and 
the default size
*/

let gridSize = prompt("Number of Squares per Side?");
gridSizeSqrd= Math.pow(gridSize,2);
const container = document.querySelector('#flexboxContainer');
let content = document.createElement('div');
let getContainerElement = document.getElementById(flexboxContainer);
let parentWidth = container.offsetWidth;
let parentHeight = container.offsetHeight;
    console.log(parentWidth);
    console.log(parentHeight);
for(i = 0; i < gridSizeSqrd; i++){
    content[i] = document.createElement('div');
    content[i].setAttribute("id",'gridblockID'+[i]);
    content[i].classList.add('gridblock'+[i]);
    container.appendChild(content[i]);
    let getElement = document.getElementById("gridblockID"+[i]);

    getElement.style.width = parentWidth/gridSize+'px';
    getElement.style.height = parentHeight/gridSize+'px';
    getElement.style.backgroundColor = "red";
}
let red = Math.floor(Math.random()*254)
let green = Math.floor(Math.random()*254)
let blue = Math.floor(Math.random()*254)

container.addEventListener('mouseover', (gridblock)  => {
    red = Math.floor(Math.random()*254)
    green = Math.floor(Math.random()*254)
    blue = Math.floor(Math.random()*254)
    gridblock.target.style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
});

const btnGridSize = document.querySelector('#btnGridSize');
btnGridSize.addEventListener('click', () => {
    let parentWidth = container.offsetWidth;
    let parentHeight = container.offsetHeight;
    let gridSize = prompt("Number of Squares per Side?");
    gridSizeSqrd= Math.pow(gridSize,2);
    for(i = 0; i < gridSizeSqrd; i++){
        content[i] = document.createElement('div');
        content[i].setAttribute("id",'gridblockID'+[i]);
        content[i].classList.add('gridblock'+[i]);
        container.appendChild(content[i]);
        let getElement = document.getElementById("gridblockID"+[i]);
    
        getElement.style.width = parentWidth/gridSize+'px';
        getElement.style.height = parentHeight/gridSize+'px';
        getElement.style.backgroundColor = "red";
    }
});