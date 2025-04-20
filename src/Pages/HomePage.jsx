import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaSun, FaMoon, FaSignInAlt } from 'react-icons/fa';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Home | Vuexy</title>
            </Helmet>
            <div>
                <main className="transition-all duration-300">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 mb-4">
                        One dashboard to manage all your businesses
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Production-ready & easy to use Admin Template for Reliability and Customizability.
                    </p>
                    
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700">
                        Get early access
                    </button>
                    <p className="text-sm text-gray-500 mt-4">Join community ➝</p>
                </main>
            </div>
        </>
    );
};

export default HomePage;
