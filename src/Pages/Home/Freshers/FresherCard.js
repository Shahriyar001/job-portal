import React from 'react';

const FresherCard = ({ post }) => {
    const { img, salary, title, company } = post;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl'>{company}</p>
                <p className='font-bold'> Salary: {salary}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default FresherCard;