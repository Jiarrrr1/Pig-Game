        const score0 = document.querySelector('#score--0');
        const score1 = document.querySelector('#score--1');
        const current0 = document.querySelector('#current--0');
        const current1 = document.querySelector('#current--1');
        const dice = document.querySelector('.dice');
        const startNewGame = document.querySelector('.btn--new');
        const gameReset = document.querySelector('.module-button');
        const rollBtn = document.querySelector('.btn--roll');
        const holdBtn = document.querySelector('.btn--hold');
        const winnerIndicator = document.querySelector('.module-indicator');
        const indicator = document.querySelector('.indicator');
        const module = document.querySelector('.module');
        const gameUI = document.querySelector('.game-ui');

        const player0UIturn = document.querySelector('.player--0');
        const player1UIturn = document.querySelector('.player--1');


        let scores = [0, 0];
        let currentScore = 0;
        let activePlayer = 0; // 0 for Player 1, 1 for Player 2

        function switchPlayer() {
            activePlayer = 1 - activePlayer;
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            playerUI()
            indicator.textContent = `Player ${activePlayer + 1}'s turn`;
        }

        function rollDice() {
            const diceValue = Math.floor(Math.random() * 6) + 1;
            randomDice(diceValue)           

            console.log(diceValue)
            if (diceValue !== 1) {
                currentScore += diceValue;
                document.getElementById(`current--${activePlayer}`).textContent = currentScore;

            } else {
                switchPlayer();
            }
        }

        function hold() {
            scores[activePlayer] += currentScore;
            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

            if (scores[activePlayer] >= 100) {
                
                rollBtn.disabled = true;
                holdBtn.disabled = true;
                winnerUI()
            } else {
                switchPlayer();
            }
        }

        function newGame() {
            scores = [0, 0];
            currentScore = 0;
            activePlayer = 0;

            score0.textContent = 0;
            score1.textContent = 0;
            current0.textContent = 0;
            current1.textContent = 0;

            indicator.textContent = 'Player 1\'s turn';
            rollBtn.disabled = false;
            holdBtn.disabled = false;
           
        }

       

        function randomDice(diceValue) {
            dice.classList.remove('hidden')
            if (diceValue == 1) {
                dice.classList.add('one-point')
                dice.classList.remove('two-points')
                dice.classList.remove('three-points')
                dice.classList.remove('four-points')
                dice.classList.remove('five-points')
                dice.classList.remove('six-points')
            }
        
            else if (diceValue == 2) {
                dice.classList.add('two-points')
                dice.classList.remove('one-points')
                dice.classList.remove('three-points')
                dice.classList.remove('four-points')
                dice.classList.remove('five-points')
                dice.classList.remove('six-points')
            }
        
            else if (diceValue == 3) {
                dice.classList.add('three-points')
                dice.classList.remove('two-points')
                dice.classList.remove('one-points')
                dice.classList.remove('four-points')
                dice.classList.remove('five-points')
                dice.classList.remove('six-points')
            }
        
            else if (diceValue == 4) {
                dice.classList.add('four-points')
                dice.classList.remove('two-points')
                dice.classList.remove('three-points')
                dice.classList.remove('one-points')
                dice.classList.remove('five-points')
                dice.classList.remove('six-points')
            }
        
            else if (diceValue == 5) {
                dice.classList.add('five-points')
                dice.classList.remove('two-points')
                dice.classList.remove('three-points')
                dice.classList.remove('four-points')
                dice.classList.remove('one-points')
                dice.classList.remove('six-points')
            }
        
            else if (diceValue == 6) {
                dice.classList.add('six-points')
                dice.classList.remove('two-points')
                dice.classList.remove('three-points')
                dice.classList.remove('four-points')
                dice.classList.remove('five-points')
                dice.classList.remove('one-points')
        }
        
        
        }

        function playerUI() {
            if (activePlayer == 1 ) {
                player1UIturn.classList.add('player--active')
                player0UIturn.classList.remove('player--active')
                current0.textContent = '0'
            }

            else {
                player0UIturn.classList.add('player--active')
                player1UIturn.classList.remove('player--active')
                current1.textContent = '0'
            }
        }

        function winnerUI() {
            module.classList.remove('hidden')
            gameUI.classList.add('wrap')
            winnerIndicator.textContent = `Player ${activePlayer + 1} wins!`;
            gameReset.addEventListener('click', function() {
                newGame()
                module.classList.add('hidden')
                gameUI.classList.remove('wrap')
                dice.classList.add('hidden')

            })
            
        }

        

        rollBtn.addEventListener('click', rollDice);
        holdBtn.addEventListener('click', hold);
        startNewGame.addEventListener('click', newGame);