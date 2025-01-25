import React from 'react';

import MobileSidebar from "../Components/Overview/Sidebar/MobileSidebar.jsx";
import Navbar from "../Components/Home/Navbar.jsx";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";
import Sidebar from "../Components/Overview/Sidebar/index.jsx";

const ContentPageLayout = ({children}) => {
    return (
        <div className='dark:bg-darkBgColor'>
            <Navbar/>
            <MobileNavbar/>
            <div className="flex w-full mx-auto max-w-[1700px]">
                <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[18%] 1024px:mr-[3rem]">
                    <Sidebar/>
                </div>

                <div
                    className="w-full h-[calc(100vh-76px)] overflow-y-auto pb-[2rem] pt-[5rem] 640px:py-[5rem] 1024px:py-[2rem] 1024px:px-[0.5rem] relative"
                    style={{scrollbarWidth: 'none'}}>
                    <MobileSidebar/>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ContentPageLayout;
