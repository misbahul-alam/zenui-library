import React, {useEffect, useState} from "react";

// components
import ContentHeader from "../../../../../../Shared/ContentHeader";
import {Helmet} from "react-helmet";
import BlocksShowCode from "../../../../../../Shared/Block/BlocksShowCode.jsx";

// icons
import BlocksFooter from "../../../../../../Shared/Block/BlocksFooter.jsx";

// toggle card view
import {useToggleCardView} from "../../../../../../CustomHooks/ButtonToggle.js";
import CheckoutPageExample1 from "./CheckoutPageExample1.jsx";
import CheckoutPageExample2 from "./CheckoutPageExample2.jsx";

const Index = () => {

    const [checkoutPage1Preview, setCheckoutPage1Preview] = useState(true);
    const [checkoutPage1Code, setCheckoutPage1Code] = useState(false);

    const [checkoutPage2Preview, setCheckoutPage2Preview] = useState(true);
    const [checkoutPage2Code, setCheckoutPage2Code] = useState(false);

    const toggleCardView = useToggleCardView()

    return (
        <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
            <div>
                <ContentHeader text={"checkout page 1"} id={"checkout_page_1"}/>

                <p className="w-full text-text text-[1rem]">
                    The checkout page is where users review items, add shipping details, choose payment, and confirm their purchase securely.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${checkoutPage1Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                checkoutPage1Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setCheckoutPage1Preview, setCheckoutPage1Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                checkoutPage1Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setCheckoutPage1Preview, setCheckoutPage1Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {checkoutPage1Preview && (
                        <div className={`p-8 flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <CheckoutPageExample1/>
                        </div>
                    )}

                    {checkoutPage1Code && <BlocksShowCode code='
import React, {useState} from "react";

// react icons
import {IoChevronDown} from "react-icons/io5";

const CheckoutPage = () => {
    const [selectedPayment, setSelectedPayment] = useState("credit-card")
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = (event) => {
        if(event.target.checked){
            setIsChecked(true)
        }else {
            setIsChecked(false)
        }
    }

    const inputStyles = "border border-gray-200 w-full py-2 px-4 rounded-md mt-1 outline-none focus:border-[#0FABCA]"
    const labelStyles = "text-[14px] font-[400] text-gray-700"

    const countries = ["United States", "Canada", "India", "Australia", "United Kingdom"];
    const regions = ["California", "Ontario", "Maharashtra", "New South Wales", "England"];
    const cities = ["Los Angeles", "Toronto", "Mumbai", "Sydney", "London"];

    return (
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 w-full">

            {/* Billing and Payment Form */}
            <div className="lg:col-span-2 space-y-8 w-full">

                {/* Billing Information */}
                <div className="w-full">
                    <h2 className="text-[1.5rem] font-medium text-gray-700 mb-6">Billing Information</h2>

                    <div className="grid grid-cols-1 gap-[16px]">
                        <div className="flex flex-col lg:flex-row items-center gap-4">
                            <div className="w-full lg:w-[50%]">
                                <label htmlFor="firstName" className={`${labelStyles}`}>
                                    First name
                                </label>
                                <input
                                    placeholder="First name"
                                    type="text"
                                    id="firstName"
                                    className={`${inputStyles}`}
                                />
                            </div>
                            <div className="w-full lg:w-[50%]">
                                <label htmlFor="lastName" className={`${labelStyles}`}>
                                    Last name
                                </label>
                                <input
                                    placeholder="Last name"
                                    type="text"
                                    id="lastName"
                                    className={`${inputStyles}`}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className={`${labelStyles}`}>
                                Company Name (Optional)
                            </label>
                            <input
                                placeholder="Company name"
                                type="text"
                                id="company"
                                className={`${inputStyles}`}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="address" className={`${labelStyles}`}>
                                Address
                            </label>
                            <input
                                placeholder="Address"
                                type="text"
                                id="address"
                                className={`${inputStyles}`}
                            />
                        </div>

                        <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
                            <div className="w-full lg:w-[50%]">
                                <label htmlFor="country" className={`${labelStyles}`}>
                                    Country
                                </label>
                                <InputSelect items={countries}/>
                            </div>
                            <div className="w-full lg:w-[50%]">
                                <label htmlFor="state" className={`${labelStyles}`}>
                                    Region/State
                                </label>
                                <InputSelect items={regions}/>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
                            <div className="w-full lg:w-[50%]">
                                <label htmlFor="city" className={`${labelStyles}`}>
                                    City
                                </label>
                                <InputSelect items={cities}/>
                            </div>
                            <div className="w-full lg:w-[50%]">
                                <label htmlFor="zipCode" className={`${labelStyles}`}>
                                    Zip Code
                                </label>
                                <input
                                    placeholder="Zip code"
                                    type="text"
                                    id="zipCode"
                                    className={`${inputStyles}`}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
                            <div className="w-full lg:w-[50%]">
                                <label htmlFor="email" className={`${labelStyles}`}>
                                    Email
                                </label>
                                <input
                                    placeholder="Email address"
                                    type="email"
                                    id="email"
                                    className={`${inputStyles}`}
                                />
                            </div>
                            <div className="w-full lg:w-[50%]">
                                <label htmlFor="phone" className={`${labelStyles}`}>
                                    Phone Number
                                </label>
                                <input
                                    placeholder="Phone number"
                                    type="tel"
                                    id="phone"
                                    className={`${inputStyles}`}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="flex items-center gap-[10px] cursor-pointer">
                            <input type="checkbox" className="hidden" onChange={handleCheckboxChange}/>
                            {
                                isChecked ? (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g id="Group 335">
                                            <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05"
                                                  width="20"
                                                  height="20" rx="4" className="fill-[#0FABCA]"
                                                  stroke="#0FABCA"></rect>
                                            <path id="Vector"
                                                  d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                                                  fill="white"></path>
                                        </g>
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g id="Group 335">
                                            <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05"
                                                  width="20"
                                                  height="20" rx="4" className="fill-transparent"
                                                  stroke="#ccc"></rect>
                                        </g>
                                    </svg>
                                )
                            }

                            <span className="text-[0.9rem] text-gray-700">Ship to a different address</span>
                        </label>
                    </div>
                </div>

                {/* Payment Options */}
                <div className="border border-gray-200 rounded-md">
                    <h2 className="text-[1.2rem] font-medium text-gray-700 border-b border-gray-200 px-5 py-3">Payment Option</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full p-5">
                        <button
                            onClick={() => setSelectedPayment("cash")}
                            className={`flex flex-col items-center justify-center p-4 border rounded-lg ${
                                selectedPayment === "cash" ? "border-[#0FABCA]" : "border-gray-200"
                            }`}
                        >
                            <span className="text-2xl">💵</span>
                            <span
                                className="text-[0.9rem] text-gray-700 font-[500] mt-2">Cash on Delivery</span>
                        </button>
                        <button
                            onClick={() => setSelectedPayment("credit-card")}
                            className={`flex flex-col items-center justify-center p-4 border rounded-lg ${
                                selectedPayment === "credit-card" ? "border-[#0FABCA]" : "border-gray-200"
                            }`}
                        >
                            <span className="text-2xl">💳</span>
                            <span
                                className="text-[0.9rem] text-gray-700 font-[500] mt-2">Debit/Credit Card</span>
                        </button>
                    </div>

                    {selectedPayment === "credit-card" && (
                        <div className=" px-5 pb-5 space-y-[16px]">
                            <div>
                                <label htmlFor="cardName" className={`${labelStyles}`}>
                                    Name on Card
                                </label>
                                <input
                                    placeholder="Name on card"
                                    type="text"
                                    id="cardName"
                                    className={`${inputStyles}`}
                                />
                            </div>
                            <div>
                                <label htmlFor="cardNumber" className={`${labelStyles}`}>
                                    Card Number
                                </label>
                                <input
                                    placeholder="Card number"
                                    type="text"
                                    id="cardNumber"
                                    className={`${inputStyles}`}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="expireDate" className={`${labelStyles}`}>
                                        Expire Date
                                    </label>
                                    <input
                                        type="text"
                                        id="expireDate"
                                        placeholder="MM/YY"
                                        className={`${inputStyles}`}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cvc" className={`${labelStyles}`}>
                                        CVC
                                    </label>
                                    <input
                                        placeholder="CVC"
                                        type="text"
                                        id="cvc"
                                        className={`${inputStyles}`}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Additional Information */}
                <div>
                    <h2 className="text-[1.2rem] font-medium text-gray-700 mb-4">Additional Information</h2>
                    <div>
                        <label htmlFor="notes" className={`${labelStyles}`}>
                            Order Notes (Optional)
                        </label>
                        <textarea
                            id="notes"
                            rows={4}
                            placeholder="Notes about your order e.g. special notes for delivery"
                            className={`${inputStyles} py-3`}
                        />
                    </div>
                </div>
            </div>

            {/* Order Summary */}
            <div className="w-full">
                <div className="bg-white rounded-md border border-gray-200 p-6">
                    <h2 className="text-[1.2rem] font-medium text-gray-700 mb-6">Order Summary</h2>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img
                                    src="https://i.ibb.co.com/VNM4dX6/Image-24.png"
                                    alt="product/image"
                                    className="w-[50px] h-[50px] object-cover"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 line-clamp-1">Canon EOS 1500D DSLR Camera Body+ 18</p>
                                <div className="flex items-center gap-[5px] mt-0.5">
                                    <p className="text-sm text-gray-500">2 x </p>
                                    <p className="text-sm text-[#0FABCA] font-[600]">$570</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img
                                    src="https://i.ibb.co.com/F0bn52F/Image-25.png"
                                    alt="product/image"
                                    className="w-[50px] h-[50px] object-cover"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 line-clamp-1">Wired Over-Ear Gaming Headphones with U</p>
                                <div className="flex items-center gap-[5px] mt-0.5">
                                    <p className="text-sm text-gray-500">1 x </p>
                                    <p className="text-sm text-[#0FABCA] font-[600]">$100</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Sub-total</span>
                                <span className="font-medium text-gray-800">$670</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Shipping</span>
                                <span className="font-medium text-green-500">Free</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Discount</span>
                                <span className="font-medium text-gray-800">$20</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Tax</span>
                                <span className="font-medium text-gray-800">$650</span>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                            <div className="flex justify-between">
                                <span className="text-base font-medium text-gray-800">Total</span>
                                <span className="text-base font-medium text-gray-800">$357.99 USD</span>
                            </div>
                        </div>

                        <button
                            className="w-full bg-[#0FABCA] text-white py-3 px-4 rounded-lg hover:bg-[#0FABCA]/90 transition-colors">
                            PLACE ORDER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;

const InputSelect = ({items}) => {
    // close the dropdown is clicked outside
    document.addEventListener("click", function (event) {
        let target = event.target;

        if (!target.closest(".dropdown")) {
            setIsActive(false);
        }
    });

    // actions
    const [isActive, setIsActive] = useState(false);
    const [content, setContent] = useState("Select Option");

    return (
        <button
            className="bg-[#fff] border border-gray-200 rounded-md mt-1 justify-between px-3 py-2 flex items-center gap-8  relative cursor-pointer dropdown w-full"
            onClick={() => setIsActive(!isActive)}
        >
            <p className={`${content === "Select Option" && "text-gray-400"}`}>{content}</p>
            <IoChevronDown
                className={`${
                    isActive ? " rotate-[180deg]" : " rotate-0"
                } transition-all duration-300 text-gray-600 text-[1.2rem]`}
            />
            <div
                className={`${
                    isActive ? " opacity-100 scale-[1]" : " opacity-0 scale-[0.8] z-[-1]"
                } w-full absolute top-12 left-0 right-0 z-40 bg-[#fff] rounded-xl flex flex-col  overflow-hidden transition-all duration-200 ease-in-out py-1`}
                style={{
                    boxShadow: "0 15px 40px -15px rgba(0, 0, 0, 0.2)",
                }}
            >
                {items?.map((option, index) => (
                    <p
                        className="py-2 px-4 text-left text-gray-800 hover:bg-gray-50 transition-all duration-200"
                        key={index}
                        onClick={(e) => setContent(e.target.textContent)}
                    >
                        {option}
                    </p>
                ))}
            </div>
        </button>
    );
};

                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"checkout page 2"} id={"checkout_page_2"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    The checkout page is where users review items, add shipping details, choose payment, and confirm their purchase securely.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${checkoutPage2Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                checkoutPage2Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setCheckoutPage2Preview, setCheckoutPage2Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                checkoutPage2Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setCheckoutPage2Preview, setCheckoutPage2Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {checkoutPage2Preview && (
                        <div className={`p-8 flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <CheckoutPageExample2/>
                        </div>
                    )}

                    {checkoutPage2Code && <BlocksShowCode code='
import React from "react";

// react icons
import {AiOutlinePlus} from "react-icons/ai";

const CheckoutPage = () => {
    return (
        <div className="w-full flex flex-col gap-8 lg:gap-0 lg:flex-row">

            {/* Left Column - Order Summary */}
            <div className="bg-gray-50 rounded-md p-4 lg:p-8 flex-1">

                {/* order summery */}
                <div>
                    <h2 className="text-[1.2rem] text-gray-700 font-semibold mb-6">Your order</h2>
                    <div className="border border-gray-200 rounded-md">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 p-4">
                            <div className="border relative border-gray-200 w-max rounded-md bg-white">
                                <img src="https://i.ibb.co.com/x6fq6nC/Rectangle-516.png" alt="Nike Air Zoom Pegasus 39"
                                     className="w-20 h-20 object-cover rounded"/>

                                <span
                                    className="px-[0.45rem] rounded-full absolute bg-white -top-2 -right-2 z-30 text-[0.9rem] text-gray-800 border border-gray-200 shadow-sm">1</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium">Nike Air Zoom Pegasus 39</h3>
                                <div className="flex items-center gap-[30px] mt-2">
                                    <p className="text-sm text-gray-500">Size: <b className="text-gray-800">XL</b></p>
                                    <p className="text-sm text-gray-500">Color: <b className="text-gray-800">Blue</b>
                                    </p>
                                </div>
                            </div>
                            <span className="font-medium">$28.00</span>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 border-t p-4 border-gray-200">
                            <div className="border relative border-gray-200 w-max rounded-md bg-white">
                                <img src="https://i.ibb.co.com/VJKrBt5/Rectangle-519.png"
                                     alt="Nike React Pegasus Trail 4"
                                     className="w-20 h-20 object-cover rounded"/>

                                <span
                                    className="px-1.5 rounded-full absolute bg-white -top-2 -right-2 z-30 text-[0.9rem] text-gray-800 border border-gray-200 shadow-sm">3</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium">Nike Air Zoom Pegasus 39</h3>
                                <div className="flex items-center gap-[30px] mt-2">
                                    <p className="text-sm text-gray-500">Size: <b className="text-gray-800">XL</b></p>
                                    <p className="text-sm text-gray-500">Color: <b className="text-gray-800">Blue</b>
                                    </p>
                                </div>
                            </div>
                            <span className="font-medium">$28.00</span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="font-medium mb-2 text-[1rem] text-gray-800">Discount Code</h3>
                        <div className="flex gap-2 relative">
                            <img alt="discount/png" src="https://i.ibb.co.com/r7rF8xK/ticket-discount.png"
                                 className="w-[25px] absolute transform top-[50%] translate-y-[-50%] left-2"/>
                            <input type="text" placeholder="BUYRI"
                                   className="border w-full border-gray-200 bg-transparent outline-none focus:border-[#0FABCA] rounded pl-10 pr-3 py-2"/>
                            <button
                                className="absolute top-[50%] transform translate-y-[-50%] right-5 text-[0.9rem] text-[#0FABCA]">Apply
                            </button>
                        </div>
                    </div>
                    <div className="mt-8 space-y-2 border-t border-gray-200 pt-6">
                        <div className="flex justify-between">
                            <span className="text-[1rem] text-gray-500">Subtotal</span>
                            <span className="text-[1rem] font-medium text-gray-800">$56.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[1rem] text-gray-500">Shipping Cost</span>
                            <span className="text-[1rem] font-medium text-gray-800">$8.00</span>
                        </div>
                        <div className="flex justify-between pb-3">
                            <span className="text-[1rem] text-gray-500">Discount (10%)</span>
                            <span className="text-[1rem] font-medium text-gray-800">-$13.00</span>
                        </div>
                        <div className="flex justify-between border-t border-gray-200 pt-5 font-medium">
                            <span>Total</span>
                            <span className="text-[1rem] font-medium text-gray-800">$51.00</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Checkout Form */}
            <div className="flex-1 lg:px-8">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email"
                               className="text-[1rem] font-medium text-gray-800 mb-1">Email</label>
                        <input type="email" id="email" placeholder="joylawson@gmail.com"
                               className="w-full border rounded px-3 py-2 border-gray-200 outline-none focus:border-[#0FABCA] mt-0.5"/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="text-[1rem] font-medium text-gray-800 mb-1">Phone
                            number</label>
                        <div className="flex gap-2">
                            <select
                                className="border rounded px-3 py-2 border-gray-200 outline-none focus:border-[#0FABCA] mt-0.5 w-[100px]">
                                <option value="us">🇺🇸 +1</option>
                                <option value="uk">🇬🇧 +44</option>
                                <option value="in">🇮🇳 +91</option>
                                <option value="bd">🇧🇩 +880</option>
                                <option value="au">🇦🇺 +61</option>
                                <option value="ca">🇨🇦 +1</option>
                                <option value="de">🇩🇪 +49</option>
                                <option value="fr">🇫🇷 +33</option>
                                <option value="jp">🇯🇵 +81</option>
                                <option value="za">🇿🇦 +27</option>
                            </select>
                            <input type="tel" id="phone" placeholder="(201) 830-8210"
                                   className="w-full border rounded px-3 py-2 border-gray-200 outline-none focus:border-[#0FABCA] mt-0.5"/>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label className="text-[1rem] font-medium text-gray-800">Payment method</label>
                            <button type="button" className="text-blue-600 text-right flex text-[0.9rem] items-center gap-[5px]">
                                <AiOutlinePlus/>
                                Add new
                            </button>
                        </div>
                        <div className="flex flex-col lg:flex-row w-full gap-4">
                            <label
                                className="flex-1 flex items-center justify-between gap-2 border-gray-200 border rounded-lg p-4">
                                <div>
                                    <div>
                                        <input type="radio" name="payment" value="card" className="form-radio"
                                               defaultChecked/>
                                        <span> **** 8304</span>
                                    </div>

                                    <div className="flex items-center gap-[5px] pl-5 mt-0.5">
                                        <p className="text-[0.9rem] text-gray-500">Visa •</p>
                                        <p className="text-[0.9rem] text-gray-500 hover:text-[#0FABCA] cursor-pointer"> Edit</p>
                                    </div>
                                </div>
                                <img src="https://i.ibb.co.com/NFwm4jb/Visa.png" alt="Visa"
                                     className="w-[50px]"/>
                            </label>
                            <label
                                className="flex-1 flex items-center justify-between border-gray-200 gap-2 border rounded-lg p-4">
                                <div>
                                    <div>
                                        <input type="radio" name="payment" value="paypal" className="form-radio"/>
                                        <span> **** 8304</span>
                                    </div>

                                    <div className="flex items-center gap-[5px] pl-5 mt-0.5">
                                        <p className="text-[0.9rem] text-gray-500">Paypal •</p>
                                        <p className="text-[0.9rem] text-gray-500 hover:text-[#0FABCA] cursor-pointer"> Edit</p>
                                    </div>
                                </div>
                                <img src="https://i.ibb.co.com/W3ykxd5/paypal.png" alt="PayPal"
                                     className="w-[50px]"/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="cardHolder" className="text-[1rem] font-medium text-gray-800 mb-1">Card
                            holder name</label>
                        <input type="text" id="cardHolder" placeholder="Ex. Jane Cooper"
                               className="w-full border rounded px-3 py-2 border-gray-200 outline-none focus:border-[#0FABCA] mt-0.5"/>
                    </div>
                    <div>
                        <label htmlFor="billingAddress"
                               className="text-[1rem] font-medium text-gray-800 mb-1">Billing address</label>
                        <select id="billingAddress"
                                className="w-full border rounded px-3 py-2 border-gray-200 outline-none focus:border-[#0FABCA] mt-0.5">
                            <option>United States</option>
                            <option>United Kingdom</option>
                            <option>India</option>
                            <option>Bangladesh</option>
                            <option>Australia</option>
                            <option>Canada</option>
                            <option>Germany</option>
                            <option>France</option>
                            <option>Japan</option>
                            <option>South Africa</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="zipCode" className="text-[1rem] font-medium text-gray-800 mb-1">Zip
                                code</label>
                            <input type="text" id="zipCode" placeholder="Ex. 73923"
                                   className="w-full border rounded px-3 py-2 border-gray-200 outline-none focus:border-[#0FABCA] mt-0.5"/>
                        </div>
                        <div>
                            <label htmlFor="city"
                                   className="text-[1rem] font-medium text-gray-800 mb-1">City</label>
                            <input type="text" id="city" placeholder="Ex. New York"
                                   className="w-full border rounded px-3 py-2 border-gray-200 outline-none focus:border-[#0FABCA] mt-0.5"/>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="sameAsShipping" className="form-checkbox"/>
                        <label htmlFor="sameAsShipping" className="text-sm text-gray-600">Billing address is
                            same as shipping</label>
                    </div>
                    <button type="submit"
                            className="w-full bg-[#0FABCA] text-white py-3 rounded-lg hover:bg-[#0FABCA]/90">
                        Pay $51.00
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
                    '/>
                    }
                </div>

                <BlocksFooter backUrl='/blocks/product-details-page' backName='product details page'
                              forwardUrl='/blocks/responsive-search-bar' forwardName='responsive search bar'/>
            </div>


            <Helmet>
                <title>Blocks - Checkout Page</title>
            </Helmet>
        </aside>
    );
};

export default Index;
