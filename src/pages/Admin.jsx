// src/pages/Admin.jsx
import React, { useState } from "react";
import { addShayari, login } from "../firebase";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shayariText, setShayariText] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      setError("");
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  const handleAddShayari = async () => {
    try {
      await addShayari({ text: shayariText });
      setShayariText("");
    } catch (err) {
      setError("Failed to add Shayari.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl font-bold">Admin Panel</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mt-6">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded ml-4"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 ml-4 rounded"
        >
          Login
        </button>
      </div>

      <div className="mt-6">
        <textarea
          placeholder="Enter new Shayari"
          value={shayariText}
          onChange={(e) => setShayariText(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <button
          onClick={handleAddShayari}
          className="bg-green-500 text-white p-2 mt-4 rounded"
        >
          Add Shayari
        </button>
      </div>
    </div>
  );
};

export default Admin;
