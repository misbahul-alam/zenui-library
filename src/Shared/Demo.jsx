import React, {useRef, useState} from "react";

const OtpInput = () => {
    const [autoOtp, setAutoOtp] = useState("")
    const navigationInputs = useRef([])

    const length = 4

    const onChange = (value) => {
        setAutoOtp(value)
    }

    const handleInputChange = (e, index) => {
        const { value } = e.target;
        const newOtp = [...navigationInputs.current.map(input => input.value)];

        // Ensure only a single digit is entered per box
        if (/^[0-9]$/.test(value) && value.length === 1) {
            newOtp[index] = value;
            onChange(newOtp.join(""));

            if (index < length - 1) {
                navigationInputs.current[index + 1].focus();
            }
        } else if (value === "") {
            newOtp[index] = "";
            onChange(newOtp.join(""));
        } else {
            e.target.value = value.slice(0, 1);
        }
    };
    
    const handleKeydown = (e, index) => {
        if (e.key === "Backspace" && !navigationInputs.current[index].value && index > 0) {
            navigationInputs.current[index - 1].focus()
        }
    }

    return (
        <div className="grid grid-cols-4 gap-[10px] w-full md:w-[50%]">
            {
                Array.from({length}).map((_, index) => (
                    <input
                        key={index}
                        ref={(el) => (navigationInputs.current[index] = el)}
                        className="p-3 text-center dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 border border-[#bcbcbc] rounded-md outline-none focus:border-[#3B9DF8]"
                        placeholder="0"
                        max="1"
                        onChange={(e) => handleInputChange(e, index)}
                        onKeyDown={(e) => handleKeydown(e, index)}
                        type="number"
                    />
                ))
            }
        </div>
    );
};

export default OtpInput;
