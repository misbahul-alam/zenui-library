import React from 'react';

import Navbar from "../Components/Home/Navbar.jsx";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";
import LazyImageReact from "../Components/LazyImagePackage/Index.jsx"
import Footer from "../Components/Home/Footer.jsx";

const LazyImagePackagePlaygroundPage = () => {
    return (
        <>
            <Navbar/>
            <MobileNavbar/>
            <LazyImageReact/>
            <Footer/>
        </>
    );
};

export default LazyImagePackagePlaygroundPage;
