// Create dictionary to map game options
var rpsMap = { 1: "rock", 2: "paper", 3: "scissors"};

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//function to get gameResult 
var getGameResult = function(playerOption) {
    var computerOption =  rpsMap[getRandomInt(1,3)];
    playerOption = playerOption.toLowerCase();
    
    var gameResult;
    
    if(computerOption === playerOption)
        gameResult = "It's a tie";
    else if((computerOption == "rock" && playerOption == "scissors") || (computerOption == "scissors" && playerOption == "paper") || (computerOption == "paper" && playerOption == "rock"))
        gameResult = "Computer wins!";
    else
        gameResult = "Player wins!";
    
    return gameResult;
};

//Play the game by passing the playerOption as parameter in to the playGame function, e.g. playGame("rock");
var playGame = function(playerOption) {
    for(var i = 0; i < 3; i++) {
        setTimeout(function() {console.log(i +"!");}, 1000);
    };
    gameResult = getGameResult(playerOption);
        
    console.log(gameResult);
};
    
