import { useState } from "react";
import ContentHeader from "../../../../../../Shared/ContentHeader";
import ShowCode from "../../../../../../Shared/ShowCode";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const TreeTimeline = () => {
  // milestone timeline
  const [treeTimelinePreview, setMilestoneTimelinePreview] = useState(true);
  const [treeTimelineCode, setMilestoneTimelineCode] = useState(false);

  const handleMilestoneTimelinePreview = () => {
    setMilestoneTimelinePreview(true);
    setMilestoneTimelineCode(false);
  };

  const handleMilestoneTimelineCode = () => {
    setMilestoneTimelineCode(true);
    setMilestoneTimelinePreview(false);
  };

  const briefcaseIcon = <FaBriefcase className="fill-gray-500 w-5 h-5" />;
  const graduationCapIcon = <FaGraduationCap className="fill-gray-500 w-5 h-5" />;

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
    <div>
      <ContentHeader
        className={"mt-8"}
        text={"tree timeline"}
        id={"tree_timeline"}
      />

      <p className="w-full 425px:w-[80%] text-text text-[1rem]">
        A milestone timeline highlights key events or achievements in a project,
        visually tracking important deadlines and accomplishments along a
        chronological path.
      </p>

      <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
        <div className="relative">
          <div
            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
              treeTimelinePreview
                ? "translate-x-[0px] !w-[100px]"
                : "translate-x-[107px] rounded-br"
            }`}
          ></div>
          <button
            className={`${
              treeTimelinePreview && "text-tabTextColor"
            } px-6 py-2 border-b z-[2] relative text-text border-border`}
            onClick={handleMilestoneTimelinePreview}
          >
            Preview
          </button>
          <button
            className={`${
              treeTimelineCode && "text-tabTextColor"
            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
            onClick={handleMilestoneTimelineCode}
          >
            Code
          </button>
        </div>
        {treeTimelinePreview && (
          <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
            <div className="w-full mx-auto p-6 ">
              <h1 className="text-3xl font-bold mb-16 text-center">
                Tree Timeline
              </h1>

              <div>
                <ul className="relative h-fit before:content-[''] before:absolute before:w-1 before:h-full before:bg-gray-200 before:left-1/2 before:transform before:-translate-x-1/2 before:rounded-md before:z-10">
                  {milestones.map((milestone, index) => (
                    <li
                      key={index}
                      className={`relative w-1/2  mb-4 ${
                        index % 2 === 0 ? "text-right" : " left-1/2 text-left"
                      }`}
                    >
                      <div
                        id="icon"
                        className={`absolute top-1/2 -translate-y-1/2  ${
                          index % 2 === 0
                            ? "translate-x-1/2 right-0"
                            : "-translate-x-1/2"
                        }  bg-gray-200 rounded-full p-2 z-10`}
                      >
                        {milestone.icon}
                      </div>

                      <div
                        className={`relative border rounded-md shadow-gray-50 border-gray-200/60 shadow-md ${
                          index % 2 === 0 ? "-left-8" : "-right-8"
                        }`}
                      >
                        <div
                          className='py-3 px-4'
                        >
                          <div>
                            <div className="text-text text-lg font-semibold">
                              {milestone.title}
                            </div>
                            <div className="text-primary text-sm">
                              {milestone.date}
                            </div>
                          </div>
                          <p className="mt-1 text-sm text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {treeTimelineCode && (
          <ShowCode
            code='
import React from "react";

// react icons
import {FaBriefcase, FaGraduationCap} from "react-icons/fa";

const TreeTimeline = () => {
    const briefcaseIcon = <FaBriefcase className="fill-gray-500 w-5 h-5" />;
    const graduationCapIcon = <FaGraduationCap className="fill-gray-500 w-5 h-5" />;

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
        <div>
            <ul className="relative h-fit before:content-[""] before:absolute before:w-1 before:h-full before:bg-gray-200 before:left-1/2 before:transform before:-translate-x-1/2 before:rounded-md before:z-10">
                {milestones.map((milestone, index) => (
                    <li
                        key={index}
                        className={`relative w-1/2  mb-4 ${
                            index % 2 === 0 ? "text-right" : " left-1/2 text-left"
                        }`}
                    >
                        <div
                            id="icon"
                            className={`absolute top-1/2 -translate-y-1/2  ${
                                index % 2 === 0
                                    ? "translate-x-1/2 right-0"
                                    : "-translate-x-1/2"
                            }  bg-gray-200 rounded-full p-2 z-10`}
                        >
                            {milestone.icon}
                        </div>

                        <div
                            className={`relative border rounded-md shadow-gray-50 border-gray-200/60 shadow-md ${
                                index % 2 === 0 ? "-left-8" : "-right-8"
                            }`}
                        >
                            <div
                                className="py-3 px-4"
                            >
                                <div>
                                    <div className="text-[#424242] text-lg font-semibold">
                                        {milestone.title}
                                    </div>
                                    <div className="text-[#3B9DF8] text-sm">
                                        {milestone.date}
                                    </div>
                                </div>
                                <p className="mt-1 text-sm text-gray-600">{milestone.description}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TreeTimeline;
    '
          />
        )}
      </div>
    </div>
  );
};

export default TreeTimeline;
