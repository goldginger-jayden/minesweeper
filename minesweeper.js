document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
	cells: [],
}

var size = 3
createBoard(size)

function createBoard(size) {
	for (rowNum = 0; rowNum < size; rowNum++) {
		for (colNum = 0; colNum < size; colNum++) {
			board.cells.push({
				row: rowNum,
				col: colNum,
				isMine: true,
				isMarked: false,
				hidden: true
			})
		}
	}
}

function startGame() {
	document.addEventListener('click', checkForWin)
	document.addEventListener('contextmenu', checkForWin)
	for (let i = 0; i < board.cells.length; i++) {
		surroundingMines = countSurroundingMines(board.cells[i])
	}
	// Don't remove this function call: it makes the game work!
	lib.initBoard()
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
	return lib.displayMessage('You win!')
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

