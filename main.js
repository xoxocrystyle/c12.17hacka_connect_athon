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

    //intro
    $("#intro").hide().fadeIn(100);
    $("#play").on("click", function (e) {
        e.preventDefault();
        $("#intro").fadeOut(1000);
    });
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
        checkHorizon(gameBoard);
        checkVertical(gameBoard);
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
        checkHorizon(gameBoard);
        checkVertical(gameBoard);
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
        checkHorizon(gameBoard);
        checkVertical(gameBoard);
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
        checkHorizon(gameBoard);
        checkVertical(gameBoard);
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
        checkHorizon(gameBoard);
        checkVertical(gameBoard);
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
        checkHorizon(gameBoard);
        checkVertical(gameBoard);
        togglePlayer();
    }



    function checkHorizon(arr) {
        var counter = 1;
        for (var horizontalPiece = 0; horizontalPiece < arr.length - 1; horizontalPiece++) {
            if (arr[horizontalPiece][0] === arr[horizontalPiece + 1][0]) {
                if (arr[horizontalPiece + 1][0] == undefined) {
                    return
                }
                console.log("I have found a match");
                counter++;
                if (counter === 4) {
                    console.log("winner");
                    // gameWon();
                }

            }

        }
    }


    function checkVertical(arr) {
        var counter = 1;
        for (var verticalPiece = 0; verticalPiece < arr[1].length; verticalPiece++) {
            if (arr[1][verticalPiece] === arr[1][verticalPiece + 1]) {
                if (arr[verticalPiece + 1][0] == undefined) {
                    return
                }
                console.log("I have found a match");
                counter++
                if (counter === 4) {
                    console.log("winner");
                    // gameWon();
                }
            }
        }
    }
    // function checkUpRight(arr) {
    //     var counter = 1;
    //     for (var col = 0; col < arr.length;) {
    //         for (var row = 0; row < arr[col].length;) {
    //             if (arr[col][row] == arr[col + 1][row + 1]) {
    //                 counter++;
    //                 col++;
    //                 row++;
    //             }
    //         }
    //     }
    //
    //
    // }
    //
    //
    // function checkUpLeft(arr) {
    //     var counter = 1;
    //     for (var col = 0; col < arr.length;) {
    //         for (var row = 0; row < arr[col].length;) {
    //             if (arr[col][row] == arr[col - 1][row + 1]) {
    //                 counter++;
    //                 col++;
    //                 row++;
    //             }
    //         }
    //     }
    //
    //
    // }

// console.log(gameBoard);
// console.log(checkHorizon(gameBoard));
// console.log(checkVertical(gameBoard));

// function checkRightUp(arr){
//   var counter =1;
//   for(var col=0; col<arr.length; col++){
//     for(var row=0; row<arr[col]; row++ ){
//       if(arr[col][row] === arr[col + 1][row +1]){
//           console.log("I have a match");
//         counter++;
//       }
//     }
//    }
// }
// console.log(gameBoard);
// console.log(checkRightUp(gameBoard));