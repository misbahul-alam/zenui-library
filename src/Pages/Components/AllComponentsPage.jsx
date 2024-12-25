import React from "react";

// components
import Navbar from "../../Components/Home/Navbar";
import Sidebar from "../../Components/Overview/Sidebar";
import AllComponents from "../../Components/Overview/SidebarContent/Content/AllComponents";
import MobileNavbar from "../../Components/Home/MobileNavbar.jsx";
import MobileSidebar from "../../Components/Overview/Sidebar/MobileSidebar.jsx";

const AllComponentsPage = () => {
  return (
    <div className='dark:bg-darkBgColor'>
      <Navbar />
        <MobileNavbar/>
      <div className="flex w-full mx-auto max-w-[1700px]">
        <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[18%] 1024px:mr-[3rem]">
          <Sidebar startContent={2} />
        </div>

        <div className="w-full max-h-[89vh] min-h-[89vh] overflow-y-auto pt-[5rem] 640px:pt-[5rem] 640px:py-[10rem] 1024px:py-[2rem] 1024px:px-[0.5rem] relative" style={{scrollbarWidth: 'none'}}>
            <MobileSidebar startContent={2}/>
          <AllComponents />
        </div>
      </div>
    </div>
  );
};

export default AllComponentsPage;
