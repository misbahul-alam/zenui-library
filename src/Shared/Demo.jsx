import React, {useState} from "react";

import stepsData from "./StepsData.js"

const MultiStepForm = () => {
    const [step, setStep] = useState(1)

    const nextStep = () => {
        if(step < 3) {
            setStep(step + 1)
        }
    };
    const prevStep = () => setStep(step - 1);

    return (
        <div className="w-full sm:w-[70%] mx-auto">
            <div className="w-full sm:flex-row flex-col flex items-center gap-[20px] sm:gap-[10px]">
                {
                    stepsData?.map((stepItem, index) => (
                        <p key={index} className="flex items-center gap-[10px] w-full">
                            <p className={` ${
                                step >= stepItem.id ? "bg-blue-500 text-white" : "bg-gray-50 text-gray-500 dark:bg-slate-800 dark:text-[#abc2d3]"
                            } w-[30px] h-[30px] p-[20px] flex items-center justify-center text-[1.2rem] rounded-full bg-blue-500`}>{stepItem?.id}</p>
                            {
                                index < stepsData?.length - 1 && (
                                    <div className={`${
                                        step >= (stepItem.id + 1) ? "bg-blue-500" : "bg-gray-300"
                                    } w-full h-[5px] dark:bg-slate-800 rounded-full`}></div>
                                )
                            }
                        </p>
                    ))
                }
            </div>

            <form className="mt-16 w-full">
                {
                    step === 1 && (
                        <>
                            <p className="text-[0.9rem] dark:text-[#abc2d3] text-gray-500">Choose your account type</p>

                            <div className="mt-6 flex sm:flex-row flex-col sm:items-center gap-[20px]">
                                <img src="https://i.ibb.co/tzxHppd/Group-11.png" alt="vector"
                                     className="w-[60px]"/>
                                <div>
                                    <h1 className="text-[15px] dark:text-[#abc2d3] font-[600]">Personal Account</h1>
                                    <p className="text-[0.9rem] dark:text-slate-400 font-[300] text-gray-400 w-full sm:w-[80%] mt-1">Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>

                            <div className="mt-6 sm:flex-row flex-col flex sm:items-center gap-[20px]">
                                <img src="https://i.ibb.co/RBtVH0D/Group-11-1.png" alt="vector"
                                     className="w-[60px]"/>
                                <div>
                                    <h1 className="text-[15px] dark:text-[#abc2d3] font-[600]">Business Account</h1>
                                    <p className="text-[0.9rem] dark:text-slate-400 font-[300] text-gray-400 w-full sm:w-[80%] mt-1">Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </>
                    )
                }

                {
                    step === 2 && (
                        <>
                            <div className="flex flex-col gap-[25px] w-full">
                                <div className="w-full">
                                    <label className="text-[1rem] dark:text-[#abc2d3] text-gray-600">Name</label> <br/>
                                    <input type="text" placeholder="Jhon Deo"
                                           className="py-2.5 px-4 bg-gray-50 dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 dark:border mt-1 w-full rounded-md outline-none"/>
                                </div>
                                <div className="w-full">
                                    <label className="text-[1rem] dark:text-[#abc2d3] text-gray-600">Email</label> <br/>
                                    <input type="email" placeholder="example@gmail.com"
                                           className="py-2.5 dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 dark:border px-4 bg-gray-50 mt-1 w-full rounded-md outline-none"/>
                                </div>
                                <div className="w-full">
                                    <label className="text-[1rem] dark:text-[#abc2d3] text-gray-600">Password</label> <br/>
                                    <input type="password" placeholder="*********"
                                           className="py-2.5 px-4 bg-gray-50 mt-1 dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 dark:border w-full rounded-md outline-none"/>
                                </div>
                            </div>
                        </>
                    )
                }

                {
                    step === 3 && (
                        <>
                            <div className="flex flex-col gap-[25px]">
                                <div className="w-full">
                                    <label className="text-[1rem] dark:text-[#abc2d3] text-gray-600">Age</label> <br/>
                                    <input type="number" placeholder="20"
                                           className="py-2.5 px-4 bg-gray-50 mt-1 w-full dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 dark:border rounded-md outline-none"/>
                                </div>
                                <div className="w-full">
                                    <label className="text-[1rem] dark:text-[#abc2d3] text-gray-600">Area of
                                        interest</label> <br/>
                                    <input type="text" placeholder="Frontend"
                                           className="py-2.5 px-4 bg-gray-50 mt-1 dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 dark:border w-full rounded-md outline-none"/>
                                </div>
                                <div className="w-full">
                                    <label className="text-[1rem] dark:text-[#abc2d3] text-gray-600">Bio /
                                        Description</label> <br/>
                                    <input type="password" placeholder="Lorem ipsum"
                                           className="py-2.5 px-4 dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 dark:border bg-gray-50 mt-1 w-full rounded-md outline-none"/>
                                </div>
                            </div>
                        </>
                    )
                }

                <div className="w-full flex items-end justify-end mt-12">
                    <button disabled={step <= 1} type="button" onClick={prevStep}
                            className={`${step <= 1 && "cursor-not-allowed dark:text-slate-500"} text-[1rem] text-gray-500 dark:text-slate-400 px-6 py-2.5`}>Previous
                    </button>
                    <button type="button" onClick={nextStep}
                            className="bg-blue-500 py-2.5 px-6 rounded-md text-white">
                        {step > 2 ? "Submit" : "Next"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MultiStepForm;
