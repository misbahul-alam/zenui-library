import React from 'react';

const ContentNavbar = ({contents, activeSection, width = '40%'}) => {
    return (
        <div className={`1024px:block sticky top-4 right-0 w-[${width}] hidden`}>
            <h2 className='text-[0.9rem] dark:text-darkSubTextColor font-[600] text-text tracking-widest'>
                CONTENTS
            </h2>
            <div style={{scrollbarWidth:'none'}} className='flex flex-col border-l max-h-[77vh] overflow-scroll dark:border-darkBorderColor border-border mt-4 w-[70%]'>
                {contents?.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        className={`${
                            activeSection === item.href.slice(1) &&
                            '!text-primary bg-gray-50 dark:bg-slate-900 !border-primary'
                        } text-[0.9rem] capitalize py-[8px] dark:text-darkSubTextColor/90 transition-all duration-300 text-text border-l-2 border-transparent pl-4`}
                    >
                        {item.title}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ContentNavbar;
