import { useState } from 'react';
import { RiShiningFill } from "react-icons/ri";
import { generateTailwindConfig } from "./genaiAPI";
import AIResponseSidebar from './AIResponseSidebar';

const Generator = () => {
  const [prompt, setPrompt] = useState('');
  const [config, setConfig] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleGenerateConfig = async () => {
    setIsGenerating(true);
    setError('');
    try {
      const generatedConfig = await generateTailwindConfig(prompt);
      setConfig(generatedConfig);
      setSidebarOpen(true);
    } catch (error) {
      setError('Failed to generate config. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

return (
    <div className='w-full'>
        <div>
            <label htmlFor="manual-input" className='text-[1rem] font-semibold text-gray-700 '>Write the prompt for theme name.</label> <br/>
            <input
                id="manual-input"
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter theme name like E-Commerce, Blog..."
                className="py-2 px-4 w-full rounded-md border border-gray-300 mt-1.5 outline-none focus:ring-0 focus:border-[#0FABCA] text-gray-800"
            />
        </div>

        <div className='flex items-center gap-[15px] mt-7'>
            <button
                onClick={handleGenerateConfig}
                className='flex items-center gap-[8px] code_generate_btn bg-gradient-to-r from-[#0FABCA] hover:from-[#0FABCA]/80 to-[#CD00F1] hover:to-[#CD00F1]/80 text-white py-2.5 px-6 rounded-md'
                disabled={isGenerating}
            >
                <RiShiningFill className={isGenerating ? 'animate-spin-zoom' : ''} /> {isGenerating ? 'Generating...' : 'Generate Code'}
            </button>
        </div>

        {error && <div className="text-red-500 mt-2">{error}</div>}
        {config && (
            <pre className="mt-4 p-4 bg-gray-100 rounded-md">
                <code>{config}</code>
            </pre>
        )}
        <AIResponseSidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            codes={config}
            isGenerating={isGenerating}
        />
    </div>
);
};

export default Generator;