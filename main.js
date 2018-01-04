
$(document).ready(initializeGame);
var game = null;

function initializeGame() {
    game = new GameBoard();
    game.init();
    ///Test//
    $("div[col=0]").click(function () {
        console.log('clicked');
        $('.chipContainer1, .chip1').addClass("animateChip1");
    });


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

    this.generateBoard = function() {
        var rowArray = []
        var chipRow = $('<div>', {
            class: 'chipRow'
        });
        $('#container').append(chipRow);


        for(var chip1 = 1; chip1 < 7; chip1++) {
            var $chipcontainer = $('<div>', {
                class: 'chipContainer' + chip1,
            });
            var $chip1 = $('<div>', {
                class: 'chip' + chip1,
            });
            chipRow.append($chipcontainer);
            for(var i = 1; i < 8; i++){
                var $chip1 = $('<div>', {
                    class: 'chip' + i,
                });
                $($chipcontainer).append($chip1);
            }
        }




        for(var col = 0; col < 7; col++){
            var $col = $('<div>',{
                class: 'col'
            });
            for(var cell = 0; cell < 6; cell++){
                var $cell = $('<div>',{
                    class: 'cell empty' ,
                    ////added empty

                    col: col,
                    row: cell
                });

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

