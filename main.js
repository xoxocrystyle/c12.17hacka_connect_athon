
$(document).ready(initializeGame);
var game = null;

function initializeGame() {
    game = new GameBoard();
    game.init();
    ///Test//
    $("div[col=0]").click(function () {
        console.log('clicked');
        var chip = $('<div>', {
            class: 'chip'
        });
        $(".chipContainer1").append(chip);
        var col = $("div[col=0]");
        var colPosition = col.position();
        console.log(( "left: " + colPosition.left + ", top: " + colPosition.top ));

        $(".chip").animate({'top':'500px'}, 2000);
    });
    $("div[col=1]").click(function () {
        console.log('clicked');
        var chip = $('<div>', {
            class: 'chip'
        });
        $(".chipContainer2").append(chip);
        var col = $("div[col=1]");
        var colPosition = col.position();
        console.log(( "left: " + colPosition.left + ", top: " + colPosition.top ));

        $(".chip").animate({'top':'500px'}, 2000);
    });
        //dom create your falling chip element with appropriate class
        //get the position of the column that was clicked

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
    this.playerTurn = 1;
    this.gameBoard = [];
    this.init = function () {
        this.generateBoard();
    };

    this.generateBoard = function () {
        var chipRow = $('<div>', {
            class: 'chipRow'
        });
        $('#container').append(chipRow);

        for (var chip1 = 1; chip1 < 7; chip1++) {
            var $chipcontainer = $('<div>', {
                class: 'chipContainer' + chip1,
            });
            chipRow.append($chipcontainer);

        }


        for (var col = 0; col < 7; col++) {
            this.gameBoard[col] = [];
            for (var cell = 0; cell < 6; cell++) {
                this.gameBoard[col][cell] = $("<div>").addClass("cell").addClass("empty").attr({
                    "col": col,
                    "row": cell
                });
                // this.gameBoard[col][cell].appendTo("#container");
                this.gameBoard[col][cell].appendTo("#container");
            }

        }
    }

    // Switch player 1 to player 2 after dropping chip
    // turn numbers equal to 42

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

//check board if piece placed and where it is and returns.
    this.checkCell = function (row, col) {
        if (this.gameBoard[row][col] !== undefined) {
            return this.gameBoard[row][col];
        }


    };
//check adjacent tile not sure how to use
    this.checkAdjacent = function (row, col, rowchg, colchg) {

    };


    this.winnerWinner = function () {
        //check for this
        if (this.checkHorizontal) {
            $("#stats").text("Player " + this.playerTurn + "Win");

        }
        if (this.checkVertical) {
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



