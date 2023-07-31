import React from 'react';

function Board({ board, onCellClick }) {
  return (
    <div className="grid grid-cols-3 gap-2 w-64 h-64">
      {board.map((cell, i) => (
        <button
          key={i}
          className="border border-gray-400 flex items-center justify-center text-6xl"
          onClick={() => onCellClick(i)}
        >
          {cell}
        </button>
      ))}
    </div>
  );
}

export default Board;