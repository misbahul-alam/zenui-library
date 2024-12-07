import React from 'react';
import {AiOutlinePlus} from "react-icons/ai";

const CheckoutPageExample2 = () => {
    return (
        <div className="w-full flex">

            {/* Left Column - Order Summary */}
            <div className='bg-gray-50 rounded-md p-8 flex-1'>

                {/* order summery */}
                <div>
                    <h2 className="text-[1.2rem] text-gray-700 font-semibold mb-6">Your order</h2>
                    <div className="border border-gray-200 rounded-md">
                        <div className="flex items-center gap-4 p-4">
                            <div className='border relative border-gray-200 rounded-md bg-white'>
                                <img src="https://i.ibb.co.com/x6fq6nC/Rectangle-516.png" alt="Nike Air Zoom Pegasus 39"
                                     className="w-20 h-20 object-cover rounded"/>

                                <span
                                    className='px-[0.45rem] rounded-full absolute bg-white -top-2 -right-2 z-30 text-[0.9rem] text-gray-800 border border-gray-200 shadow-sm'>1</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium">Nike Air Zoom Pegasus 39</h3>
                                <div className='flex items-center gap-[30px] mt-2'>
                                    <p className="text-sm text-gray-500">Size: <b className='text-gray-800'>XL</b></p>
                                    <p className="text-sm text-gray-500">Color: <b className='text-gray-800'>Blue</b>
                                    </p>
                                </div>
                            </div>
                            <span className="font-medium">$28.00</span>
                        </div>
                        <div className="flex items-center gap-4 border-t p-4 border-gray-200">
                            <div className='border relative border-gray-200 rounded-md bg-white'>
                                <img src="https://i.ibb.co.com/VJKrBt5/Rectangle-519.png"
                                     alt="Nike React Pegasus Trail 4"
                                     className="w-20 h-20 object-cover rounded"/>

                                <span
                                    className='px-1.5 rounded-full absolute bg-white -top-2 -right-2 z-30 text-[0.9rem] text-gray-800 border border-gray-200 shadow-sm'>3</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium">Nike Air Zoom Pegasus 39</h3>
                                <div className='flex items-center gap-[30px] mt-2'>
                                    <p className="text-sm text-gray-500">Size: <b className='text-gray-800'>XL</b></p>
                                    <p className="text-sm text-gray-500">Color: <b className='text-gray-800'>Blue</b>
                                    </p>
                                </div>
                            </div>
                            <span className="font-medium">$28.00</span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="font-medium mb-2 text-[1rem] text-gray-800">Discount Code</h3>
                        <div className="flex gap-2 relative">
                            <img alt='discount/png' src='https://i.ibb.co.com/r7rF8xK/ticket-discount.png'
                                 className='w-[25px] absolute transform top-[50%] translate-y-[-50%] left-2'/>
                            <input type="text" placeholder="BUYRI"
                                   className="border w-full border-gray-200 bg-transparent outline-none focus:border-[#0FABCA] rounded pl-10 pr-3 py-2"/>
                            <button
                                className='absolute top-[50%] transform translate-y-[-50%] right-5 text-[0.9rem] text-[#0FABCA]'>Apply
                            </button>
                        </div>
                    </div>
                    <div className="mt-8 space-y-2 border-t border-gray-200 pt-6">
                        <div className="flex justify-between">
                            <span className="text-[1rem] text-gray-500">Subtotal</span>
                            <span className='text-[1rem] font-medium text-gray-800'>$56.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[1rem] text-gray-500">Shipping Cost</span>
                            <span className='text-[1rem] font-medium text-gray-800'>$8.00</span>
                        </div>
                        <div className="flex justify-between pb-3">
                            <span className="text-[1rem] text-gray-500">Discount (10%)</span>
                            <span className='text-[1rem] font-medium text-gray-800'>-$13.00</span>
                        </div>
                        <div className="flex justify-between border-t border-gray-200 pt-5 font-medium">
                            <span>Total</span>
                            <span className='text-[1rem] font-medium text-gray-800'>$51.00</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Checkout Form */}
            <div className="flex-1 px-8">
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
                        <div className='flex items-center justify-between mb-2'>
                            <label className="text-[1rem] font-medium text-gray-800">Payment method</label>
                            <button type="button" className="text-blue-600 text-right flex text-[0.9rem] items-center gap-[5px]">
                                <AiOutlinePlus/>
                                Add new
                            </button>
                        </div>
                        <div className="flex w-full gap-4">
                            <label
                                className="flex-1 flex items-center justify-between gap-2 border-gray-200 border rounded-lg p-4">
                                <div>
                                    <div>
                                        <input type="radio" name="payment" value="card" className="form-radio"
                                               defaultChecked/>
                                        <span> **** 8304</span>
                                    </div>

                                    <div className='flex items-center gap-[5px] pl-5 mt-0.5'>
                                        <p className='text-[0.9rem] text-gray-500'>Visa •</p>
                                        <p className='text-[0.9rem] text-gray-500 hover:text-[#0FABCA] cursor-pointer'> Edit</p>
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

                                    <div className='flex items-center gap-[5px] pl-5 mt-0.5'>
                                    <p className='text-[0.9rem] text-gray-500'>Paypal •</p>
                                        <p className='text-[0.9rem] text-gray-500 hover:text-[#0FABCA] cursor-pointer'> Edit</p>
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
                    <div className="grid grid-cols-2 gap-4">
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

export default CheckoutPageExample2;
