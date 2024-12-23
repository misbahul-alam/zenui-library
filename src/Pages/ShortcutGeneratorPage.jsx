import React from 'react';

// components
import ShortcutGenerator from "../ShortcutGenerator/Index.jsx";
import Navbar from "../Components/Home/Navbar.jsx";
import Footer from "../Components/Home/Footer.jsx";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";

const ShortcutGeneratorPage = () => {
    return (
        <div className='dark:bg-darkBgColor transition-all duration-500'>
            <Navbar/>
            <MobileNavbar/>
            <ShortcutGenerator />
            <Footer/>
        </div>
    );
};

export default ShortcutGeneratorPage;
