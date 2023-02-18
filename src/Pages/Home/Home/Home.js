import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Companies from '../Companies/Companies';
import Experience from '../Experience/Experience';
import Freshers from '../Freshers/Freshers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Freshers></Freshers>
            <Experience></Experience>
            <Companies></Companies>
        </div>
    );
};

export default Home;