import React from 'react';

// components
import AIGenerator from "../AIGenerator/Index.jsx"
import Navbar from "../Components/Home/Navbar.jsx";
import Footer from "../Components/Home/Footer.jsx";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";

const AIGeneratorPage = () => {
    return (
        <div className='dark:bg-darkBgColor'>
            <Navbar/>
            <MobileNavbar/>
            <AIGenerator />
            <Footer/>
        </div>
    );
};

export default AIGeneratorPage;
