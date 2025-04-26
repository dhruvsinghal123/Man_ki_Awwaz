// src/pages/SingleShayari.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShayaris } from "../firebase";

const SingleShayari = () => {
  const { id } = useParams();
  const [shayari, setShayari] = useState(null);

  useEffect(() => {
    const fetchShayari = async () => {
      const data = await getShayaris();
      const foundShayari = data.find((s) => s.id === id);
      setShayari(foundShayari);
    };
    fetchShayari();
  }, [id]);

  if (!shayari) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl font-bold">Full Shayari</h1>
      <p className="mt-6 text-xl">{shayari.text}</p>
    </div>
  );
};

export default SingleShayari;
