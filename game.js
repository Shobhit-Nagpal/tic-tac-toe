let currentSymbol = 'X';
const tiles = document.querySelectorAll('.gametiles');
let numberOfTurns = 0;
const restartBtn = document.querySelector('#restartBtn');
const declareDiv = document.getElementById('declare');

//Module to check gameboard
const gameBoard = (() => {
    //Use array to fill Xs and Os where indices will act as positions (ids of tiles)
    let gameboard = [];
    return {gameboard};
})();

//Module to check game flow
const gameFlow = (() => {

    let winner;

    const checkWinner = () => {

        //Check 8 combinations based on same symbols covering indices(1-2-3, 1-4-7, 1-5-9, 2-5-8, 3-6-9, 3-5-7, 4-5-6, 7-8-9)
        if (checkPattern(player1.symbol) == true) {
            winner = player1.name;
            declareWinner(winner);
        }
        else if (checkPattern(player2.symbol) == true) {
            winner = player2.name;
            declareWinner(winner);
        }
        else {
            return;
        }
        

    }

    const checkPattern = (symbol) => {

        const tile1 = document.getElementById('1');
        const tile2 = document.getElementById('2');
        const tile3 = document.getElementById('3');
        const tile4 = document.getElementById('4');
        const tile5 = document.getElementById('5');
        const tile6 = document.getElementById('6');
        const tile7 = document.getElementById('7');
        const tile8 = document.getElementById('8');
        const tile9 = document.getElementById('9');

        if (tile1.textContent == symbol && tile2.textContent == symbol && tile3.textContent == symbol) {
            return true;
        }
        else if (tile1.textContent == symbol && tile4.textContent == symbol && tile7.textContent == symbol) {
            return true;
        }
        else if (tile1.textContent == symbol && tile5.textContent == symbol && tile9.textContent == symbol) {
            return true;
        }
        else if (tile2.textContent == symbol && tile5.textContent == symbol && tile8.textContent == symbol) {
            return true;
        }
        else if (tile3.textContent == symbol && tile6.textContent == symbol && tile9.textContent == symbol) {
            return true;
        }
        else if (tile3.textContent == symbol && tile5.textContent == symbol && tile7.textContent == symbol) {
            return true;
        }
        else if (tile4.textContent == symbol && tile5.textContent == symbol && tile6.textContent == symbol) {
            return true;
        }
        else if (tile7.textContent == symbol && tile8.textContent == symbol && tile9.textContent == symbol) {
            return true;
        }
        else {
            return false;
        }
    }

    const declareWinner = (winner) => {
        const winnerText = document.createElement('h2');
        winnerText.textContent = `${winner} wins the game!`;
        winnerText.id = 'winner';

        declareDiv.appendChild(winnerText);
    }

    const declareDraw = () => {
        const drawText = document.createElement('h2');
        drawText.textContent = "It's a draw! Try again";
        drawText.id = 'draw';

        declareDiv.appendChild(drawText);
    }

    const checkDraw = () => {
        if (numberOfTurns >= 8) {
            declareDraw();
        }
        else {
            return;
        }
    }
 
    return {checkWinner, declareWinner, checkDraw, declareDraw};
})();

//Factory function for players
const players = (name, symbol) => {
    return {name, symbol};
}

const player1 = players('Player 1', 'X');
const player2 = players('Player 2', 'O');


//Logic for filling the tiles with symbols

tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
        if (tile.textContent === '' && currentSymbol === 'X') {
            tile.textContent = 'X';
            currentSymbol = 'O';
            numberOfTurns++;

    
            //Push to gameboard
            gameBoard.gameboard.push(tile.textContent);

        }
        else if (tile.textContent === '' && currentSymbol === 'O') {
            tile.textContent = 'O';
            currentSymbol = 'X';
            numberOfTurns++;


            //Push to gameboard
            gameBoard.gameboard.push(tile.textContent);

        }
        else {
            return;
        }
        

        if (numberOfTurns > 4) {
            gameFlow.checkWinner();
        }

        if (numberOfTurns > 8) {
            gameFlow.checkDraw();
        }
    })
})


restartBtn.addEventListener('click', () => {
    tiles.forEach((tile) => {
        tile.textContent = '';
    })

    gameBoard.gameboard.length = 0;

    numberOfTurns = 0;

    currentSymbol = 'X';

    const winnerText = document.getElementById('winner');
    declareDiv.removeChild(winnerText);

    const drawText = document.getElementById('draw');
    declareDiv.removeChild(drawText);
})