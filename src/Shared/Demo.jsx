import React from "react";

const Card = () => {

    return (
        <div className="w-full bg-white dark:bg-slate-800 md:max-w-[80%] boxShadow rounded-md">
            <div className="p-4">
                <h1 className="text-[1.5rem] dark:text-[#abc2d3] font-semibold">Minim dolorin</h1>
                <p className="text-[0.9rem] dark:text-[#abc2d3]/80 text-gray-500">Minim dolor in amet nulla laboris enim
                    dolore consequat.</p>
            </div>

            <div className="mt-4">
                <div
                    className="flex sm:flex-row flex-col dark:hover:bg-slate-700 sm:items-center w-full justify-between py-3 hover:bg-gray-100 px-4">
                    <div className="flex gap-[10px]">
                        <img
                            src="https://img.freepik.com/free-photo/cheerful-young-man-posing-isolated-grey_171337-10579.jpg?t=st=1722623111~exp=1722626711~hmac=b17f00e5dcf0abc6acd95e3cc2c38c402f1215a1d21f8581ebcf6a2de0b668a0&w=996"
                            alt="avatar" className="w-[60px] h-[60px] object-cover rounded-full "/>
                        <div className="flex flex-col">
                            <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold">Wade Warren</h3>
                            <span className="text-[0.9rem] dark:text-[#abc2d3]/80 text-gray-500">Dog Trainer</span>
                        </div>
                    </div>

                    <button className="py-2 w-max sm:m-0 mx-auto px-6 bg-purple-500 text-white rounded-md">Follow
                    </button>
                </div>

                <div
                    className="flex sm:flex-row flex-col dark:hover:bg-slate-700 sm:items-center w-full justify-between py-3 hover:bg-gray-100 px-4">
                    <div className="flex gap-[10px]">
                        <img
                            src="https://img.freepik.com/free-photo/bearded-man-listening-music-through-earphones_53876-129947.jpg?t=st=1722623213~exp=1722626813~hmac=b7deb7ad2af8b5966d5cac476223699db295447ed386ee6c02e43c44e1b12a5b&w=996"
                            alt="avatar" className="w-[60px] h-[60px] object-cover rounded-full "/>
                        <div className="flex flex-col">
                            <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold">Robert Fox</h3>
                            <span
                                className="text-[0.9rem] dark:text-[#abc2d3]/80 text-gray-500">President of Sales</span>
                        </div>
                    </div>

                    <button className="py-2 w-max sm:m-0 mx-auto px-6 bg-purple-500 text-white rounded-md">Follow
                    </button>

                </div>

                <div
                    className="flex sm:flex-row flex-col dark:hover:bg-slate-700 sm:items-center w-full justify-between py-3 hover:bg-gray-100 px-4">
                    <div className="flex gap-[10px]">
                        <img
                            src="https://img.freepik.com/free-photo/porait-cute-boy-cafe_23-2148436119.jpg?t=st=1722623263~exp=1722626863~hmac=6620b351cf7c4d56d5209fd59eadfa696d1edbdafbf1db30e5ab2c9e303cfa4a&w=996"
                            alt="avatar" className="w-[60px] h-[60px] object-cover rounded-full "/>
                        <div className="flex flex-col">
                            <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold">Jane Cooper</h3>
                            <span
                                className="text-[0.9rem] dark:text-[#abc2d3]/80 text-gray-500">Nursing Assistant</span>
                        </div>
                    </div>

                    <button className="py-2 w-max sm:m-0 mx-auto px-6 bg-purple-500 text-white rounded-md">Follow
                    </button>

                </div>

                <div
                    className="flex sm:flex-row flex-col dark:hover:bg-slate-700 sm:items-center w-full justify-between py-3 hover:bg-gray-100 px-4">
                    <div className="flex gap-[10px]">
                        <img
                            src="https://img.freepik.com/free-photo/portrait-male-traveler-looking-camera-outdoors_23-2148148710.jpg?t=st=1722623296~exp=1722626896~hmac=29e65db6c3e3bbf68796e9342afee5e3595eaa67bbe65a2688fdac5d45041201&w=996"
                            alt="avatar" className="w-[60px] h-[60px] object-cover rounded-full "/>
                        <div className="flex flex-col">
                            <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold">Frank Esteban</h3>
                            <span className="text-[0.9rem] dark:text-[#abc2d3]/80 text-gray-500">Software Tester</span>
                        </div>
                    </div>

                    <button className="py-2 w-max sm:m-0 mx-auto px-6 bg-purple-500 text-white rounded-md">Follow
                    </button>

                </div>

                <div
                    className="flex sm:flex-row flex-col dark:hover:bg-slate-700 sm:items-center w-full justify-between py-3 hover:bg-gray-100 px-4">
                    <div className="flex gap-[10px]">
                        <img
                            src="https://img.freepik.com/free-photo/handsome-sensitive-red-head-man-smiling_23-2149509820.jpg?t=st=1722623336~exp=1722626936~hmac=f02780547f6a8bc7020a8ab4cf2bbfd1b0b559812cf7f3aea793970ee9a14dc8&w=996"
                            alt="avatar" className="w-[60px] h-[60px] object-cover rounded-full "/>
                        <div className="flex flex-col">
                            <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold">Dianne Russell</h3>
                            <span className="text-[0.9rem] dark:text-[#abc2d3]/80 text-gray-500">Web Designer</span>
                        </div>
                    </div>

                    <button className="py-2 w-max sm:m-0 mx-auto px-6 bg-purple-500 text-white rounded-md">Follow
                    </button>

                </div>
            </div>

            <div className="bg-gray-100 dark:bg-slate-600 p-4 rounded-b-md flex items-center justify-between w-full">
                <span className="text-[0.9rem] dark:text-[#abc2d3] text-gray-400">543 students</span>
                <button className="text-[0.9rem] dark:text-[#abc2d3] text-gray-700 font-[500]">VIEW ALL MEMBER</button>
            </div>
        </div>
    );
};

export default Card;
