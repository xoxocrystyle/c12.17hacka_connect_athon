
$(document).ready(initializeGame);
var game = null;

function initializeGame() {
    game = new GameBoard();
    game.init();
}

function GameBoard() {

    this.turnNumber = 1;
    this.playing = true;
    this.playerTurn = 1;
    this.gameBoard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];
    this.init = function(){
        this.generateBoard();
    }

    this.generateBoard = function(){
        var rowArray = []
        for(var row = 0; row < 6; row++){
            var $row = $('<div>',{
                class: 'row'
            });
            for(var cell = 0; cell < 7; cell++){
                var $cell = $('<div>',{
                    class: 'cell',
                    row: row,
                    col: cell
                });
                // $cell.click(placePiece);
                $row.append($cell);
            }
            rowArray.push($row);
        }
        $('#container').append(rowArray);

    }

}


