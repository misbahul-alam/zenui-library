import React, {useEffect, useState} from "react";

const Timer = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        durations: {
            days: 365,
            hours: 24,
            minutes: 60,
            seconds: 60
        }
    });

    const targetDate = "2024-12-31T23:59:59"
    const size = 100

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate) - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                    durations: {
                        days: 365,
                        hours: 24,
                        minutes: 60,
                        seconds: 60
                    }
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, [targetDate]);

    const CircleTimer = ({ value, type }) => {
        const strokeWidth = 7;
        const radius = (size - strokeWidth) / 2;
        const circumference = radius * 2 * Math.PI;
        const progress = (value / timeLeft.durations[type]) * 100;
        const strokeDashoffset = circumference - (progress / 100) * circumference;

        return (
            <div className="relative" style={{ width: size, height: size }}>
                {/* Background Circle */}
                <svg className="absolute top-0 left-0" width={size} height={size}>
                    <circle
                        cx={size/2}
                        cy={size/2}
                        r={radius}
                        fill="transparent"
                        stroke="#e5e5e5"
                        strokeWidth={strokeWidth}
                    />
                </svg>

                {/* Progress Circle */}
                <svg className="absolute top-0 left-0" width={size} height={size}>
                    <circle
                        cx={size/2}
                        cy={size/2}
                        r={radius}
                        fill="transparent"
                        stroke="#17b4d3"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        style={{
                            transition: "stroke-dashoffset 1s linear",
                            transform: "rotate(-90deg)",
                            transformOrigin: "50% 50%"
                        }}
                    />
                </svg>

                {/* Time Display */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                    <div className="text-[1.2rem] font-semibold text-[#17b4d3]">{value}</div>
                    <div className="text-[0.6rem] text-gray-500">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
                </div>
            </div>
        );
    };
    
    return (
        <div className="flex flex-wrap justify-center items-center space-x-6 p-4">
            <CircleTimer value={timeLeft.hours} type="hours"/>
            <CircleTimer value={timeLeft.minutes} type="minutes"/>
            <CircleTimer value={timeLeft.seconds} type="seconds"/>
        </div>
    );
};

export default Timer;
