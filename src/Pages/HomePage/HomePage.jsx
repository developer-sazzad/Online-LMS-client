import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Home | Vuexy</title>
            </Helmet>
            <div>
                <Banner></Banner>
            </div>
        </>
    );
};

export default HomePage;
