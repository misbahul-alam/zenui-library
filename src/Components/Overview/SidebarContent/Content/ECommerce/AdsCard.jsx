import React, { useState } from 'react';

// components
import OverviewFooter from '../../../../../Shared/OverviewFooter';
import ContentHeader from '../../../../../Shared/ContentHeader';

// contents for scrollspy
import { useScrollSpy } from '../../../../../CustomHooks/useScrollSpy';

// react helmet
import { Helmet } from 'react-helmet';

// showing the code
import Showcode from '../../../../../Shared/ShowCode';
import {BsArrowRight} from "react-icons/bs";
import {MdKeyboardArrowRight} from "react-icons/md";
import {HiArrowRight} from "react-icons/hi";

// sidebar contents
import {adsCardContents} from "../../../../../Utils/ContentsConfig/ECommerceContents.js";

import {useToggleCardView} from "../../../../../CustomHooks/ButtonToggle.js";

const AdsCard = () => {
    // const [contentActiveTab, setContentActiveTab] = useState(0);
    const sectionIds = adsCardContents.map((item) => item.href.slice(1));
    const activeSection = useScrollSpy(sectionIds);

    // toggle actions
    const toggleCardView = useToggleCardView();

    const[adsCard1Preview, setAdsCard1Preview] = useState(true);
    const[adsCard1Code, setAdsCard1Code] = useState(false);

    const[adsCard2Preview, setAdsCard2Preview] = useState(true);
    const[adsCard2Code, setAdsCard2Code] = useState(false);

    const[adsCard3Preview, setAdsCard3Preview] = useState(true);
    const[adsCard3Code, setAdsCard3Code] = useState(false);

    const[adsCard4Preview, setAdsCard4Preview] = useState(true);
    const[adsCard4Code, setAdsCard4Code] = useState(false);

    const[adsCard5Preview, setAdsCard5Preview] = useState(true);
    const[adsCard5Code, setAdsCard5Code] = useState(false);

    const[adsCard6Preview, setAdsCard6Preview] = useState(true);
    const[adsCard6Code, setAdsCard6Code] = useState(false);

    return (
        <>
            <aside className='flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
                <div>
                    <ContentHeader text={'ads card 1'} id={'ads_card_1'} />

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        E-commerce ad cards highlight products with an image, price, discount, and a "Buy Now" button for easy shopping.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    adsCard1Preview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[105px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    adsCard1Preview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setAdsCard1Preview, setAdsCard1Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    adsCard1Code && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setAdsCard1Preview, setAdsCard1Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {adsCard1Preview && (
                            <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                                <div className='w-full 640px:w-[62%] bg-[#F7E99E] rounded-md p-4 640px:p-6 text-center'>
                                    <img alt='product/image' src='https://i.ibb.co.com/qrzTZqK/Image-5.png' className='w-[150px] mx-auto'/>
                                    <h3 className='text-[1.3rem] 640px:text-[1.6rem] leading-[28px] 640px:leading-[35px] font-semibold'>Xiaomi True Wireless Earbuds</h3>
                                    <p className='text-gray-700 mt-2'>Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.</p>
                                    <div className='flex items-center justify-center my-5 gap-[10px]'>
                                        <p className='text-[1rem] text-gray-700'>Only for:</p>
                                        <span className='py-1.5 px-3 bg-white rounded-md font-semibold text-gray-900 text-[0.9rem]'>$299 USD</span>
                                    </div>
                                    <button className='group flex items-center gap-[10px] w-full bg-[#FA8232] text-white py-2.5 rounded-md hover:bg-[#DE732D] transition-all duration-300 px-4 justify-center'>
                                        Shop now
                                        <BsArrowRight className='group-hover:ml-1 transition-all duration-300'/>
                                    </button>
                                </div>
                            </div>
                        )}

                        {adsCard1Code && (
                            <Showcode
                                code='
import React from "react";

// react icons
import {BsArrowRight} from "react-icons/bs";

const AdsCard = () => {

    return (
        <div className="w-full md:w-[62%] bg-[#F7E99E] rounded-md p-4 md:p-6 text-center">
            <img alt="product/image" src="https://i.ibb.co.com/qrzTZqK/Image-5.png" className="w-[150px] mx-auto"/>
            <h3 className="text-[1.3rem] md:text-[1.6rem] leading-[28px] md:leading-[35px] font-semibold">Xiaomi
                True Wireless Earbuds</h3>
            <p className="text-gray-700 mt-2">Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.</p>
            <div className="flex items-center justify-center my-5 gap-[10px]">
                <p className="text-[1rem] text-gray-700">Only for:</p>
                <span
                    className="py-1.5 px-3 bg-white rounded-md font-semibold text-gray-900 text-[0.9rem]">$299 USD</span>
            </div>
            <button
                className="group flex items-center gap-[10px] w-full bg-[#FA8232] text-white py-2.5 rounded-md hover:bg-[#DE732D] transition-all duration-300 px-4 justify-center">
                Shop now
                <BsArrowRight className="group-hover:ml-1 transition-all duration-300"/>
            </button>
        </div>
    );
};

export default AdsCard;
                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader text={'ads card 2'} id={'ads_card_2'} />
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        E-commerce ad cards highlight products with an image, price, discount, and a "Buy Now" button for easy shopping.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    adsCard2Preview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[105px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    adsCard2Preview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setAdsCard2Preview, setAdsCard2Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    adsCard2Code && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setAdsCard2Preview, setAdsCard2Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {adsCard2Preview && (
                            <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                                <div className='bg-[#F2F4F5] p-5 640px:p-8 gap-[30px] 640px:gap-[15px] w-full rounded-md flex flex-col 640px:flex-row 640px:items-center 640px:justify-between'>
                                    <div className='w-full 640px:w-[55%]'>
                                        <span className='py-1.5 px-4 text-[0.8rem] rounded-md bg-blue-400 text-white'>INTRODUCING</span>
                                        <h3 className='text-[1.4rem] font-semibold text-gray-900 my-2'>New Apple Homepod Mini</h3>
                                        <p className='text-[0.9rem] text-gray-700 mb-4'>Jam-packed with innovation, HomePod mini delivers unexpectedly.</p>
                                        <button
                                            className='group w-max flex items-center gap-[10px] bg-[#FA8232] text-white py-2.5 rounded-md hover:bg-[#DE732D] transition-all duration-300 px-8 justify-center'>
                                            Shop now
                                            <BsArrowRight className='group-hover:ml-1 transition-all duration-300'/>
                                        </button>
                                    </div>
                                    <div className='w-[90%] mx-auto 640px:w-[40%]'>
                                        <img alt='product/image' src='https://i.ibb.co.com/jyffZqg/image-6.png'
                                             className=''/>
                                    </div>
                                </div>
                            </div>
                        )}

                        {adsCard2Code && (
                            <Showcode
                                code='
import React from "react";

// react icons
import {BsArrowRight} from "react-icons/bs";

const AdsCard = () => {

    return (
        <div
            className="bg-[#F2F4F5] p-5 md:p-8 gap-[30px] md:gap-[15px] w-full rounded-md flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="w-full md:w-[55%]">
                <span className="py-1.5 px-4 text-[0.8rem] rounded-md bg-blue-400 text-white">INTRODUCING</span>
                <h3 className="text-[1.4rem] font-semibold text-gray-900 my-2">New Apple Homepod Mini</h3>
                <p className="text-[0.9rem] text-gray-700 mb-4">Jam-packed with innovation, HomePod mini delivers
                    unexpectedly.</p>
                <button
                    className="group w-max flex items-center gap-[10px] bg-[#FA8232] text-white py-2.5 rounded-md hover:bg-[#DE732D] transition-all duration-300 px-8 justify-center">
                    Shop now
                    <BsArrowRight className="group-hover:ml-1 transition-all duration-300"/>
                </button>
            </div>
            <div className="w-[90%] mx-auto md:w-[40%]">
                <img alt="product/image" src="https://i.ibb.co.com/jyffZqg/image-6.png"
                     className=""/>
            </div>
        </div>
    );
};

export default AdsCard;
                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader text={'ads card 3'} id={'ads_card_3'} />
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        E-commerce ad cards highlight products with an image, price, discount, and a "Buy Now" button for easy shopping.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    adsCard3Preview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[105px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    adsCard3Preview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setAdsCard3Preview, setAdsCard3Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    adsCard3Code && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setAdsCard3Preview, setAdsCard3Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {adsCard3Preview && (
                            <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                                <div className='w-full 640px:w-[80%] relative'>

                                    {/* offer details */}
                                    <div className='bg-white rounded-l-md rounded-r-[60px] absolute top-3 left-3 pl-3.5 pr-6 py-1.5'>
                                        <p className='text-[1rem] text-[#0BAF9A] leading-[15px] mt-1.5'>Hot Deals!</p>
                                        <span className='text-gray-600 text-[0.9rem] tracking-wider'>Fruit & Vegetables</span>
                                    </div>

                                    <img alt='product/image' src='https://i.ibb.co.com/h7Jfs7s/div-offer-banner-1.png' className='rounded-xl'/>

                                    {/* action button */}
                                    <button className='absolute bottom-3 right-3 py-[8px] px-5 text-white bg-[#0BAF9A] rounded-full font-medium'>View Offer</button>
                                </div>
                            </div>
                        )}

                        {adsCard3Code && (
                            <Showcode
                                code='
import React from "react";

const AdsCard = () => {

    return (
        <div className="w-full md:w-[80%] relative">

            {/* offer details */}
            <div className="bg-white rounded-l-md rounded-r-[60px] absolute top-3 left-3 pl-3.5 pr-6 py-1.5">
                <p className="text-[1rem] text-[#0BAF9A] leading-[15px] mt-1.5">Hot Deals!</p>
                <span className="text-gray-600 text-[0.9rem] tracking-wider">Fruit & Vegetables</span>
            </div>

            <img alt="product/image" src="https://i.ibb.co.com/h7Jfs7s/div-offer-banner-1.png" className="rounded-xl"/>

            {/* action button */}
            <button
                className="absolute bottom-3 right-3 py-[8px] px-5 text-white bg-[#0BAF9A] rounded-full font-medium">View
                Offer
            </button>
        </div>
    );
};

export default AdsCard;
                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader text={'ads card 4'} id={'ads_card_4'} />
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        E-commerce ad cards highlight products with an image, price, discount, and a "Buy Now" button for easy shopping.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    adsCard4Preview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[105px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    adsCard4Preview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setAdsCard4Preview, setAdsCard4Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    adsCard4Code && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setAdsCard4Preview, setAdsCard4Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {adsCard4Preview && (
                            <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                                <div className='w-full 640px:w-[60%] overflow-hidden flex items-center justify-center flex-col pt-12 p-6 bg-[#0BAF9A] rounded-xl'>

                                    <h4 className='text-center text-[1.2rem] font-medium text-white'>Fresh & 100% Organic</h4>
                                    <p className='text-[1rem] text-center text-[#FFFFFF]'>farmer's market</p>

                                    <button className='py-2 px-6 rounded-md bg-white text-[#0BAF9A] font-[400] text-[1rem] mx-auto mb-5 mt-4'>Shop Now</button>

                                    <img alt='product/image' src='https://i.ibb.co.com/xfp5R3W/basket-png.png' className='w-[400px] mx-auto'/>

                                </div>
                            </div>
                        )}

                        {adsCard4Code && (
                            <Showcode
                                code='
import React from "react";

const AdsCard = () => {

    return (
        <div
            className="w-full md:w-[60%] overflow-hidden flex items-center justify-center flex-col pt-12 p-6 bg-[#0BAF9A] rounded-xl">

            <h4 className="text-center text-[1.2rem] font-medium text-white">Fresh & 100% Organic</h4>
            <p className="text-[1rem] text-center text-[#FFFFFF]">farmer"s market</p>

            <button
                className="py-2 px-6 rounded-md bg-white text-[#0BAF9A] font-[400] text-[1rem] mx-auto mb-5 mt-4">Shop
                Now
            </button>

            <img alt="product/image" src="https://i.ibb.co.com/xfp5R3W/basket-png.png" className="w-[400px] mx-auto"/>

        </div>
    );
};

export default AdsCard;
                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader text={'ads card 5'} id={'ads_card_5'} />
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        E-commerce ad cards highlight products with an image, price, discount, and a "Buy Now" button for easy shopping.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    adsCard5Preview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[105px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    adsCard5Preview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setAdsCard5Preview, setAdsCard5Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    adsCard5Code && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setAdsCard5Preview, setAdsCard5Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {adsCard5Preview && (
                            <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                                <div className='w-full 640px:w-[70%] relative'>

                                    <img alt='product/image' src='https://i.ibb.co.com/PC8s3B6/Link-2.png'
                                         className='w-full'/>

                                    <div className='absolute top-[50%] transform translate-y-[-50%] left-8'>
                                        <p className='text-[1rem] font-[300] text-gray-900'>Today Special</p>
                                        <h4 className='text-[1.3rem] mt-2 font-semibold text-gray-900'>Fruits Juice
                                            Series</h4>

                                        <button
                                            className='py-2 text-[#239698] font-semibold mt-2 group hover:underline text-[1rem] flex items-center gap-[10px]'>
                                            Shop Now
                                            <MdKeyboardArrowRight className='text-[1.3rem] group-hover:ml-1 transition-all duration-300'/>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        )}

                        {adsCard5Code && (
                            <Showcode
                                code='
import React from "react";

// react icons
import {MdKeyboardArrowRight} from "react-icons/md";

const AdsCard = () => {

    return (
        <div className="w-full md:w-[70%] relative">

            <img alt="product/image" src="https://i.ibb.co.com/PC8s3B6/Link-2.png"
                 className="w-full"/>

            <div className="absolute top-[50%] transform translate-y-[-50%] left-8">
                <p className="text-[1rem] font-[300] text-gray-900">Today Special</p>
                <h4 className="text-[1.3rem] mt-2 font-semibold text-gray-900">Fruits Juice
                    Series</h4>

                <button
                    className="py-2 text-[#239698] font-semibold mt-2 group hover:underline text-[1rem] flex items-center gap-[10px]">
                    Shop Now
                    <MdKeyboardArrowRight className="text-[1.3rem] group-hover:ml-1 transition-all duration-300"/>
                </button>
            </div>

        </div>
    );
};

export default AdsCard;
                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader text={'ads card 6'} id={'ads_card_6'} />
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        E-commerce ad cards highlight products with an image, price, discount, and a "Buy Now" button for easy shopping.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    adsCard6Preview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[105px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    adsCard6Preview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setAdsCard6Preview, setAdsCard6Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    adsCard6Code && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setAdsCard6Preview, setAdsCard6Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {adsCard6Preview && (
                            <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                                <div className='wful 640px:w-[90%] bg-gray-900 flex flex-col justify-center min-h-[260px] overflow-hidden rounded-md relative px-7 640px:px-12'>

                                    {/* coupon */}
                                    <span className='py-1 640px:py-2 font-semibold px-3 640px:px-4 rounded-md absolute right-4 640px:right-6 z-20 top-4 640px:top-6 bg-[#EFD33D]'>29% OFF</span>

                                    {/* offer details */}
                                    <div className='w-full 640px:w-[45%] z-30'>
                                        <p className='text-[1rem] font-[300] text-[#EBC80C]'>Summer Sales</p>
                                        <h4 className='text-[1.5rem] mt-2 font-medium text-white'>New Google Pixel 6 Pro</h4>

                                        <button
                                            className='py-2 px-5 text-white font-medium mt-5 group hover:bg-[#ed6104] transition-all duration-300 text-[1rem] flex items-center gap-[10px] bg-[#FA8232] rounded-md'>
                                            Shop Now
                                            <HiArrowRight
                                                className='text-[1.3rem] group-hover:ml-1 transition-all duration-300'/>
                                        </button>
                                    </div>

                                    {/* product image */}
                                    <img alt='product/image' src='https://i.ibb.co.com/WWTSSbm/image-5-1.png'
                                         className='w-[130px] 640px:w-[220px] absolute right-0 bottom-0'/>

                                </div>
                            </div>
                        )}

                        {adsCard6Code && (
                            <Showcode
                                code='
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
                '
                            />
                        )}
                    </div>

                    <OverviewFooter
                        backUrl='/components/product-card'
                        backName='product card'
                        forwardName='Code'
                        forwardUrl='/components/code'
                    />
                </div>

                <div className='1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]'>
                    <h2 className='text-[0.9rem] font-[600] text-text tracking-widest'>
                        CONTENTS
                    </h2>
                    {adsCardContents.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className={`${
                                activeSection === item.href.slice(1) &&
                                '!text-primary !border-primary'
                            } text-[0.9rem] capitalize transition-all duration-300 text-text border-l border-transparent pl-4`}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </aside>
            <Helmet>
                <title>E-Commerce - Ads Card</title>
            </Helmet>
        </>
    );
};

export default AdsCard;
