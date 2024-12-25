import React from 'react';

const ContentNavbar = ({contents, activeSection}) => {
    return (
        <div className='1024px:block sticky top-4 right-0 w-[40%] hidden'>
            <h2 className='text-[0.9rem] dark:text-darkSubTextColor font-[600] text-text tracking-widest'>
                CONTENTS
            </h2>
            <div className='flex flex-col border-l dark:border-darkBorderColor border-border gap-4 mt-4'>
                {contents?.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        className={`${
                            activeSection === item.href.slice(1) &&
                            '!text-primary !border-primary'
                        } text-[0.9rem] capitalize dark:text-darkSubTextColor/90 transition-all duration-300 text-text border-l-2 border-transparent pl-4`}
                    >
                        {item.title}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ContentNavbar;
