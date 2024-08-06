import React from 'react'
import Logo from '../ui/logo'
import ThemeChange from '../ui/themechange'
import Profile from '../ui/profile'
import { getServerSession } from 'next-auth'
import { NEXT_AUTH } from '@/app/lib/auth'
const AppBar = async() => {
const session = await getServerSession(NEXT_AUTH)
    return (
        <div className="navbar bg-base-100 fixed z-10 h-16 bg-opacity-95 backdrop-blur

        ">
            <Logo/>
            
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <ThemeChange/>
                <Profile session={session} />
                
            </div>
            
        </div>)
}

export default AppBar