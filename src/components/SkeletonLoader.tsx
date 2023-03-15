import React from 'react';

import SkeletonCard from './SkeletonCard';

const SkeletonLoader = () => {
    return (
        <div className='grid grid-cols-2 m-5 md:mx-8 md:grid-cols-3 items-center gap-5'>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    )
}

export default SkeletonLoader