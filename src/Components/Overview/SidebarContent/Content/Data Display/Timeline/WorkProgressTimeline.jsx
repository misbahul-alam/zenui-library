import { useState } from "react";
import ContentHeader from "../../../../../../Shared/ContentHeader";
import ShowCode from "../../../../../../Shared/ShowCode";

// import react icons
import { FaRegComment, FaRegFileAlt } from "react-icons/fa";

const WorkProgressTimeline = () => {
  // workHistoryPreview
  const [workHistoryPreview, setWorkHistoryPreview] = useState(true);
  const [workHistoryCode, setWorkHistoryCode] = useState(false);

  const handleWorkHistoryPreview = () => {
    setWorkHistoryPreview(true);
    setWorkHistoryCode(false);
  };

  const handleWorkHistoryCode = () => {
    setWorkHistoryCode(true);
    setWorkHistoryPreview(false);
  };

  const workHistorys = [
    {
      date: "Jan 22",
      title: "Posted assignments of work",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
      commentBtn: true,
      fileBtn: true,
    },
    {
      date: "Dec 12",
      title: "Uploaded Assignments File",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
      commentBtn: false,
      fileBtn: false,
    },
    {
      date: "Nov 18",
      title: "Asked to bring good stuff college",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
      commentBtn: true,
      fileBtn: true,
    },
    {
      date: "Nov 04",
      title: "Presentation Requirement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
      commentBtn: true,
      fileBtn: false,
    },
    {
      date: "Oct 15",
      title: "File handouts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
      commentBtn: false,
      fileBtn: false,
    },
  ];
  return (
    <div>
      <ContentHeader
        className={"mt-8"}
        text={"work progress timeline"}
        id={"work_progress_timeline"}
      />

      <p className="w-full 425px:w-[80%] text-text text-[1rem]">
        A work progress timeline visually represents the stages of a project or
        task over time, showing milestones, completed steps, and upcoming phases
        in a sequential order.
      </p>

      <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
        <div className="relative">
          <div
            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
              workHistoryPreview
                ? "translate-x-[0px] !w-[100px]"
                : "translate-x-[107px] rounded-br"
            }`}
          ></div>
          <button
            className={`${
              workHistoryPreview && "text-tabTextColor"
            } px-6 py-2 border-b z-[2] relative text-text border-border`}
            onClick={handleWorkHistoryPreview}
          >
            Preview
          </button>
          <button
            className={`${
              workHistoryCode && "text-tabTextColor"
            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
            onClick={handleWorkHistoryCode}
          >
            Code
          </button>
        </div>
        {workHistoryPreview && (
          <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
            <div className="w-[55%] 640px:w-[70%] mx-auto">
              <h1 className="text-3xl font-bold mb-16 text-center">
                Work Progress
              </h1>
              <div className="relative border-l border-gray-300 w-full">
                {workHistorys?.map((milestone, index) => (
                  <div key={index} className="mb-8">
                    <div className="pl-6 w-full">
                      <div className="flex items-center">
                        <div className="text-gray-600 text-[1rem] absolute left-[-75px]">
                          {milestone.date}
                        </div>
                        <div className="text-text text-lg">
                          {milestone.title}
                        </div>
                      </div>
                      <p className="text-gray-500 mt-1 text-[0.9rem]">
                        {milestone.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-[20px] mt-[10px]">
                        {milestone.commentBtn && (
                          <button className="flex items-center gap-[9px] text-gray-400 rounded-md px-4 py-1 text-[0.9rem]">
                            <FaRegComment /> 5 comments
                          </button>
                        )}

                        {milestone.fileBtn && (
                          <button className="flex items-center gap-[9px] border-primary border  text-primary rounded-md px-4 py-1 text-[0.9rem]">
                            <FaRegFileAlt /> FantechProp..
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {workHistoryCode && (
          <ShowCode
            code='
        import React from "react";

        // react icons
        import {FaRegComment, FaRegFileAlt} from "react-icons/fa";

        const Timeline = () => {

            const workHistory = [
                {
                    date: "Jan 22",
                    title: "Posted assignments of work",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
                    commentBtn: true,
                    fileBtn: true
                },
                {
                    date: "Dec 12",
                    title: "Uploaded Assignments File",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
                    commentBtn: false,
                    fileBtn: false
                },
                {
                    date: "Nov 18",
                    title: "Asked to bring good stuff college",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
                    commentBtn: true,
                    fileBtn: true
                },
                {
                    date: "Nov 04",
                    title: "Presentation Requirement",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
                    commentBtn: true,
                    fileBtn: false
                },
                {
                    date: "Oct 15",
                    title: "File handouts",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
                    commentBtn: false,
                    fileBtn: false
                },

            ]

            return (
                <div className="w-[55%] sm:w-[70%] mx-auto">
                    <h1 className="text-3xl font-bold mb-16 text-center">Work Progress</h1>
                    <div className="relative border-l border-gray-300 w-full">
                        {workHistory?.map((milestone, index) => (
                            <div key={index} className="mb-8">
                                <div className="pl-6 w-full">
                                    <div className="flex items-center">
                                        <div className="text-gray-600 text-[1rem] absolute left-[-75px]">{milestone.date}</div>
                                        <div
                                            className="text-text text-lg">{milestone.title}</div>
                                    </div>
                                    <p className="text-gray-500 mt-1 text-[0.9rem]">{milestone.description}</p>

                                    <div className="flex flex-wrap items-center gap-[20px] mt-[10px]">
                                        {
                                            milestone.commentBtn && (
                                                <button
                                                    className="flex items-center gap-[9px] text-gray-400 rounded-md px-4 py-1 text-[0.9rem]">
                                                    <FaRegComment/> 5 comments
                                                </button>
                                            )
                                        }

                                        {
                                            milestone.fileBtn && (
                                                <button
                                                    className="flex items-center gap-[9px] border-primary border  text-primary rounded-md px-4 py-1 text-[0.9rem]">
                                                    <FaRegFileAlt/> FantechProp..
                                                </button>
                                            )
                                        }
                                    </div>
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

export default WorkProgressTimeline;
