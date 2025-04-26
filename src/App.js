import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import { getShayaris } from './firebase';

const App = () => {
  const [shayaris, setShayaris] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getShayaris();
      setShayaris(data);
    };
    fetchData();
  }, []);

  // 🌹 Falling Rose Petals Effect
  const dropPetals = () => {
    const petals = ['🌹', '🌸', '🌺', '💮']; // Multiple petal emojis
    for (let i = 0; i < 20; i++) {
      const petal = document.createElement('div');
      petal.innerText = petals[Math.floor(Math.random() * petals.length)];
      petal.className = 'petal fixed text-2xl pointer-events-none animate-fall';
      petal.style.left = Math.random() * 100 + 'vw';
      petal.style.top = '-5vh';
      petal.style.animationDuration = (2 + Math.random() * 3) + 's';
      petal.style.zIndex = 9999;
      document.body.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, 5000);
    }
  };

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-pink-100 to-blue-200'} transition-colors duration-500 font-serif`}>

        {/* Floating Decorative Icons */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="w-64 h-64 absolute opacity-10 bg-[url('https://img.icons8.com/ios/500/feather.png')] bg-no-repeat bg-contain animate-spin-slow" style={{ top: '10%', left: '80%' }}></div>
          <div className="w-48 h-48 absolute opacity-10 bg-[url('https://img.icons8.com/ios/500/flower.png')] bg-no-repeat bg-contain animate-pulse" style={{ top: '70%', left: '10%' }}></div>
        </div>

        {/* Header */}
        <header className={`flex justify-between items-center p-6 ${isDarkMode ? 'bg-black bg-opacity-80' : 'bg-white bg-opacity-70'} shadow-xl backdrop-blur-md rounded-b-2xl relative z-10`}>
          <h1 className={`text-5xl font-great-vibes ${isDarkMode ? 'text-pink-300' : 'text-indigo-700'} drop-shadow-md`}>
            𝓜𝓪𝓷 𝒦𝓲 𝒜𝓌𝓏
          </h1>
          <div className="space-x-4">
            <button
              onClick={toggleTheme}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform"
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <Link
              to="/login"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform"
            >
              Admin Login
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-8 relative z-10">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h2 className="text-4xl mb-10 text-center font-great-vibes text-indigo-600 animate-fade-in">
                    Enjoy Beautiful Shayaris
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                    {shayaris.map((s, i) => (
                      <div
                        key={i}
                        onClick={dropPetals}
                        className="relative bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 p-6 rounded-2xl shadow-2xl hover:shadow-pink-500/30 transition-all transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
                      >
                        <div className="absolute top-2 left-2 w-10 h-10 bg-[url('https://img.icons8.com/ios-filled/100/poem.png')] bg-contain bg-no-repeat opacity-30"></div>
                        <p className="text-xl text-center italic text-gray-700 dark:text-gray-300 leading-relaxed font-cursive">
                          {s.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              }
            />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/admin" element={isLoggedIn ? <AdminDashboard /> : <p className="text-red-500 text-center mt-20">Please log in first.</p>} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className={`p-8 mt-12 text-center ${isDarkMode ? 'bg-black text-gray-300' : 'bg-indigo-100 text-gray-700'} rounded-t-3xl shadow-inner backdrop-blur-md relative z-10`}>
          <p className="text-md italic mb-2">“Poetry is the rhythmical creation of beauty in words.” – Edgar Allan Poe</p>
          <p className="text-xs mb-4">© 2025 Man Ki Awaz. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/Man_ki_awwaz.official"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-all"
            >
              Instagram
            </a>
            <a
              href="mailto:dsinghal265@gmail.com"
              className="hover:text-pink-500 transition-all"
            >
              Email
            </a>
          </div>
        </footer>
      </div>

      {/* Tailwind Animation Styles */}
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
          }

          .animate-fall {
            animation-name: fall;
            animation-timing-function: linear;
            animation-fill-mode: forwards;
          }
        `}
      </style>
    </Router>
  );
};

export default App;
