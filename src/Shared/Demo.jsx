import React, {useState} from "react";

// react icons
import {FiMinus, FiPlus} from "react-icons/fi";

const NumberInput = () => {

    const [countValue, setCountValue] = useState(0);

    const handleIncrement = () => {
        setCountValue((prevValue) => prevValue + 1);
    };

    const handleDecrement = () => {
        setCountValue((prevValue) => prevValue - 1);
    };

    const handleInputChange = (e) => {
        setCountValue(Number(e.target.value));
    };
    
    return (
        <>
            {/* left button number input */}
            <div className="flex px-2 py-0.5 items-center dark:border-slate-700 mx-auto border border-gray-200 rounded-md">
                <button
                    className="bg-gray-100 dark:bg-slate-800 dark:text-[#abc2d3] p-[10px] mr-2 rounded-full text-gray-700 text-[1.1rem]"
                    onClick={handleDecrement}
                >
                    <FiMinus/>
                </button>
                <button
                    className="bg-gray-100 dark:bg-slate-800 dark:text-[#abc2d3] p-[10px] rounded-full text-gray-700 text-[1.1rem]"
                    onClick={handleIncrement}
                >
                    <FiPlus/>
                </button>

                <input
                    type="number"
                    value={countValue}
                    className="w-[70px] px-2 py-2.5 outline-none dark:bg-transparent dark:text-[#abc2d3] focus:ring-0 border-none text-center text-[1.1rem]"
                    onInput={handleInputChange}
                />
            </div>

            {/* right button number input */}
            <div className="flex px-2 py-0.5 items-center dark:border-slate-700 mx-auto border border-gray-200 rounded-md">
                <input
                    type="number"
                    value={countValue}
                    className="w-[70px] px-2 py-2.5 dark:bg-transparent dark:text-[#abc2d3] outline-none focus:ring-0 border-none text-center text-[1.1rem]"
                    onInput={handleInputChange}
                />
                <button
                    className="bg-gray-100 p-[10px] dark:bg-slate-800 dark:text-[#abc2d3] rounded-full text-gray-700 text-[1.1rem]"
                    onClick={handleDecrement}
                >
                    <FiMinus/>
                </button>
                <button
                    className="bg-gray-100 p-[10px] dark:bg-slate-800 dark:text-[#abc2d3] rounded-full ml-2 text-gray-700 text-[1.1rem]"
                    onClick={handleIncrement}
                >
                    <FiPlus/>
                </button>
            </div>
        </>
    );
};

export default NumberInput;
