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
    $(".cell0").click(chipCreate0);
    $(".cell1").click(chipCreate1);
    $(".cell2").click(chipCreate2);
    $(".cell3").click(chipCreate3);
    $(".cell4").click(chipCreate4);
    $(".cell5").click(chipCreate5);
}

function GameBoard() {
    this.init = function () {
        this.generateBoard();
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
//dom create your falling chip element with appropriate class
//get the position of the row that was clicked

//place it at the top position of 1 chip above the row
//append new chip to column in question
//determine height of chip final resting position
//use animate function to move chip to new position
//find out how far down to animate chip
// $(this).parent().append(clone);
//
 function togglePlayer() {
    currentPlayer = 1 - currentPlayer;
}


    function chipCreate0() {
        var dropLevel = this.childElementCount;
        if(dropLevel >= 7){
            return;
        }
        var dropPositions = ['81.6%','68%','54.2%','40.4%','26.6%','12.9%'];
        var chip = $('<div>', {
            class: 'chip',
            class:'player' + currentPlayer
        });
        $(".cell0").append(chip)
        $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
        gameBoard[0].push(currentPlayer);
        togglePlayer();
    }

    function chipCreate1() {
        var dropLevel = this.childElementCount;
        if(dropLevel >= 7){
            return;
        }
        var dropPositions = ['81.6%','68%','54.2%','40.4%','26.6%','12.9%'];
        var chip = $('<div>', {
            class: 'chip',
            class:'player' + currentPlayer
        });
        $(".cell1").append(chip)
        $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
        gameBoard[1].push(currentPlayer);
        togglePlayer();
    }

    function chipCreate2() {
        var dropLevel = this.childElementCount;
        if(dropLevel >= 7){
            return;
        }
        var dropPositions = ['81.6%','68%','54.2%','40.4%','26.6%','12.9%'];
        var dropLevel = this.childElementCount;
        var chip = $('<div>', {
            class: 'chip',
            class:'player' + currentPlayer
        });
        $(".cell2").append(chip);
        $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
        gameBoard[2].push(currentPlayer);
        togglePlayer();
    }

    function chipCreate3() {
        var dropLevel = this.childElementCount;
            if(dropLevel >= 7){
            return;
            }
        var dropPositions = ['81.6%','68%','54.2%','40.4%','26.6%','12.9%'];
        var chip = $('<div>', {
            class: 'chip',
            class:'player' + currentPlayer
        });
        $(".cell3").append(chip);
        $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
        gameBoard[3].push(currentPlayer);
        togglePlayer();
    }
    function chipCreate4() {
        var dropLevel = this.childElementCount;
        if(dropLevel >= 7){
            return;
        }
        var dropPositions = ['81.6%','68%','54.2%','40.4%','26.6%','12.9%'];
        var chip = $('<div>', {
            class: 'chip',
            class:'player' + currentPlayer
        });
        $(".cell4").append(chip);
        $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
        gameBoard[4].push(currentPlayer);
        togglePlayer();
    }

    function chipCreate5() {
        var dropLevel = this.childElementCount;
        if(dropLevel >= 7){
            return;
        }
        var dropPositions = ['81.6%','68%','54.2%','40.4%','26.6%','12.9%'];
        var chip = $('<div>', {
            class: 'chip',
            class:'player' + currentPlayer
        });
        $(".cell5").append(chip);
        $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
        gameBoard[5].push(currentPlayer);
        togglePlayer();
    }