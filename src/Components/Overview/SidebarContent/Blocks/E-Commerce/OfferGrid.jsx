import React, {useState} from "react";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import {Helmet} from "react-helmet";
import BlocksShowCode from "../../../../../Shared/BlocksShowCode.jsx";

// icons
import BlocksFooter from "../../../../../Shared/BlocksFooter.jsx";

// toggle card view
import {useToggleCardView} from "../../../../../CustomHooks/ButtonToggle.js";
import {HiArrowRight} from "react-icons/hi";


const OfferGrid = () => {

    const [wrongRoute1Preview, setWrongRoute1Preview] = useState(true);
    const [wrongRoute1Code, setWrongRoute1Code] = useState(false);

    const toggleCardView = useToggleCardView()

    return (
        <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
            <div>
                <ContentHeader text={"404 page 1"} id={"empty_page_1"}/>

                <p className="w-full text-text text-[1rem]">
                    A 404 page is a custom error page that informs users the requested page is not found, often offering
                    navigation links to guide them back to the homepage or other sections.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${wrongRoute1Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                wrongRoute1Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setWrongRoute1Preview, setWrongRoute1Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                wrongRoute1Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setWrongRoute1Preview, setWrongRoute1Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {wrongRoute1Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className='grid grid-cols-2 gap-[15px] w-[80%] min-h-[550px]'>

                                <div
                                    className='col-span-1 overflow-hidden flex justify-between flex-col rounded-sm row-span-2 bg-[#f2f4f6] h-full py-8'>
                                    <div className='px-8'>
                                        <h4 className='text-[1.5rem] font-medium text-gray-900'>Living Room</h4>
                                        <button
                                            className='flex w-max items-center hover:text-[#0FABCA] hover:border-[#0FABCA] transition-all duration-300 gap-[10px] border-gray-900 text-[0.9rem] mt-2 group border-b'>
                                            Shop Now
                                            <HiArrowRight className='group-hover:ml-1 transition-all duration-200'/>
                                        </button>
                                    </div>

                                    <img alt='product/image' src='https://i.ibb.co.com/sJvBCfN/Paste-image.png'
                                         className='w-[500px]'/>
                                </div>

                                <div
                                    className='bg-[#f2f4f6] rounded-sm col-span-1 flex justify-between items-center px-4 overflow-hidden'>

                                    <div className='px-6 mt-auto pb-9'>
                                        <h4 className='text-[1.5rem] font-medium text-gray-900'>Bedroom</h4>
                                        <button
                                            className='flex w-max items-center hover:text-[#0FABCA] hover:border-[#0FABCA] transition-all duration-300 gap-[10px] border-gray-900 text-[0.9rem] mt-2 group border-b'>
                                            Shop Now
                                            <HiArrowRight className='group-hover:ml-1 transition-all duration-200'/>
                                        </button>
                                    </div>

                                    <img alt='product/image' src='https://i.ibb.co.com/qRMf20H/Paste-image.png'
                                         className='w-[200px] h-[200px]'/>

                                </div>

                                <div
                                    className='bg-[#f2f4f6] rounded-sm col-span-1 flex justify-between items-center px-4 overflow-hidden'>

                                    <div className='px-6 mt-auto pb-9'>
                                        <h4 className='text-[1.5rem] font-medium text-gray-900'>Kitchen</h4>
                                        <button
                                            className='flex w-max items-center hover:text-[#0FABCA] hover:border-[#0FABCA] transition-all duration-300 gap-[10px] border-gray-900 text-[0.9rem] mt-2 group border-b'>
                                            Shop Now
                                            <HiArrowRight className='group-hover:ml-1 transition-all duration-200'/>
                                        </button>
                                    </div>

                                    <img alt='product/image' src='https://i.ibb.co.com/L9QXpt6/Paste-image.png'
                                         className='w-[200px] h-max'/>

                                </div>

                            </div>

                        </div>
                    )}

                    {wrongRoute1Code && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"404 page 1"} id={"empty_page_1"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    A 404 page is a custom error page that informs users the requested page is not found, often offering
                    navigation links to guide them back to the homepage or other sections.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${wrongRoute1Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                wrongRoute1Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setWrongRoute1Preview, setWrongRoute1Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                wrongRoute1Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setWrongRoute1Preview, setWrongRoute1Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {wrongRoute1Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className='grid grid-cols-2 rounded-md'>

                                <img alt='product/image' src='https://i.ibb.co.com/wpZ3Vhc/Paste-image.png'
                                     className='w-full h-full rounded-l-md'/>

                                <div className='bg-[#ffd37c] rounded-r-md p-12'>
                                    <span className='text-[0.9rem] font-semibold text-blue-600'>PROMOTION</span>
                                    <h4 className='text-[1.8rem] font-medium mt-2'>Hurry up! 40% OFF</h4>
                                    <p className='text-[0.9rem] font-normal text-gray-900 mt-2'>Thousands of high tech are waiting for you</p>

                                    <div className='mt-5'>
                                        <p className='text-[0.9rem] font-normal text-gray-900'>Offer expires in:</p>
                                        <div className='flex items-center gap-[10px] mt-2'>
                                            <div className='flex items-center justify-center flex-col'>
                                                <h5 className='py-2 px-3 bg-white rounded-sm text-[1.3rem] font-semibold'>02</h5>
                                                <span className='text-[0.7rem]'>Days</span>
                                            </div>
                                            <div className='flex items-center justify-center flex-col'>
                                                <h5 className='py-2 px-3 bg-white rounded-sm text-[1.3rem] font-semibold'>12</h5>
                                                <span className='text-[0.7rem]'>Hours</span>
                                            </div>
                                            <div className='flex items-center justify-center flex-col'>
                                                <h5 className='py-2 px-3 bg-white rounded-sm text-[1.3rem] font-semibold'>45</h5>
                                                <span className='text-[0.7rem]'>Minutes</span>
                                            </div>
                                            <div className='flex items-center justify-center flex-col'>
                                                <h5 className='py-2 px-3 bg-white rounded-sm text-[1.3rem] font-semibold'>05</h5>
                                                <span className='text-[0.7rem]'>Seconds</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button className='py-2 px-6 rounded-md bg-black text-white mt-5 text-[1rem]'>Shop Now</button>
                                </div>

                            </div>

                        </div>
                    )}

                    {wrongRoute1Code && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <BlocksFooter backUrl='/blocks/newsletter-form' backName='newsletter form'
                              forwardUrl='/blocks/empty-page' forwardName='empty page'/>
            </div>


            <Helmet>
                <title>Blocks - Offer Grid</title>
            </Helmet>
        </aside>
    );
};

export default OfferGrid;
