import React from 'react';

const ComponentWrapper = ({children, width = 90}) => {
    return (
        <div className={`w-full dark:bg-darkBg transition-all duration-500 1024px:w-[${width}%] dark:border-darkBorderColor border border-border rounded`}>
            {children}
        </div>
    );
};

export default ComponentWrapper;
