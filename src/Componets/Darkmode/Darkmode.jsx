import React, { useState, useEffect } from "react";
import lightIcon from '../../assets/images/light.png'; 
import darkIcon from '../../assets/images/dark.png';

const Darkmode = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedMode = localStorage.getItem('darkMode');
        return storedMode === 'true';
    });

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode)
    };

    const element =document.documentElement;
    console.log(element);
    
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode); // Existing behavior
        document.body.classList.toggle('dark-theme', isDarkMode); // New behavior
        localStorage.setItem('darkMode', isDarkMode);
      }, [isDarkMode]);

    return (
        <button
            onClick={toggleTheme}
            className="relative w-12 h-12"
            aria-label={isDarkMode ? "Disable dark mode" : "Enable dark mode"}
        >
            <img
                src={isDarkMode ? darkIcon : lightIcon}
                alt={isDarkMode ? "Dark Mode Icon" : "Light Mode Icon"} 
                className="w-full h-full object-contain cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 "
                style={{ position: 'absolute', top: 0, left: 0 }}
            />
        </button>
    );
};

export default Darkmode;