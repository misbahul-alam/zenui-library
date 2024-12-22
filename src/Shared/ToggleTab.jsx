import React from 'react';
import {useToggleCardView} from "../CustomHooks/ButtonToggle.js";

const ToggleTab = ({preview, code, setPreview, setCode}) => {

    const toggleCardView = useToggleCardView();

    return (
        <div className='relative mt-8 mb-2 backdrop-blur-md border border-border w-max rounded'>
            <div
                className={`absolute top-[50%] translate-y-[-50%] rounded transform left-0 w-[50%] h-full z-[1] bg-border transition-all duration-500 ${
                    preview
                        ? 'translate-x-[0%] w-[55%] rounded-r-none'
                        : 'translate-x-[122%] !w-[45%] rounded-l-none'
                }`}
            ></div>
            <button
                className={`${
                    preview && 'text-tabTextColor'
                } px-6 py-2 z-[2] relative text-center transition-all duration-500 text-text`}
                onClick={() => toggleCardView(setPreview, setCode, true)}
            >
                Preview
            </button>
            <button
                className={`${
                    code && ' text-tabTextColor'
                } px-6 py-2 z-[2] relative transition-all duration-500 text-text`}
                onClick={() => toggleCardView(setPreview, setCode, false)}
            >
                Code
            </button>
        </div>
    );
};

export default ToggleTab;
