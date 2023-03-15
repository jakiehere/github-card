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

import Card from './components/Card';
import Navbar from './components/Navbar';
import { getUser } from './services/getUser';
import {
  Details,
  GitUserInfo,
} from './types';

const SkeletonLoader = lazy(() => import('./components/SkeletonLoader'));

function App() {
  const [userInfo, setUserInfo] = useState<GitUserInfo[]>([])
  const [isLoading, setIsLoading] = useState<Boolean>(true)
  const [details, setDetails] = useState<Details>()
  const [isOpen, setIsOpen] = useState<Boolean>(false)

  useEffect(() => {
    fetchProductSuggestData()
  }, [])

  const fetchProductSuggestData = async () => {
    try {
      const user = (await getUser())
      setUserInfo(user)
      setIsLoading(false)
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  const getDetail = async (url: string) => {
    setIsOpen(true)
    try {
      const res = await axios.get(url)
      setDetails(res.data);
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <React.Fragment>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Navbar />
      {isLoading && <SkeletonLoader />}
        <div className='grid grid-cols-2 md:grid-cols-3 m-5 md:mx-8 items-center gap-5'>
          {userInfo.map((val, index) => (
            <div
              onClick={() => getDetail(val.url)}
              className='bg-white flex justify-between items-center mx-0 
              rounded-lg shadow-md shadow-gray-500 p-3 transform 
              transition duration-500 hover:scale-[1.02]'
              key={index}
            >
              <div className='flex'>
                <h3 className='text-base text-gray-500 uppercase font-semibold'>ID: <span className='text-gray-700'>{val.id}</span></h3>
              </div>
              <img className='w-20 h-20 rounded-full border-2 border-[#5FAE17] flex mx-0' src={val.avatar_url} alt={val.login} />
            </div>
          ))}
        </div>
        {isOpen ?
          <div onClick={() => setIsOpen(false)} className="w-full min-h-full fixed inset-0 bg-black bg-opacity-50">
            <div className='flex items-center justify-center fixed inset-0 z-50 py-10 ease-in duration-500'>
              <Card
                avatar_url={details?.avatar_url}
                login={details?.login}
                name={details?.name}
                public_repos={details?.public_repos}
                followers={details?.followers}
                following={details?.following}
              />
            </div>
          </div>
          :
          null
        }
    </React.Fragment>
  );
}

export default App;
