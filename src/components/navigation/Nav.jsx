import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <div className='w-full p-4 bg-slate-950 max-w-[1400px] flex items-center flex-row justify-between'>
                <div className='text-gray-400 text-2xl font-bold'>
                    Meet me
                </div>
                <div className='w-[300px] flex flex-row justify-around'>
                    <div className=' text-gray-400'> <Link to='/'>Home</Link></div>
                    <div className=' text-gray-400'><Link to='projects'>Projects</Link></div>
                    <div className='text-gray-400'>   <Link to='about'>About</Link></div>
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