import React from "react";

import {milestoneData} from "./Data.js"

const Timeline = () => {

    export const milestones = [
        {
            date: "January 2024",
            title: "B.Tech",
            description: "B.Tech graduate with specialization in CSE",
            icon: graduationCapIcon,
        },
        {
            date: "February 2024",
            title: "Design Phase",
            description: "Finalizing designs and mockups.",
            icon: briefcaseIcon,
        },
        {
            date: "March 2024",
            title: "Development Phase",
            description: "Starting the development of the project.",
            icon: briefcaseIcon,
        },
        {
            date: "April 2024",
            title: "Testing Phase",
            description: "Testing and quality assurance.",
            icon: briefcaseIcon,
        },
        {
            date: "May 2024",
            title: "Launch",
            description: "Official project launch.",
            icon: briefcaseIcon,
        },
    ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-16 dark:text-[#abc2d3] text-center">
                Milestone Icon Timeline
            </h1>
            <div className="relative border-l-[5px] dark:border-slate-700 border-gray-300">
                {milestoneData.map((milestone, index) => (
                    <div key={index} className="mb-8 relative ">
                        <div
                            id="icon"
                            className={`absolute border-2 border-white top-5 -left-[2.5px] transform -translate-x-1/2 -translate-y-1/2 bg-[#3B9DF8] dark:border-slate-600 rounded-full p-2 z-10`}
                        >
                            {milestone.icon}
                        </div>
                        <div className="pl-6 ">
                            <div className="flex sm:items-center sm:flex-row flex-col">
                                <div className="text-[#3B9DF8] font-semibold">
                                    {milestone.date}
                                </div>
                                <div className="sm:ml-4 dark:text-[#abc2d3] text-[#424242] text-lg font-semibold">
                                    {milestone.title}
                                </div>
                            </div>
                            <p className="text-gray-500 dark:text-slate-400 text-[0.9rem] mt-1">
                                {milestone.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
