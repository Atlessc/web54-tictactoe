import React from 'react';

function GameStatus({ currentPlayer }) {
  return (
    <div className="flex flex-row justify-center items-center w-10 h-5">
      <svg
        className={`w-2 h-2 mr-2 transform transition-transform duration-500 ${
          currentPlayer === 'X' ? 'scale-x-100' : 'scale-x-0'
        }`}
        viewBox="0 0 20 20"
      >
        <path
          stroke="#4B5563"
          strokeWidth="2"
          strokeLinecap="round"
          d="M 5,5 L 15,15 M 15,5 L 5,15"
        />
      </svg>
      <svg
        className={`w-2 h-2 transform transition-transform duration-500 ${
          currentPlayer === 'O' ? 'scale-x-100' : 'scale-x-0'
        }`}
        viewBox="0 0 20 20"
      >
        <circle cx="10" cy="10" r="8" stroke="#4B5563" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
}

export default GameStatus;