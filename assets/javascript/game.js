
  //variables
      var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      var counter = 10;
      var wins = 0;
      var losses = 0;
      var guessesLeft = 10;
      
      
      //user guesses
      document.onkeyup = function() {
          var userguess = String.fromCharCode(event.keyCode).
            toLowerCase();

          //console.log(userguess);
          //computer guesses
          var computerGuess = options[Math.floor(Math.random() * options.length)];
          console.log(computerGuess);
            var answerArray = [];



            for (var i = 0; i == computerGuess; i++) {
              answerArray[i] = "";
            }


          //limits users to these letters. I know there is a better way but couldn't get them to work

          if(userguess== 'a' || userguess== 'b' || userguess== 'c' || userguess== 'd' || userguess== 'e' || userguess== 'f' || userguess== 'g' || userguess== 'h' || userguess== 'i' || userguess== 'j' || userguess== 'k' || userguess== 'l' || userguess== 'm' || userguess== 'n' || userguess== 'o' || userguess== 'p' || userguess== 'q' || userguess== 'r' || userguess== 's' || userguess== 't' || userguess== 'u' || userguess== 'v' || userguess== 'w' || userguess== 'x' || userguess== 'y' || userguess== 'z') {
            //alert("You've choosing correctly!");
          } else {
            alert("Please choose a letter");
          }

          if (counter < 10 && computerGuess) {
            counter++;
          }
            //guesse left
            if (userguess !== computerGuess) {
              guessesLeft--;            
              alert("guessesleft: " + guessesLeft);
            
          }
            //wins
            if (userguess == computerGuess) {
              wins++;
            alert("Wins: " + wins);
            }
            //losses
            else if (guessesLeft == 0) {
              losses++;
              alert(" losses: " + losses)
            }






}
      