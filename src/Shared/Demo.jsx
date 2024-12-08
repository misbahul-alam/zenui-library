import React from "react";

// react icons
import {HiArrowRight} from "react-icons/hi";

const AdsCard = () => {
    
    return (
        <div
            className="wful md:w-[90%] bg-gray-900 flex flex-col justify-center min-h-[260px] overflow-hidden rounded-md relative px-7 md:px-12">

            {/* coupon */}
            <span
                className="py-1 md:py-2 font-semibold px-3 md:px-4 rounded-md absolute right-4 md:right-6 z-20 top-4 md:top-6 bg-[#EFD33D]">29% OFF</span>

            {/* offer details */}
            <div className="w-full md:w-[45%] z-30">
                <p className="text-[1rem] font-[300] text-[#EBC80C]">Summer Sales</p>
                <h4 className="text-[1.5rem] mt-2 font-medium text-white">New Google Pixel 6 Pro</h4>

                <button
                    className="py-2 px-5 text-white font-medium mt-5 group hover:bg-[#ed6104] transition-all duration-300 text-[1rem] flex items-center gap-[10px] bg-[#FA8232] rounded-md">
                    Shop Now
                    <HiArrowRight
                        className="text-[1.3rem] group-hover:ml-1 transition-all duration-300"/>
                </button>
            </div>

            {/* product image */}
            <img alt="product/image" src="https://i.ibb.co.com/WWTSSbm/image-5-1.png"
                 className="w-[130px] md:w-[220px] absolute right-0 bottom-0"/>

        </div>
    );
};

export default AdsCard;
