import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <div className='w-full p-4 bg-slate-950 max-w-[1400px] flex items-center flex-row justify-between'>
                <div className='text-gray-400 text-[12px] w-[80px] md:w-full md:text-2xl font-bold'>
                    <Link to='/'>     
                       Meet me
                    </Link>
                </div>
                <div className='w-[300px] flex flex-row justify-around text-[12px] md:text-[14px]'>
                    <div className=' text-gray-400'> <Link to='/'>Home</Link></div>
                    <div className=' text-gray-400'><Link to='/meetme/projects'>Projects</Link></div>
                    <div className='text-gray-400'>   <Link to='/meetme/about'>About</Link></div>
                    <div className=' text-gray-400'><Link to='/contact'>Contact</Link></div>
                </div>
            </div>
            <main className=''>
                <Outlet />
            </main>
        </div>

    )
}

export default Nav