
$(document).ready(initializeGame);
var game = null;

function initializeGame() {
    game = new GameBoard();
    game.init();
    ///Test//
    // $("div[row]").click(chipCreate0);


        //dom create your falling chip element with appropriate class
        //get the position of the row that was clicked

        //place it at the top position of 1 chip above the column
        //append new chip to column in question
        //determine height of chip final resting position
        //use animate function to move chip to new position
        //find out how far down to animate chip
        // $(this).parent().append(clone);


}

function GameBoard() {

    this.turnNumber = 1;
    this.playing = true;
    this.currentPlayer = 0;
    this.gameBoard = [];
    this.init = function () {
        this.generateBoard();
        this.clickedDiv = $(".cell");
        this.clickedDiv.on("click",this.playerCheck.bind(this));

    };

    this.generateBoard = function () {
        var chipRow = $('<div>', {
            class: 'chipRow'
        });
        $('#container').append(chipRow);

        // for (var chip1 = 1; chip1 < 7; chip1++) {
        //     var $chipcontainer = $('<div>', {
        //         class: 'chipContainer' + chip1,
        //     });
        //     chipRow.append($chipcontainer);
        //
        // }


        for (var col = 0; col < 6; col++) {
            this.gameBoard[col] = [];
            for (var cell = 0; cell < 7; cell++) {
                this.gameBoard[col][cell] = $("<div>").addClass("cell").addClass("empty").attr({
                    "row": col,
                    "col": cell
                });
                this.gameBoard[col][cell].appendTo("#container");

            }

        }
        // console.log(this.gameBoard);
    }

    this.togglePlayer = function(){
        this.currentPlayer = 1 - this.currentPlayer;
    }

    this.playerCheck = function(event){
        console.log(this.clickedDiv);
        var target = $(event.target);
        if(this.currentPlayer === 0){
        target.addClass("player1").removeClass("empty");
        }if(this.currentPlayer === 1){
            target.addClass("player2").removeClass("empty");
        }
        this.togglePlayer();
        // $('#player1').addClass("player1");
    //   CALL WIN CHECK FUNCTION

    }
}
    // Switch player 1 to player 2 after dropping chip
    // turn numbers equal to 42
//dom create your falling chip element with appropriate class
//get the position of the row that was clicked

//place it at the top position of 1 chip above the row
//append new chip to column in question
//determine height of chip final resting position
//use animate function to move chip to new position
//find out how far down to animate chip
// $(this).parent().append(clone);

function chipCreate0() {
    var targetPosition = $(this).position();
    console.log(targetPosition);

        var chip = $('<div>', {
            class: 'chip'
        });
        $(".chipRow").append(chip);
        $(".chip").animate({'top': '81.6%'}, 2000);
        ////bottom [81.6%,68%,54.2%,40.4%,26.6%,12.9%]
        // $(this).parent().append(clone);

}


    this.placeChip = function () {
        //need to figure out how to put next two var to this
        var row = $(this).attr('row');
        var col = $(this).attr('col');

        if (this.playing) {
            if (this.gameBoard[row][col] === 0) {
                if (this.playerTurn === 1) {
                    //$(this).placedChip player 1 picked chip in the cell function
                    this.gameBoard[row][col] = 1;
                } else {
                    //$(this).placedChip player 1 picked chip in the cell function
                    this.gameBoard[row][col] = 2;
                }
                //put function below that states if winner is found.
                if (!winner()) {
                    if (this.playerTurn === 1) {
                        this.playerTurn = 2;
                        ++this.turnNumber;
                    } else {
                        this.playerTurn = 1;
                        ++this.turnNumber;
                    }
                    // display area to put whos turn it is
                    $("#stats").text("Player " + this.playerTurn + "'s turn");

                }
            }

        }
    };


    //check tiles left and right to see if same same
    this.checkHorizontal = function (row, col, rowchg, colchg) {
        if (this.checkAdjacent(row, col, 0, 1) + this.checkAdjacent(row, col, 0, -1) === 2) {
            return true;
        }
        if (this.checkAdjacent(row, col, 0, 1) + this.checkAdjacent(row, col, 0, -1) > 3) {
            return true;
        }
        this.winnerWinner();
        console.log("winner winner")

    };

    this.checkVertical = function (row, col, rowchg, colchg) {
        if (this.checkAdjacent(row, col, 1, 0) + this.checkAdjacent(row, col, -1, 0) === 2) {
            return true;
        }
        if (this.checkAdjacent(row, col, 1, 0) + this.checkAdjacent(row, col, -1, 0) > 3) {
            return true;
        }
        this.winnerWinner();
        console.log("winner winner")

    };

    //new
    this.checkUpRight = function(row,col,rowchg,colchg){
        if(this.checkAdjacent(row,col,-1,1) + this.checkAdjacent(row,col,1,-1) === 2) {
            return true;
        }
        if(this.checkAdjacent(row,col,-1,1) + this.checkAdjacent(row,col,1,-1) > 3) {
            return true;
        }
        this.winnerWinner();
        console.log("winner winner")
    };

    this.checkDownRight = function(row,col,rowchg,colchg){
        if(this.checkAdjacent(row,col,-1,-1) + this.checkAdjacent(row,col,1,1) === 2) {
            return true;
        }
        if(this.checkAdjacent(row,col,-1,-1) + this.checkAdjacent(row,col,1,1) > 3){
            return true;
        }
        this.winnerWinner();
        console.log("winner winner")
    };

//check board if piece placed and where it is and returns.
    this.checkCell = function (row, col) {
        if (this.gameBoard[row][col] !== undefined) {
            return this.gameBoard[row][col];
        }


    };

//check adjacent tile not sure how if needed
    this.checkAdjacent = function(row,col,rowchg,colchg){

        };







    this.winnerWinner = function() {

        //check for this
        if (this.checkHorizontal) {
            $("#stats").text("Player " + this.playerTurn + "Win");

        }
        if (this.checkVertical) {
            $("#stats").text("Player " + this.playerTurn + "Win");

        }


        else if (this.turnNumber === 42) {

            if (this.checkDownRight) {
                $("#stats").text("Player " + this.playerTurn + "Win");
            }
            if (this.checkUpRight) {
                $("#stats").text("Player " + this.playerTurn + "Win");
            }
            else if (this.turnNumber === 42) {

                $("#stats").text("Game is a tie play again.");
                // game is a tie
                this.playing = false;
            } else {
                return false;
            }
        }

    }



