import React, { useState } from 'react';

// react helmet
import { Helmet } from 'react-helmet';

// components
import ContentHeader from '../../../../../../Shared/ContentHeader.jsx';
import OverviewFooter from '../../../../../../Shared/OverviewFooter.jsx';
import Showcode from '../../../../../../Shared/ShowCode.jsx';

// contents for scrollspy
import {comparisonContents} from '../../../../../../Utils/ContentsConfig/SurfacesContents.js';
import { useScrollSpy } from '../../../../../../CustomHooks/useScrollSpy.js';
import {useToggleCardView} from "../../../../../../CustomHooks/ButtonToggle.js";

import VerticalComparisonExample from "./VerticalComparisonExample.jsx";
import HorizontalComparisonExample from "./HorizontalComparisonExample.jsx";

const Index = () => {
    const sectionIds = comparisonContents.map((item) => item.href.slice(1));
    const activeSection = useScrollSpy(sectionIds);

    const toggle = useToggleCardView()

    // toggle
    const [verticalComparisonPreview, setVerticalComparisonPreview] = useState(true);
    const [verticalComparisonCode, setVerticalComparisonCode] = useState(false);

    const [horizontalComparisonPreview, setHorizontalComparisonPreview] = useState(true);
    const [horizontalComparisonCode, setHorizontalComparisonCode] = useState(false);;

    return (
        <>
            <aside className='flex items-start gap-6 justify-between w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
                <div className='w-full 425px:w-[80%]'>

                    <ContentHeader id='vertical_comparison' text={'Vertical comparison'} />

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        Compare items side-by-side in a vertical layout for clear and easy analysis.
                    </p>

                    {/* First Index Container */}
                    <div className='w-full 425px:w-[90%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${verticalComparisonPreview
                                    ? 'translate-x-[0px] !w-[100px]'
                                    : 'translate-x-[106px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${verticalComparisonPreview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggle(setVerticalComparisonPreview, setVerticalComparisonCode, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${verticalComparisonCode && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggle(setVerticalComparisonPreview, setVerticalComparisonCode, false)}
                            >
                                Code
                            </button>
                        </div>

                        {verticalComparisonPreview && (
                            <div className='p-8 mb-4 flex flex-col items-center gap-5 h-[400px] justify-center'>
                                <VerticalComparisonExample/>
                            </div>
                        )}

                        {verticalComparisonCode && (
                            <Showcode
                                code='
import { useState, useRef, useEffect } from "react";

const VerticalComparisonCard = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);
    const isDragging = useRef(false);

    // handle mouse down event
    const handleMouseDown = (e) => {
        isDragging.current = true;
        handleMouseMove(e);
    };

    // handle sliding via tracking the mouse move
    const handleMouseMove = (e) => {
        if (!isDragging.current) return;

        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const position = (y / rect.height) * 100;

        setSliderPosition(Math.min(Math.max(0, position), 100));
    };

    // handle mouse up and stop the dragging state
    const handleMouseUp = () => {
        isDragging.current = false;
    };

    // handle touch move for mobile devices
    const handleTouchMove = (e) => {
        if (!isDragging.current) return;

        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const y = e.touches[0].clientY - rect.top;
        const position = (y / rect.height) * 100;

        setSliderPosition(Math.min(Math.max(0, position), 100));
    };

    useEffect(() => {
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchend", handleMouseUp);
        window.addEventListener("touchmove", handleTouchMove);

        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchend", handleMouseUp);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full select-none overflow-hidden"
        >
            {/* Before Image */}
            <img
                src="https://i.ibb.co.com/YXzxRBv/before.png"
                alt="Before"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* After Image */}
            <div
                className="absolute top-0 left-0 w-full overflow-hidden"
                style={{ height: `${sliderPosition}%` }}
            >
                <img
                    src="https://i.ibb.co.com/1ZKL4wK/after.png"
                    alt="After"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            </div>

            {/* Slider Line */}
            <div
                className="absolute left-0 right-0 h-1 translate-y-[-50%] bg-white cursor-ns-resize"
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
                style={{
                    top: `${sliderPosition}%`,
                }}
            >
                {/* Slider Handle */}
                <div
                    className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] bg-[#0FABCA] border-white"
                >
                    <div className="flex h-full items-center justify-center rotate-90">
                        <div className="w-4 flex justify-evenly gap-[5px]">
                            <div className="w-[2.5px] h-3 bg-white"></div>
                            <div className="w-[2px] h-3 bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerticalComparisonCard;
                                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader id='horizontal_comparison' text={'Horizontal comparison'} />
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        Compare items side-by-side in a horizontal layout for clear and easy analysis.
                    </p>

                    {/* First Index Container */}
                    <div className='w-full 425px:w-[90%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${horizontalComparisonPreview
                                    ? 'translate-x-[0px] !w-[100px]'
                                    : 'translate-x-[106px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${horizontalComparisonPreview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggle(setHorizontalComparisonPreview, setHorizontalComparisonCode, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${verticalComparisonCode && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggle(setHorizontalComparisonPreview, setHorizontalComparisonCode, false)}
                            >
                                Code
                            </button>
                        </div>

                        {horizontalComparisonPreview && (
                            <div className='p-8 mb-4 flex flex-col items-center gap-5 h-[400px] justify-center'>
                                <HorizontalComparisonExample/>
                            </div>
                        )}

                        {horizontalComparisonCode && (
                            <Showcode
                                code='
import { useState, useRef, useEffect } from "react";

const HorizontalComparisonCard = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);
    const isDragging = useRef(false);

    // handle mouse down event
    const handleMouseDown = (e) => {
        isDragging.current = true;
        handleMouseMove(e);
    };

    // handle sliding via tracking the mouse move
    const handleMouseMove = (e) => {
        if (!isDragging.current) return;

        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const position = (x / rect.width) * 100;

        setSliderPosition(Math.min(Math.max(0, position), 100));
    };

    // handle mouse up and stop the dragging state
    const handleMouseUp = () => {
        isDragging.current = false;
    };

    // handle touch move for mobile devices
    const handleTouchMove = (e) => {
        if (!isDragging.current) return;

        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const position = (x / rect.width) * 100;

        setSliderPosition(Math.min(Math.max(0, position), 100));
    };

    useEffect(() => {
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchend", handleMouseUp);
        window.addEventListener("touchmove", handleTouchMove);

        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchend", handleMouseUp);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full select-none overflow-hidden"
        >
            {/* Before Image */}
            <img
                src="https://i.ibb.co.com/YXzxRBv/before.png"
                alt="Before"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* After Image */}
            <div
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
            >
                <img
                    src="https://i.ibb.co.com/1ZKL4wK/after.png"
                    alt="After"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            </div>

            {/* Slider Line */}
            <div
                className="absolute top-0 bottom-0 w-1 translate-x-[-50%] bg-white cursor-ew-resize"
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
                style={{
                    left: `${sliderPosition}%`,
                }}
            >
                {/* Slider Handle */}
                <div
                    className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] bg-[#0FABCA] border-white"
                >
                    <div className="flex h-full items-center justify-center">
                        <div className="w-4 flex justify-evenly gap-[5px]">
                            <div className="w-[2.5px] h-3 bg-white"></div>
                            <div className="w-[2px] h-3 bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalComparisonCard;
                                '
                            />
                        )}
                    </div>

                    <OverviewFooter
                        backUrl='/components/drag-and-drop'
                        backName='Drag & Drop'
                        forwardName='Cards'
                        forwardUrl='/components/cards'
                    />
                </div>

                <div className='1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[35%]'>
                    <h2 className='text-[0.9rem] font-[600] text-text tracking-widest'>
                        CONTENTS
                    </h2>
                    {comparisonContents.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className={`${activeSection === item.href.slice(1) &&
                            '!text-primary !border-primary'
                            } text-[0.9rem] text-text border-l border-transparent pl-4`}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </aside>
            <Helmet>
                <title>Surfaces - Comparison Card</title>
            </Helmet>
        </>
    );
};

export default Index;
