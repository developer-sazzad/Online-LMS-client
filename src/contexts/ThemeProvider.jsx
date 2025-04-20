import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setIsDarkMode(savedTheme === 'dark');

        document.documentElement.setAttribute('data-theme', savedTheme); // DaisyUI
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark'); // Tailwind dark mode trigger
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        const themeValue = newTheme ? 'dark' : 'light';

        setIsDarkMode(newTheme);
        localStorage.setItem('theme', themeValue);
        document.documentElement.setAttribute('data-theme', themeValue); // DaisyUI
        if (themeValue === 'dark') {
            document.documentElement.classList.add('dark'); // Tailwind
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
