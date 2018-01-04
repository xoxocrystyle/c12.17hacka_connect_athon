
$(document).ready(initializeGame);
var game = null;
var currentPlayer = 0;
var gameBoard = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

function initializeGame() {
    game = new GameBoard();
    game.init();
    ///Test//
    $(".cell0").click(chipCreate0);
    $(".cell1").click(chipCreate1);
    $(".cell2").click(chipCreate2);
    $(".cell3").click(chipCreate3);
    $(".cell4").click(chipCreate4);
    $(".cell5").click(chipCreate5);

        //dom create your falling chip element with appropriate class
        //get the position of the row that was clicked

        //place it at the top position of 1 chip above the column
        //append new chip to column in question
        //determine height of chip final resting position
        //use animate function to move chip to new position
        //find out how far down to animate chip
        // $(this).parent().append(clone);

}
///////////////////////////Board Creation - start///////////////////////////////////////////
function GameBoard() {
    this.turnNumber = 1;
    this.playing = true;
    this.init = function () {
        this.generateBoard();
    };

    this.togglePlayer = function () {
        this.currentPlayer = 1 - this.currentPlayer;
    };

    this.generateBoard = function () {
        var chipRow = $('<div>', {
            class: 'chipRow'
        });
        $('#container').append(chipRow);

        for (var col = 0; col < 6; col++) {
            var colNum = $('<div>', {
                class: 'cell'+col,
            });
            colNum.appendTo("#container");

        }

    }
       
}

/////////////////////Board Creation - end////////////////////////

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
//
    function chipCreate0() {
        // var targetPosition = $(this).position();
        // console.log(targetPosition);
        var dropPositions = ['81.6%','68%','54.2%','40.4%','26.6%','12.9%'];
        var dropLevel = this.childElementCount;
        var chip = $('<div>', {
            class: 'chip'
        });
        $(".cell0").append(chip);
        $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
        gameBoard[0].push(0);

        // $(this).parent().append(clone);

    }

    function chipCreate1() {
        var dropPositions = ['81.6%','68%','54.2%','40.4%','26.6%','12.9%'];
        var dropLevel = this.childElementCount;
        var chip = $('<div>', {
        class: 'chip'
        });
        $(".cell1").append(chip);
        $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
    }

    function chipCreate2() {
        var dropPositions = ['81.6%','68%','54.2%','40.4%','26.6%','12.9%'];
        var dropLevel = this.childElementCount;
        var chip = $('<div>', {
        class: 'chip'
        });
        $(".cell2").append(chip);
        $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
    }

    function chipCreate3() {

        var dropPositions = ['81.6%','68%','54.2%','40.4%','26.6%','12.9%'];
        var dropLevel = this.childElementCount;
        var chip = $('<div>', {
        class: 'chip'
        });
        $(".cell3").append(chip);
        $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
}

function chipCreate4() {

    var dropPositions = ['81.6%','68%','54.2%','40.4%','26.6%','12.9%'];
    var dropLevel = this.childElementCount;
    var chip = $('<div>', {
        class: 'chip'
    });
    $(".cell4").append(chip);
    $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
}

function chipCreate5() {
    var dropPositions = ['81.6%','68%','54.2%','40.4%','26.6%','12.9%'];
    var dropLevel = this.childElementCount;
    var chip = $('<div>', {
        class: 'chip'
    });
    $(".cell5").append(chip);
    $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
}

function chipCreate6() {
    var dropPositions = ['81.6%','68%','54.2%','40.4%','26.6%','12.9%'];
    var dropLevel = this.childElementCount;
    var chip = $('<div>', {
        class: 'chip'
    });
    $(".cell6").append(chip);
    $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
}



