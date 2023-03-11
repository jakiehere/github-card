import React from 'react';

import { GitUserInfo } from '../types';

const Card = ({ avatar_url, followers, following, public_repos, name, login }: GitUserInfo) => {
    return (
        <div className='bg-white flex flex-col items-center mx-0 rounded-lg shadow-md shadow-gray-500 py-3 divide-y divide-solid transform transition duration-500 hover:scale-105'>
            <div className='my-5 flex flex-col items-center'>
                <img className='w-24 h-24 rounded-full border-2 border-[#5FAE17] flex mx-0' src={avatar_url} alt={name} />
                <h3 className='text-base text-gray-700 uppercase font-semibold max-w-[28rem] overflow-ellipsis whitespace-nowrap'>{name ? name : "John Doe"}</h3>
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