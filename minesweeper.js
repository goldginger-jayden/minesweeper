document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
	cells: []
}

createBoard(4)

function createBoard(size) {
	for (rowNum = 0; rowNum < size; rowNum++) {
		for (colNum = 0; colNum < size; colNum++) {
			board.cells.push({
				row: rowNum,
				col: colNum,
				isMine: Math.random() < 0.2,
				isMarked: false,
				hidden: true
			})
		}
	}
	startGame
}

function startGame() {
	for (let i = 0; i < board.cells.length; i++) {
		board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
	}
	// Don't remove this function call: it makes the game work!
	lib.initBoard()
	// Check for a win on click or right click
	document.addEventListener('click', checkForWin)
	document.addEventListener('contextmenu', checkForWin)
}

function checkForWin() {
	for (let i = 0; i < board.cells.length; i++) {
		var currentCell = board.cells[i]
		if (currentCell.isMine && currentCell.isMarked) {
			continue
		} else if (currentCell.isMine && !currentCell.isMarked) {
			return
		} else if (currentCell.hidden) {
			return
		}
	}
	return lib.displayMessage('You win! Play Again?');
}

function countSurroundingMines(cell) {
	var surroundingCells = lib.getSurroundingCells(cell.row, cell.col)
	let count = 0
	surroundingCells.forEach(element => {
		if (element.isMine) {
			count++
		}
	});
	return count
}

function rip() {
	var audio = new Audio('./audio/BABABOOEY.mp3')
	return audio.play()
}