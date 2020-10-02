document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
	cells: [{
			row: 0,
			col: 0,
			isMine: true,
			isMarked: false,
			hidden: true
		},
		{
			row: 0,
			col: 1,
			isMine: false,
			isMarked: false,
			hidden: true
		},
		{
			row: 0,
			col: 2,
			isMine: false,
			isMarked: false,
			hidden: true
		},
		{
			row: 1,
			col: 0,
			isMine: false,
			isMarked: false,
			hidden: true
		},
		{
			row: 1,
			col: 1,
			isMine: false,
			isMarked: false,
			hidden: true
		},
		{
			row: 1,
			col: 2,
			isMine: false,
			isMarked: false,
			hidden: true
		},
		{
			row: 2,
			col: 0,
			isMine: false,
			isMarked: false,
			hidden: true
		},
		{
			row: 2,
			col: 1,
			isMine: false,
			isMarked: false,
			hidden: true
		},
		{
			row: 2,
			col: 2,
			isMine: false,
			isMarked: false,
			hidden: true
		}
	]
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

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
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

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//function countSurroundingMines(cell) {}
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
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