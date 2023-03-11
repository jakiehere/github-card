import React, {
  lazy,
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import {
  toast,
  Toaster,
} from 'react-hot-toast';

import Navbar from './components/Navbar';
import { getUser } from './services/getUser';
import { GitUserInfo } from './types';

const Card = lazy(() => import('./components/Card'));
const SkeletonLoader = lazy(() => import('./components/SkeletonLoader'));

function App() {
  const [userInfo, setUserInfo] = useState<GitUserInfo[]>([])
  const [isLoading, setIsLoading] = useState<Boolean>(true)

  useEffect(() => {
    const fetchProductSuggestData = async () => {
      try {
        const user = (await getUser())
        await user.map(async (data: { url: string }) => {
            const res = await axios.get(data.url)
            const newValue = await res.data;            
            setUserInfo((prev):any  => [...prev, newValue])
        })
        setIsLoading(false)
      } catch (error: any) {
        toast.error(error.message)
      }
    }
    fetchProductSuggestData()
  }, [])


  return (
    <React.Fragment>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Navbar />
      {isLoading && <SkeletonLoader /> }
      {!isLoading && userInfo && 
        <div className='grid grid-cols-1 m-5 mx-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 items-center gap-5'>
          {userInfo.map((val, index) => (
            <Card
              avatar_url={val.avatar_url}
              followers={val.followers}
              following={val.following}
              public_repos={val.public_repos}
              name={val.name}
              login={val.login}
              key={index}
            />
          ))}
        </div>
      }
    </React.Fragment>
  );
}

export default App;
