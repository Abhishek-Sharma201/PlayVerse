import React from 'react';

const GameCard = ({ title, image, tag, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:scale-105 transition-transform duration-300 shadow-[0_4px_10px_rgba(139,92,246,0.6)] hover:shadow-[0_8px_15px_rgba(139,92,246,0.9)] rounded-lg overflow-hidden"
    >
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <span className="text-sm text-gray-400 uppercase">{tag}</span>
        </div>
      </div>
    </a>
  );
};

export default GameCard;
