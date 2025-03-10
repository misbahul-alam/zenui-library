import React, {useEffect} from 'react';

// data
import {feedbackData} from "../../Utils/FeedbackData.js";

// import aos animation
import "aos/dist/aos.css";
import AOS from "aos";

// component
import FeedbackCard from "./FeedbackCard.jsx"

const Feedback = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <section className='relative mt-12 max-w-[1700px] mx-auto'>

            <div className='absolute top-[-120px] left-[-120px] opacity-40 rotate-[-240deg] w-[550px]'>
                <img src='https://i.ibb.co/VxXFnSz/abstract-wavy-line-removebg-preview.png' alt='vector'
                     className='animation-bounce'/>
            </div>

            <div data-aos="fade-zoom-in">
                <h1 className='text-[1.5rem] 425px:text-[2.2rem] text-text dark:text-darkTextColor font-[600] text-center'>The Wall of Love</h1>
                <p className='text-[0.9rem] px-8 dark:text-darkSubTextColor 640px:text-[1.1rem] text-gray-500 w-full mx-auto text-center'>Thoughts from those who've
                    experienced <span className='text-[#0FABCA] heroText'>ZenUI</span> in action.</p>
            </div>

            <div data-aos="fade-up"
                 className='w-full px-8 425px:px-10 py-8 mt-4 640px:mt-6 grid grid-cols-1 640px:grid-cols-3 gap-[20px]'>

                <div className='flex flex-col gap-[20px]'>
                    {
                        feedbackData?.slice(0,6)?.map((feedback, index) => (
                            <FeedbackCard key={index} feedback={feedback} />
                        ))
                    }
                </div>
                <div className='flex flex-col gap-[20px]'>
                    {
                        feedbackData?.slice(6,11)?.map((feedback, index) => (
                            <FeedbackCard key={index} feedback={feedback} />
                        ))
                    }
                </div>

                <div className='flex flex-col gap-[20px]'>
                    {feedbackData?.slice(11, 16)?.map((feedback, index) => (
                        <FeedbackCard key={index} feedback={feedback} />
                    ))}
                </div>
            </div>

            {/* bottom shadow card */}
            <div className='w-full h-[100px] 640px:h-[300px] z-10 bg-gradient-to-t dark:from-darkBgColor from-white top-[rgb(255,255,255,0.8)] absolute bottom-8 left-0 right-0'></div>
        </section>
    );
};

export default Feedback;
