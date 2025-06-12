 
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
