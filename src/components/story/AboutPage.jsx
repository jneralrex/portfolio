import React from 'react'
import HtmlPics from '../../assets/images/htmlpics.png'
import ReactPics from '../../assets/images/reactpics.png'
import CssPics from '../../assets/images/csspics.png'
import javaScript from '../../assets/images/javascript.png'
import jQuery from '../../assets/images/jquery.png'




const AboutPage = () => {
  return (
    <div className='bg-gradient-to-b from-[#3795BD] to-[#3A1078] min-h-[100vh] flex flex-col p-2'>
      <div className='text-2xl max-w-[1440px] text-[#F7F7F8] font-light'>
        <span className='text-5xl font-serif ml-5 '>I</span> am a passionate software developer driven by a relentless pursuit of efficiency. My focus remains steadfast on creating high-speed, user-friendly, visually stunning, and innovative websites. <br /> <br /> <span className='text-5xl font-serif ml-5'>I</span> thrive in environments where pushing boundaries and setting new standards are the norm. <br /><br />
        <span className='text-5xl font-serif ml-5'>With</span> a commitment to excellence, I bring cutting-edge skills, extensive knowledge, and hands-on experience to every project. I am always seeking opportunities to further enhance my expertise and contribute to groundbreaking initiatives.
        If you're looking for a dedicated professional who prioritizes speed, usability, aesthetics, and innovation, I'm eager to collaborate and deliver exceptional results.
      </div>
      <div className='text-center text-3xl'>
        Tech Skills
      </div>
      <div className='flex flex-col md:grid md:grid-cols-4 md:gap-5'>
        <div className='col-span-2'> 
          <div className='text-[#F7F7F8] font-bold font-sans mt-2'>
          <div className=' flex flex-row items-center justify-between'> <div>HTML5</div><div className='border p-1 rounded-full mr-20'><img src={HtmlPics} alt="" srcset="" className=' h-[50px] ' /></div></div>
        </div>
        <div className='text-[#F7F7F8] font-bold font-sans mt-2'>
          <div className=' flex flex-row  items-center justify-between'> <div>CSS3</div><div className='border p-1 rounded-full mr-20'><img src={CssPics} alt="" srcset="" className=' h-[50px] ' /></div></div>
        </div>
        <div className='text-[#F7F7F8] font-bold font-sans mt-2'>
          <div className=' flex flex-row  items-center justify-between'> <div className=''>JAVASCRIPT</div><div className='border p-1 rounded-full mr-20'><img src={javaScript} alt="" srcset="" className=' h-[50px] ' /></div></div>
        </div>
        </div>
        <div className='col-span-2'> 
          <div className='text-[#F7F7F8] font-bold font-sans mt-2'>
          <div className=' flex flex-row  items-center justify-between'> <div className=''>JQUERY</div><div className='border p-1 rounded-full mr-20'><img src={jQuery} alt="" srcset="" className=' h-[50px] ' /></div></div>
        </div>
        <div className='text-[#F7F7F8] font-bold font-sans mt-2'>
          <div className=' flex flex-row  items-center justify-between'> <div className=''>REACT.JS</div><div className='border p-1 rounded-full mr-20'><img src={ReactPics} alt="" srcset="" className=' h-[50px] ' /></div></div>
        </div>
        </div>
      </div>
      <div className='text-center text-3xl'>
        Soft Skills
      </div>
      <div>
        <ul>
          <li>Good listener</li>
          <li>Attention to details</li>
          <li>Problem solving</li>
          <li>Critical thinking</li>
          <li>Saas</li>
          <li>Bootstrap</li>
          <li>React.js</li>
          <li>Tailwind</li>
          <li>mySql</li>
          <li>node.js</li>
          <li>mongoDb</li>
        </ul>
      </div>
      <div className='text-center text-3xl'>
        Education
      </div>
      <div>
        <ul>
          <li>Good listener</li>
          <li>Attention to details</li>
          <li>Problem solving</li>
          <li>Critical thinking</li>
          <li>Saas</li>
          <li>Bootstrap</li>
          <li>React.js</li>
          <li>Tailwind</li>
          <li>mySql</li>
          <li>node.js</li>
          <li>mongoDb</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutPage