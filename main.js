
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

    //Switch player 1 to player 2 after dropping chip
    // turn numbers equal to 42

    this.placeChip = function(){
        var row = $(this).attr('row');
        var col = $(this).attr('col');

        if(this.playing){
            if(this.gameBoard[row][col] === 0){
                if (this.playerTurn === 1){
                    //$(this).placedChip player 1 picked chip in the cell function
                    this.gameBoard[row][col] = 1;
                } else {
                    //$(this).placedChip player 1 picked chip in the cell function
                    this.gameBoard[row][col] = 2;
                }
                //put function below that states if winner is found.
                if(!winner()){
                    if(this.playerTurn === 1){
                        this.playerTurn = 2 ;
                        ++this.turnNumber;
                    } else {
                        this.playerTurn =1;
                        ++this.turnNumber;
                    }
                    //display area to put whos turn it is
                    //$('....;).text("Player " + this.playerTurn +"'s turn");

                }
            }

        }
    }

    // this.winnerWinner = function(){
    //     //check for this
    //     if(this.checkForWin???) {
    //
    //     }else if(this.turnNumber === 42){
    //         // game is a tie
    //         this.playing = false;
    //     }else{
    //         return false;
    //     }
    // }



}

