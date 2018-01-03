
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
        for(var col = 0; col < 6; col++){
            var $col = $('<div>',{
                class: 'col'
            });
            for(var cell = 0; cell < 7; cell++){
                var $cell = $('<div>',{
                    class: 'cell',
                    col: col,
                    row: cell
                });
                // $cell.click(placePiece);
                $col.append($cell);
            }
            rowArray.push($col);
        }
        $('#container').append(rowArray);

    }

}

