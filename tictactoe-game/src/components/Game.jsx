import React, { useState } from 'react';
import Board from './Board';
import GameStatus from './GameStatus';

function Game() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(null));

  function calculateWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  }

  function handleCellClick(i) {
    // TODO: Implement game logic
    const winner = calculateWinner(board);
    if (winner) {
        // TODO: Handle game over (winner)
      } else if (board.every(cell => cell !== null)) {
        // TODO: Handle game over (tie)
      }
  }

  return (
    <div>
      <GameStatus currentPlayer={
        currentPlayer === 'X' ? 'O' : 'X'
      } />
      <Board board={board} onCellClick={handleCellClick} />
    </div>
  );
}

export default Game;