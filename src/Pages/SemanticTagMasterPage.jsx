import React from 'react';

// components
import Navbar from "../Components/Home/Navbar.jsx";
import Footer from "../Components/Home/Footer.jsx";
import TagMaster from "../SemanticTagMaster/Index.jsx";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";

const ZenUIHeroDocsPage = () => {
    return (
        <div className='dark:bg-darkBgColor'>
            <Navbar/>
            <MobileNavbar/>
            <TagMaster/>
            <Footer/>
        </div>
    );
};

export default ZenUIHeroDocsPage;
