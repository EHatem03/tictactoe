



let currentPlayer = "O";
let turns = 0;
let gameEnd = true

function performLogic(buttonId,tileId){
    
console.log (turns = turns + 1)    
$(buttonId).hide();
$(tileId).text(currentPlayer);
let tile1= $("#tile1").text();
let tile2= $("#tile2").text();
let tile3= $("#tile3").text();
if(tile1 == tile2 && tile2 == tile3){
 $("#winner").html("<h1>Congrats Player "+currentPlayer+"</h1>")

};
if (currentPlayer=== "O") {
    currentPlayer = "X";  
} else {
    currentPlayer = "O";
}


}


$("#button1").click(function () {
    performLogic("#button1", "#tile1");

});

$("#button2").click(function () {
    performLogic("#button2", "#tile2");
});

$("#button3").click(function () {
    performLogic("#button3", "#tile3");
});

$("#button4").click(function () {
    performLogic("#button4", "#tile4");
});

$("#button5").click(function () {
    performLogic("#button5", "#tile5");
});

$("#button6").click(function () {
    performLogic("#button6", "#tile6");
});

$("#button7").click(function () {
    performLogic("#button7", "#tile7");
});

$("#button8").click(function () {
    performLogic("#button8", "#tile8");
});

$("#button9").click(function () {
    performLogic("#button9", "#tile9");
});


