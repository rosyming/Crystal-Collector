// Creating global variables to hold wins, losses, total guesses
var wins = 0;
var losses = 0;
var totalGuess = 0;
var randomNum = 0;
 
// Inserting numbers to DOM
$('#numWins-text').text('Wins: ' + wins);
$('#numLoss-text').text('Losses: ' + losses);

// Create a game reset function
function gameStart () {
    randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $('#current-num').text(randomNum);
    console.log(randomNum);

    var crystal1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $('#Crystal1').attr('crystalValue1', crystal1);

    var crystal2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $('#Crystal2').attr('crystalValue2', crystal2);

    var crystal3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $('#Crystal3').attr('crystalValue3', crystal3);

    var crystal4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $('#Crystal4').attr('crystalValue4', crystal4);

    totalGuess = 0;
    $('#currentGuess-text').text('Current Guess: ' + totalGuess);
}

// Create a function to create click events for crystals, randomly generating a number for each crystal, and adding value to Total Guess
function gamePlay () {
    $('#Crystal1').on('click', function() {
        var crystal1Value = ($(this).attr('crystalValue1'));
        crystal1Value = parseInt(crystal1Value);
        console.log(crystal1Value);
        totalGuess += crystal1Value;
        $('#currentGuess-text').text('Current Guess: ' + totalGuess);
        console.log(totalGuess);
        gameWin();
    })

    $('#Crystal2').on('click', function() {
        var crystal2Value = ($(this).attr('crystalValue2'));
        crystal2Value = parseInt(crystal2Value);
        console.log(crystal2Value);
        totalGuess += crystal2Value;
        $('#currentGuess-text').text('Current Guess: ' + totalGuess);
        console.log(totalGuess);
        gameWin ();
    })

    $('#Crystal3').on('click', function() {
        var crystal3Value = ($(this).attr('crystalValue3'));
        crystal3Value = parseInt(crystal3Value);
        console.log(crystal3Value);
        totalGuess += crystal3Value;
        $('#currentGuess-text').text('Current Guess: ' + totalGuess);
        console.log(totalGuess);
        gameWin ();
    })

    $('#Crystal4').on('click', function() {
        var crystal4Value = ($(this).attr('crystalValue4'));
        crystal4Value = parseInt(crystal4Value);
        console.log(crystal4Value);
        totalGuess += crystal4Value;
        $('#currentGuess-text').text('Current Guess: ' + totalGuess);
        console.log(totalGuess);
        gameWin ();
    })
}

// Create a function to evaluate game wins, losses, and resets the game
function gameWin () {
    if (totalGuess === randomNum && totalGuess > 0) {
        wins++;
        $('#numWins-text').text('Wins: ' + wins);  
        gameStart();
    }
    else if (totalGuess > randomNum) {
        losses++;
        $('#numLoss-text').text('Losses: ' + losses);
        gameStart();
    }
}

// Loading game
gameStart ();
gamePlay ();

    







