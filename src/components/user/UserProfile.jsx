import React from 'react'
import bannerImg from '../../assets/images/blueRoof.jpeg'

const UserProfile = () => {
  return (
    <div>
      <div>
        <div className=''>
         <img src={bannerImg} alt="" className='h-[50vh] w-[1400px] object-fill bg-no-repeat left-0 top-0 md:h-[89.5vh] '/>
           <div className='absolute top-0 right-0 flex flex-col justify-center items-center'>
            <div className='border-2 h-full bg-black'>

            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile