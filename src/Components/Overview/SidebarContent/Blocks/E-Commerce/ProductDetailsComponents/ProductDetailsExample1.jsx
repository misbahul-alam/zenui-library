import React, {useState} from 'react';

// react icons
import {BsHeart, BsHeartFill} from 'react-icons/bs'
import {FiCpu, FiSmartphone} from 'react-icons/fi'
import {IoMdCamera} from 'react-icons/io'
import {MdBatteryChargingFull} from 'react-icons/md'
import {GoVerified} from "react-icons/go";
import {IoStorefrontOutline} from "react-icons/io5";
import {CiDeliveryTruck} from "react-icons/ci";

const ProductDetailsExample1 = () => {

    const [selectedImage, setSelectedImage] = useState(0)
    const [selectedColor, setSelectedColor] = useState('black')
    const [selectedStorage, setSelectedStorage] = useState('1TB')
    const [isFavorite, setIsFavorite] = useState(false)

    const images = [
        'https://i.ibb.co.com/k5JzbPr/Image-7.png',
        'https://i.ibb.co.com/thxkk1x/image-320.png',
        'https://i.ibb.co.com/MckV93r/image-320.png',
        'https://i.ibb.co.com/ZGWRGDT/image-320.png'
    ]

    const colors = [
        {name: 'black', class: 'bg-black'},
        {name: 'purple', class: 'bg-purple-600'},
        {name: 'red', class: 'bg-red-600'},
        {name: 'yellow', class: 'bg-yellow-500'},
        {name: 'gray', class: 'bg-gray-200'}
    ]

    const storage = ['128GB', '256GB', '512GB', '1TB']

    return (
        <div className="mx-auto px-8 py-12">
            <div className="w-full grid grid-cols-2 gap-12">

                {/* Left side - Image gallery */}
                <div className="flex">

                    {/* Thumbnails */}
                    <div
                        className="w-[30%] flex flex-col gap-4 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-2">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`relative w-20 h-20 border-2 p-2 rounded-lg overflow-hidden ${
                                    selectedImage === index ? 'border-[#0FABCA]' : 'border-transparent'
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
                    <div className="w-[70%] relative flex-1 aspect-square">
                        <img
                            src={images[selectedImage]}
                            alt="Product main image"
                            className="object-cover mx-auto rounded-lg"
                        />
                    </div>
                </div>

                {/* Right side - Product details */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-[1.9rem] font-bold text-gray-800">Apple iPhone 14 Pro Max</h1>
                        <div className="flex items-center gap-2 mt-5">
                            <span className="text-3xl font-medium">$1399</span>
                            <span className="text-xl text-gray-500 line-through">$1499</span>
                        </div>
                    </div>

                    {/* Color selection */}
                    <div className='flex items-center gap-[10px]'>
                        <label className="text-sm font-medium">Select color:</label>
                        <div className="flex gap-3">
                            {colors.map((color) => (
                                <button
                                    key={color.name}
                                    onClick={() => setSelectedColor(color.name)}
                                    className={`w-8 h-8 rounded-full ${color.class} ${
                                        selectedColor === color.name ? 'ring-2 ring-offset-2 ring-[#0FABCA]' : ''
                                    }`}
                                    aria-label={color.name}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Storage selection */}
                    <div>
                        <div className="grid grid-cols-4 gap-3">
                            {storage.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedStorage(size)}
                                    className={`py-2 px-4 rounded-lg border ${
                                        selectedStorage === size
                                            ? 'border-[#0FABCA] bg-[#0FABCA]/10 text-[#0FABCA]'
                                            : 'border-gray-200'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Specifications */}
                    <div className="grid grid-cols-2 gap-4">
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
                    <div className="flex gap-4">
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
                    <div className="flex justify-between mt-2">
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

export default ProductDetailsExample1;
