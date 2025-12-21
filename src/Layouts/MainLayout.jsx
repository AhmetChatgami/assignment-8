import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex-1'>
            <Outlet />

            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;