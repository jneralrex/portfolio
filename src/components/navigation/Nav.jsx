import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <div className='w-full p-4 bg-slate-950 max-w-[1400px] flex items-center flex-row justify-between'>
                <div className='text-gray-400 text-2xl font-bold'>
                    Auth App
                </div>
                <div className='w-2/5 flex justify-around'>
                    <Link to='profile'><div className=' text-gray-400'>Profile</div></Link>
                    <Link to='about'><div className='text-gray-400'>About</div></Link>
                    <Link to='profile'><div className=' text-gray-400'>Logout</div></Link>
                </div>
            </div>
            <main className=''>
                <Outlet />
            </main>
        </div>

    )
}

export default Nav