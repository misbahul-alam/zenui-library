import React, {useState} from "react";

const SwitchInput = () => {
    const [isToggle, setIsToggle] = useState(false);
    const [widthIncrease, setWidthIncrease] = useState(false);

    const handleAnimatedSwitch = () => {
        setWidthIncrease(true);
        setTimeout(() => {
            setWidthIncrease(false);
            setIsToggle(!isToggle);
        }, 300);
    };
    
    return (
        <div className="p-8 mb-4 flex flex-wrap items-center gap-5 justify-center">

            {/* large */}
            <div
                className={`${
                    isToggle
                        ? "!bg-[#3B9DF8] !border-[#3B9DF8]"
                        : "bg-[#f0f0f0] border-gray-200"
                } border relative p-1 rounded-full dark:border-slate-700 dark:bg-slate-800 w-[70px] cursor-pointer transition-all h-[40px] duration-200`}
                onClick={handleAnimatedSwitch}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className={`${
                            isToggle
                                ? "translate-x-[15px] !bg-white"
                                : "translate-x-[-15px]"
                        } ${
                            widthIncrease ? "!w-[37px]" : "!w-[30px]"
                        } w-[30px] h-[30px] dark:bg-slate-300 rounded-full bg-white transition-all duration-200`}
                    ></div>
                </div>
            </div>

            {/* medium */}
            <div
                className={`${
                    isToggle
                        ? "!bg-[#3B9DF8] !border-[#3B9DF8]"
                        : "bg-[#f0f0f0] border-gray-200"
                } border relative p-1 dark:border-slate-700 dark:bg-slate-800 rounded-full w-[65px] cursor-pointer transition-all h-[37px] duration-200`}
                onClick={handleAnimatedSwitch}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className={`${
                            isToggle
                                ? "translate-x-[13px] !bg-white"
                                : "translate-x-[-13px]"
                        } ${
                            widthIncrease ? "!w-[35px]" : "!w-[28px]"
                        } w-[28px] h-[28px] dark:bg-slate-300 rounded-full bg-white transition-all duration-200`}
                    ></div>
                </div>
            </div>

            {/* small */}
            <div
                className={`${
                    isToggle
                        ? "!bg-[#3B9DF8] !border-[#3B9DF8]"
                        : "bg-[#f0f0f0] border-gray-200"
                } border relative p-1 dark:border-slate-700 dark:bg-slate-800 rounded-full w-[60px] cursor-pointer transition-all h-[33px] duration-200`}
                onClick={handleAnimatedSwitch}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className={`${
                            isToggle
                                ? "translate-x-[13px] !bg-white"
                                : "translate-x-[-13px]"
                        } ${
                            widthIncrease ? "!w-[29px]" : "!w-[25px]"
                        } w-[25px] h-[25px] dark:bg-slate-300 rounded-full bg-white transition-all duration-200`}
                    ></div>
                </div>
            </div>

            {/* extra small */}
            <div
                className={`${
                    isToggle
                        ? "!bg-[#3B9DF8] !border-[#3B9DF8]"
                        : "bg-[#f0f0f0] border-gray-200"
                } border relative p-1 dark:border-slate-700 dark:bg-slate-800 rounded-full w-[55px] cursor-pointer transition-all h-[30px] duration-200`}
                onClick={handleAnimatedSwitch}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className={`${
                            isToggle
                                ? "translate-x-[13px] !bg-white"
                                : "translate-x-[-13px]"
                        } ${
                            widthIncrease ? "!w-[25px]" : "!w-[22px]"
                        } w-[22px] h-[22px] dark:bg-slate-300 rounded-full bg-white transition-all duration-200`}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default SwitchInput;
