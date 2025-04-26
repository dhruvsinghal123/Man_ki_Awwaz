// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { getShayaris } from "../firebase";
import ShayariCard from "../components/ShayariCard";

const Home = () => {
  const [shayaris, setShayaris] = useState([]);

  useEffect(() => {
    const fetchShayaris = async () => {
      const data = await getShayaris();
      setShayaris(data);
    };
    fetchShayaris();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl font-bold">Latest Shayaris</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {shayaris.map((shayari, index) => (
          <ShayariCard key={index} shayari={shayari} />
        ))}
      </div>
    </div>
  );
};

export default Home;
