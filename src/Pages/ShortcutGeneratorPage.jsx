import React from 'react';

// components
import ShortcutGenerator from "../ShortcutGenerator/Index.jsx";
import Navbar from "../Components/Home/Navbar.jsx";
import Footer from "../Components/Home/Footer.jsx";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";

const ShortcutGeneratorPage = () => {
    return (
        <>
            <Navbar/>
            <MobileNavbar/>
            <ShortcutGenerator />
            <Footer/>
        </>
    );
};

export default ShortcutGeneratorPage;
