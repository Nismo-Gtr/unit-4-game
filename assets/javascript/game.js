$(document).ready(function (){

var randomNumber =  Math.floor(Math.random() * 102) + 19;
var redJewel = Math.floor(Math.random() * 12) + 1;
var blueJewel = Math.floor(Math.random() * 12) + 1;
var yellowJewel = Math.floor(Math.random() * 12) + 1;
var greenJewel = Math.floor(Math.random() * 12) + 1;
var userScore = 0;
var wins = 0;
var losses = 0;

// Send randomNumber to UI
$("#randomNumber").text(randomNumber);
// Populate wins and losses id's in UI
$("#wins").text(wins);
$("#losses").text(losses);

// Function to reset values when game ends
function resetGame() {
    randomNumber =  Math.floor(Math.random() * 102) + 19;
    $("#randomNumber").text(randomNumber);
    redJewel = Math.floor(Math.random() * 12) + 1;
    blueJewel = Math.floor(Math.random() * 12) + 1;
    yellowJewel = Math.floor(Math.random() * 12) + 1;
    greenJewel = Math.floor(Math.random() * 12) + 1;
    userScore = 0;
    $("#userScore").text(userScore);
}

// Create function for updating wins
function winner() {
    wins++;
    $("#wins").text(wins);
    resetGame();
}
// Create function for updating losses
function lostGame() {
    losses++;
    $("#losses").text(losses);
    resetGame();
}


// Buttons when clicked need to add a random value to userScore
// If statement for winning game when userScore === randomNumber
// Else statement for losing when userScore > randomNumber
   $("#redJewel").click(function (){
        userScore = userScore + redJewel;
        $("#userScore").text(userScore);
        if (userScore === randomNumber) {
            winner();
        } else if (userScore > randomNumber) {
            lostGame();
        }
    })
    
    $("#blueJewel").click(function (){
        userScore = userScore + blueJewel;
        $("#userScore").text(userScore);
        if (userScore === randomNumber) {
            winner();
        } else if (userScore > randomNumber) {
            lostGame();
        }
    })

    $("#yellowJewel").click(function (){
        userScore = userScore + yellowJewel;
        $("#userScore").text(userScore);
        if (userScore === randomNumber) {
            winner();
        } else if (userScore > randomNumber) {
            lostGame();
        }
    })

    $("#greenJewel").click(function (){
        userScore = userScore + greenJewel;
        $("#userScore").text(userScore);
        if (userScore === randomNumber) {
            winner();
        } else if (userScore > randomNumber) {
            lostGame();
        }
    })
    
})











