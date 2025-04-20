import useTheme from "../../hooks/useTheme";

const Banner = () => {
    const { isDarkMode } = useTheme();
    return (
        <section className={`transition-all duration-300 ${isDarkMode ? 'bg-[#25273A] text-gray-400' : 'bg-gradient-to-r from-[#9d8fff] to-purple-600 text-gray-800'
            }`}>
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center py-20 gap-3">
                <h2 className="max-w-4xl mx-auto text-center text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-900 mb-4">
                    One dashboard to manage all your businesses
                </h2>
                <p>
                    Production-ready & easy to use Admin Template for Reliability and Customizability.
                </p>

                <button className="animate-btn">
                    Get early access
                </button>
                {/* <button className="magic-btn">Get early access</button> */}
                <p className="text-sm text-gray-500 mt-4">Join community ➝</p>
            </div>
        </section>
    );
};

export default Banner;