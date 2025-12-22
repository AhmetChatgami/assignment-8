import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='font max-w-screen-xl mx-auto w-full px-4 lg:px-12 py-8 lg:py-4 flex-1'>
            <Outlet />

            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;