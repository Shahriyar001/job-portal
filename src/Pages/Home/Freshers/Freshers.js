import React, { useEffect, useState } from 'react';
import FresherCard from './FresherCard';

const Freshers = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/freshers')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <div className='text-center pb-3'>
                <p className="text-2xl font-bold text-orange-600 py-2">Fresher</p>
                <h2 className='text-5xl font-semibold py-2'>Jobs For Freshers</h2>
                <p className='py-2'>In this sector, Companys post the low or mid range salarys job, so that Fresher <br /> can find there job to achive experience</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 px-3'>
                {
                    posts.map(post => <FresherCard
                        key={post._id}
                        post={post}
                    ></FresherCard>)
                }

            </div>
            <div className='text-center'>
                <button className="btn btn-primary text-white px-4 my-2">See All</button>
            </div>
        </div>
    );
};

export default Freshers;