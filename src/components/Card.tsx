import React from 'react';

import { Details } from '../types';

const Card = ({ avatar_url, login, name, public_repos, followers, following }:Details) => {
    return (
        <div className='bg-white w-80 md:w-96 flex flex-col items-center mx-0 rounded-lg shadow-md shadow-gray-500 py-3 divide-y divide-solid' data-backdrop='static'>
            <div className='my-5 flex flex-col items-center'>
                <img className='w-24 h-24 rounded-full border-2 border-[#5FAE17] mb-2 flex mx-0' src={avatar_url} alt={login} />
                <h3 className='text-base text-gray-700 uppercase font-semibold max-w-[28rem] overflow-ellipsis whitespace-nowrap'>{name ?? login}</h3>
                <p className='text-gray-500'>@{login}</p>
            </div>
            <div className='flex text-center py-5 gap-2 lowercase text-sm font-semibold text-gray-500'>
                <div>
                    <p>{public_repos}</p>
                    <p>Repositories</p>
                </div>
                <div>
                    <p>{followers}</p>
                    <p>Follower</p>
                </div>
                <div>
                    <p>{following}</p>
                    <p>Following</p>
                </div>
            </div>
        </div>
    )
}

export default Card

