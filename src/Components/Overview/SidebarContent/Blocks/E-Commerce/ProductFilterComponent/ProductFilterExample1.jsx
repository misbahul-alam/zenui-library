import React, {useEffect, useState} from 'react';
import {IoSearch} from "react-icons/io5";
import {IoIosArrowDown} from "react-icons/io";

const ProductFilterExample1 = () => {

    const [toggleId, setToggleId] = React.useState(null);
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(null);

    const categories = [
        {
            id: 1,
            name: 'Electronics Devices',
            slug: 'electronics_devices'
        },
        {
            id: 2,
            name: 'Computer & Laptop',
            slug: 'computer_&_laptop'
        },
        {
            name: 'Computer Accessories',
            slug: 'computer_accessories'
        },
        {
            id: 3,
            name: 'SmartPhone',
            slug: 'smart_phone'
        },
        {
            id: 4,
            name: 'Headphone',
            slug: 'headphone'
        },
        {
            id: 5,
            name: 'Mobile Accessories',
            slug: 'mobile_accessories'
        },
        {
            id: 6,
            name: 'Gaming Console',
            slug: 'gaming_console'
        },
        {
            id: 7,
            name: 'Camera & Photo',
            slug: 'camera_&_photo'
        },
        {
            id: 8,
            name: 'TV & Homes Appliances',
            slug: 'tv_&_homes_appliances'
        },
        {
            id: 9,
            name: 'Watchs & Accessories',
            slug: 'watchs_&_accessories'
        },
        {
            id: 10,
            name: 'GPS & Navigation',
            slug: 'gps_&_navigation'
        },
    ]

    const items = [
        { id: 1, name: "Option 1" },
        { id: 2, name: "Option 2" },
        { id: 3, name: "Option 3" },
        { id: 4, name: "Option 4" },
        { id: 5, name: "Option 5" },
    ];

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const isSelected = (item) => {
        return selectedOptions?.id === item.id;
    };

    const toggleSelection = (item) => {
        setSelectedOptions(item);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest(".custom-select")) return;
            handleBlur();
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <section className='flex bg-white w-full gap-[20px] p-4'>

            {/* left side */}
            <aside className='w-[25%] min-[300px]'>
                <h5 className='text-[1.2rem] font-medium text-gray-800 mb-4'>Category</h5>
                <div className='flex flex-col gap-[12px]'>
                    {
                        categories.map(category => (
                            <label data-name='categoryCheckbox'
                                   key={category.id}
                                   className='flex items-center gap-[8px] text-[1rem] text-gray-800'>
                                <input type='checkbox' name='categoryCheckbox' className='hidden'
                                       checked={toggleId === category.id}
                                       onChange={() => setToggleId(category.id)}/>
                                <div
                                    className={`${toggleId === category.id ? 'border-[#0FABCA]' : 'border-gray-300'} w-[20px] transition-all duration-300 h-[20px] rounded-full border relative`}>
                                    <div
                                        className={`${toggleId === category.id ? 'bg-[#0FABCA]' : 'bg-transparent'} w-[13px] h-[13.5px] transition-all duration-300 rounded-full absolute top-[50%] transform translate-y-[-50%] left-[50%] translate-x-[-50%]`}></div>
                                </div>

                                {category.name}
                            </label>
                        ))
                    }
                </div>

                <div className='border-t border-gray-300 mt-6 pt-6'>
                    <h5 className='text-[1.2rem] font-medium text-gray-800 mb-4'>Price Range</h5>

                    <div>

                    </div>
                </div>
            </aside>

            {/* right side */}
            <main className='w-[75%]'>
                <div className='flex items-center justify-between gap-[50px] w-full'>
                    <div className='w-full relative'>
                        <input type='text' placeholder='Search...'
                               className='border border-[#e5eaf2] py-2 pl-4 pr-[65px] outline-none w-full rounded-md'/>

                        <IoSearch className='text-[1.3rem] text-gray-600 absolute top-[50%] transform translate-y-[-50%] right-4'/>
                    </div>

                    <div className='flex items-center gap-[10px]'>
                        <p className='text-[1rem] text-gray-700 font-medium'>Sort by:</p>
                        <div className="relative custom-select flex-1">

                            {/* Input field with search functionality */}
                            <input
                                type="text"
                                placeholder="Search.."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onFocus={() => setIsOpen(true)}
                                className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none`}
                            />

                            <IoIosArrowDown
                                className={`${isOpen ? "rotate-[180deg]" : "rotate-0"} transition-all duration-300 text-[1.3rem] absolute top-[50%] transform translate-y-[-50%] right-3 text-gray-500`}/>

                            {/* Dropdown menu */}
                            {isOpen && (
                                <div
                                    className="absolute left-0 w-full mt-1 border border-gray-200 rounded-md bg-white shadow-lg z-20">
                                    <div className="w-full overflow-auto">
                                        {filteredItems.map(item => (
                                            <p
                                                key={item.id}
                                                onClick={() => toggleSelection(item)}
                                                className="cursor-pointer px-3 py-2 flex items-center hover:bg-gray-200"
                                            >
                                                <img
                                                    src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/doplac/dYj3EG2tlN8jM29cWxiA1711341238.svg"
                                                    alt="checkicon"
                                                    className={`${isSelected(item) ? "scale-[1] opacity-100" : "scale-[0.5] opacity-0"} mr-2 transition-all duration-300 w-6 h-6`}
                                                />
                                                {item.name}
                                            </p>
                                        ))}

                                        {
                                            filteredItems?.length === 0 && (
                                                <p className="text-center text-[0.9rem] text-text py-8">No search found!</p>
                                            )
                                        }
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default ProductFilterExample1;
