const canvas = document.querySelector('.canvas')
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);

function drawTiles(){
var size = rootStyles.getPropertyValue('--gridsize');

for(let i = 0; i < size; i++){
	for(let j = 0; j < size; j++){
		const tile = document.createElement('div')
		tile.classList.add('tile')
		canvas.appendChild(tile)
	}
}
}
drawTiles();

let tiles = document.querySelectorAll('.tile');
function listenTiles(){
tiles = document.querySelectorAll('.tile');
tiles.forEach((tile) => {
	tile.addEventListener('mouseover', () => {
		tile.classList.add('draw');
	})
})
}
listenTiles();

const button = document.querySelector('.sizepromt');

button.addEventListener('click', () => {
	let grid = prompt("Enter the new grid size");
	root.style.setProperty('--gridsize', grid);
	tiles.forEach(tile => {
		tile.remove();			
	})
	drawTiles();
	listenTiles();
})
