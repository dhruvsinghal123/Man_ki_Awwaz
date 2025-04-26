// src/components/ShayariCard.jsx
import React from "react";
import { Link } from "react-router-dom";

// Petal dropping function
const dropPetals = () => {
  for (let i = 0; i < 20; i++) {
    const petal = document.createElement('div');
    petal.innerText = '🌹';
    petal.className = 'petal absolute text-2xl animate-fall';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.top = '-5vh';
    petal.style.animationDuration = (2 + Math.random() * 3) + 's';
    document.body.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 5000);
  }
};

const ShayariCard = ({ shayari }) => {
  return (
    <div 
      onClick={dropPetals}
      className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl hover:shadow-pink-500/30 transition-all transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
    >
      <div className="absolute top-2 left-2 w-10 h-10 bg-[url('https://img.icons8.com/ios-filled/100/poem.png')] bg-contain bg-no-repeat opacity-30"></div>
      <p className="text-xl text-center italic text-gray-700 dark:text-gray-300 leading-relaxed">{shayari.text}</p>
      <Link
        to={`/shayari/${shayari.id}`}
        className="text-blue-500 mt-4 inline-block"
      >
        Read more
      </Link>
    </div>
  );
};

export default ShayariCard;
