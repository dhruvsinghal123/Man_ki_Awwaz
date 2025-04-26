import React, { useState, useEffect } from 'react';
import { addShayari, getShayaris, logout } from '../firebase';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [newShayari, setNewShayari] = useState('');
  const [shayaris, setShayaris] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShayaris = async () => {
      const data = await getShayaris();
      setShayaris(data);
    };
    fetchShayaris();
  }, []);

  const handleAddShayari = async () => {
    if (!newShayari) return;
    await addShayari({ text: newShayari });
    setShayaris([...shayaris, { text: newShayari }]);
    setNewShayari('');
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="flex mb-4">
        <input
          className="border p-2 w-full"
          type="text"
          value={newShayari}
          onChange={(e) => setNewShayari(e.target.value)}
          placeholder="Write your Shayari..."
        />
        <button onClick={handleAddShayari} className="bg-green-500 text-white px-4 ml-2 rounded">
          Add
        </button>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 ml-2 rounded">
          Logout
        </button>
      </div>
      <ul className="list-disc pl-5">
        {shayaris.map((s, i) => (
          <li key={i} className="my-2">{s.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
