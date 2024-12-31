import { useState } from "react";
import ContentHeader from "../../../../../../Shared/ContentHeader";
import ShowCode from "../../../../../../Shared/ShowCode";

const MilestoneTimeline = () => {
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

  const milestones = [
    {
      date: "January 2024",
      title: "Project Kickoff",
      description: "Initial planning and kickoff meeting.",
    },
    {
      date: "February 2024",
      title: "Design Phase",
      description: "Finalizing designs and mockups.",
    },
    {
      date: "March 2024",
      title: "Development Phase",
      description: "Starting the development of the project.",
    },
    {
      date: "April 2024",
      title: "Testing Phase",
      description: "Testing and quality assurance.",
    },
    {
      date: "May 2024",
      title: "Launch",
      description: "Official project launch.",
    },
  ];

  return (
    <div>
      <ContentHeader text={"milestone timeline"} id={"milestone_timeline"} />

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
                Milestone Timeline
              </h1>
              <div className="relative border-l border-gray-300">
                {milestones.map((milestone, index) => (
                  <div key={index} className="mb-8">
                    <div className="absolute w-5 h-5 bg-primary z-10 border-4 border-white rounded-full left-[0px] transform -translate-x-1/2 -translate-y-1/2" />
                    <div className="pl-6">
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

      const Timeline = () => {

          const milestones = [
              { date: "January 2024", title: "Project Kickoff", description: "Initial planning and kickoff meeting." },
              { date: "February 2024", title: "Design Phase", description: "Finalizing designs and mockups." },
              { date: "March 2024", title: "Development Phase", description: "Starting the development of the project." },
              { date: "April 2024", title: "Testing Phase", description: "Testing and quality assurance." },
              { date: "May 2024", title: "Launch", description: "Official project launch." },
          ];

          return (
              <div className="max-w-4xl mx-auto p-6">
                  <h1 className="text-3xl font-bold mb-16 text-center">Milestone Timeline</h1>
                  <div className="relative border-l border-gray-300">
                      {milestones.map((milestone, index) => (
                          <div key={index} className="mb-8">
                              <div
                                  className="absolute w-5 h-5 bg-primary z-10 border-4 border-white rounded-full left-[0px] transform -translate-x-1/2 -translate-y-1/2"/>
                              <div className="pl-6">
                                  <div className="flex sm:items-center sm:flex-row flex-col">
                                      <div
                                          className="text-primary  font-semibold">{milestone.date}</div>
                                      <div
                                          className="sm:ml-4 text-text text-lg font-semibold">{milestone.title}</div>
                                  </div>
                                  <p className="text-gray-600 mt-1">{milestone.description}</p>
                              </div>
                          </div>
                      ))}
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

export default MilestoneTimeline;
