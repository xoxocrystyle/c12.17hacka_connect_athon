$(document).ready(initializeGame);
var game = null;
var currentPlayer = 0;
//gameBoard[0].push[0]
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
    $(".cell5").click(chipCreate5)
    $(".cell6").click(chipCreate6);
    togglePlayerHighlight();
    //intro
    $("#intro").fadeIn(100);
    $("#play").on("click", function (e) {
        e.preventDefault();
        $("#intro").fadeOut(1000);
        // $("#character").show().fadeIn(1000);
    });


    $("#reset").on("click", function(){
        $("#container div").empty();
        gameBoard = [
            [],
            [],
            [],
            [],
            [],
            []
        ];
    });

    $("#my_audio").get(0).play();


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

        for (var col = 0; col < 7; col++) {
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
    togglePlayerHighlight();

    // $("#player1").toggleClass("playerColor");
    // $("#player2").toggleClass("playerColor2");
}

function togglePlayerHighlight() {
    if(currentPlayer===0){
        $("#player1").addClass("playerColor");
        $("#player2").removeClass("playerColor2")
    } else if (currentPlayer===1) {
        $("#player2").addClass("playerColor2");
        $("#player1").removeClass("playerColor")
    }

}

    function chipCreate0() {
        var dropLevel = this.childElementCount;
        if(dropLevel >= 6){
            return;
        }
        var dropPositions = ['81.6%','66%','50.2%','34.4%','18.6%','2.9%'];
        var chip = $('<div>', {
            class: 'chip',
            class:'player' + currentPlayer
        });
        $(".cell0").append(chip)
        $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
        gameBoard[0].push(currentPlayer);
        togglePlayer();
        checkHorizon(gameBoard);
        // checkVertical(gameBoard);
        // checkRightUp(gameBoard);
        // checkUpLeft(gameBoard);
    }

    function chipCreate1() {
        var dropLevel = this.childElementCount;
        if(dropLevel >= 6){
            return;
        }
        var dropPositions = ['81.6%','66%','50.2%','34.4%','18.6%','2.9%'];
        var chip = $('<div>', {
            class: 'chip',
            class:'player' + currentPlayer
        });
        $(".cell1").append(chip)
        $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
        gameBoard[1].push(currentPlayer);
        togglePlayer();
        checkHorizon(gameBoard);
        // checkVertical(gameBoard);
        // checkRightUp(gameBoard);
        // checkUpLeft(gameBoard);

    }

    function chipCreate2() {
        var dropLevel = this.childElementCount;
        if(dropLevel >= 6){
            return;
        }
        var dropPositions = ['81.6%','66%','50.2%','34.4%','18.6%','2.9%'];
        var dropLevel = this.childElementCount;
        var chip = $('<div>', {
            class: 'chip',
            class:'player' + currentPlayer
        });
        $(".cell2").append(chip);
        $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
        gameBoard[2].push(currentPlayer);
        togglePlayer();
        checkHorizon(gameBoard);
        // checkVertical(gameBoard);
        // checkRightUp(gameBoard);
        // checkUpLeft(gameBoard);

    }

    function chipCreate3() {
        var dropLevel = this.childElementCount;
            if(dropLevel >= 6){
            return;
            }
        var dropPositions = ['81.6%','66%','50.2%','34.4%','18.6%','2.9%'];
        var chip = $('<div>', {
            class: 'chip',
            class:'player' + currentPlayer
        });
        $(".cell3").append(chip);
        $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
        gameBoard[3].push(currentPlayer);
        togglePlayer();
        checkHorizon(gameBoard);
        // checkVertical(gameBoard);
        // checkRightUp(gameBoard);
        // checkUpLeft(gameBoard);

    }
    function chipCreate4() {
        var dropLevel = this.childElementCount;
        if(dropLevel >= 6){
            return;
        }
        var dropPositions = ['81.6%','66%','50.2%','34.4%','18.6%','2.9%'];
        var chip = $('<div>', {
            class: 'chip',
            class:'player' + currentPlayer
        });
        $(".cell4").append(chip);
        $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
        gameBoard[4].push(currentPlayer);
        togglePlayer();
        checkHorizon(gameBoard);
        // checkVertical(gameBoard);
        // checkRightUp(gameBoard);
        // checkUpLeft(gameBoard);

    }

    function chipCreate5() {
        var dropLevel = this.childElementCount;
        if(dropLevel >= 6){
            return;
        }
        var dropPositions = ['81.6%','66%','50.2%','34.4%','18.6%','2.9%'];
        var chip = $('<div>', {
            class: 'chip',
            class:'player' + currentPlayer
        });
        $(".cell5").append(chip);
        $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
        gameBoard[5].push(currentPlayer);
        togglePlayer();
        checkHorizon(gameBoard);
        // checkVertical(gameBoard);
        // checkRightUp(gameBoard);
        // checkUpLeft(gameBoard);

    }

function chipCreate6() {
    var dropLevel = this.childElementCount;
    if(dropLevel >= 6){
        return;
    }
    console.log(dropLevel);
    var dropPositions = ['81.6%','66%','50.2%','34.4%','18.6%','2.9%'];

    var chip = $('<div>', {
        class: 'chip',
        class:'player' + currentPlayer
    });
    $(".cell6").append(chip);
    $(chip).animate({'top': dropPositions[dropLevel]}, 2000);
    gameBoard[6].push(currentPlayer);
    var start = gameBoard[6][gameBoard[6].length - 1];
    console.log(start);
    togglePlayer();
    checkHorizon(gameBoard);
    // checkVertical(gameBoard);
    // checkRightUp(gameBoard);
    // checkUpLeft(gameBoard);

}

function checkHorizon(arr) {
    var counter = 1;
    for(var x = 0; x < arr.length - 1; x++){
        counter = 1;
        for(var i = 0; i < arr.length -1; i++){
            if(arr[i +1][x] !== undefined){
                if(arr[i][x] === arr[i +1][x]){
                    counter++;
                    if(counter === 4){
                        console.log("winner is at Row" + x );
                        counter = 1;
                    }
                }else{
                    counter= 1;
                }
            }
        }
    }
}

///////////VERTICAL IS WORKING PROPERLY///////////////////////////////////
    function checkVertical(arr) {
        var counter = 1;
        for(var x = 0; x < arr.length; x++) {
            counter = 1; ///counter reset every time
            for (var verticalPiece = 0; verticalPiece < arr[x].length - 1; verticalPiece++) {
                if (arr[x][verticalPiece] === arr[x][verticalPiece + 1]) {
                    console.log("Vertical: "+ x +" I have found a match");
                    counter++
                    if (counter === 4) {
                        console.log("winner is at Row " + x);
                        $("#you-won").show("slow").addClass('slide', 3000)
                        gameWon();
                    }
                }
            }
        }
    }
//////////////////////////CONSOLE ERROR CANT READ PROPERTY OF UNDEFINED//////////////////////
    function checkUpLeft(arr) {
        var counter = 1;
        for (var col = 0; col < arr.length;) {
            for (var row = 0; row < arr[col].length;) {
                if (arr[col][row] == arr[col - 1][row + 1]) {
                    counter++;
                    col++;
                    row++;
                }
            }
        }


    }

///////////THIS RUNS BUT DOES NOT FIND A MATCH///////////////////////////////////

function checkRightUp(arr){
  var counter =1;
  for(var col=0; col<arr.length; col++){
    for(var row=0; row<arr[col]; row++ ){
      if(arr[col][row] === arr[col + 1][row +1]){
          console.log("RightUp: I have a match");
        counter++;
      }
    }
   }
}
////////////////INFINITE LOOP NEEDS TO BE FIXED//////////////////////
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
/////////////////////////////////////////////////////////////////////////