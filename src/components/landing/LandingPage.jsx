import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import hero from '../../assets/images/hero.jpg'
import planImg2 from '../../assets/images/landLord.jpeg'
import planImg3 from '../../assets/images/careTaker.jpeg'
import planImg5 from '../../assets/images/img.jpeg'
import project1 from '../../assets/images/project1.png';
import slideImg3 from '../../assets/images/careTaker.jpeg'
import slideImg5 from '../../assets/images/img.jpeg'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { RxDotFilled } from 'react-icons/rx';
import { FaGithub,  FaLinkedin, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import cinco from "../../assets/images/cinco.png";


const LandingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
    if (!nav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }

 
const slides = [
  {
      images: hero,
      title: 'Image One'
  }
  ,
    {
        images: project1,
        title: 'Image Two'
    },
    {
        images: slideImg3,
        title: 'Image Three'
    }, {
        images: cinco,
        title: 'Image Four'
    },
    {
        images: slideImg5,
        title: 'Image Five'
    }
]
const [currenIndex, setCurrentIndex] = useState(0);

const prevSlide =()=>{
    const isFirstSlide = currenIndex === 0;
    const  newIndex = isFirstSlide ? slides.length - 1 : currenIndex - 1;
    setCurrentIndex(newIndex);
}

const nextSlide =()=>{
    const isLastSlide = currenIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currenIndex + 1;
    setCurrentIndex(newIndex);

};
;
 
const goToSlides = (slidesIndex) =>{
setCurrentIndex(slidesIndex)
}
  return (
    <div className='bg-black'>
      <div className='absolute w-full flex justify-between p-4 items-center bg-black'>
        <h1 className='text-white font-bold md:text-2xl z-20'>Meet me</h1>
        <AiOutlineMenu size={25} className='z-20 text-white cursor-pointer' onClick={handleNav} />
        <div className={nav ? "ease-in duration-100 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10" : 'absolute top-0 left-[100%] h-screen ease-in duration-100 z-100'}>
          <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
            <li className='font-bold text-3xl p-8'><Link to='/'>Home</Link></li>
            <li className='font-bold text-3xl p-8'><Link to='meetme/projects'>Projects</Link></li>
            <li className='font-bold text-3xl p-8'><Link to='meetme/about'>About</Link></li>
            <li className='font-bold text-3xl p-8'><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className='w-full h-screen flex flex-row gap-2'>
        <img src={hero} alt="" className='top-0 left-0 w-full h-screen object-contain sm:object-fill rounded-md md:hidden' />
        <div className='bg-black/30 absolute left-0 top-0 w-full h-screen' />
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white md:relative'>
          <div className='md:max-w-[1100px] m-auto absolute p-4 '>
            <h1 className='font-bold text-2xl md:text-7xl drop-shadow-2xl text-green-600'>Idah Abubakar Rex</h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>I'm a full stack web developer who is driven by a relentless pursuit of efficency. My focus remains steadfast on creating high-speed, user-friendly, visually stunning and innovative websites. I thrive in enviroments where pushing boundaries and setting new standard are the norm.</p>
            <button className='shadow-green-400 shadow-sm text-blue-500  bg-black p-2 w-[200px] hover:border-green-600 hover:border rounded-ss-[10px] rounded-ee-[10px]'><Link to='contact'>Contact Now</Link></button>
          </div>
        </div>
        <div className=' md:w-full mt-16 mr-1 flex items-center relative justify-center h-[500px]'>
        <div className='md:w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500'
            style={{backgroundImage: `url(${hero})`}}></div>
        </div>
      </div>
      <div className='max-w-[900px] m-auto px-4 p-12 grid grid-cols-4 justify-between '>
       <Link to='contact'><p className='text-[14px] font-bold text-gray-700 md:text-lg'>Contact</p></Link> 
       <Link to='meetme/about'><p className='text-[14px] font-bold text-gray-700 md:text-lg'>About</p></Link>
       <Link to='meetme/projects'><p className='text-[14px] font-bold text-gray-700 md:text-lg'>Projects</p></Link> 
        <p className='text-[14px] font-bold text-gray-700 md:text-lg'>Stacks</p>
    </div>
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/*Left side*/}
            <div className='grid grid-cols-2 grid-rows-6 h-[120vh]'>
                <img src={project1} alt="" className='object-cover w-full h-full p-2 row-span-3' />
                <img src={planImg2} alt="" className='object-cover w-full h-full p-2 row-span-2' />
                <img src={planImg3} alt="" className='object-cover w-full h-full p-2 row-span-2' />
                <img src={cinco} alt="" className='object-cover w-full h-full p-2 row-span-3' />
                <img src={planImg5} alt="" className='object-cover w-full h-full p-2 row-span-2' />
            </div>
            {/* Right side*/}
            <div className='flex flex-col h-full justify-center text-gray-600'>
                <h3 className='text-5xl md:text-6xl font-bold'>Projects</h3>
                <p className='mt-10 pb-6'>I have a gallery of projects built using the professional industry standard practices, speed, simplicity, visually impressive and all round efficiency are some of the perks of each and everyone of them
                </p>
                <Link to='meetme/projects'>  <button className='shadow-green-400 shadow-sm text-blue-500 rounded-md p-2 w-[200px] hover:border-green-600 hover:border'>Projects</button></Link> 
            </div>
        </div>
        <div className='m-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group md:hidden'>
            <div 
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500 rounded-md'
            style={{backgroundImage: `url(${slides[currenIndex].images})`}}></div>
            {/*Left arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
                <AiOutlineArrowLeft size={30} onClick={prevSlide}/>
            </div>
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
                <AiOutlineArrowRight size={30} onClick={nextSlide}/>
            </div>
            {/*Right arrow */}

            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slidesIndex) =>(
                    <div className='text-2xl cursor-pointer' key={slidesIndex} onClick={()=>goToSlides(slidesIndex)}>
                        <RxDotFilled style={{color:'gray'}}/>
                    </div>
                ))}
            </div>
        </div>
        <div className='w-full pt-24 bg-gray-900 text-gray-300 py-2 px-2'>
        <div className='flex flex-col max-w-[1400px] px-2 py-4 justify-between sm: flex-row text-center text-gray-500'>
            <p className='py-4'>2022 Experiences, LLC. All rights reserved</p>
            <div className='flex justify-start gap-5 w-[150px] sm:w-[300px] pt-4 text-2xl items-center'>
                <FaGithub/>
                <FaLinkedin size={30}/>
            </div>
        </div>
    </div>
    </div>

  )
}

export default LandingPage