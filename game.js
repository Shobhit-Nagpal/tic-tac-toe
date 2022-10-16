let currentSymbol = 'X';

//Module to check gameboard
const gameBoard = (() => {
    let gameboard = [];
})();

//Module to check game flow
const gameFlow = (() => {
    const checkWinner = () => {
        
    }
})();

//Factory function for players
const players = (name, symbol) => {
    return {name, symbol};
}

const player1 = players('Player 1', 'X');
const player2 = players('Player 2', 'O');


//Logic for filling the tiles with symbols
const tiles = document.querySelectorAll('.gametiles');

tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
        if (tile.textContent === '' && currentSymbol === 'X') {
            tile.textContent = 'X';
            currentSymbol = 'O';
        }
        else if (tile.textContent === '' && currentSymbol === 'O') {
            tile.textContent = 'O';
            currentSymbol = 'X';
        }
        else {
            return;
        }
    })
})
