// Creating variables to hold wins, losses, total guesses
var wins = 0;
var losses = 0;
var totalGuess = 0;
var numberOptions = [1, 3, 10, 7];

// Generate Random Numbers
var min = 19;
var max = 120;
var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

// Inserting numbers to DOM
$('#current-num').text(randomNum);
$('#numWins-text').text('Wins: ' + wins);
$('#numLoss-text').text('Losses: ' + losses);
$('#currentGuess-text').text('Current Guess: ' + totalGuess)

for (var i = 0; i < numberOptions.length; i++) {
    var crystalImg = $('<img>');
    crystalImg.addClass('crystal-img');
    crystalImg.attr('src', 'assets/images/Crystal_1.png');
    crystalImg.attr('data-crystalValue', numberOptions[i]);
    $('#crystals').append(crystalImg);
}

// Each crystal image gets a data attribute equal to array values

crystalImg.attr('data-crystalValue', numberOptions[i]);

//Apply click event to crystals
$('.crystal-img').on('click', function() {
    var crystalValue = ($(this).attr('data-crystalValue'));
    crystalValue = parseInt(crystalValue);
    totalGuess += crystalValue;
    console.log(totalGuess);
    $('#currentGuess-text').text('Current Guess: ' + totalGuess);


    if (totalGuess === randomNum) {
        wins++;
        $('#numWins-text').text('Wins: ' + wins);
        totalGuess = 0;
        $('#currentGuess-text').text('Current Guess: ' + totalGuess);   
    }

    else if (totalGuess >= randomNum) {
        losses++;
        $('#numLoss-text').text('Losses: ' + losses);
        totalGuess = 0;    
        $('#currentGuess-text').text('Current Guess: ' + totalGuess);    
       
   }
    

}

//Need to have different pictures load with attributes
//Need to have random numbers reset when lose and win
//Need to have crystals have different randomly generated numbers
);

