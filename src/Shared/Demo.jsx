import React, {useState} from "react";

// react icons
import {RxCross1} from "react-icons/rx";

const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);

    const checkDeleteModalChange = (event) => {
        setDisabledButton(true);
        if (event.target.value === "DELETE") {
            setDisabledButton(false);
        }
    };
    
    return (
        <div
            className={`${
                isModalOpen ? " visible" : " invisible"
            } w-full h-screen fixed top-0 left-0 z-[200000000] dark:bg-black/40 bg-[#0000002a] flex items-center justify-center transition-all duration-300`}
        >
            <div
                className={`${
                    isModalOpen
                        ? " scale-[1] opacity-100"
                        : " scale-[0] opacity-0"
                } w-[90%] sm:w-[80%] md:w-[30%] dark:bg-slate-800 bg-[#fff] rounded-lg p-5 transition-all duration-300 z-[999]`}
            >
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-[#000] dark:text-[#abc2d3] text-[1.3rem] font-[500]">
                        Delete Modal
                    </h2>
                    <RxCross1
                        className="p-2 text-[2rem] dark:text-slate-400 dark:hover:bg-slate-900/50 hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                        onClick={() => setIsModalOpen(false)}
                    />
                </div>

                <div className="w-full">
                    <p className="text-[#424242] dark:text-slate-400 text-[1rem] font-[400]">
                        Are You sure want to delete it?
                    </p>

                    <div className="mt-5">
                        <label className="font-[400] dark:text-[#abc2d3] text-black">
                            Type <b>"DELETE"</b> to confirm
                        </label>{" "}
                        <br/>
                        <input
                            onChange={checkDeleteModalChange}
                            type="text"
                            className="py-3 px-4 dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] border border-gray-200 rounded-md mt-1 w-full outline-none focus:border-[#3B9DF8]"
                        />
                    </div>

                    <div className="mt-8 flex w-full items-end justify-end gap-[13px]">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className={`py-2 px-6 dark:border-slate-700 dark:text-[#abc2d3] dark:hover:bg-slate-700/50 rounded font-[500] z-10 border border-[#cecece] text-gray-500`}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className={`${
                                disabledButton
                                    ? "!bg-[#FDECEB] dark:!bg-red-800/30 dark:!border-red-900/30 dark:text-slate-500 !border-[#FDECEB] text-red-200 cursor-not-allowed"
                                    : "bg-red-600 text-white border-red-600 py-2 px-6 border rounded font-[500]"
                            }`}
                            disabled={disabledButton}
                        >
                            Yes, Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Modal;
