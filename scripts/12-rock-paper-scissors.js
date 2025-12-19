let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval( () => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
  },1000);  
    isAutoPlaying = true;
    } else {
      clearInterval(intervalId);
      isAutoPlaying = false;
    }
  }

  document.querySelector('.js-rock-button').addEventListener('click',() => {
    playGame('rock');
  })
  document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('paper');
  })
  document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('scissors');
  })

  document.querySelector('.js-reset-button').addEventListener('click', () => {
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.removeItem('score');
    updateScoreElement();
  })
  document.querySelector('.js-auto-play-button').addEventListener('click', () => {
    autoPlay();
  })
  document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
      playGame('rock');
    } else if (event.key === 'p') {
      playGame('paper');
    } else if (event.key=== 's') {
      playGame('scissors');
    }
  });
      function playGame(playerMove){
        randomNumber = Math.random();
        const computerMove = pickComputerMove();

        result = '';
        if (playerMove === 'scissors'){
          if (computerMove === 'scissors'){
            result = 'Tie.';
          } else if (computerMove === 'rock'){
            result = 'You lose.';
          } else if (computerMove === 'paper'){
            result = 'You win!';
          }
        } else if (playerMove === 'paper'){
            if (computerMove === 'paper'){
            result = 'Tie.';
          } else if (computerMove === 'scissors'){
            result = 'You lose.';           
          } else if (computerMove === 'rock'){
            result = 'You win!';
          }
        } else if (playerMove === 'rock'){
          if (computerMove === 'rock'){
            result = 'Tie.';
          } else if (computerMove === 'paper'){
            result = 'You lose.';
          } else if (computerMove === 'scissors'){
            result = 'You win!';}
        }
        if (result === 'You win!'){
          score.win += 1
        } else if (result === 'You lose.') {
          score.lose += 1
        } else if (result === 'Tie.') {
          score.tie += 1
        }

        localStorage.setItem('score',JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result')
          .innerHTML = result;
        document.querySelector('.js-moves').innerHTML =  `You
      <img src="images/${playerMove}-emoji.png" class="move-icon">
      <img src="images/${computerMove}-emoji.png" class="move-icon">
      Computer`;
        }

      function pickComputerMove() {
        let computerMove = ''; 
        randomNumber = Math.random();
        computerMove = '';
        if (randomNumber < 1/3) {
       computerMove = 'rock';
      } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';  
      } else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
      }
       return computerMove; 
      }
      let result = '';
      let randomNumber = Math.random();

      let score = JSON.parse(localStorage.getItem('score')) || {
        win: 0,
        lose: 0,
        tie: 0,
      };
      function updateScoreElement() {
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.win}. Loses: ${score.lose}. Ties: ${score.tie}.`;
      }
      updateScoreElement();
      /*
      if (score === null) {
        score = {
          win: 0,
          lose: 0,
          tie: 0,
        }
      }
        */

