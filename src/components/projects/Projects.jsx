import React, { useEffect } from 'react'
import bannerImg from '../../assets/images/blueRoof.jpeg'

const Projects = () => {
        useEffect(() => {
                window.scrollTo(0, 0);
              }, []);
  return (
    <div className='bg-slate-600 min-h-[100vh] flex flex-col p-3'>
      <div className='bg-blue-500 border w-full flex flex-col md:grid md:grid-cols-4 gap-2 p-3'>
        <div className='h-[300px] w-full border '>
<button className='p-2 border w-[100px] m-2 rounded-lg shadow-gray-100 hover:z-[2] hover:shadow-sm  hover:shadow-gray-900'>Visit</button>          
        </div>
        <div className='h-[300px] w-full border '>
<button className='p-2 border w-[100px] m-2 rounded-lg  shadow-gray-100 hover:z-[2] hover:shadow-sm hover:shadow-gray-900'>Visit</button>
        </div>
        <div className='h-[300px] w-full border '>
<button className='p-2 border w-[100px] m-2 rounded-lg  shadow-gray-100 hover:z-[2] hover:shadow-sm  hover:shadow-gray-900'>Visit</button>
        </div>
        <div className='h-[300px] w-full border '>
<button className='p-2 border w-[100px] m-2 rounded-lg  shadow-gray-100 hover:z-[2] hover:shadow-sm  hover:shadow-gray-900'>Visit</button>
        </div>
        <div className='h-[300px] w-full border '>
<button className='p-2 border w-[100px] m-2 rounded-lg  shadow-gray-100 hover:z-[2] hover:shadow-sm  hover:shadow-gray-900'>Visit</button>
        </div>
      </div>
    </div>
  )
}

export default Projects