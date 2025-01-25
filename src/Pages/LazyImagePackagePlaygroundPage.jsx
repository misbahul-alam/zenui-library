import React from 'react';

import Navbar from "../Components/Home/Navbar.jsx";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";
import LazyImageReact from "../Components/LazyImagePackage/Index.jsx"
import Footer from "../Components/Home/Footer.jsx";

const LazyImagePackagePlaygroundPage = () => {
    return (
        <div className='dark:bg-darkBgColor'>
            <Navbar/>
            <MobileNavbar/>
            <LazyImageReact/>
            <Footer/>
        </div>
    );
};

export default LazyImagePackagePlaygroundPage;
