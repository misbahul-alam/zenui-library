import React, { useState } from 'react';

// components
import OverviewFooter from '../../../../../Shared/OverviewFooter';
import ContentHeader from '../../../../../Shared/ContentHeader';

// contents for scrollspy
import { radioInputContents } from '../../../../../Utils/ContentsConfig/InputContents';
import { useScrollSpy } from '../../../../../CustomHooks/useScrollSpy';

// react helmet
import { Helmet } from 'react-helmet';

// showing the code
import Showcode from '../../../../../Shared/ShowCode';
import {BsArrowRight} from "react-icons/bs";

const AdsCard = () => {
    // const [contentActiveTab, setContentActiveTab] = useState(0);
    const sectionIds = radioInputContents.map((item) => item.href.slice(1));
    const activeSection = useScrollSpy(sectionIds);

    // circle radio
    const [circlePreview, setCirclePreview] = useState(true);
    const [circleCode, setCircleCode] = useState(false);

    const handleCirclePreview = () => {
        setCirclePreview(true);
        setCircleCode(false);
    };

    const handleCircleCode = () => {
        setCircleCode(true);
        setCirclePreview(false);
    };

    // square radio
    const [squarePreview, setSquarePreview] = useState(true);
    const [squareCode, setSquareCode] = useState(false);

    const handleSquarePreview = () => {
        setSquarePreview(true);
        setSquareCode(false);
    };

    const handleSquareCode = () => {
        setSquareCode(true);
        setSquarePreview(false);
    };

    return (
        <>
            <aside className='flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
                <div>
                    <ContentHeader text={'circle radio'} id={'circle_radio'} />

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        This is a circle radio button component. Select options with a click
                        on the elegant circular design.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    circlePreview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[105px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    circlePreview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleCirclePreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    circleCode && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleCircleCode}
                            >
                                Code
                            </button>
                        </div>
                        {circlePreview && (
                            <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                                <div className='w-[62%] bg-[#F7E99E] rounded-md p-6 text-center'>
                                    <img alt='product/image' src='https://i.ibb.co.com/qrzTZqK/Image-5.png' className='w-[150px] mx-auto'/>
                                    <h3 className='text-[1.6rem] leading-[35px] font-semibold'>Xiaomi True Wireless Earbuds</h3>
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

                        {circleCode && (
                            <Showcode
                                code='
                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader text={'Square Radio'} id={'square_radio'} />
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        This is a square radio button component. Choose options by clicking
                        on the modern, square design.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    squarePreview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[105px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    squarePreview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleSquarePreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    squareCode && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleSquareCode}
                            >
                                Code
                            </button>
                        </div>
                        {squarePreview && (
                            <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                                <div className='bg-[#F2F4F5] p-8 gap-[15px] w-full rounded-md flex items-center justify-between'>
                                    <div className='w-[55%]'>
                                        <span className='py-1.5 px-4 text-[0.8rem] rounded-md bg-blue-400 text-white'>INTRODUCING</span>
                                        <h3 className='text-[1.4rem] font-semibold text-gray-900 my-2'>New Apple Homepod Mini</h3>
                                        <p className='text-[0.9rem] text-gray-700 mb-4'>Jam-packed with innovation, HomePod mini delivers unexpectedly.</p>
                                        <button
                                            className='group w-max flex items-center gap-[10px] bg-[#FA8232] text-white py-2.5 rounded-md hover:bg-[#DE732D] transition-all duration-300 px-8 justify-center'>
                                            Shop now
                                            <BsArrowRight className='group-hover:ml-1 transition-all duration-300'/>
                                        </button>
                                    </div>
                                    <div className='w-[40%]'>
                                        <img alt='product/image' src='https://i.ibb.co.com/jyffZqg/image-6.png'
                                             className=''/>
                                    </div>
                                </div>
                            </div>
                        )}

                        {squareCode && (
                            <Showcode
                                code='
                '
                            />
                        )}
                    </div>

                    <OverviewFooter
                        backUrl='/components/input-select'
                        backName='select'
                        forwardName='range'
                        forwardUrl='/components/input-range'
                    />
                </div>

                <div className='1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]'>
                    <h2 className='text-[0.9rem] font-[600] text-text tracking-widest'>
                        CONTENTS
                    </h2>
                    {radioInputContents.map((item) => (
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
                <title>Form - Radio</title>
            </Helmet>
        </>
    );
};

export default AdsCard;
