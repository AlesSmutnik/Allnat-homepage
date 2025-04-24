'use client';

import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Kontrola, zda jsme na klientské straně
    if (typeof window !== 'undefined') {
      const darkModeStored = localStorage.getItem('darkMode') === 'true';
      setIsDarkMode(darkModeStored);
      
      if (darkModeStored) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Přepíná třídu na HTML elementu
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Uloží do localStorage
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  return (
    <button 
      onClick={toggleDarkMode}
      className="buttonTH theme-toggle"
    >
      {isDarkMode ? '☀️' : '🌙 '}
    </button>
  );
};

export default ThemeToggle;