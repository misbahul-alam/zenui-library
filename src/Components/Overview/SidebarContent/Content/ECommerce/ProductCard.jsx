import React, {useState} from "react";

// react helmet
import {Helmet} from "react-helmet";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";

// contents for scrollspy
import {dialogContents} from '../../../../../Utils/ContentsConfig/FeedbackContents';
import {useScrollSpy} from '../../../../../CustomHooks/useScrollSpy';

// icons
import {FaPlus} from "react-icons/fa6";
import {FaHeart, FaRegHeart, FaStar, FaUser} from "react-icons/fa";
import {RxCross1} from "react-icons/rx";
import {FiMinus, FiPlus} from "react-icons/fi";
import {IoCartOutline} from "react-icons/io5";
import {IoIosHeart, IoMdHeartEmpty} from "react-icons/io";

const ProductCard = () => {
    const sectionIds = dialogContents.map(item => item.href.slice(1));
    const activeSection = useScrollSpy(sectionIds);

    // backgroundPreview
    const [basicDialogPreview, setBasicDialogPreview] = useState(true);
    const [basicDialogCode, setBasicDialogCode] = useState(false);

    const handleBasicDialogPreview = () => {
        setBasicDialogPreview(true);
        setBasicDialogCode(false);
    };

    const handleBasicDialogCode = () => {
        setBasicDialogCode(true);
        setBasicDialogPreview(false);
    };

    // all actions

    const [rating, setRating] = useState(5);
    const [isFavorite, setIsFavorite] = useState(false);
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevValue => prevValue + 1);
    }

    const handleDecrement = () => {
        setCount(prevValue => prevValue - 1);
    }

    const handleInputValueChange = (e) => {
        setCount(Number(e.target.value));
    }

    return (
        <>
            <aside className='flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
                <div>
                    <ContentHeader text={'basic dialog'} id={'basic_dialog'}/>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        This is a dialog component. Display important messages, prompts, or
                        actions in a focused modal window.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    basicDialogPreview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[107px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    basicDialogPreview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleBasicDialogPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    basicDialogCode && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleBasicDialogCode}
                            >
                                Code
                            </button>
                        </div>
                        {basicDialogPreview && (
                            <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                                <div className='border border-gray-300 rounded-md p-5'>

                                    {/* product image */}
                                    <img alt='product/image' src='https://i.ibb.co.com/VN5sNHX/Link-14-png.png'
                                         className='w-[250px] mt-2'/>

                                    {/* product details */}
                                    <div className='mt-3'>
                                        <h3 className='text-[1.1rem] font-semibold'>Frooti Mango Drink</h3>

                                        {/* rating area */}
                                        <div className='flex items-center gap-[10px] mt-2'>
                                            <div className="flex items-center space-x-1">
                                                {[...Array(5)].map((_, index) => {
                                                    const starRating = index + 1;
                                                    return (
                                                        <FaStar
                                                            key={starRating}
                                                            className={`cursor-pointer ${
                                                                starRating <= rating ? "text-yellow-400" : "text-gray-300"
                                                            }`}
                                                            size={16}
                                                            onClick={() => setRating(starRating)}
                                                        />
                                                    );
                                                })}
                                            </div>
                                            <span className='text-[0.9rem] text-gray-500'>(43)</span>
                                        </div>

                                        <div className='flex items-end justify-between mt-2'>
                                            <div>
                                                <p className='text-[0.9rem] text-gray-500'>1 KG</p>
                                                <p className='text-[1rem] font-semibold mt-1 text-[#0FABCA]'>$ 80.00</p>
                                            </div>

                                            <button
                                                className='py-2 px-4 bg-[#0FABCA] text-white rounded-md flex items-center gap-[0.5rem] text-[0.9rem] hover:bg-[#0195af] transition-all duration-200'>
                                                Add
                                                <FaPlus/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {basicDialogCode && (
                            <Showcode
                                code='
          '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader text={'basic dialog'} id={'basic_dialog'}/>
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        This is a dialog component. Display important messages, prompts, or
                        actions in a focused modal window.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    basicDialogPreview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[107px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    basicDialogPreview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleBasicDialogPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    basicDialogCode && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleBasicDialogCode}
                            >
                                Code
                            </button>
                        </div>
                        {basicDialogPreview && (
                            <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                                <div className='relative border w-[50%] border-gray-300 rounded-md p-5'>

                                    {/* favorite icon */}
                                    <FaHeart onClick={() => setIsFavorite(false)}
                                             className={` ${isFavorite ? 'opacity-100 scale-[1] z-10' : 'opacity-0 scale-[0.7] z-[-1]'} text-[1.4rem] absolute top-3 text-red-500 right-3 cursor-pointer transition-all duration-300`}/>
                                    <FaRegHeart onClick={() => setIsFavorite(true)}
                                                className={`${isFavorite ? 'opacity-0 scale-[0.7] z-[-1]' : 'opacity-100 scale-[1] z-10'} text-[1.4rem] absolute top-3 right-3 text-gray-600 cursor-pointer transition-all duration-300`}/>


                                    {/* product image */}
                                    <img alt='product/image' src='https://i.ibb.co.com/p0CjNLD/Link-11-png.png'
                                         className='w-[150px] mt-2 mx-auto'/>

                                    {/* product details */}
                                    <div className='mt-8'>

                                        {/* rating area */}
                                        <div className="flex items-center space-x-1">
                                            {[...Array(5)].map((_, index) => {
                                                const starRating = index + 1;
                                                return (
                                                    <FaStar
                                                        key={starRating}
                                                        className={`cursor-pointer ${
                                                            starRating <= rating ? "text-yellow-400" : "text-gray-300"
                                                        }`}
                                                        size={16}
                                                        onClick={() => setRating(starRating)}
                                                    />
                                                );
                                            })}
                                        </div>

                                        <h3 className='text-[1.1rem] font-medium mt-1.5'>Cucumber</h3>

                                        <div className='flex items-center gap-[10px]'>
                                            <p className='text-[1rem] font-semibold mt-1 text-[#0FABCA]'>$70.21</p>
                                            <del className='text-[1rem] font-normal mt-1 text-gray-500 '>$80.50</del>
                                        </div>

                                        <div className='flex items-center w-full justify-between mt-4'>

                                            <div className='flex items-center border border-gray-200 rounded-md'>
                                                <button
                                                    className='bg-gray-100 p-[9px] rounded-l-md text-gray-600 text-[1.1rem]'
                                                    onClick={handleDecrement}><FiMinus/></button>
                                                <input type='number' value={count}
                                                       className='w-[50px] py-[4px] outline-none text-gray-600 focus:ring-0 border-none text-center text-[1.1rem]'
                                                       onInput={handleInputValueChange}/>
                                                <button
                                                    className='bg-gray-100 p-[9px] rounded-r-md text-gray-600 text-[1.1rem]'
                                                    onClick={handleIncrement}><FiPlus/></button>
                                            </div>

                                            <button
                                                className='py-2 px-4 bg-[#0FABCA] text-white rounded-md flex items-center gap-[0.5rem] text-[0.9rem] hover:bg-[#0195af] transition-all duration-200'>
                                                <IoCartOutline className='text-[1.3rem]'/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {basicDialogCode && (
                            <Showcode
                                code='
          '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader text={'basic dialog'} id={'basic_dialog'}/>
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        This is a dialog component. Display important messages, prompts, or
                        actions in a focused modal window.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    basicDialogPreview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[107px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    basicDialogPreview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleBasicDialogPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    basicDialogCode && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleBasicDialogCode}
                            >
                                Code
                            </button>
                        </div>
                        {basicDialogPreview && (
                            <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                                <div className='border border-gray-300 rounded-xl p-2 w-[60%]'>

                                    {/* product image */}
                                    <div className='relative'>
                                        <img alt='product/image' src='https://i.ibb.co.com/cTTfNRw/Link-1.png' className='w-full'/>

                                        {/* favorite icon */}
                                        <div className='p-2 rounded-full bg-gray-600 absolute top-2 right-2'>
                                            {
                                                isFavorite ? (
                                                    <IoIosHeart onClick={()=> setIsFavorite(false)} className={`text-[#0FABCA] text-[1.2rem] cursor-pointer`}/>
                                                ): (
                                                    <IoMdHeartEmpty onClick={()=> setIsFavorite(true)} className={` text-white text-[1.2rem] cursor-pointer`}/>
                                                )
                                            }

                                        </div>
                                    </div>

                                    {/* product details */}
                                    <div className='mt-2 pt-0 p-1'>
                                        <h3 className='text-[1.1rem] font-medium line-clamp-1'>Criphin - Contemporary Business Keynote</h3>

                                        {/* authors & reviews */}
                                        <div className='flex items-center justify-between mt-1'>
                                            <p className='text-gray-400 text-[0.9rem]'>by <span className='text-black'>Criphin</span> in <span className='text-black'>Graphics</span></p>

                                            {/* review area */}
                                            <div className='flex items-center gap-[10px]'>
                                                <div className="flex items-center space-x-1">
                                                    {[...Array(5)].map((_, index) => {
                                                        const starRating = index + 1;
                                                        return (
                                                            <FaStar
                                                                key={starRating}
                                                                className={`cursor-pointer ${
                                                                    starRating <= rating ? "text-yellow-400" : "text-gray-300"
                                                                }`}
                                                                size={15}
                                                                onClick={() => setRating(starRating)}
                                                            />
                                                        );
                                                    })}
                                                </div>
                                                <span className='text-[0.8rem] text-gray-500'>(4.8)</span>
                                            </div>
                                        </div>

                                        {/* price and action btn */}
                                        <div className='flex items-end justify-between mt-5'>
                                            <div>
                                                <span className='text-gray-400 text-[0.9rem]'>168 Sales</span>
                                                <p className='text-[1.150rem] font-semibold text-[#0FABCA]'>$52.00</p>
                                            </div>

                                            <div className='flex items-center gap-[10px]'>
                                                <button
                                                    className='py-2 px-4 border border-[#0FABCA] text-white rounded-md flex items-center group gap-[0.5rem] text-[0.9rem] hover:bg-[#0FABCA] transition-all duration-200'>
                                                    <IoCartOutline className='text-[1.3rem] group-hover:text-white text-[#0FABCA]'/>
                                                </button>

                                                <button
                                                    className='py-2 px-4 border border-[#0FABCA] text-[#0FABCA] hover:text-white rounded-md flex items-center gap-[0.5rem] text-[0.9rem] hover:bg-[#0FABCA] transition-all duration-200'>
                                                    Preview
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {basicDialogCode && (
                            <Showcode
                                code='
          '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader text={'basic dialog'} id={'basic_dialog'}/>
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        This is a dialog component. Display important messages, prompts, or
                        actions in a focused modal window.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    basicDialogPreview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[107px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    basicDialogPreview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleBasicDialogPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    basicDialogCode && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleBasicDialogCode}
                            >
                                Code
                            </button>
                        </div>
                        {basicDialogPreview && (
                            <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                                <div className='w-[50%] relative rounded-md overflow-hidden'>

                                    {/* badge */}
                                    <span className='bg-red-500 rounded-sm px-3 py-1 text-[0.9rem] text-white absolute top-3 left-3'>Best</span>

                                    {/* product image */}
                                    <img alt='product/image' src='https://i.ibb.co.com/wrYPvfd/Link-31-jpg.png' className='w-full'/>

                                    {/* product details */}
                                    <div className='mt-2'>
                                        <span className='text-gray-400 text-[0.9rem]'>Biography</span>
                                        <h3 className='text-[1.1rem] font-medium mt-2'>Home Decor Lucky Deer Family Matte Finish Ceramic Figures</h3>
                                        <p className='text-[0.9rem] text-gray-400 mt-1'>By Ellie Thomson, Henry</p>
                                        <p className='text-[1.1rem] font-semibold mt-1 text-[#0FABCA]'>$80.00</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {basicDialogCode && (
                            <Showcode
                                code='
          '
                            />
                        )}
                    </div>

                    <OverviewFooter
                        backUrl='/components/timeline'
                        backName='timeline'
                        forwardName='ads card'
                        forwardUrl='/components/ads-card'
                    />
                </div>

                <div className='1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[20%]'>
                    <h2 className='text-[0.9rem] font-[600] text-text tracking-widest'>
                        CONTENTS
                    </h2>
                    {dialogContents.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className={`${
                                activeSection === item.href.slice(1) &&
                                '!text-primary !border-primary'
                            } text-[0.9rem] text-text border-l border-transparent pl-4`}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </aside>
            <Helmet>
                <title>Feedback - Product Card</title>
            </Helmet>
        </>
    );
};

export default ProductCard;
