import React from 'react';
import img1 from "../../../assets/images/banner/About.jpg";

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img1} alt="/" className="max-w-sm rounded-lg shadow-2xl w-1/2 ml-32" />
                <div className='w-1/2 ml-6'>
                    <p className='text-2xl font-bold text-orange-600 my-5'>About us</p>
                    <h1 className="text-5xl font-bold mb-5">We are hirig most <br /> talented employes of the industry.</h1>
                    <p className="py-6 mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;