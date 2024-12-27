// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// react helmet
import { Helmet } from "react-helmet";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";

// contents for scrollspy
import { dialogContents } from "../../../../../Utils/ContentsConfig/FeedbackContents";
import { useScrollSpy } from "../../../../../CustomHooks/useScrollSpy";

// icons
import { FaPlus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Dialog = () => {
  const sectionIds = dialogContents.map((item) => item.href.slice(1));
  const activeSection = useScrollSpy(sectionIds);

  // backgroundPreview
  const [basicDialogPreview, setBasicDialogPreview] = useState(true);
  const [basicDialogCode, setBasicDialogCode] = useState(false);
  // alert dialog
  const [alertDialogPreview, setAlertDialogPreview] = useState(true);
  const [alertDialogCode, setAlertDialogCode] = useState(false);

  const handleBasicDialogPreview = () => {
    setBasicDialogPreview(true);
    setBasicDialogCode(false);
  };

  const handleAlertDialogPreview = () => {
    setAlertDialogPreview(true);
    setAlertDialogCode(false);
  };

  const handleBasicDialogCode = () => {
    setBasicDialogCode(true);
    setBasicDialogPreview(false);
  };

  const handleAlertDialogCode = () => {
    setAlertDialogCode(true);
    setAlertDialogPreview(false);
  };

  // handle dialog message
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogValue, setDialogValue] = useState("please select");
  // handel alert dialog message
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

  const handleDialogAction = (e) => {
    let element = e.target;
    setDialogValue(element.innerText);
    setIsDialogOpen(false);
  };

  return (
    <>
      <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
        <div>
          <ContentHeader text={"basic dialog"} id={"basic_dialog"} />

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a dialog component. Display important messages, prompts, or
            actions in a focused modal window.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                  basicDialogPreview
                    ? "translate-x-[0px] !w-[100px]"
                    : "translate-x-[107px] rounded-br"
                }`}
              ></div>
              <button
                className={`${
                  basicDialogPreview && "text-tabTextColor"
                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                onClick={handleBasicDialogPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  basicDialogCode && "text-tabTextColor"
                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                onClick={handleBasicDialogCode}
              >
                Code
              </button>
            </div>
            {basicDialogPreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                <div className="flex items-center flex-col gap-5">
                  <p>Selected: {dialogValue}</p>

                  <button
                    className="px-6 py-2 border border-primary outline-none rounded text-primary"
                    onClick={() => setIsDialogOpen(true)}
                  >
                    Open Simple Dialog
                  </button>

                  {isDialogOpen && (
                    <div className="bg-[#00000027] z-50 fixed flex items-center justify-center top-0 left-0 w-full h-screen">
                      <div
                        className="absolute top-0 left-0 h-full w-full cursor-pointer backdrop-blur-[2px]"
                        onClick={() => setIsDialogOpen(false)}
                      ></div>
                      <div
                        className="w-[300px] h-auto py-3 bg-secondary rounded relative z-10"
                        onClick={handleDialogAction}
                      >
                        <div className="w-full flex items-end justify-end px-3">
                          <RxCross1
                            className="text-[2rem] p-2 bg-[#3d3d3d18] text-[#222222] rounded-full cursor-pointer"
                            onClick={() => setIsDialogOpen(false)}
                          />
                        </div>
                        <h1 className="text-[1.2rem] text-text font-[500] px-6 py-3">
                          Set backup account
                        </h1>
                        <h2
                          value="user@gmail.com"
                          className="flex items-center gap-3 text-[1rem] hover:bg-[#f1f1f1] py-3 px-6 cursor-pointer transition duration-300"
                        >
                          <span>
                            <FaUser className="text-[2rem] text-[#1b703f] p-2 rounded-full bg-[#15a7522d]" />
                          </span>
                          user@gmail.com
                        </h2>
                        <h2
                          value="user02@gmail.com "
                          className="flex items-center gap-3 text-[1rem] hover:bg-[#f1f1f1] py-3 px-6 cursor-pointer transition duration-300"
                        >
                          <span>
                            <FaUser className="text-[2rem] text-[#1b703f] p-2 rounded-full bg-[#15a7522d]" />
                          </span>
                          user02@gmail.com
                        </h2>
                        <h2
                          value="add account "
                          className="flex items-center gap-3 text-[1rem] hover:bg-[#f1f1f1] py-3 px-6 cursor-pointer transition duration-300"
                        >
                          <span>
                            <FaPlus className="text-[2rem] text-[#303030] p-2 rounded-full bg-[#3d3d3d2c]" />
                          </span>
                          Add Account
                        </h2>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {basicDialogCode && (
              <Showcode
                code='
                    import React,{ useState } from "react";

                    // icons
                    import { FaPlus } from "react-icons/fa6";
                    import { FaUser } from "react-icons/fa";
                    import { RxCross1 } from "react-icons/rx";

                    const PopupDialog = () => {

                      // handle dialog message
                      const [isDialogOpen, setIsDialogOpen] = useState(false);
                      const [dialogValue, setDialogValue] = useState("please select");

                      console.log(dialogValue);

                      const handleDialogAction = (e) => {
                        let element = e.target;
                        setDialogValue(element.innerText);
                        setIsDialogOpen(false);
                      };

                      return (
                        <div className="flex items-center flex-col gap-5">
                          <p>Selected: {dialogValue}</p>

                          <button
                            className="px-6 py-2 border border-[#3B9DF8] outline-none rounded text-[#3B9DF8]"
                            onClick={() => setIsDialogOpen(true)}>
                            Open Simple Dialog
                          </button>

                          {isDialogOpen && (
                            <div className="bg-[#00000027] z-50 fixed flex 
                            items-center justify-center top-0 left-0 w-full h-screen">
                            <div className="absolute top-0 left-0 h-full w-full cursor-pointer backdrop-blur-[2px]" onClick={() => setIsDialogOpen(false)}></div>
                              <div
                                className="w-[300px] h-auto py-3 bg-[#ffff] rounded  relative z-10"
                                onClick={handleDialogAction}>
                                <div className="w-full flex items-end justify-end px-3">
                                  <RxCross1
                                    className="text-[2rem] p-2 bg-[#3d3d3d18] 
                                    text-[#222222] rounded-full cursor-pointer"
                                    onClick={() => setIsDialogOpen(false)}
                                  />
                                </div>
                                <h1 className="text-[1.2rem] text-[#424242] font-[500] px-6 py-3">
                                  Set backup account
                                </h1>
                                <h2
                                  value="user@gmail.com"
                                  className="flex items-center gap-3 text-[1rem] 
                                  hover:bg-[#f1f1f1] py-3 px-6 cursor-pointer transition duration-300">
                                  <span>
                                    <FaUser className="text-[2rem] text-[#1b703f] p-2 rounded-full bg-[#15a7522d]" />
                                  </span>
                                  user@gmail.com
                                </h2>
                                <h2
                                  value="user02@gmail.com "
                                  className="flex items-center gap-3 text-[1rem] 
                                  hover:bg-[#f1f1f1] py-3 px-6 cursor-pointer transition duration-300">
                                  <span>
                                    <FaUser className="text-[2rem] text-[#1b703f] p-2 rounded-full bg-[#15a7522d]" />
                                  </span>
                                  user02@gmail.com
                                </h2>
                                <h2
                                  value="add account "
                                  className="flex items-center gap-3 text-[1rem] 
                                  hover:bg-[#f1f1f1] py-3 px-6 cursor-pointer transition duration-300">
                                  <span>
                                    <FaPlus className="text-[2rem] text-[#303030] p-2 rounded-full bg-[#3d3d3d2c]" />
                                  </span>
                                  Add Account
                                </h2>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    };

                    export default PopupDialog;
                  '
              />
            )}
          </div>

          {/*alert dialog code start here */}
          <div className="mt-8">
            <ContentHeader text={"alert dialog"} id={"alert_dialog"} />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            An alert dialog component displays critical information or requests
            user confirmation. It typically includes a title, a brief
            description, and actionable buttons, like Confirm and Cancel, for
            user interaction.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                  alertDialogPreview
                    ? "translate-x-[0px] !w-[100px]"
                    : "translate-x-[107px] rounded-br"
                }`}
              ></div>
              <button
                className={`${
                  alertDialogPreview && "text-tabTextColor"
                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                onClick={handleAlertDialogPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  basicDialogCode && "text-tabTextColor"
                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                onClick={handleAlertDialogCode}
              >
                Code
              </button>
            </div>
            {alertDialogPreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                <div className="flex items-center flex-col gap-5">
                  <button
                    className="px-6 py-2 border border-primary outline-none rounded text-primary"
                    onClick={() => setIsAlertDialogOpen(true)}
                  >
                    Open Simple Dialog
                  </button>

                  {isAlertDialogOpen && (
                    <div
                      className="bg-[#00000027] z-50 fixed flex 
                  items-center justify-center top-0 left-0 w-full h-screen"
                    >
                      <div
                        className="absolute top-0 left-0 h-full w-full cursor-pointer backdrop-blur-[2px]"
                        onClick={() => setIsAlertDialogOpen(false)}
                      ></div>
                      <div className="max-w-md w-[90vw] h-auto bg-white rounded relative z-10 px-4 py-3">
                        <h1 className="font-semibold text-xl mb-2">
                          Delete Item
                        </h1>
                        <p className="text-gray-600 mb-2">
                          Are you sure you want to delete this? This action
                          cannot be undone.
                        </p>
                        <div className="w-full flex items-center justify-end gap-2">
                          <button
                            className="font-semibold px-1.5 py-1 hover:bg-gray-100 rounded text-sm uppercase text-red-500"
                            onClick={() => setIsAlertDialogOpen(false)}
                          >
                            Cancel
                          </button>
                          <button
                            className="font-semibold px-1.5 py-1 hover:bg-gray-100 rounded text-sm uppercase text-blue-600"
                            onClick={() => setIsAlertDialogOpen(false)}
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {alertDialogCode && (
              <Showcode
                code='
import { useState } from "react";

const PopupAlertDialog = () => {
  // handle dialog message
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

  return (
    <div className="flex items-center flex-col gap-5">
      <button
        className="px-6 py-2 border border-[#3B9DF8] outline-none rounded text-[#3B9DF8]"
        onClick={() => setIsAlertDialogOpen(true)}
      >
        Open Simple Dialog
      </button>

      {isAlertDialogOpen && (
        <div
          className="bg-[#00000027] z-50 fixed flex 
        items-center justify-center top-0 left-0 w-full h-screen"
        >
          <div
            className="absolute top-0 left-0 h-full w-full cursor-pointer backdrop-blur-[2px]"
            onClick={() => setIsAlertDialogOpen(false)}
          ></div>
          <div className="max-w-md w-[90vw] h-auto bg-white rounded relative z-10 px-4 py-3">
            <h1 className="font-semibold text-xl mb-2">Delete Item</h1>
            <p className="text-gray-600 mb-2">
              Are you sure you want to delete this? This action cannot be
              undone.
            </p>
            <div className="w-full flex items-center justify-end gap-2">
              <button
                className="font-semibold px-1.5 py-1 hover:bg-gray-100 rounded text-sm uppercase text-red-500"
                onClick={() => setIsAlertDialogOpen(false)}
              >
                Cancel
              </button>
              <button
                className="font-semibold px-1.5 py-1 hover:bg-gray-100 rounded text-sm uppercase text-blue-600"
                onClick={() => setIsAlertDialogOpen(false)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupAlertDialog;

                  '
              />
            )}
          </div>
          {/*alert dialog code end here */}

          <OverviewFooter
            backUrl="/components/alert-message"
            backName="alert message"
            forwardName="testimonial"
            forwardUrl="/components/testimonials"
          />
        </div>

        <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[20%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
          {dialogContents.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`${
                activeSection === item.href.slice(1) &&
                "!text-primary !border-primary"
              } text-[0.9rem] text-text border-l border-transparent pl-4`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </aside>
      <Helmet>
        <title>Feedback - Dialog Message</title>
      </Helmet>
    </>
  );
};

export default Dialog;
