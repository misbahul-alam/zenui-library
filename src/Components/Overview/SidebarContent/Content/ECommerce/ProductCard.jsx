import React, {useState} from "react";

// react helmet
import {Helmet} from "react-helmet";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";

// contents for scrollspy
import {useScrollSpy} from '../../../../../CustomHooks/useScrollSpy';
import {productCardsContents} from "../../../../../Utils/ContentsConfig/ECommerceContents.js";

// icons
import {FaPlus} from "react-icons/fa6";
import {FaHeart, FaRegHeart, FaStar} from "react-icons/fa";
import {RiHeartAddLine, RiHeartFill} from "react-icons/ri";
import {FiArrowUpRight, FiMinus, FiPlus} from "react-icons/fi";
import {IoBagHandleOutline, IoCartOutline, IoEyeOutline, IoGift} from "react-icons/io5";
import {IoIosHeart, IoMdHeartEmpty} from "react-icons/io";
import {MdLocalShipping} from "react-icons/md";
import {HiArrowsUpDown} from "react-icons/hi2";

const ProductCard = () => {
    const sectionIds = productCardsContents.map(item => item.href.slice(1));
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

    const [wishlistVisible, setWishlistVisible] = useState(false);
    const [compareVisible, setCompareVisible] = useState(false);
    const [quickViewVisible, setQuickViewVisible] = useState(false);

    const [productCardHover, setProductCardHover] = useState(false);

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
                    <ContentHeader text={'clothing product card'} id={'clothing_product_card'}/>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        Clothing product card with name, price, sizes, colors, and quick action buttons for easy shopping.
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
                                <div className='w-[50%] group'>

                                    {/* image & action buttons */}
                                    <div onMouseOver={() => setProductCardHover(true)}
                                         onMouseOut={() => setProductCardHover(false)}
                                         className='w-full relative cursor-pointer overflow-hidden'>
                                        <img alt='product/image'
                                             src={
                                                 productCardHover
                                                     ? '//wpbingo-fashow.myshopify.com/cdn/shop/products/63.jpg?v=1665549687'
                                                     : '//wpbingo-fashow.myshopify.com/cdn/shop/products/62.jpg?v=1665549687'
                                             }
                                             className='w-full'/>

                                        <div className='absolute bottom-0 left-0 w-full'>
                                            {/* quick action buttons */}
                                            <div className='flex items-center gap-[15px] justify-center'>

                                                <div onMouseOver={() => setWishlistVisible(true)}
                                                     onMouseOut={() => setWishlistVisible(false)}
                                                     className='relative w-max group-hover:translate-y-0 translate-y-[50px] transition-all opacity-0 group-hover:opacity-100 duration-300'>
                                                    <p className='rounded-full bg-white p-2 hover:bg-[#0FABCA] hover:text-white transition-all duration-200 cursor-pointer'>
                                                        <IoMdHeartEmpty className='text-[1.3rem]'/>
                                                    </p>

                                                    {/* tooltip */}
                                                    <p className={`${wishlistVisible ? 'opacity-100 z-[100] translate-y-0' : 'opacity-0 z-[-1] translate-y-[20px]'} absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}>
                                                        Wishlist

                                                        {/* arrow */}
                                                        <span
                                                            className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"></span>
                                                    </p>
                                                </div>

                                                <div onMouseOver={() => setCompareVisible(true)}
                                                     onMouseOut={() => setCompareVisible(false)}
                                                     className='relative w-max group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-[80px]'>
                                                    <p className='rounded-full bg-white p-2 hover:bg-[#0FABCA] hover:text-white transition-all duration-200 cursor-pointer'>
                                                        <HiArrowsUpDown className='text-[1.3rem]'/>
                                                    </p>

                                                    {/* tooltip */}
                                                    <p className={`${compareVisible ? 'opacity-100 z-[100] translate-y-0' : 'opacity-0 z-[-1] translate-y-[20px]'} absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}>
                                                        Compare

                                                        {/* arrow */}
                                                        <span
                                                            className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"></span>
                                                    </p>
                                                </div>

                                                <div onMouseOver={() => setQuickViewVisible(true)}
                                                     onMouseOut={() => setQuickViewVisible(false)}
                                                     className='relative w-max group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100 translate-y-[110px]'>
                                                    <p className='rounded-full bg-white p-2 hover:bg-[#0FABCA] hover:text-white transition-all duration-200 cursor-pointer'>
                                                        <IoEyeOutline className='text-[1.3rem]'/>
                                                    </p>

                                                    {/* tooltip */}
                                                    <p className={`${quickViewVisible ? 'opacity-100 z-[100] translate-y-0' : 'opacity-0 z-[-1] translate-y-[20px]'} absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}>
                                                        Quick View

                                                        {/* arrow */}
                                                        <span
                                                            className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"></span>
                                                    </p>
                                                </div>
                                            </div>

                                            {/* quantity & add cart */}
                                            <div
                                                className='w-full flex mt-6 items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 translate-y-[60px] bg-[rgb(0,0,0,0.5)]'>

                                                {/* quantity */}
                                                <div
                                                    className='flex w-[50%] justify-center px-2 py-0.5 items-center border-r border-gray-400 text-white'>
                                                    <button
                                                        className='active:bg-gray-100 p-[6px] rounded-full text-white transition-all duration-300 active:text-gray-700 text-[0.9rem]'
                                                        onClick={handleDecrement}><FiMinus/></button>
                                                    <input type='number' value={count}
                                                           className='w-[40px] py-2.5 outline-none focus:ring-0 border-none text-center text-[0.9rem] bg-transparent'
                                                           onInput={handleInputValueChange}/>
                                                    <button
                                                        className='active:bg-gray-100 p-[6px] rounded-full text-white transition-all duration-300 active:text-gray-700 text-[0.9rem]'
                                                        onClick={handleIncrement}><FiPlus/></button>
                                                </div>

                                                {/* add to cart */}
                                                <button
                                                    className='py-[13px] overflow-hidden before:w-full before:h-full before:bg-[#0FABCA] before:absolute before:top-0 z-0 before:z-[-1] before:translate-x-[-150px] hover:before:translate-x-0 before:transition-all before:duration-300 before:left-0 relative flex items-center justify-center grow text-white'>
                                                    <IoBagHandleOutline className='text-[1.3rem]'/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* product details */}
                                    <div className='mt-4'>

                                        {/* review area */}
                                        <div className='flex items-center justify-center gap-[10px] mt-2'>
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

                                        <h3 className='text-[1rem] font-medium text-center mt-0.5 text-gray-900'>Drop-shoulder
                                            synthetic</h3>
                                        <p className='text-center mt-0.5 text-[0.9rem] text-gray-900'>Tk 1,800.00</p>

                                        <div className='flex items-center gap-[10px] justify-center mt-3'>
                                            <div
                                                className='w-4 h-4 rounded-full bg-red-500 outline outline-1 outline-red-500 outline-offset-2 cursor-pointer'></div>
                                            <div className='w-4 h-4 rounded-full bg-green-500 cursor-pointer'></div>
                                            <div className='w-4 h-4 rounded-full bg-blue-500 cursor-pointer'></div>
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
                        <ContentHeader text={'juice product card'} id={'juice_product_card'}/>
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        Juice product card with name, price, flavors, size options, and quick action buttons for easy purchase.
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
                        <ContentHeader text={'Grocery product card'} id={'grocery_product_card'}/>
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        Grocery product card with name, price, weight, category, and quick action buttons for easy shopping.
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
                                <div className='relative border w-[55%] border-gray-300 rounded-md p-5'>

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
                        <ContentHeader text={'digital product card'} id={'digital_product_card'}/>
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        Digital product card with name, price, file size, format, and quick action buttons for instant download.
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
                                <div className='border border-gray-300 rounded-xl p-2 w-[70%]'>

                                    {/* product image */}
                                    <div className='relative'>
                                        <img alt='product/image' src='https://i.ibb.co.com/cTTfNRw/Link-1.png'
                                             className='w-full'/>

                                        {/* favorite icon */}
                                        <div className='p-2 rounded-full bg-gray-600 absolute top-2 right-2'>
                                            {
                                                isFavorite ? (
                                                    <IoIosHeart onClick={() => setIsFavorite(false)}
                                                                className={`text-[#0FABCA] text-[1.2rem] cursor-pointer`}/>
                                                ) : (
                                                    <IoMdHeartEmpty onClick={() => setIsFavorite(true)}
                                                                    className={` text-white text-[1.2rem] cursor-pointer`}/>
                                                )
                                            }

                                        </div>
                                    </div>

                                    {/* product details */}
                                    <div className='mt-2 pt-0 p-1'>
                                        <h3 className='text-[1.1rem] font-medium line-clamp-1'>Criphin - Contemporary
                                            Business Keynote</h3>

                                        {/* authors & reviews */}
                                        <div className='flex items-center justify-between mt-1'>
                                            <p className='text-gray-400 text-[0.9rem]'>by <span
                                                className='text-black'>Criphin</span> in <span
                                                className='text-black'>Graphics</span></p>

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
                                                    <IoCartOutline
                                                        className='text-[1.3rem] group-hover:text-white text-[#0FABCA]'/>
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
                        <ContentHeader text={'book product card'} id={'book_product_card'}/>
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        Book product card with title, price, author, genre, and quick action buttons for easy purchase.
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
                                <div className='w-[55%] relative rounded-md overflow-hidden'>

                                    {/* badge */}
                                    <span
                                        className='bg-red-500 rounded-sm px-3 py-1 text-[0.9rem] text-white absolute top-3 left-3'>Best</span>

                                    {/* product image */}
                                    <img alt='product/image' src='https://i.ibb.co.com/wrYPvfd/Link-31-jpg.png'
                                         className='w-full'/>

                                    {/* product details */}
                                    <div className='mt-2'>
                                        <span className='text-gray-400 text-[0.9rem]'>Biography</span>
                                        <h3 className='text-[1.1rem] font-medium mt-2'>Home Decor Lucky Deer Family
                                            Matte Finish Ceramic Figures</h3>
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

                    <div className='mt-8'>
                        <ContentHeader text={'gadget product card 1'} id={'gadget_product_card_1'}/>
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        Gadget product card with name, price, features, available colors, and quick action buttons for easy purchase.
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
                                <div className='border border-gray-300 w-[60%] relative rounded-2xl overflow-hidden'>

                                    {/* badge */}
                                    <span
                                        className='bg-red-500 rounded-b-md px-3 py-1 text-[0.9rem] text-white absolute top-0 left-4'>Best Value</span>

                                    {/* product image */}
                                    <img alt='product/image' src='https://i.ibb.co.com/z4BV3S2/image-1.png'
                                         className='w-full mt-6'/>

                                    {/* product details */}
                                    <div className='p-4 pt-0'>
                                        <h3 className='text-[1.4rem] font-semibold mb-1 mt-2'>Apple</h3>

                                        <span className='text-[0.9rem] font-normal text-gray-500 line-clamp-2'>2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Silver</span>

                                        {/* price & discount offer */}
                                        <div className='flex items-center mt-3 gap-[15px]'>
                                            <p className='text-[1.150rem] font-semibold mt-1'>$1024.99+</p>

                                            <p className='border text-green-600 text-[0.8rem] border-green-400 px-2 py-1 rounded-md'>35%
                                                Off</p>
                                        </div>

                                        {/* shipping offers */}
                                        <div
                                            className='flex items-center border-t border-gray-300 mt-3 gap-[15px] pt-[5px]'>
                                            <div className='flex items-center gap-[6px] text-gray-400 text-[0.9rem]'>
                                                <MdLocalShipping/>
                                                <p>Free shipping</p>
                                            </div>
                                            <div className='flex items-center gap-[6px] text-gray-400 text-[0.9rem]'>
                                                <IoGift/>
                                                <p>Free gift</p>
                                            </div>
                                        </div>

                                        {/* actions */}
                                        <div className='flex items-center justify-between mt-7 gap-[15px]'>
                                            <button
                                                className='py-[9px] px-4 text-white rounded-2xl grow justify-center flex items-center gap-[0.5rem] hover:bg-[#01849b] text-[1rem] bg-[#0FABCA] transition-all duration-200'>
                                                View Deal
                                                <FiArrowUpRight className='text-[1.3rem]'/>
                                            </button>
                                            <button className='p-[9px] rounded-full border-2 border-[#0FABCA]'>
                                                {
                                                    isFavorite ? (
                                                        <RiHeartFill onClick={() => setIsFavorite(false)}
                                                                     className='text-[#0FABCA] text-[1.3rem]'/>
                                                    ) : (
                                                        <RiHeartAddLine onClick={() => setIsFavorite(true)}
                                                                        className='text-[#0FABCA] text-[1.3rem]'/>
                                                    )
                                                }
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
                        <ContentHeader text={'gadget product card 2'} id={'gadget_product_card_2'}/>
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        Gadget product card with name, price, features, available colors, and quick action buttons for easy purchase.
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
                                <div className='border border-gray-300 w-[60%] relative rounded-2xl overflow-hidden'>

                                    {/* badge */}
                                    <span
                                        className='bg-red-500 rounded-sm px-3 py-1 z-10 text-[0.9rem] text-white absolute top-3 left-3'>HOT</span>

                                    {/* product image */}
                                    <div className='group relative overflow-hidden cursor-pointer'>
                                        <img alt='product/image' src='https://i.ibb.co.com/kcYX9md/Image-2.png'
                                             className='w-[240px] mx-auto mt-5'/>

                                        {/* action buttons */}
                                        <div className='absolute bg-[rgb(0,0,0,0.3)] z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 bottom-0 left-0 flex items-center justify-center w-full h-full'>
                                            <div className='flex items-center gap-[15px] justify-center'>

                                                <div onMouseOver={() => setWishlistVisible(true)}
                                                     onMouseOut={() => setWishlistVisible(false)}
                                                     className='relative w-max group-hover:translate-y-0 translate-y-[50px] transition-all opacity-0 group-hover:opacity-100 duration-300'>
                                                    <p className='rounded-full bg-white p-2 hover:bg-[#0FABCA] hover:text-white transition-all duration-200 cursor-pointer'>
                                                        <IoMdHeartEmpty className='text-[1.3rem]'/>
                                                    </p>

                                                    {/* tooltip */}
                                                    <p className={`${wishlistVisible ? 'opacity-100 z-[100] translate-y-0' : 'opacity-0 z-[-1] translate-y-[20px]'} absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}>
                                                        Wishlist

                                                        {/* arrow */}
                                                        <span
                                                            className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"></span>
                                                    </p>
                                                </div>

                                                <div onMouseOver={() => setCompareVisible(true)}
                                                     onMouseOut={() => setCompareVisible(false)}
                                                     className='relative w-max group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-[80px]'>
                                                    <p className='rounded-full bg-white p-2 hover:bg-[#0FABCA] hover:text-white transition-all duration-200 cursor-pointer'>
                                                        <HiArrowsUpDown className='text-[1.3rem]'/>
                                                    </p>

                                                    {/* tooltip */}
                                                    <p className={`${compareVisible ? 'opacity-100 z-[100] translate-y-0' : 'opacity-0 z-[-1] translate-y-[20px]'} absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}>
                                                        Compare

                                                        {/* arrow */}
                                                        <span
                                                            className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"></span>
                                                    </p>
                                                </div>

                                                <div onMouseOver={() => setQuickViewVisible(true)}
                                                     onMouseOut={() => setQuickViewVisible(false)}
                                                     className='relative w-max group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100 translate-y-[110px]'>
                                                    <p className='rounded-full bg-white p-2 hover:bg-[#0FABCA] hover:text-white transition-all duration-200 cursor-pointer'>
                                                        <IoEyeOutline className='text-[1.3rem]'/>
                                                    </p>

                                                    {/* tooltip */}
                                                    <p className={`${quickViewVisible ? 'opacity-100 z-[100] translate-y-0' : 'opacity-0 z-[-1] translate-y-[20px]'} absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}>
                                                        Quick View

                                                        {/* arrow */}
                                                        <span
                                                            className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* product details */}
                                    <div className='p-4 pt-6'>

                                        {/* review area */}
                                        <div className='flex items-center gap-[10px]'>
                                            <div className="flex items-center space-x-1">
                                                {[...Array(5)].map((_, index) => {
                                                    const starRating = index + 1;
                                                    return (
                                                        <FaStar
                                                            key={starRating}
                                                            className={`cursor-pointer ${
                                                                starRating <= rating ? "text-[#FA8232]" : "text-gray-300"
                                                            }`}
                                                            size={15}
                                                            onClick={() => setRating(starRating)}
                                                        />
                                                    );
                                                })}
                                            </div>
                                            <span className='text-[0.8rem] text-gray-500'>(738)</span>
                                        </div>

                                        <h3 className='text-[1.1rem] text-gray-900 font-medium mb-2 mt-2'>TOZO T6 True
                                            Wireless
                                            Earbuds Bluetooth Headphon</h3>
                                        <p className='text-[1.150rem] font-medium text-[#0FABCA] mt-1'>$70</p>

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
                        <ContentHeader text={'product list card 1'} id={'product_list_card_1'}/>
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        Product list card with name, price, image, and quick action buttons for easy browsing and purchase.
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
                                <div className='w-[80%] border border-gray-300 rounded-md px-4 flex items-center gap-[10px]'>
                                    <img alt='product/image' src='https://i.ibb.co.com/FDsyM7X/Image-4.png' className='w-[120px]'/>

                                    <div>
                                        <h3 className='text-[1.1rem] font-medium line-clamp-2'>Portable Wshing Machine, 11lbs capacity Model 18NMF</h3>
                                        <p className='text-[1rem] font-medium text-[#0FABCA] mt-1'>$1,500</p>
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
                        <ContentHeader text={'product list card 2'} id={'product_list_card_2'}/>
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        Product list card with name, price, image, and quick action buttons for easy browsing and purchase.
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
                                <div className='w-[80%] justify-center flex items-center gap-[10px]'>
                                    <img alt='product/image' src='https://i.ibb.co.com/HHP2J04/7-jpg.png' className='w-[80px] rounded-md'/>

                                    <div>
                                        <h3 className='text-[1.1rem] font-medium line-clamp-2'>Good Life Raw Peanuts</h3>

                                        {/* review area */}
                                        <div className='flex items-center gap-[10px] mb-2'>
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

                                        <p className='text-[1rem] font-medium text-[#0FABCA] mt-1'>$85.00</p>
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

                <div className='1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]'>
                    <h2 className='text-[0.9rem] font-[600] text-text tracking-widest'>
                        CONTENTS
                    </h2>
                    {productCardsContents.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className={`${
                                activeSection === item.href.slice(1) &&
                                '!text-primary !border-primary'
                            } text-[0.9rem] capitalize transition-all duration-300 text-text border-l border-transparent pl-4`}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </aside>
            <Helmet>
                <title>E-Commerce - Product Card</title>
            </Helmet>
        </>
    );
};

export default ProductCard;
