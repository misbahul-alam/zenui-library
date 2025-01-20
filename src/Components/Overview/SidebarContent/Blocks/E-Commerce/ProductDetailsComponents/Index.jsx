import React, {useEffect, useState} from "react";

// components
import ContentHeader from "../../../../../../Shared/ContentHeader";
import {Helmet} from "react-helmet";
import BlocksShowCode from "../../../../../../Shared/BlocksShowCode.jsx";

// icons
import BlocksFooter from "../../../../../../Shared/BlocksFooter.jsx";

// toggle card view
import {useToggleCardView} from "../../../../../../CustomHooks/ButtonToggle.js";

// product details examples components
import ProductDetailsExample1 from "./ProductDetailsExample1.jsx";
import ProductDetailsExample2 from "./ProductDetailsExample2.jsx";
import ProductDetailsExample3 from "./ProductDetailsExample3.jsx";


const Index = () => {

    // toggle actions
    const toggleCardView = useToggleCardView()

    const [productDetails1Preview, setProductDetails1Preview] = useState(true);
    const [productDetails1Code, setProductDetails1Code] = useState(false);

    const [productDetails2Preview, setProductDetails2Preview] = useState(true);
    const [productDetails2Code, setProductDetails2Code] = useState(false);

    const [productDetails3Preview, setProductDetails3Preview] = useState(true);
    const [productDetails3Code, setProductDetails3Code] = useState(false);

    return (
        <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
            <div>
                <ContentHeader text={"product details page 1"} id={"product_details_page_1"}/>

                <p className="w-full text-text text-[1rem]">
                    View all product details in one place - images, specs, reviews, pricing, and more. Everything you need to make an informed purchase!
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${productDetails1Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                productDetails1Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setProductDetails1Preview, setProductDetails1Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                productDetails1Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setProductDetails1Preview, setProductDetails1Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {productDetails1Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <ProductDetailsExample1/>
                        </div>
                    )}

                    {productDetails1Code && <BlocksShowCode code='
import React, {useState} from "react";

// react icons
import {BsHeart, BsHeartFill} from "react-icons/bs"
import {FiCpu, FiSmartphone} from "react-icons/fi"
import {IoMdCamera} from "react-icons/io"
import {MdBatteryChargingFull} from "react-icons/md"
import {GoVerified} from "react-icons/go";
import {IoStorefrontOutline} from "react-icons/io5";
import {CiDeliveryTruck} from "react-icons/ci";

const ProductDetailsPage = () => {

    const [selectedImage, setSelectedImage] = useState(0)
    const [selectedColor, setSelectedColor] = useState("black")
    const [selectedStorage, setSelectedStorage] = useState("1TB")
    const [isFavorite, setIsFavorite] = useState(false)

    const images = [
        "https://i.ibb.co.com/GTGBw03/image-323.png",
        "https://i.ibb.co.com/thxkk1x/image-320.png",
        "https://i.ibb.co.com/MckV93r/image-320.png",
        "https://i.ibb.co.com/ZGWRGDT/image-320.png"
    ]

    const colors = [
        {name: "black", class: "bg-black"},
        {name: "purple", class: "bg-purple-600"},
        {name: "red", class: "bg-red-600"},
        {name: "yellow", class: "bg-yellow-500"},
        {name: "gray", class: "bg-gray-200"}
    ]

    const storage = ["128GB", "256GB", "512GB", "1TB"]

    return (
        <div className="mx-auto lg:px-8 lg:py-12">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Left side - Image gallery */}
                <div className="flex flex-col-reverse gap-[15px] lg:gap-0 lg:flex-row">

                    {/* Thumbnails */}
                    <div
                        className="w-full lg:w-[20%] flex flex-row lg:flex-col lg:gap-4 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 lg:pr-2">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`relative w-36 lg:w-20 h-[70px] lg:h-20 border-2 p-1 lg:p-2 rounded-lg overflow-hidden ${
                                    selectedImage === index ? "border-[#0FABCA]" : "border-transparent"
                                }`}
                            >
                                <img
                                    src={image}
                                    alt={`Product ${index + 1}`}
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>

                    {/* Main image */}
                    <div className="w-full lg:w-[80%] bg-gray-100 rounded-sm h-[280px] lg:h-[400px] relative flex items-center justify-center">
                        <img
                            src={images[selectedImage]}
                            alt="Product main image"
                            className="object-cover w-[200px] lg:w-[300px] rounded-lg"
                        />
                    </div>
                </div>

                {/* Right side - Product details */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-[1.6rem] lg:text-[1.9rem] font-bold text-gray-800">Apple iPhone 14 Pro Max</h1>
                        <div className="flex items-center gap-2 mt-2 lg:mt-5">
                            <span className="text-3xl font-medium">$1399</span>
                            <span className="text-xl text-gray-500 line-through">$1499</span>
                        </div>
                    </div>

                    {/* Color selection */}
                    <div className="flex float-start lg:items-center flex-col lg:flex-row gap-[10px]">
                        <label className="text-sm font-medium">Select color:</label>
                        <div className="flex gap-3">
                            {colors.map((color) => (
                                <button
                                    key={color.name}
                                    onClick={() => setSelectedColor(color.name)}
                                    className={`w-8 h-8 rounded-full ${color.class} ${
                                        selectedColor === color.name ? "ring-2 ring-offset-2 ring-[#0FABCA]" : ""
                                    }`}
                                    aria-label={color.name}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Storage selection */}
                    <div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            {storage.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedStorage(size)}
                                    className={`py-2 px-4 rounded-lg border ${
                                        selectedStorage === size
                                            ? "border-[#0FABCA] bg-[#0FABCA]/10 text-[#0FABCA]"
                                            : "border-gray-200"
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Specifications */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                            <FiSmartphone className="w-5 h-5 text-gray-700"/>
                            <div>
                                <p className="text-sm text-gray-500">Screen size</p>
                                <p className="font-medium text-gray-700 text-[0.9rem]">6.7"</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                            <FiCpu className="w-5 h-5 text-gray-700"/>
                            <div>
                                <p className="text-sm text-gray-500">CPU</p>
                                <p className="font-medium text-gray-700 text-[0.9rem]">Apple A16 Bionic</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                            <IoMdCamera className="w-5 h-5 text-gray-700"/>
                            <div>
                                <p className="text-sm text-gray-500">Camera</p>
                                <p className="font-medium text-gray-700 text-[0.9rem]">48-12-12 MP</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                            <MdBatteryChargingFull className="w-5 h-5 text-gray-700"/>
                            <div>
                                <p className="text-sm text-gray-500">Battery</p>
                                <p className="font-medium text-gray-700 text-[0.9rem]">4323 mAh</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-[0.9rem] text-gray-600">
                        Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without
                        recharging throughout the day. Incredible photos in weak, yes and in bright light using
                        the new system with two cameras...
                        <button className="text-primary hover:underline">more...</button>
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-col lg:flex-row gap-4">
                        <button
                            onClick={() => setIsFavorite(!isFavorite)}
                            className="flex-1 py-3 px-4 rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-50">
                            <div className="flex items-center justify-center gap-2">
                                {
                                    isFavorite ? (
                                            <BsHeartFill className="w-5 h-5 text-red-500"/>
                                        )
                                        : (
                                            <BsHeart className="w-5 h-5"/>
                                        )
                                }
                                Add to Wishlist
                            </div>
                        </button>
                        <button className="flex-1 py-3 px-4 rounded-lg bg-[#0FABCA] text-white hover:bg-[#0FABCA]/90">
                            Add to Card
                        </button>
                    </div>

                    {/* Delivery info */}
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between mt-2">
                        <div className="flex items-center gap-3">
                            <CiDeliveryTruck className="text-[3rem] text-gray-500 p-3 bg-gray-100 rounded-md"/>
                            <div>
                                <p className="text-sm text-gray-500">Free Delivery</p>
                                <p className="font-medium text-[0.9rem] text-gray-800">1-2 day</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <IoStorefrontOutline className="text-[3rem] text-gray-500 p-3 bg-gray-100 rounded-md"/>
                            <div>
                                <p className="text-sm text-gray-500">In Stock</p>
                                <p className="font-medium text-[0.9rem] text-gray-800">Today</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <GoVerified className="text-[3rem] text-gray-500 p-3 bg-gray-100 rounded-md"/>
                            <div>
                                <p className="text-sm text-gray-500">Guaranteed</p>
                                <p className="font-medium text-[0.9rem] text-gray-800">1 year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"product details page 2"} id={"product_details_page_2"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    View all product details in one place - images, specs, reviews, pricing, and more. Everything you need to make an informed purchase!
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${productDetails2Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                productDetails2Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setProductDetails2Preview, setProductDetails2Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                productDetails2Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setProductDetails2Preview, setProductDetails2Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {productDetails2Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <ProductDetailsExample2/>
                        </div>
                    )}

                    {productDetails2Code && <BlocksShowCode code='
import React, {useState, useEffect} from "react";

// react icons
import {FaStar} from "react-icons/fa6"
import {FaHeart, FaRegHeart} from "react-icons/fa"
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";

const ProductDetailsPage = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [selectedColor, setSelectedColor] = useState("black")
    const [isFavorite, setIsFavorite] = useState(false)
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 12,
        minutes: 45,
        seconds: 5
    })

    const images = [
        "https://i.ibb.co.com/8ck41d5/Paste-image.png",
        "https://i.ibb.co.com/0QhryRt/Paste-Image.png",
        "https://i.ibb.co.com/JsJcVYZ/Paste-Image.png",
        "https://i.ibb.co.com/n6sF5wz/Paste-Image.png",
    ]

    const colors = [
        {name: "black", value: "bg-black"},
        {name: "beige", value: "bg-[#D2C4B5]"},
        {name: "red", value: "bg-red-500"},
        {name: "white", value: "bg-white"},
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return {...prev, seconds: prev.seconds - 1}
                } else if (prev.minutes > 0) {
                    return {...prev, minutes: prev.minutes - 1, seconds: 59}
                } else if (prev.hours > 0) {
                    return {...prev, hours: prev.hours - 1, minutes: 59, seconds: 59}
                } else if (prev.days > 0) {
                    return {...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59}
                }
                return prev
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }

    const previousImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const formatNumber = (number) => number.toString().padStart(2, "0");

    return (
        <div className="mx-auto lg:px-8 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                {/* Left side - Image gallery */}
                <div className="space-y-4">

                    <div className="relative aspect-square">

                        {/* NEW and SALE tags */}
                        <div className="absolute top-4 left-4 z-10 space-y-2">
                              <span className="inline-block px-2 py-1 text-xs font-semibold bg-black text-white">
                                NEW
                              </span>
                            <div className="inline-block px-2 py-1 text-xs font-semibold bg-emerald-500 text-white">
                                -50%
                            </div>
                        </div>

                        {/* Main image with navigation arrows */}
                        <div className="relative h-full">
                            <img
                                src={images[currentImageIndex]}
                                alt={`Product view ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={previousImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-[#0FABCA] hover:text-white"
                                aria-label="Previous image"
                            >
                                <BiChevronLeft className="w-6 h-6"/>
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-[#0FABCA] hover:text-white"
                                aria-label="Next image"
                            >
                                <BiChevronRight className="w-6 h-6"/>
                            </button>
                        </div>
                    </div>

                    {/* Thumbnail images */}
                    <div className="flex gap-4 justify-between">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`relative transition-all duration-300 w-[8rem] aspect-square ${
                                    currentImageIndex === index
                                        ? "ring-2 ring-[#0FABCA]"
                                        : "hover:ring-2 hover:ring-[#0FABCA]"
                                }`}
                            >
                                <img
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right side - Product details */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="w-4 h-4 fill-black"/>
                            ))}
                        </div>
                        <span className="text-sm text-gray-600">11 Reviews</span>
                    </div>

                    <h1 className="text-[1.6rem] lg:text-[1.9rem] text-gray-800 font-semibold">Tray Index</h1>

                    <p className="text-gray-600 text-[0.9rem]">
                        Buy one or buy a few and make every space where you sit more convenient. Light and easy to
                        move around with removable tray top, handy for serving snacks.
                    </p>

                    <div className="flex items-center gap-3">
                        <span className="text-[1.5rem] text-gray-800 font-medium">$199.00</span>
                        <span className="text-lg text-gray-500 line-through">$400.00</span>
                    </div>

                    <div className="pb-2">
                        <p className="font-medium text-[0.9rem] text-gray-600">Offer expires in:</p>
                        <div className="flex items-center gap-[10px] mt-2">
                            <div className="flex items-center justify-center flex-col gap-[0.2rem]">
                                <h5 className="py-2 px-3 bg-gray-100 text-[1.9rem] font-semibold">{formatNumber(timeLeft.days)}</h5>
                                <span className="text-[0.7rem]">Days</span>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-[0.2rem]">
                                <h5 className="py-2 px-3 bg-gray-100 text-[1.9rem] font-semibold">{formatNumber(timeLeft.hours)}</h5>
                                <span className="text-[0.7rem]">Hours</span>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-[0.2rem]">
                                <h5 className="py-2 px-3 bg-gray-100 text-[1.9rem] font-semibold">{formatNumber(timeLeft.minutes)}</h5>
                                <span className="text-[0.7rem]">Minutes</span>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-[0.2rem]">
                                <h5 className="py-2 px-3 bg-gray-100 text-[1.9rem] font-semibold">{formatNumber(timeLeft.seconds)}</h5>
                                <span className="text-[0.7rem]">Seconds</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 border-t border-t-gray-200 pt-4">
                        <p className="font-medium text-[0.9rem] text-gray-600">Measurements</p>
                        <p className="text-gray-800">17 1/2×20 5/8 "</p>
                    </div>

                    <div className="space-y-2 pt-2">
                        <p className="font-medium text-gray-600 text-[0.9rem]">Choose Color</p>
                        <p className="font-semibold pb-1 text-gray-800 text-[0.9rem] capitalize">{selectedColor}</p>
                        <div className="flex gap-2">
                            {colors.map((color) => (
                                <button
                                    onClick={() => setSelectedColor(color.name)}
                                    aria-label={color.name}
                                    key={color.name}
                                    className={`w-8 h-8 rounded-full ${color.value} ${
                                        selectedColor === color.name ? "ring-2 ring-offset-2 ring-[#0FABCA]" : ""
                                    }`}
                                >
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 items-center pt-6">
                        <div className="flex items-center bg-gray-100 rounded-md">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="px-4 py-[0.560rem] text-[1.3rem] font-[300] hover:bg-gray-100 rounded-l-md"
                            >
                                −
                            </button>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-10 font-medium text-[0.9rem] bg-transparent text-center"
                            />
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="px-4 py-[0.560rem] text-[1.3rem] font-[300] hover:bg-gray-100 rounded-r-md"
                            >
                                +
                            </button>
                        </div>
                        <button
                            onClick={()=> setIsFavorite(!isFavorite)}
                            className="py-3 border border-gray-200 rounded-md  flex items-center justify-center gap-[10px] grow hover:bg-gray-50">
                            {
                                isFavorite ? (
                                        <FaHeart className="w-5 h-5 text-red-500"/>
                                    )
                                    : (
                                        <FaRegHeart className="w-5 h-5 text-gray-800"/>
                                    )
                            }
                            Wishlist
                        </button>
                    </div>

                    <button className="w-full px-6 py-3 bg-[#0FABCA] text-white rounded-md hover:bg-[#0FABCA]/90">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"product details page 3"} id={"product_details_page_3"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    View all product details in one place - images, specs, reviews, pricing, and more. Everything you need to make an informed purchase!
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${productDetails3Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                productDetails3Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setProductDetails3Preview, setProductDetails3Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                productDetails3Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setProductDetails3Preview, setProductDetails3Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {productDetails3Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <ProductDetailsExample3/>
                        </div>
                    )}

                    {productDetails3Code && <BlocksShowCode code='
import React, {useState} from "react";

// react icons
import {IoHeart, IoHeartOutline, IoShareSocialOutline, IoStar} from "react-icons/io5";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";

const ProductDetailsPage = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isFavorite, setIsFavorite] = useState(false)
    const [selectedSize, setSelectedSize] = useState("8")
    const [selectedColor, setSelectedColor] = useState("Royal Brown")

    const images = [
        "https://i.ibb.co.com/LxyQVtG/image-19.png",
        "https://i.ibb.co.com/d6RXLM2/image-22.png",
        "https://i.ibb.co.com/17yKVQm/image-19.png",
        "https://i.ibb.co.com/NCQFGJr/image-21.png",
        "https://i.ibb.co.com/2tWVrdD/image-23.png"
    ]

    const sizes = ["6", "8", "10", "14", "18", "20"]
    const colors = [
        { name: "Royal Brown", class: "bg-[#654321]" },
        { name: "Light Gray", class: "bg-gray-200" },
        { name: "Steel Blue", class: "bg-[#4682B4]" },
        { name: "Navy", class: "bg-navy-900" }
    ]

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const selectThumbnail = (index) => {
        setCurrentImageIndex(index)
    }

    return (
        <div className="lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Image Section */}
                <div className="relative">
                    <div className="flex">
                        <div className="flex items-center justify-center w-[90%] bg-gray-100 overflow-hidden rounded-md">
                            <img
                                src={images[currentImageIndex]}
                                alt={`Product view ${currentImageIndex + 1}`}
                                className="w-[300px] h-[400px] object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-between gap-[15px] ml-[20px]">

                            <div className="flex flex-col gap-[10px]">
                                <button className="bg-gray-100 rounded-md w-max text-gray-600 p-2.5 hover:bg-gray-200">
                                    <IoShareSocialOutline className="w-5 h-5"/>
                                </button>

                                <button
                                    className="bg-gray-100 rounded-md w-max text-gray-600 p-2.5 hover:bg-gray-200"
                                    onClick={() => setIsFavorite(!isFavorite)}
                                >
                                    {
                                        isFavorite ? (
                                            <IoHeart className="w-5 h-5 text-red-500"/>
                                        ) : (
                                            <IoHeartOutline className="w-5 h-5"/>
                                        )
                                    }
                                </button>
                            </div>

                            <div className="flex flex-col gap-[10px]">
                                <button
                                    onClick={prevImage}
                                    className="bg-gray-100 rounded-md w-max text-gray-600 p-2 hover:bg-gray-200"
                                    aria-label="Previous image"
                                >
                                    <BiChevronLeft className="w-6 h-6"/>
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="bg-gray-100 rounded-md w-max text-gray-600 p-2 hover:bg-gray-200"
                                    aria-label="Next image"
                                >
                                    <BiChevronRight className="w-6 h-6"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="scrollbar flex w-full lg:w-[87%] gap-2 mt-4 overflow-x-auto">
                        {images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => selectThumbnail(index)}
                                className={`flex-shrink-0 bg-gray-100 w-20 transition-all duration-300 h-20 rounded-md overflow-hidden border-2 ${currentImageIndex === index ? "border-[#0FABCA]" : "border-transparent"
                                }`}
                            >
                                <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover"/>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Details Section */}
                <div className="flex flex-col">
                    <div className="flex justify-between items-start">
                        <div className="w-full">
                            <p className="text-gray-400 text-[0.9rem]">John Lewis ANYDAY</p>
                            <h1 className="text-[1.6rem] lg:text-[1.8rem] text-gray-800 font-semibold mb-3">Long Sleeve Overshirt, Khaki, 6</h1>
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full gap-1 lg:gap-4 mb-4">
                                <div className="flex items-center">
                                    <span className="text-[1.4rem] font-semibold text-gray-800">£28.00</span>
                                    <span className="text-gray-400 text-[1rem] line-through ml-2">£40.00</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <IoStar className="text-yellow-400 text-[1.1rem]"/>
                                    <span className="text-gray-800 font-semibold">4.5</span>
                                    <span className="text-gray-500">(1,238 Sold)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 border-t-[2px] border-gray-200 border-dashed mt-1 pt-6">
                        <h2 className="text-gray-700 font-semibold mb-2">Description:</h2>
                        <p className="text-[0.9rem] text-gray-600">
                            Boba etiam ut bulla tea est potus electus singulari compositione saporum et textuum, quae in
                            Taiwan annis 1980 orta sunt. Boba refert ad pitas marnicas tapiocas in fundo potus inventas,
                            quae typice lacte tea nigro sapiuntur.
                            <button className="text-blue-600 hover:underline ml-1">See More...</button>
                        </p>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="font-medium text-gray-400">Color: <span className="text-gray-700 font-semibold">{selectedColor}</span></h2>
                        </div>
                        <div className="flex gap-2">
                            {colors.map((color) => (
                                <button
                                    key={color.name}
                                    onClick={() => setSelectedColor(color.name)}
                                    className={` w-20 h-10 rounded-md border-2 transition-all duration-300 ${
                                        selectedColor === color.name ? "border-[#0FABCA] p-1" : "border-transparent" } `}
                                    aria-label={`Select ${color.name} color`}
                                >
                                    <div className={`w-full h-full rounded-md transition-all duration-300 ${color.class}`}></div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-10">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="font-medium text-gray-400">Size: <span className="font-semibold text-gray-700">{selectedSize}</span></h2>
                            <button className="text-gray-600 text-[0.8rem] underline">View Size Chart</button>
                        </div>
                        <div className="flex w-full flex-wrap gap-2">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={
                                        `px-4 py-2 max-w-[60px] grow rounded-md border ${selectedSize === size
                                            ? "border-[#0FABCA] bg-[#0FABCA] text-white"
                                            : "border-gray-200 hover:border-[#0FABCA]"}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 mt-auto">
                        <button className="grow py-3 px-6 bg-[#0FABCA] hover:bg-[#0FABCA]/90 rounded-md text-white">
                            Add To Cart
                        </button>
                        <button className="grow py-3 px-6 border border-gray-300 text-gray-600 rounded-md">
                            Checkout Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
                    '/>
                    }
                </div>

                <BlocksFooter backUrl='/blocks/newsletter-form' backName='newsletter form'
                              forwardUrl='/blocks/empty-page' forwardName='empty page'/>
            </div>


            <Helmet>
                <title>Blocks - Product Details Page</title>
            </Helmet>
        </aside>
    );
};

export default Index;
