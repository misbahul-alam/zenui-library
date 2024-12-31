import { useState } from "react";
import ContentHeader from "../../../../../../Shared/ContentHeader";
import ShowCode from "../../../../../../Shared/ShowCode";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const MilestoneIconTimeline = () => {
  // milestone timeline
  const [milestoneTimelinePreview, setMilestoneTimelinePreview] =
    useState(true);
  const [milestoneTimelineCode, setMilestoneTimelineCode] = useState(false);

  const handleMilestoneTimelinePreview = () => {
    setMilestoneTimelinePreview(true);
    setMilestoneTimelineCode(false);
  };

  const handleMilestoneTimelineCode = () => {
    setMilestoneTimelineCode(true);
    setMilestoneTimelinePreview(false);
  };

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
    <div>
      <ContentHeader
        className={"mt-8"}
        text={"milestone icon timeline"}
        id={"milestone_icon_timeline"}
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
              milestoneTimelinePreview
                ? "translate-x-[0px] !w-[100px]"
                : "translate-x-[107px] rounded-br"
            }`}
          ></div>
          <button
            className={`${
              milestoneTimelinePreview && "text-tabTextColor"
            } px-6 py-2 border-b z-[2] relative text-text border-border`}
            onClick={handleMilestoneTimelinePreview}
          >
            Preview
          </button>
          <button
            className={`${
              milestoneTimelineCode && "text-tabTextColor"
            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
            onClick={handleMilestoneTimelineCode}
          >
            Code
          </button>
        </div>
        {milestoneTimelinePreview && (
          <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
            <div className="max-w-4xl mx-auto p-6">
              <h1 className="text-3xl font-bold mb-16 text-center">
                Milestone Icon Timeline
              </h1>
              <div className="relative border-l-[5px] border-gray-300">
                {milestones.map((milestone, index) => (
                  <div key={index} className="mb-8 relative ">
                    <div
                      id="icon"
                      className={`absolute border-2 border-white top-5 -left-[2.5px] transform -translate-x-1/2 -translate-y-1/2  bg-primary rounded-full p-2 z-10`}
                    >
                      {milestone.icon}
                    </div>
                    <div className="pl-6 ">
                      <div className="flex 640px:items-center 640px:flex-row flex-col">
                        <div className="text-primary  font-semibold">
                          {milestone.date}
                        </div>
                        <div className="640px:ml-4 text-text text-lg font-semibold">
                          {milestone.title}
                        </div>
                      </div>
                      <p className="text-gray-600 mt-1">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {milestoneTimelineCode && (
          <ShowCode
            code='
      import React from "react";
      import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

      const Timeline = () => {
          const briefcaseIcon = <FaBriefcase className="fill-white w-5 h-5" />;
          const graduationCapIcon = <FaGraduationCap className="fill-white w-5 h-5" />;
          const milestones = [
              { date: "January 2024", title: "Project Kickoff", description: "Initial planning and kickoff meeting.", icon: graduationCapIcon},
              { date: "February 2024", title: "Design Phase", description: "Finalizing designs and mockups.", icon: briefcaseIcon},
              { date: "March 2024", title: "Development Phase", description: "Starting the development of the project.", icon: briefcaseIcon},
              { date: "April 2024", title: "Testing Phase", description: "Testing and quality assurance.", icon: briefcaseIcon},
              { date: "May 2024", title: "Launch", description: "Official project launch.", icon: briefcaseIcon},
          ];

          return (
            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
              <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-16 text-center">
                  Milestone Icon Timeline
                </h1>
                <div className="relative border-l-[5px] border-gray-300">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="mb-8 relative ">
                      <div
                        id="icon"
                        className={`absolute border-2 border-white top-5 -left-[2.5px] transform -translate-x-1/2 -translate-y-1/2  bg-primary rounded-full p-2 z-10`}
                      >
                        {milestone.icon}
                      </div>
                      <div className="pl-6 ">
                        <div className="flex 640px:items-center 640px:flex-row flex-col">
                          <div className="text-primary  font-semibold">
                            {milestone.date}
                          </div>
                          <div className="640px:ml-4 text-text text-lg font-semibold">
                            {milestone.title}
                          </div>
                        </div>
                        <p className="text-gray-600 mt-1">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
      };
      export default Timeline;
    '
          />
        )}
      </div>
    </div>
  );
};

export default MilestoneIconTimeline;
