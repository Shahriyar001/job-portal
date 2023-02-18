import React from 'react';

const CompanysCard = ({ post }) => {
    const { img, title, detail } = post;
    return (
        <div className="hero my-5">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} alt="/" className="max-w-sm rounded-lg shadow-2xl w-1/2 ml-32" />
                <div className='w-1/2 ml-6'>
                    <h1 className="text-5xl font-bold mb-5">{title}</h1>
                    <p className="py-6 mb-5">{detail}</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default CompanysCard;