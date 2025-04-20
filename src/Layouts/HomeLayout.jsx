import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import { Helmet } from "react-helmet-async";
const HomeLayout = () => {

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div
            >
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>
    );
};

export default HomeLayout;