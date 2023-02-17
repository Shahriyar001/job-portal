import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Freshers from '../Freshers/Freshers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Freshers></Freshers>
        </div>
    );
};

export default Home;