import React from 'react';
import { useLoaderData } from 'react-router';
import AppsCard from './AppsCard';

const Home = () => {
    const appsData = useLoaderData();
    return (
        <div>
              
              <div>

              <h1 className='text-4xl font-bold text-center my-8'>We Build <br /> <span className='linear-from-[#632EE3]-to-[#9F62F2] text-[#632EE3]'>Productive</span> Apps</h1>

              <p className='text-center py-4'> At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
              </div>



           <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
             {appsData.map(app => (<AppsCard key={app.id} app={app}></AppsCard>))}
           </div>
        </div>
    );
};

export default Home;