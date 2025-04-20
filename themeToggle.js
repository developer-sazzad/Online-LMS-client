// themeToggle.js

// Check for saved theme preference in localStorage and set it
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

// Function to toggle the theme
const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save the new theme to localStorage
};

// Make sure the toggle button has the correct ID in your HTML or JSX
document.querySelector('#theme-toggle-btn')?.addEventListener('click', toggleTheme);
