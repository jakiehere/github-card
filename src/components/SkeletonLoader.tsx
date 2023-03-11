import React from 'react';

import SkeletonCard from './SkeletonCard';

const SkeletonLoader = () => {
    return (
        <div className='grid grid-cols-1 m-5 mx-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 items-center gap-5'>
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