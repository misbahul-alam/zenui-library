import React, {useEffect, useState} from "react";

// react icons
import {MdKeyboardArrowDown} from "react-icons/md";
import {AiOutlineDelete, AiOutlineSchedule} from "react-icons/ai";
import {LuSaveAll} from "react-icons/lu";

const DropdownButton = () => {
    const [actionButtonActive, setActionButtonActive] = useState(false);
    const [sendButtonText, setSendButtonText] = useState("Send");

    const sendButtonContent = [
        {
            label: "Schedule for later",
            icon: <AiOutlineSchedule/>
        },{
            label: "Save draft",
            icon: <LuSaveAll/>
        },{
            label: "Delete",
            icon: <AiOutlineDelete/>
        },
    ]

    const handleSendButtonClick = (item) => {
        setSendButtonText(item)
        setActionButtonActive(false)
    }

    useEffect(() => {
        const handleClick = (event) => {
            if(!event.target.closest(".publishButtonOptions") && !event.target.closest(".publishButton")){
                setActionButtonActive(false)
            }
        };
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);
    return (
        <div
            className="flex items-center rounded bg-[#3B9DF8] border-none outline-none text-[#fff] justify-between relative">
            <button
                className=" text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto">
                {sendButtonText}
            </button>

            <div onClick={() => setActionButtonActive(!actionButtonActive)}
                 className="bg-[#005fb2] w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton">
                <MdKeyboardArrowDown className="text-[2rem]"/>
            </div>

            <ul className={`${actionButtonActive ? "opacity-100 z-20 translate-y-4" : " opacity-0 z-[-1] translate-y-[-20px]"} publishButtonOptions transition-all duration-500 flex flex-col boxShadow bg-white py-1 w-max dark:bg-slate-800 dark:border-slate-700 dark:text-[#abc2d3] absolute top-[46px] rounded border border-[#e6e6e6] right-0 text-text text-[0.9rem]`}>
                <div
                    className="absolute -top-[8px] dark:bg-slate-800 dark:border-slate-700 right-3 border-l border-b border-[#e6e6e6] bg-white w-[15px] h-[15px] rotate-[135deg]"></div>
                {
                    sendButtonContent?.map((item, index) => (
                        <li className="z-20 py-2 px-3 dark:hover:bg-slate-900/40 flex items-center gap-[8px] hover:bg-gray-50 rounded cursor-pointer"
                            key={index} onClick={() => handleSendButtonClick(item.label)}>
                            <span className="text-primary">{item.icon}</span>
                            {item.label}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default DropdownButton;
