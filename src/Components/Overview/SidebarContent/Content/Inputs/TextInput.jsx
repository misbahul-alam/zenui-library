import { useState } from 'react';

// components
import OverviewFooter from '../../../../../Shared/OverviewFooter';
import ContentHeader from '../../../../../Shared/ContentHeader';

// contents for scrollspy
import { textInputContents } from '../../../../../Utils/ContentsConfig/InputContents';
import { useScrollSpy } from '../../../../../CustomHooks/useScrollSpy';

// react helmet
import { Helmet } from 'react-helmet';

// icons
import { RiAccountCircleLine, RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineMail } from 'react-icons/md';
import {IoEyeOutline, IoEyeOffOutline, IoSearch} from 'react-icons/io5';

// showing the code
import Showcode from '../../../../../Shared/ShowCode';
import { IoIosArrowDown, IoLogoUsd } from 'react-icons/io';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { FaEuroSign } from 'react-icons/fa';
import ToggleTab from "../../../../../Shared/ToggleTab.jsx";
import ContentNavbar from "../../../../../Shared/ContentNavbar.jsx";
import ComponentDescription from "../../../../../Shared/ComponentDescription.jsx";
import ComponentWrapper from "../../../../../Shared/ComponentWrapper.jsx";

const TextInput = () => {
  const sectionIds = textInputContents.map((item) => item.href.slice(1));
  const activeSection = useScrollSpy(sectionIds);

  // primary input
  const [primaryInputPreview, setPrimaryInputPreview] = useState(true);
  const [primaryInputCode, setPrimaryInputCode] = useState(false);

  // bottom border input
  const [bottomBorderPreview, setBottomBorderPreview] = useState(true);
  const [bottomBorderCode, setBottomBorderCode] = useState(false);

  // animateLabel
  const [animateLabelPreiview, setAnimateLabelPreview] = useState(true);
  const [animateLabelCode, setAnimateLabelCode] = useState(false);

  // icon input
  const [iconInputPreview, setIconInputPreview] = useState(true);
  const [iconInputCode, setIconInputCode] = useState(false);

  // password input
  const [passwordInputPreview, setPasswordInputPreview] = useState(true);
  const [passwordInputCode, setPasswordInputCode] = useState(false);

  // Link input
  const [linkInputPreview, setLinkInputPreview] = useState(true);
  const [linkInputCode, setLinkInputCode] = useState(false);

  // price input
  const [priceInputPreview, setPriceInputPreview] = useState(true);
  const [priceInputCode, setPriceInputCode] = useState(false);

  // join us input
  const [joinInputPreview, setJoinInputPreview] = useState(true);
  const [joinInputCode, setJoinInputCode] = useState(false);

  // actions
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  // price dropdown actions
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);
  const [selectedCurrencyType, setSelectedCurrencyType] = useState('USD');

  const allCurrencyTypes = ['USD', 'EUR', 'BDT'];

  const handlePriceDropdownClick = (currency) => {
    setSelectedCurrencyType(currency);
    setPriceDropdownOpen(false);
  };

  function handleClassesBasedOnTheme(classString, isDark) {
    const classes = classString.split(' ');

    const filteredClasses = isDark
        ? classes
        : classes.filter(cls => !cls.startsWith('dark:'));

    return filteredClasses.join(' ');
  }

  return (
    <>
      <aside className='flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
        <div>
          <ContentHeader text={'required input'} id={'primary_input'}/>

          <ComponentDescription text='This is an input text field. Use it to enter your information, which
            will be processed accordingly.'/>

          <ToggleTab setCode={setPrimaryInputCode} preview={primaryInputPreview} setPreview={setPrimaryInputPreview}
                     code={primaryInputCode}/>

          <ComponentWrapper>
            {primaryInputPreview && (
                <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                  <div className='w-full 1024px:w-[80%]'>
                    <label
                        htmlFor='name'
                        className='text-[15px] dark:text-slate-300 text-text font-[400]'
                    >
                      Name <span className='text-red-500'>*</span>
                    </label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Your name'
                        className='border-border dark:bg-transparent dark:border-slate-600 dark:placeholder:text-slate-600 dark:text-slate-300 border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300'
                    />
                  </div>
                </div>
            )}

            {primaryInputCode && (
                <Showcode
                    code='
import React from "react";

const TextInput = () => {

    return (
        <div className="w-full 1024px:w-[80%]">
            <label
                htmlFor="name"
                className="text-[15px] dark:text-slate-300 text-text font-[400]"
            >
                Name <span className="text-red-500">*</span>
            </label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className="border-border dark:bg-transparent dark:border-slate-600 dark:placeholder:text-slate-600 dark:text-slate-300 border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
            />
        </div>
    );
};

export default TextInput;
                    '
                />
            )}
          </ComponentWrapper>

          <div className='mt-8'>
            <ContentHeader
                text={'bottom bordered input'}
                id={'bottom_bordered_input'}
            />
          </div>

          <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

          <ToggleTab preview={bottomBorderPreview} setPreview={setBottomBorderPreview} code={bottomBorderCode}
                     setCode={setBottomBorderCode}/>

          <ComponentWrapper>
            {bottomBorderPreview && (
                <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                  <input
                      type='text'
                      name='name'
                      id='name'
                      placeholder='Your name'
                      className='border-border dark:bg-slate-900 dark:text-[#abc2d3] dark:border-slate-600 border-b outline-none px-4 w-full 1024px:w-[80%] py-3 focus:border-primary transition-colors duration-300'
                  />
                </div>
            )}

            {bottomBorderCode && (
                <Showcode
                    code='
<input type="text" name="name" id="name" placeholder="Your name" className="border-[#e5eaf2] border-b outline-none px-4 w-[80%] py-3 focus:border-[#3B9DF8] transition-colors duration-300"
/>
                '
                />
            )}
          </ComponentWrapper>

          <div className='mt-8'>
            <ContentHeader
                text={'animate label input'}
                id={'animate_label_input'}
            />
          </div>

          <ComponentDescription text='This is an animated label text input field. Enter your data here,
            and the label will animate accordingly.'/>

          <ToggleTab setCode={setAnimateLabelCode} code={animateLabelCode} setPreview={setAnimateLabelPreview}
                     preview={animateLabelPreiview}/>

          <ComponentWrapper>
            {animateLabelPreiview && (
                <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                  <label className='relative w-full 1024px:w-[80%]'>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        className='peer border-border dark:border-slate-600 bg-transparent border rounded-md outline-none px-4 py-3 w-full focus:border-primary transition-colors duration-300'
                    />
                    <span
                        className=' absolute top-3.5 dark:peer-focus:bg-darkBgColor left-5 peer-focus:-top-3 peer-focus:bg-white dark:text-slate-500 peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-primary text-[#777777] peer-focus:px-1 transition-all duration-300 '>
                    Your name
                  </span>
                  </label>
                </div>
            )}

            {animateLabelCode && (
                <Showcode
                    code='
<label className="relative w-[80%]">
  <input type="text" name="name" id="name" className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
  />
  <span className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
      Your name
  </span>
</label>
                '
                />
            )}
          </ComponentWrapper>

          <div className='mt-8'>
            <ContentHeader text={'input with icon'} id={'input_with_icon'}/>
          </div>

          <ComponentDescription text='This is an input field with an icon. Enter your information here and
            use the icon for additional actions.'/>

          <ToggleTab preview={iconInputPreview} setPreview={setIconInputPreview} code={iconInputCode}
                     setCode={setIconInputCode}/>

          <ComponentWrapper>
            {iconInputPreview && (
                <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                  <div className='w-full 1024px:w-[80%] relative'>
                    <RiAccountCircleLine
                        className=' absolute top-3.5 left-3 text-[1.5rem] dark:text-slate-400 text-[#777777]'/>
                    <input
                        type='text'
                        name='text'
                        id='text'
                        placeholder='Username'
                        className='peer border-border dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-[#abc2d3] dark:border-slate-600 border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300'
                    />
                  </div>

                  <div className='w-full 1024px:w-[80%] relative'>
                    <RiLockPasswordLine
                        className=' absolute top-3.5 left-3 text-[1.5rem] dark:text-slate-400 text-[#777777]'/>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        className='peer border-border dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-[#abc2d3] dark:border-slate-600 border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300'
                    />
                  </div>

                  <div className='w-full 1024px:w-[80%] relative'>
                    <MdOutlineMail
                        className=' absolute top-3.5 left-3 text-[1.5rem] dark:text-slate-400 text-[#777777]'/>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email address'
                        className='peer border-border dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-[#abc2d3] dark:border-slate-600 border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300'
                    />
                  </div>
                </div>
            )}

            {iconInputCode && (
                <Showcode
                    code='
// icons
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";

const Inputs = () => {
  return (
    <>
      {/* username */}
      <div className="w-[80%] relative">
        <RiAccountCircleLine className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Username"
          className="peer border-[#e5eaf2] border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
        />
      </div>

      {/* password */}
      <div className="w-[80%] relative">
        <RiLockPasswordLine className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="peer border-[#e5eaf2] border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
        />
      </div>

      {/* email */}
      <div className="w-[80%] relative">
        <MdOutlineMail className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          className="peer border-[#e5eaf2] border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
        />
      </div>
    </>
  );
};

export default Inputs;
                '
                />
            )}
          </ComponentWrapper>

          <div className='mt-8'>
            <ContentHeader text={'password input'} id={'password_input'}/>
          </div>

          <ComponentDescription text='This is a password input field with show/hide functionality. Enter
            your password and toggle visibility as needed.'/>

          <ToggleTab setCode={setPasswordInputCode} code={passwordInputCode} setPreview={setPasswordInputPreview}
                     preview={passwordInputPreview}/>

          <ComponentWrapper>
            {passwordInputPreview && (
                <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                  <div className='w-full 1024px:w-[80%]'>
                    <label
                        htmlFor='password'
                        className='text-[15px] dark:text-[#abc2d3] text-text font-[400]'
                    >
                      Password
                    </label>
                    <div className='w-full relative'>
                      <input
                          type={isEyeOpen ? 'text' : 'password'}
                          name='password'
                          id='password'
                          placeholder='Password'
                          className='peer border-border dark:border-slate-600 dark:bg-slate-900 dark:placeholder:text-slate-500 border dark:text-[#abc2d3] rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-primary transition-colors duration-300'
                      />
                      {isEyeOpen ? (
                          <IoEyeOutline
                              className=' absolute top-4 right-4 text-[1.5rem] dark:text-slate-400 text-[#777777] cursor-pointer'
                              onClick={() => setIsEyeOpen(false)}
                          />
                      ) : (
                          <IoEyeOffOutline
                              className=' absolute top-4 right-4 text-[1.5rem] dark:text-slate-400 text-[#777777] cursor-pointer'
                              onClick={() => setIsEyeOpen(true)}
                          />
                      )}
                    </div>
                  </div>
                </div>
            )}

            {passwordInputCode && (
                <Showcode
                    code='
const Textarea = () => {
  return (
    <div className="w-[80%]">
      <label htmlFor="password" className="text-[15px] font-[400]">
        Password
      </label>
      <div className="w-full relative">
        <input
          type={isEyeOpen ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Password"
          className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#3B9DF8] transition-colors duration-300"
        />
        {isEyeOpen ? (
          <IoEyeOutline
            className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
            onClick={() => setIsEyeOpen(false)}
          />
        ) : (
          <IoEyeOffOutline
            className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
            onClick={() => setIsEyeOpen(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Textarea;
                '
                />
            )}
          </ComponentWrapper>

          <div className='mt-8'>
            <ContentHeader text={'Link input'} id={'link_input'}/>
          </div>

          <ComponentDescription text='This is a link input field that allows you to enter a URL. You can
            customize and validate the link as needed.'/>

          <ToggleTab preview={linkInputPreview} setPreview={setLinkInputPreview} code={linkInputCode}
                     setCode={setLinkInputCode}/>

          <ComponentWrapper>
            {linkInputPreview && (
                <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                  <div className='w-full 1024px:w-[80%] relative'>
                    <input
                        type='text'
                        placeholder='Website url'
                        className='border dark:border-slate-600 dark:text-[#abc2d3] dark:placeholder:text-slate-500 bg-transparent border-border py-3 pr-4 pl-[90px] outline-none w-full rounded-md'
                    />

                    <span
                        className='bg-gray-300 dark:bg-slate-900 dark:border dark:border-slate-600 dark:text-slate-400 text-gray-500 text-[1rem] absolute top-0 left-0 h-full px-3 flex items-center justify-center rounded-l-md'>
                    Https://
                  </span>
                  </div>
                </div>
            )}

            {linkInputCode && (
                <Showcode
                    code="
<div className='w-full relative'>
    <input type='text' placeholder='Website url' className='border border-[#e5eaf2] py-3 pr-4 pl-[90px] outline-none w-full rounded-md'/>

    <span className='bg-gray-300 text-gray-500 text-[1rem] absolute top-0 left-0 h-full px-3 flex items-center justify-center rounded-l-md'>Https://</span>
</div>
                    "
                />
            )}
          </ComponentWrapper>

          <div className='mt-8'>
            <ContentHeader text={'Price input'} id={'price_input'}/>
          </div>

          <ComponentDescription text='This is a price input field where you can enter and format a price
            value. It supports currency symbols and ensures valid numerical
            input.'/>

          <ToggleTab preview={priceInputPreview} setPreview={setPriceInputPreview} code={priceInputCode}
                     setCode={setPriceInputCode}/>

          <ComponentWrapper>
            {priceInputPreview && (
                <div
                    className={`${
                        priceDropdownOpen ? 'mb-[8rem]' : 'mb-4'
                    } p-8 flex items-center flex-col gap-5 justify-center transition-all duration-200`}
                >
                  <div className='w-full 1024px:w-[80%] relative'>
                    <input
                        type='number'
                        placeholder='0'
                        className='border dark:border-slate-600 bg-transparent dark:text-[#abc2d3] dark:placeholder:text-slate-500 border-border py-3 pl-[65px] pr-[80px] outline-none w-full rounded-md'
                    />

                    <div
                        className='bg-gray-100 w-[50px] dark:bg-slate-900 dark:border dark:border-slate-600 absolute top-0 h-full left-0 flex items-center justify-center rounded-l-md'>
                      {selectedCurrencyType === 'BDT' && (
                          <FaBangladeshiTakaSign className='text-[1.2rem] dark:text-slate-400 text-gray-600'/>
                      )}
                      {selectedCurrencyType === 'EUR' && (
                          <FaEuroSign className='text-[1.2rem] dark:text-slate-400 text-gray-600'/>
                      )}
                      {selectedCurrencyType === 'USD' && (
                          <IoLogoUsd className='text-[1.2rem] dark:text-slate-400 text-gray-600'/>
                      )}
                    </div>

                    <div
                        onClick={() => setPriceDropdownOpen(!priceDropdownOpen)}
                        className='absolute top-0 right-0 h-full flex dark:border-slate-600 items-center justify-center cursor-pointer border-l border-border px-4'
                    >
                    <span className='flex items-center gap-[8px] dark:text-slate-300 text-text'>
                      {selectedCurrencyType}
                      <IoIosArrowDown
                          className={`${
                              priceDropdownOpen ? 'rotate-[180deg]' : 'rotate-0'
                          } transition-all duration-200`}
                      />
                    </span>

                      <ul
                          className={`${
                              priceDropdownOpen
                                  ? 'translate-y-0 opacity-100 z-30'
                                  : 'translate-y-[-10px] opacity-0 z-[-1]'
                          } list-none absolute top-[53px] dark:bg-slate-800 dark:text-slate-300 right-0 bg-white toastshadow w-[87px] flex flex-col items-center transition-all duration-200 justify-center py-1 rounded-md`}
                      >
                        {allCurrencyTypes?.map((currency, index) => (
                            <li
                                key={index}
                                className='py-2 px-4 w-full dark:hover:bg-slate-700/30 hover:bg-gray-100 text-center cursor-pointer'
                                onClick={() => handlePriceDropdownClick(currency)}
                            >
                              {currency}
                            </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
            )}

            {priceInputCode && (
                <Showcode
                    code="
import React, { useState } from 'react';

// react icon
import {FaBangladeshiTakaSign} from 'react-icons/fa6';
import {FaEuroSign} from 'react-icons/fa';
import {IoIosArrowDown, IoLogoUsd} from 'react-icons/io';

const PriceInput = () => {
    // price dropdown actions
    const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);
    const [selectedCurrencyType, setSelectedCurrencyType] = useState('USD');

    const allCurrencyTypes = ['USD', 'EUR', 'BDT']

    const handlePriceDropdownClick = (currency) => {
        setSelectedCurrencyType(currency)
        setPriceDropdownOpen(false)
    }

    return (
        <div className='w-full relative'>
            <input type='number' placeholder='0'
                   className='border border-[#e5eaf2] py-3 pl-[65px] pr-[80px] outline-none w-full rounded-md'/>

            <div
                className='bg-gray-100 w-[50px] absolute top-0 h-full left-0 flex items-center justify-center rounded-l-md'>
                {
                    selectedCurrencyType === 'BDT' && (
                        <FaBangladeshiTakaSign className='text-[1.2rem] text-gray-600'/>
                    )
                }
                {
                    selectedCurrencyType === 'EUR' && (
                        <FaEuroSign className='text-[1.2rem] text-gray-600'/>
                    )
                }
                {
                    selectedCurrencyType === 'USD' && (
                        <IoLogoUsd className='text-[1.2rem] text-gray-600'/>
                    )
                }
            </div>

            <div onClick={() => setPriceDropdownOpen(!priceDropdownOpen)}
                 className='absolute top-0 right-0 h-full flex items-center justify-center cursor-pointer border-l border-[#e5eaf2] px-4'>
                      <span className='flex items-center gap-[8px] text-[#424242]'>
                        {selectedCurrencyType}
                          <IoIosArrowDown
                              className={`${priceDropdownOpen ? 'rotate-[180deg]' : 'rotate-0'} transition-all duration-200`}/>
                      </span>

                <ul className={`${priceDropdownOpen ? 'translate-y-0 opacity-100 z-30' : 'translate-y-[-10px] opacity-0 z-[-1]'} list-none absolute top-[53px] right-0 bg-white toastshadow w-[87px] flex flex-col items-center transition-all duration-200 justify-center py-1 rounded-md`}>
                    {
                        allCurrencyTypes?.map((currency, index) => (
                            <li key={index} className='py-2 px-4 w-full hover:bg-gray-100 text-center cursor-pointer'
                                onClick={() => handlePriceDropdownClick(currency)}>{currency}</li>
                        ))
                    }
                </ul>
            </div>
        </div>

    );
};

export default PriceInput;
                    "
                />
            )}
          </ComponentWrapper>

          <div className='mt-8'>
            <ContentHeader text={'search input'} id={'search_input'}/>
          </div>

          <ComponentDescription text='This is a search input field that lets you enter keywords to find
            specific content. It provides instant feedback as you type.'/>

          <ToggleTab preview={passwordInputPreview} setPreview={setPasswordInputPreview} code={passwordInputCode}
                     setCode={setPasswordInputCode}/>

          <ComponentWrapper>
            {passwordInputPreview && (
                <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                  <div className='w-full 1024px:w-[80%] relative'>
                    <input
                        type='text'
                        placeholder='Search...'
                        className='border dark:border-slate-600 bg-transparent dark:placeholder:text-slate-500 dark:text-[#abc2d3] border-border py-3 pl-4 pr-[65px] outline-none w-full rounded-md'
                    />

                    <span
                        className='bg-gray-300 dark:bg-slate-900 dark:border dark:border-slate-600 dark:text-slate-400 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 group'>
                    <IoSearch className='text-[1.3rem]  group-hover:text-gray-200'/>
                  </span>
                  </div>

                  <div className='w-full 1024px:w-[80%] relative'>
                    <input
                        type='text'
                        placeholder='Search...'
                        className='border dark:border-slate-600 dark:placeholder:text-slate-500 bg-transparent dark:text-[#abc2d3] border-border py-3 pl-4 pr-[65px] outline-none w-full rounded-md'
                    />

                    <span
                        className='bg-gray-300 dark:bg-slate-900 dark:border-slate-600 dark:border dark:text-slate-300 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 hover:text-gray-200'>
                    Search
                  </span>
                  </div>

                  <div
                      className='bg-primary py-4 w-full 1024px:w-[80%] px-5 flex items-center justify-center rounded-full cursor-pointer relative'>
                    <IoSearch className='text-[1.3rem] text-white ml-auto'/>

                    <input
                        type='text'
                        placeholder='Search...'
                        className='border dark:bg-slate-900 dark:border-none dark:placeholder:text-slate-500 dark:text-[#abc2d3] border-border absolute top-[2px] left-[3px] h-[90%] w-[85%] py-3 px-4 outline-none rounded-full'
                    />
                  </div>
                </div>
            )}

            {passwordInputCode && (
                <Showcode
                    code="
import React from 'react';

// react icon
import {IoSearch} from 'react-icons/io5';

const SearchInput = () => {

    return (
        <>
            {/* 1st search input */}
            <div className='w-full relative'>
              <input type='text' placeholder='Search...'
              className='border border-[#e5eaf2] py-3 pl-4 pr-[65px] outline-none w-full rounded-md'/>

              <span
              className='bg-gray-300 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 group'><IoSearch
              className='text-[1.3rem]  group-hover:text-gray-200'/></span>
              </div>

            {/* 2nd search input */}
            <div className='w-full relative'>
              <input type='text' placeholder='Search...'
                     className='border border-[#e5eaf2] py-3 pl-4 pr-[65px] outline-none w-full rounded-md'/>

              <span
                  className='bg-gray-300 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 hover:text-gray-200'>Search</span>
            </div>

            {/* 3rd search input */}
            <div
                className='bg-[#3B9DF8] py-4 w-full px-5 flex items-center justify-center rounded-full cursor-pointer relative'>
              <IoSearch className='text-[1.3rem] text-white ml-auto'/>

              <input type='text' placeholder='Search...'
                     className='border border-[#e5eaf2] absolute top-[2px] left-[3px] h-[90%] w-[85%] py-3 px-4 outline-none rounded-full'/>
            </div>
          </>
          );
          };

export default SearchInput;
                    "
                />
            )}
          </ComponentWrapper>

          <div className='mt-8'>
            <ContentHeader text={'Join us input'} id={'join_us_input'}/>
          </div>

          <ComponentDescription text='This is a join us input field where users can enter their details to
            express interest in joining. It helps capture information for
            membership or subscription.'/>

          <ToggleTab preview={joinInputPreview} setPreview={setJoinInputPreview} code={joinInputCode}
                     setCode={setJoinInputCode}/>

          <ComponentWrapper>
            {joinInputPreview && (
                <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                  <div className='w-full 1024px:w-[80%] relative'>
                    <input
                        type='email'
                        placeholder='Email'
                        className='border bg-transparent dark:border-slate-500 dark:placeholder:text-slate-500 dark:text-[#abc2d3] border-border py-3 pl-4 pr-[115px] outline-none w-full rounded-md'
                    />

                    <span
                        className='bg-primary text-white absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 group'>
                    Subscribe
                  </span>
                  </div>
                </div>
            )}

            {joinInputCode && (
                <Showcode
                    code="
<div className='w-full relative'>
   <input type='email' placeholder='Email' className='border border-[#e5eaf2] py-3 pl-4 pr-[115px] outline-none w-full rounded-md'/>

   <span className='bg-[#3B9DF8] text-white absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 group'>
       Subscribe
    </span>
</div>
                    "
                />
            )}
          </ComponentWrapper>

          <OverviewFooter
              backName='all components'
              backUrl='/components/all-components'
              forwardName='Textarea'
              forwardUrl='/components/input-textarea'
          />
        </div>

        <ContentNavbar contents={textInputContents} activeSection={activeSection}/>

      </aside>
      <Helmet>
        <title>Form - Text Input</title>
      </Helmet>
    </>
  );
};

export default TextInput;
