import React from 'react';

// components
import AIGenerator from "../AIGenerator/Index.jsx"
import Navbar from "../Components/Home/Navbar.jsx";
import Footer from "../Components/Home/Footer.jsx";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";

const AIGeneratorPage = () => {
    return (
        <>
            <Navbar/>
            <MobileNavbar/>
            <AIGenerator />
            <Footer/>
        </>
    );
};

export default AIGeneratorPage;
