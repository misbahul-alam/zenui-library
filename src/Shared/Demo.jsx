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
