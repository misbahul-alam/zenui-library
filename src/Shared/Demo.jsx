import React from "react";

// react icons
import {FaBriefcase, FaGraduationCap} from "react-icons/fa";

const MilestoneTimeline = () => {
    const briefcaseIcon = <FaBriefcase className="fill-white w-5 h-5" />;
    const graduationCapIcon = <FaGraduationCap className="fill-white w-5 h-5" />;

    const milestones = [
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
        <div className="relative border-l-[5px] border-gray-300">
            {milestones.map((milestone, index) => (
                <div key={index} className="mb-8 relative ">
                    <div
                        id="icon"
                        className={`absolute border-2 border-white top-5 -left-[2.5px] transform -translate-x-1/2 -translate-y-1/2  bg-[#3B9DF8] rounded-full p-2 z-10`}
                    >
                        {milestone.icon}
                    </div>
                    <div className="pl-6 ">
                        <div className="flex 640px:items-center 640px:flex-row flex-col">
                            <div className="text-[#3B9DF8]  font-semibold">
                                {milestone.date}
                            </div>
                            <div className="640px:ml-4 text-[#424242] text-lg font-semibold">
                                {milestone.title}
                            </div>
                        </div>
                        <p className="text-gray-500 text-[0.9rem] mt-1">
                            {milestone.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MilestoneTimeline;
