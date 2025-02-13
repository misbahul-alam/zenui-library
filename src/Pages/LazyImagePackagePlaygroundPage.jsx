import React from 'react';

import Navbar from "../Components/Home/Navbar.jsx";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";
import LazyImageReact from "../Components/LazyImagePackage/Index.jsx"
import Footer from "../Components/Home/Footer.jsx";
import AnimatedDarkBg from "../Shared/AnimatedDarkBg.jsx";

const LazyImagePackagePlaygroundPage = () => {
    return (
        <div>
            <Navbar/>
            <MobileNavbar/>
            <LazyImageReact/>
            <Footer/>

            <AnimatedDarkBg/>
        </div>
    );
};

export default LazyImagePackagePlaygroundPage;
