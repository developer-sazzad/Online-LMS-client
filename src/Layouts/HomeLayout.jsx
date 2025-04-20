import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import { Helmet } from "react-helmet-async";
import useTheme from "../hooks/useTheme";

const HomeLayout = () => {
    const { isDarkMode } = useTheme()
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div
            >
                <Header></Header>
                <div className={`transition-all duration-300 ${isDarkMode ? 'bg-[#25273A] text-white' : 'bg-amber-300 text-black'
                    }`}>

                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default HomeLayout;