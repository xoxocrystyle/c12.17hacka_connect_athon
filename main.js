$(document).ready(initializeGame);
var game = null;
var currentPlayer = 0;
var col;
var row;
var totalCount = 0;
var gameBoard = [[], [], [], [], [], [], []];

function initializeGame() {
    game = new GameBoard();
    game.init();
    $("#container").hide();
    $(".stats").hide();
    togglePlayerHighlight();
    eventHandlers();
    restart();
}

function eventHandlers(){
    $(".cell0").click(chipCreate);
    $(".cell1").click(chipCreate);
    $(".cell2").click(chipCreate);
    $(".cell3").click(chipCreate);
    $(".cell4").click(chipCreate);
    $(".cell5").click(chipCreate);
    $(".cell6").click(chipCreate);
    $("#play").on("mouseover", startGameIntro);
    $(".playerchoice1").on("click", playerChoice1);
    $(".playerchoice2").on("click", playerChoice2);
    $("#reset").on("click", restart);
}
/////Dom creation with jquery to create game area///////
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

function startGameIntro(e) {
    e.preventDefault();
    $("#intro").fadeOut(1000);
    $("#character1").show().fadeIn(1000);
}

function playerChoice1(){
    var Image1 = $(event.target).attr('src');
    var appendImg = '<img src="' + Image1 + '">';
    $("#mister").append(appendImg);
    $(this).addClass(".player0");
    $('#choose').text('Click to Choose player 1!');
    $('.playerchoice1').css('opacity', '0');
}

function playerChoice2(){
    var Image2 = $(event.target).attr('src');
    var appendImg = '<img src="' + Image2 + '">';
    $("#miss").append(appendImg);
    $(this).addClass(".player1");
    $('.playerchoice2').css('opacity', '0');
    $("#characters").hide();
    $("#container").fadeIn();
    $(".stats").fadeIn();
}

function restart(){
    $(".cell0").empty();
    $(".cell1").empty();
    $(".cell2").empty();
    $(".cell3").empty();
    $(".cell4").empty();
    $(".cell5").empty();
    $(".cell6").empty();
    $("#you-won").fadeOut();
    totalCount = 0;
    gameBoard = [[], [], [], [], [], [], []];

}

function togglePlayer() {
    currentPlayer = 1 - currentPlayer;
    togglePlayerHighlight();

    // $("#player1").toggleClass("playerColor");
    // $("#player2").toggleClass("playerColor2");
}
///highlights left player on their turn //////
function togglePlayerHighlight() {
    if(currentPlayer===0){
        $("#player1").addClass("playerColor");
        $("#player2").removeClass("playerColor2")
    } else if (currentPlayer===1) {
        $("#player2").addClass("playerColor2");
        $("#player1").removeClass("playerColor")
    }

}
//// o click function called to create game pieces and animates to correct position///
function chipCreate() {
    totalCount++;
    var dropPositions = ['81.6%','66%','50.2%','34.4%','18.6%','2.9%'];
    ////This will trigger Ghost to fall into random place in game//////
    if (totalCount === 10 || totalCount === 19 || totalCount === 30){
        var ghost = $('<div>', {
            class: 'ghost'
        });
        var ghostCol = [".cell0", ".cell1", ".cell2", ".cell3", ".cell4", ".cell5", ".cell6"];
        var randomCol = Math.ceil(Math.random() * 6);
        var randomColNum = ghostCol[randomCol];
        gameBoard[randomCol].push(4);
        dropLevel = randomCol;
        if(dropLevel >= 6){
            return;
        }
        var drop = gameBoard[dropLevel];
        $(randomColNum).append(ghost);
        $(ghost).animate({'top': dropPositions[drop.length-1]}, 1000);

    }else {
        ////normal player chip piece creation on column click///
        var dropLevel = this.childElementCount;
        console.log("clicked player: " + currentPlayer);
        row = dropLevel;
        var column = $(this).attr("class");
        columnNum = column;
        if(dropLevel >= 6){
            return;
        }
        var chip = $('<div>', {
            class: 'player'+ currentPlayer,
        });
        $("." + columnNum).append(chip);
        $(chip).animate({'top': dropPositions[dropLevel]}, 1000);
        ///Push to correct array position and get col variable to pass into check match functions
        if (column === 'cell0') {
            col = 0;
            gameBoard[0].push(currentPlayer);
        }
        if (column === 'cell1') {
            col = 1;
            gameBoard[1].push(currentPlayer);
        }
        if (column === 'cell2') {
            col = 2;
            gameBoard[2].push(currentPlayer);
        }
        if (column === 'cell3') {
            col = 3;
            gameBoard[3].push(currentPlayer);
        }
        if (column === 'cell4') {
            col = 4;
            gameBoard[4].push(currentPlayer);
        }
        if (column === 'cell5') {
            col = 5;
            gameBoard[5].push(currentPlayer);
        }
        if (column === 'cell6') {
            col = 6;
            gameBoard[6].push(currentPlayer);
        }
        togglePlayer();
        //check for player chip match functions
        checkHorizon(gameBoard);
        checkVertical(gameBoard);
        checkUpLeft(gameBoard);
        checkUpRight(gameBoard);
    }
}

//////////////////HORIZON MATCH CHECKS ////////////////////////////////
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
                        $("#you-won").show("slow").addClass('slide', 3000);
                        counter = 1;
                    }
                }else{
                    counter= 1;
                }
            }
        }
    }
}

///////////VERTICAL MATCH CHECKS///////////////////////////////////
    function checkVertical(arr) {
        var counter = 1;
        for(var x = 0; x < arr.length; x++) {
            counter = 1; ///counter reset every time
            for (var verticalPiece = 0; verticalPiece < arr[x].length - 1; verticalPiece++) {
                if (arr[x][verticalPiece] === arr[x][verticalPiece + 1]) {
                    counter++;
                    if (counter === 4) {
                        console.log("winner is at Col " + x);
                        $("#you-won").show("slow").addClass('slide', 3000);
                        counter = 1;
                    }
                }else{
                counter = 1;
                }
            }

        }
    }

///////////////////////////THIS CHECKS FOR MATCH DIAGONAL FROM BOTTOM UP TO RIGHT//////////////////////
function checkUpRight(arr) {
    var counter = 1;
    for (var x = 1; x < arr.length; x++) {
        if(col + x < 7 && row + x < 6) {
            if (arr[col][row] === arr[col + x][row + x]) {
                counter++;
                if (counter === 4) {
                    console.log('UpRight winner');
                    $("#you-won").show("slow").addClass('slide', 3000);
                    counter = 1;
                }
            }
        }
        if ((row - x > -1 && col - x > -1)) {
            if (arr[col][row] === arr[col - x][row - x]) {
                counter++;
                if (counter === 4) {
                    console.log('LeftUp winner');
                    $("#you-won").show("slow").addClass('slide', 3000);
                    counter = 1;
                }
            }
        }
            if (counter === 1) {
                return;
            }
        }
    }

///////////THIS CHECKS FOR MATCH DIAGONAL FROM BOTTOM UP TO LEFT /////////////////////////////////
function checkUpLeft(arr){
    var counter = 1;
    for (var x = 1; x < arr.length; x++) {
        if(row + x < 6 && col - x > -1) {
            if (arr[col][row] === arr[col - x][row + x]) {
                counter++;
                if (counter === 4) {
                    console.log('LeftUp winner');
                    $("#you-won").show("slow").addClass('slide', 3000);
                    counter = 1;
                }
            }
        }
        if ((row - x > -1 && col + x < 7)) {
            if (arr[col][row] === arr[col + x][row - x]) {
                counter++;
                if (counter === 4) {
                    console.log('LeftUp winner');
                    $("#you-won").show("slow").addClass('slide', 3000);
                    counter = 1;
                }
            }
        }
        if (counter === 1) {
            return;
        }
    }
}








