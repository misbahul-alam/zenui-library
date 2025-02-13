import React from 'react';

// components
import OpacityPalette from "../OpacityPalette/Index.jsx";
import Navbar from "../Components/Home/Navbar.jsx";
import Footer from "../Components/Home/Footer.jsx";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";
import AnimatedDarkBg from "../Shared/AnimatedDarkBg.jsx";

const OpacityPalettePage = () => {
    return (
        <div>
            <Navbar/>
            <MobileNavbar/>
            <OpacityPalette/>
            <Footer/>

            <AnimatedDarkBg/>
        </div>
    );
};

export default OpacityPalettePage;
