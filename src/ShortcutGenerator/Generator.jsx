import React, {useCallback, useEffect, useState} from 'react';
import {IoIosInformationCircleOutline} from "react-icons/io";
import CodesSidebar from "./CodesSidebar.jsx";

const VALID_MODIFIERS = ['ctrl', 'alt', 'shift', 'meta'];
const VALID_KEYS = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'arrowup', 'arrowdown', 'arrowleft', 'arrowright',
    'enter', 'backspace', 'space', 'tab', 'escape'
];

const Generator = () => {
    const [shortcut, setShortcut] = useState('')
    const [detectedKeys, setDetectedKeys] = useState([])
    const [generatedCode, setGeneratedCode] = useState('')
    const [isGenerating, setIsGenerating] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [inputError, setInputError] = useState('');

    const handleKeyDown = useCallback((event) => {
        // Only prevent default and detect keys if input is not focused
        if (document.activeElement.tagName !== 'INPUT') {
            const key = event.key.toLowerCase();

            // Normalize modifier keys
            const normalizedKey = key === 'control' ? 'ctrl' :
                key === 'meta' ? (navigator.platform.indexOf('Mac') > -1 ? 'cmd' : 'meta') :
                    key;

            // Validate detected key
            if ((VALID_MODIFIERS.includes(normalizedKey) || VALID_KEYS.includes(normalizedKey)) &&
                !detectedKeys.includes(normalizedKey)) {
                event.preventDefault();
                setDetectedKeys(prev => [...prev, normalizedKey]);
            }
        }
    }, [detectedKeys])

    const validateShortcut = (input) => {
        const keys = input.toLowerCase().split('+').map(k => k.trim());
        const invalidKeys = keys.filter(key =>
            !VALID_MODIFIERS.includes(key) && !VALID_KEYS.includes(key)
        );

        if (invalidKeys.length > 0) {
            setInputError(`Invalid keys: ${invalidKeys.join(', ')}`);
            return false;
        }
        setInputError('');
        return true;
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])

    const generateCode = () => {
        if(!detectedKeys.length && !shortcut){
            setInputError('Please enter or detect keys');
            return;
        }

        const keys = (shortcut || detectedKeys.join(' + ')).toLowerCase().split('+').map(k => k.trim());

        if (!validateShortcut(shortcut || detectedKeys.join(' + '))) {
            return;
        }

        setGeneratedCode('')
        setSidebarOpen(true)
        setIsGenerating(true)

        const functionName = `handle${keys.map(k => k.charAt(0).toUpperCase() + k.slice(1)).join('')}Shortcut`;

        const keyConditions = keys.map(key => {
            if (key === 'ctrl') return 'event.ctrlKey';
            if (key === 'alt') return 'event.altKey';
            if (key === 'shift') return 'event.shiftKey';
            if (key === 'meta' || key === 'cmd') return 'event.metaKey';
            return `event.key.toLowerCase() === '${key}'`;
        }).join(' && ');

        const code = `
/**
 * Handles the ${keys.join('+')} keyboard shortcut.
 * @param {KeyboardEvent} event - The keyboard event object.
 */
function ${functionName}(event) {
  if (${keyConditions}) {
    event.preventDefault();
    // Your custom logic here
    console.log('${keys.join('+')} shortcut detected!');
  }
}

// Add this event listener to your desired scope (e.g., window or a specific element)
document.addEventListener('keydown', ${functionName});

// To remove the event listener when it's no longer needed:
document.removeEventListener('keydown', ${functionName});
    `.trim();

        setTimeout(() => {
            setGeneratedCode(code);
            setIsGenerating(false);
        }, 2500);
    };

    return (
        <>
            <div className='w-full'>
                <div>
                    <label htmlFor="manual-input" className='text-[1rem] font-semibold text-gray-700 '>Type Shortcut</label> <br/>
                    <input
                        id="manual-input"
                        type="text"
                        value={shortcut}
                        onChange={(e) => {
                            setShortcut(e.target.value);
                            setInputError('');
                        }}
                        placeholder="e.g., ctrl + l + e"
                        className="py-2 px-4 w-full rounded-md border border-gray-300 mt-1.5 outline-none focus:ring-0 focus:border-[#0FABCA] text-gray-800"
                    />
                    {inputError && (
                        <div className="text-red-500 text-sm mt-1">{inputError}</div>
                    )}
                </div>

                <div className='mt-5'>
                    <label className='text-[1rem] font-semibold text-gray-700 flex items-center gap-[5px]'>
                        Auto Detected Keys
                        <div className='relative group'>
                            <IoIosInformationCircleOutline className='text-[1.2rem] cursor-pointer text-gray-600'/>
                            <div
                                className="px-3 py-2 w-[330px] rounded text-secondary bg-gray-900 absolute top-[-60px] left-[50%] translate-x-[-50%] translate-y-[10px] opacity-0 z-[-1] text-center group-hover:opacity-100 group-hover:z-30 group-hover:translate-y-0 transition-all duration-200 text-[0.8rem]">

                                <span className='w-[8px] h-[8px] rotate-[45deg] bg-gray-900 text-center absolute bottom-[-4px] left-[50%] translate-x-[-50%]'></span>
                                Press any key on your keyboard to automatically detect and capture it in the field.

                            </div>
                        </div>
                    </label>
                    <div className={`${detectedKeys.length > 0 ? 'text-gray-700' : 'text-gray-400'} mt-1.5 p-2 relative bg-gray-100 min-h-[150px] flex items-center justify-center font-semibold rounded`}>
                        {detectedKeys.length > 0 ? detectedKeys.join(' + ') : 'No keys detected'}

                        {
                            detectedKeys.length > 0 && (
                                <button
                                    onClick={()=> setDetectedKeys([])}
                                    className='bg-gray-400 rounded-md py-1.5 px-6 absolute right-2 bottom-2 text-white font-normal text-[0.9rem]'>Clear</button>
                            )
                        }
                    </div>
                </div>

                <button onClick={generateCode} className='code_generate_btn bg-gradient-to-r mt-7 from-[#0FABCA] hover:from-[#0FABCA]/80 to-[#CD00F1] hover:to-[#CD00F1]/80 text-white py-2.5 px-6 rounded-md'>
                    {isGenerating ? 'Generating...' : 'Generate Code'}
                </button>
            </div>
            <CodesSidebar sidebarOpen={sidebarOpen} isGenerating={isGenerating} setSidebarOpen={setSidebarOpen} codes={generatedCode}/>
        </>
    );
};

export default Generator;