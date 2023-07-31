import React from 'react';

function GameStatus({ currentPlayer }) {
  return (
    <div className="flex items-center">
      <svg
        className={`w-8 h-8 mr-2 transform transition-transform duration-500 ${
          currentPlayer === 'X' ? 'scale-x-100' : 'scale-x-0'
        }`}
        viewBox="0 0 40 40"
      >
        <path
          stroke="#4B5563"
          strokeWidth="4"
          strokeLinecap="round"
          d="M 10,10 L 30,30 M 30,10 L 10,30"
        />
      </svg>
      <svg
        className={`w-8 h-8 transform transition-transform duration-500 ${
          currentPlayer === 'O' ? 'scale-x-100' : 'scale-x-0'
        }`}
        viewBox="0 0 40 40"
      >
        <circle cx="20" cy="20" r="15" stroke="#4B5563" strokeWidth="4" fill="none" />
      </svg>
    </div>
  );
}

export default GameStatus;