/* This Project is a game that sets a target number. 
    User makes a wild guess and Computer also picks a random number (all from 0 to 9)
    the player whose number is closer to the target number wins

    Enjoy!
                                                        -By ydelvis

    #AmaliTechTraining   #Codecademy 
*/


let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){                          // Traget number generated randomly
  return Math.floor(Math.random()*10)
}

function compareGuesses(human, computer, target){       // determine winner
   
    if (human > 9 || human < 0){      // alert user to enter number in the valid range and declare computer winner for the round
        alert('Number out of range! Guess fron 0 to 9')
        return  false;
      }
  if ((Math.abs(target - human) < Math.abs(target - computer)) || (Math.abs(target - human) === Math.abs(target - computer))) {
    return true;
  } else {
    return false;
  }
}


function updateScore(winner){         // score update after each round
  winner === 'human' ? humanScore +=1 : computerScore +=1 ;
}

function advanceRound(){         // increments rounds
  currentRoundNumber +=1;
}

// End of Code