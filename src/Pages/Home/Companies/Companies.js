import React, { useEffect, useState } from 'react';
import CompanysCard from './CompanysCard';

const Companies = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://y-ten-hazel.vercel.app/companies')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <div className='text-center pb-2 mt-6'>
                <h2 className='text-5xl font-semibold py-2'>Top Companies</h2>
                <p className='py-2'>Here you can see top companies of bd and other countries.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 py-1 px-3'>
                {
                    posts.map(post => <CompanysCard
                        key={post._id}
                        post={post}
                    ></CompanysCard>)
                }

            </div>
        </div>
    );
};

export default Companies;