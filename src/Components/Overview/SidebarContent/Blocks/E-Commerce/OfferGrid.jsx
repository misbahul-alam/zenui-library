import React, {useEffect, useState} from "react";

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

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const targetDate = '2024-12-31T23:59:59'

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate) - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft(); // Initial call

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (number) => number.toString().padStart(2, '0');

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

                            <div className='grid grid-cols-1 1024px:grid-cols-2 gap-[15px] w-full 640px:w-[80%] min-h-[550px]'>

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

                            <div className='grid grid-cols-1 1024px:grid-cols-4 gap-[15px] w-full 640px:w-[80%] min-h-[400px]'>

                                <div
                                    className='col-span-1 1024px:col-span-2 overflow-hidden flex justify-between flex-col rounded-sm row-span-1 1024px:row-span-2 h-[170px] bg-black 1024px:h-full py-8 relative'>

                                    <div className='px-8 absolute bottom-8 z-20 w-full 1024px:w-[70%]'>
                                        <h4 className='text-[1.1rem] font-medium text-white'>PlayStation 5</h4>
                                        <p className='text-[0.8rem] mt-3 text-[#FAFAFA] font-[300]'>Black and White version of the PS5 coming out on sale.</p>
                                        <button
                                            className='w-max text-[#FAFAFA] font-[300] hover:text-[#0FABCA] hover:border-[#0FABCA] mt-3 transition-all duration-300 border-[#FAFAFA] text-[0.8rem] group border-b'>
                                            Shop Now
                                        </button>
                                    </div>

                                    <img alt='product/image' src='https://i.ibb.co.com/g9qmJxg/ps5-slim-goedkope-playstation-large-1.png'
                                         className='w-[350px] absolute bottom-0 left-[50%] transform translate-x-[-50%]'/>
                                </div>

                                <div
                                    className='bg-black rounded-sm col-span-1 1024px:col-span-2 flex justify-between items-center px-4 overflow-hidden relative min-h-[190px]'>

                                    <div className='absolute bottom-6 left-6 z-20 w-[70%] 1024px:w-[50%]'>
                                        <h4 className='text-[1.1rem] font-medium text-white'>Women’s Collections</h4>
                                        <p className='text-[0.8rem] mt-3 text-[#FAFAFA] font-[300]'>Featured woman collections that give you another vibe.</p>
                                        <button
                                            className='w-max text-[#FAFAFA] font-[300] hover:text-[#0FABCA] hover:border-[#0FABCA] mt-3 transition-all duration-300 border-[#FAFAFA] text-[0.8rem] group border-b'>
                                            Shop Now
                                        </button>
                                    </div>

                                    <img alt='product/image'
                                         src='https://i.ibb.co.com/7ghML0N/attractive-woman-wearing-hat-posing-black-background-1.png'
                                         className='w-[300px] absolute bottom-0 right-0'/>

                                </div>

                                <div
                                    className='bg-black rounded-sm col-span-1 flex justify-between items-center px-4 overflow-hidden relative min-h-[180px]'>

                                    <div className='absolute bottom-4 z-20 w-[90%]'>
                                        <h4 className='text-[1.1rem] font-medium text-white'>Speakers</h4>
                                        <p className='text-[0.8rem] mt-0.5 text-[#FAFAFA] font-[300]'>Amazon wireless speakers</p>
                                        <button
                                            className='w-max text-[#FAFAFA] font-[300] hover:text-[#0FABCA] hover:border-[#0FABCA] mt-2 transition-all duration-300 border-[#FAFAFA] text-[0.8rem] group border-b'>
                                            Shop Now
                                        </button>
                                    </div>

                                    <img alt='product/image'
                                         src='https://i.ibb.co.com/fd8DJYZ/69-694768-amazon-echo-png-clipart-transparent-amazon-echo-png-1.png'
                                         className='w-[120px] absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]'/>

                                </div>

                                <div
                                    className='bg-black rounded-sm col-span-1 flex justify-between items-center px-4 overflow-hidden relative min-h-[180px]'>

                                    <div className='absolute bottom-4 z-20 w-[90%]'>
                                        <h4 className='text-[1.1rem] font-medium text-white'>Perfume</h4>
                                        <p className='text-[0.8rem] mt-0.5 text-[#FAFAFA] font-[300]'>GUCCI INTENSE OUD EDP</p>
                                        <button
                                            className='w-max text-[#FAFAFA] font-[300] hover:text-[#0FABCA] hover:border-[#0FABCA] mt-2 transition-all duration-300 border-[#FAFAFA] text-[0.8rem] group border-b'>
                                            Shop Now
                                        </button>
                                    </div>

                                    <img alt='product/image'
                                         src='https://i.ibb.co.com/WxYLjFy/652e82cd70aa6522dd785109a455904c.png'
                                         className='w-[130px] absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]'/>

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

                            <div className="grid grid-cols-1 1024px:grid-cols-4 w-full 1024px:h-[450px]">

                                <div
                                    className='col-span-1 1024px:col-span-2 overflow-hidden flex justify-between flex-col rounded-sm row-span-1 1024px:row-span-2 bg-white h-[180px] 1024px:h-full py-8 relative'>

                                    <div className='px-8 absolute top-[50%] translate-y-[-50%] 1024px:right-7 z-20 w-full 1024px:w-[60%]'>
                                        <h4 className='text-[1.5rem] font-medium text-white 1024px:text-gray-900'>PlayStation 5</h4>
                                        <p className='text-[0.8rem] mt-1 text-[#909090] font-[300]'>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                                    </div>

                                    <img alt='product/image'
                                         src='https://i.ibb.co.com/g9qmJxg/ps5-slim-goedkope-playstation-large-1.png'
                                         className='w-[230px] absolute -left-12 top-[50%] transform translate-y-[-50%]'/>
                                </div>

                                <div
                                    className='bg-[#EDEDED] rounded-sm col-span-1 1024px:col-span-2 flex justify-between items-center px-4 overflow-hidden h-full row-span-3 relative'>

                                    <div className='p-4 1024px:pl-5 z-30 w-full 1024px:w-[60%]'>
                                        <h4 className='text-[2rem] font-[300] text-gray-900'>Macbook <b className='text-gray-900 font-semibold'>Air</b></h4>
                                        <p className='text-[0.8rem] mt-1 text-[#909090] font-[300]'>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                                        <button
                                            className='w-max py-2 px-6 rounded-md border border-gray-900 text-gray-900 text-[0.9rem] hover:bg-gray-900 transition-all duration-300 hover:text-white mt-5'>
                                            Shop Now
                                        </button>
                                    </div>

                                    <img alt='product/image'
                                         src='https://i.ibb.co.com/JKqHn1w/Mac-Book-Pro-14.png'
                                         className='w-[100px] 1024px:w-[180px] absolute top-[50%] transform translate-y-[-50%] right-0'/>

                                </div>

                                <div
                                    className='overflow-hidden flex justify-between flex-col rounded-sm bg-[#EDEDED] py-8 relative min-h-[140px]'>

                                    <div className='absolute top-[50%] transform translate-y-[-50%] right-6 z-200 w-[70%] 1024px:w-[50%] z-30'>
                                        <h4 className='text-[1.3rem] font-[300] text-gray-900'>Apple <br/>
                                            AirPods <b className='font-semibold'>Max</b></h4>
                                        <p className='text-[0.8rem] mt-1 text-[#909090] font-[300]'>Computational audio. Listen, it's powerful</p>
                                    </div>

                                    <img alt='product/image'
                                         src='https://i.ibb.co.com/BKfpK5b/hero-gnfk5g59t0qe-xlarge-2x-1.png'
                                         className='w-[80px] absolute top-[50%] left-0 transform translate-y-[-50%]'/>
                                </div>

                                <div
                                    className='overflow-hidden flex justify-between flex-col rounded-sm bg-[#353535] py-8 relative min-h-[140px] h-full'>

                                    <div className='absolute top-[50%] translate-y-[-50%] right-6 z-20 w-[70%] 1024px:w-[50%]'>
                                        <h4 className='text-[1.1rem] font-[300] text-white'>Apple <br/>
                                            Vision <b className='font-semibold'>Pro</b></h4>
                                        <p className='text-[0.8rem] mt-1 text-[#909090] font-[300]'>An immersive way to experience entertainment</p>
                                    </div>

                                    <img alt='product/image'
                                         src='https://i.ibb.co.com/Bq7NGbQ/image-36-1.png'
                                         className='w-[100px] absolute left-0 top-[50%] transform translate-y-[-50%]'/>
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

                            <div className='grid grid-cols-1 1024px:grid-cols-2 rounded-md'>

                                <img alt='product/image' src='https://i.ibb.co.com/wpZ3Vhc/Paste-image.png'
                                     className='w-full h-full rounded-t-md 1024px:rounded-l-md'/>

                                <div className='bg-[#ffd37c] rounded-b-md 1024px:rounded-r-md p-5 1024px:p-12'>
                                    <span className='text-[0.9rem] font-semibold text-blue-600'>PROMOTION</span>
                                    <h4 className='text-[1.5rem] 1024px:text-[1.8rem] font-medium mt-2'>Hurry up! 40% OFF</h4>
                                    <p className='text-[0.9rem] font-normal text-gray-900 mt-2'>Thousands of high tech
                                        are waiting for you</p>

                                    <div className='mt-5'>
                                        <p className='text-[0.9rem] font-normal text-gray-900'>Offer expires in:</p>
                                        <div className='flex items-center gap-[10px] mt-2'>
                                            <div className='flex items-center justify-center flex-col'>
                                                <h5 className='py-1.5 1024px:py-2 px-2.5 1024px:px-3 bg-white rounded-sm text-[1.3rem] font-semibold'>{formatNumber(timeLeft.days)}</h5>
                                                <span className='text-[0.7rem]'>Days</span>
                                            </div>
                                            <div className='flex items-center justify-center flex-col'>
                                                <h5 className='py-1.5 1024px:py-2 px-2.5 1024px:px-3 bg-white rounded-sm text-[1.3rem] font-semibold'>{formatNumber(timeLeft.hours)}</h5>
                                                <span className='text-[0.7rem]'>Hours</span>
                                            </div>
                                            <div className='flex items-center justify-center flex-col'>
                                                <h5 className='py-1.5 1024px:py-2 px-2.5 1024px:px-3 bg-white rounded-sm text-[1.3rem] font-semibold'>{formatNumber(timeLeft.minutes)}</h5>
                                                <span className='text-[0.7rem]'>Minutes</span>
                                            </div>
                                            <div className='flex items-center justify-center flex-col'>
                                                <h5 className='py-1.5 1024px:py-2 px-2.5 1024px:px-3 bg-white rounded-sm text-[1.3rem] font-semibold'>{formatNumber(timeLeft.seconds)}</h5>
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

                            <div className='flex flex-col 1024px:flex-row justify-between items-center w-full 1024px:py-4 py-6 px-6 1024px:px-8 gap-[20px] 1024px:gap-0 rounded-md bg-[#FFE7D6]'>

                                <div className='w-full 1024px:w-[30%] 1024px:pl-6'>

                                    <span className='bg-[#2DA5F3] rounded-sm py-1.5 px-3 text-[0.8rem] font-normal text-white'>SAVE UP TO $200.00</span>

                                    <h4 className='text-[1.7rem] 1024px:text-[2rem] mt-2 font-semibold text-gray-800'>Macbook Pro</h4>

                                    <p className='text-[1rem] mt-2 1024px:mt-3 text-gray-700'>Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage</p>

                                    <button
                                        className='bg-[#FA8232] flex items-center gap-[10px] py-2 px-4 rounded-sm text-white text-[0.9rem] mt-3 uppercase group'>
                                        Shop Now
                                        <HiArrowRight className='group-hover:ml-1 transition-all duration-200'/>
                                    </button>
                                </div>

                                <div className='relative'>

                                    <p className='bg-[#FFCEAD] text-gray-900 p-4 rounded-full w-[80px] h-[80px] flex items-center justify-center font-medium border-4 border-white absolute top-1 1024px:top-3 -left-3'>$1999</p>

                                    <img alt='product/image' src='https://i.ibb.co.com/zSm0TRR/Image-6.png'
                                         className='w-[350px] rounded-l-md'/>

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
