const canvas = document.querySelector('.canvas')

for(let i = 0; i < 15; i++){
	for(let j = 0; j < 16; j++){
		const tile = document.createElement('div')
		tile.classList.add('tile')
		canvas.appendChild(tile)
	}
}

const tiles = document.querySelectorAll('.tile');

tiles.forEach((tile) => {
	tile.addEventListener('mouseover', () => {
		tile.classList.add('draw');
	})
})
