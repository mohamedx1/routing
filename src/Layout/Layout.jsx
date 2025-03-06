import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from './../Components/Navbar';
import RightSidebar from './../Components/RightSidebar';
export default function Layout () {
    return (
        <div className=''>
            <Navbar />
            <div className='flex '>
                <RightSidebar />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
