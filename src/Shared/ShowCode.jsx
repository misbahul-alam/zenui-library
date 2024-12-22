import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaRegCopy } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";

const ShowCode = ({ code }) => {
    const [isCopy, setIsCopy] = useState(false);
    const isMultiTab = Array.isArray(code);
    const [activeTab, setActiveTab] = useState(
        isMultiTab ? code[0].id : "default"
    );

    // Format code properly whether it's a single code string or multiple
    const formattedCode = isMultiTab
        ? code
        : [{ id: "default", displayText: "", language: "jsx", code: code }];

    // copy to clipboard
    const copyToClipboard = () => {
        const currentCode = formattedCode.find(item => item.id === activeTab)?.code || "";
        navigator.clipboard.writeText(currentCode);
        setIsCopy(true);
        setTimeout(() => {
            setIsCopy(false);
        }, 1000);
    };

    return (
        <div className="code-block-wrapper border border-[#ffffff15] rounded-md overflow-hidden">
            {/* Tabs Section */}
            {isMultiTab && (
                <div className="flex bg-[#282a36] border-b border-[#ffffff15] pl-2 pr-4 pt-1.5">
                    {formattedCode.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-3 py-2 rounded-lg text-sm ${
                                activeTab === tab.id
                                    ? "border-b rounded-b-none text-white"
                                    : "text-gray-400 hover:bg-slate-700"
                            }`}
                        >
                            {tab.displayText || tab.id.toUpperCase()}
                        </button>
                    ))}
                </div>
            )}

            {/* Code Block Section */}
            <div className="relative">
                {/* Copy Button */}
                <button
                    onClick={copyToClipboard}
                    className="absolute right-4 top-4 z-10 w-[40px] h-[40px] flex items-center justify-center bg-[#000000d7] rounded-md transition-all duration-300 hover:bg-[#00000080]"
                >
                    {isCopy ? (
                        <MdOutlineDone className="text-[1.3rem] text-green-500" />
                    ) : (
                        <FaRegCopy className="text-[1.2rem] text-gray-400" />
                    )}
                </button>

                {/* Code Display */}
                <SyntaxHighlighter
                    language={formattedCode.find(item => item.id === activeTab)?.language || 'jsx'}
                    style={dracula}
                    showLineNumbers
                    customStyle={{
                        margin: 0,
                        borderRadius: 0,
                        fontSize: "14px",
                        maxHeight: "400px",
                    }}
                    className='zenui_code_snippet text-[14px] max-h-[400px] 400px:max-w-[380px] 425px:max-w-[638px] max-w-[325px]'
                >
                    {formattedCode.find(item => item.id === activeTab)?.code || ''}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default ShowCode;