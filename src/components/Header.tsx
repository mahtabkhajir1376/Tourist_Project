import React from 'react';
import Navbar from "@/components/Navbar";




function Header() {
    return (
        <div className='bg-[url("/header.png")] h-[587px] w-full bg-cover'>
            <Navbar/>
        </div>
    )
}

export default Header
