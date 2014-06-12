var firstWord = ['Sup', 'Whaddup'];
var secondWord = ['G', 'homeslice', 'homeskillet', 'homie', 'brah', 'bro'];
var firstChoice = firstWord[Math.floor(firstWord.length * Math.random())];
var secondChoice = secondWord[Math.floor(secondWord.length * Math.random())];
$(document).ready(function() {
  $('.greeting').text(firstChoice + secondChoice);
});
