import React from 'react';

// components
import OpacityPalette from "../OpacityPalette/Index.jsx";
import Navbar from "../Components/Home/Navbar.jsx";
import Footer from "../Components/Home/Footer.jsx";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";

const OpacityPalettePage = () => {
    return (
        <div className='dark:bg-darkBgColor transition-all duration-500'>
            <Navbar/>
            <MobileNavbar/>
           <OpacityPalette />
            <Footer/>
        </div>
    );
};

export default OpacityPalettePage;
