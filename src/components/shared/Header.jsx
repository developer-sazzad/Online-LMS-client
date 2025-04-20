import React, { useContext } from 'react';

import { FaSun, FaMoon, FaSignInAlt } from 'react-icons/fa';
import { ThemeContext } from '../../contexts/ThemeProvider';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)

    return (
        <header className="shadow-md p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Link to='/' className="text-xl font-bold">DsEducation</Link>
            </div>
            <nav className="hidden md:flex gap-3 font-medium capitalize">
                <NavLink className='customBtn hover:text-purple-500' to='/'>home</NavLink>
                <NavLink className='customBtn hover:text-purple-500' to='/feature'>feature</NavLink>
                <NavLink className='customBtn hover:text-purple-500' to='/team'>team</NavLink>
                <NavLink className='customBtn hover:text-purple-500' to='/dashboard'>dashboard</NavLink>

            </nav>
            <div className="flex items-center gap-4">
                {/* Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="text-gray-600 hover:text-yellow-400 cursor-pointer customBtn"
                >
                    {isDarkMode ? <div className='flex gap-2'>
                        <FaMoon title="Switch to Light Mode" />
                    </div> : <div className='flex gap-2'>
                        <FaSun title="Switch to Dark Mode" />
                    </div>}
                </button>
                <button className="animate-btn">
                    <FaSignInAlt /> Login/Register
                </button>
            </div>
        </header>

    );
};

export default Header;
