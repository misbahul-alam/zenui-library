import { useState, useRef, useEffect } from 'react';

const VerticalComparisonExample = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);
    const isDragging = useRef(false);

    // handle mouse down event
    const handleMouseDown = (e) => {
        isDragging.current = true;
        handleMouseMove(e);
    };

    // handle sliding via tracking the mouse move
    const handleMouseMove = (e) => {
        if (!isDragging.current) return;

        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const position = (y / rect.height) * 100;

        setSliderPosition(Math.min(Math.max(0, position), 100));
    };

    // handle mouse up and stop the dragging state
    const handleMouseUp = () => {
        isDragging.current = false;
    };

    // handle touch move for mobile devices
    const handleTouchMove = (e) => {
        if (!isDragging.current) return;

        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const y = e.touches[0].clientY - rect.top;
        const position = (y / rect.height) * 100;

        setSliderPosition(Math.min(Math.max(0, position), 100));
    };

    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchend', handleMouseUp);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchend', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full select-none overflow-hidden"
        >
            {/* Before Image */}
            <img
                src='https://i.ibb.co.com/YXzxRBv/before.png'
                alt="Before"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* After Image */}
            <div
                className="absolute top-0 left-0 w-full overflow-hidden"
                style={{ height: `${sliderPosition}%` }}
            >
                <img
                    src='https://i.ibb.co.com/1ZKL4wK/after.png'
                    alt="After"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            </div>

            {/* Slider Line */}
            <div
                className="absolute left-0 right-0 h-1 translate-y-[-50%] bg-white cursor-ns-resize"
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
                style={{
                    top: `${sliderPosition}%`,
                }}
            >
                {/* Slider Handle */}
                <div
                    className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] bg-[#0FABCA] border-white"
                >
                    <div className="flex h-full items-center justify-center rotate-90">
                        <div className="w-4 flex justify-evenly gap-[5px]">
                            <div className="w-[2.5px] h-3 bg-white"></div>
                            <div className="w-[2px] h-3 bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerticalComparisonExample;