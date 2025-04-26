// src/components/ShayariCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ShayariCard = ({ shayari }) => {
  return (
    <Link to={`/shayari/${shayari.id}`} className="block">
      <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300 h-full">
        <p className="text-lg font-serif text-gray-800 line-clamp-4">
          {shayari.text}
        </p>
      </div>
    </Link>
  );
};

export default ShayariCard;
