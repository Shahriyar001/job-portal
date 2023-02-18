import React, { useEffect, useState } from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://y-ten-hazel.vercel.app/experience')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <div className='text-center pb-3'>
                <p className="text-2xl font-bold text-orange-600 py-2">Experienced</p>
                <h2 className='text-5xl font-semibold py-2'>Jobs For Experienced</h2>
                <p className='py-2'>In this sector, Companys post the high range salarys job, so that experienced empolys <br /> can find there job.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 px-3'>
                {
                    posts.map(post => <ExperienceCard
                        key={post._id}
                        post={post}
                    ></ExperienceCard>)
                }

            </div>
            <div className='text-center'>
                <button className="btn btn-primary text-white px-4 my-2">See All</button>
            </div>
        </div>
    );
};

export default Experience;