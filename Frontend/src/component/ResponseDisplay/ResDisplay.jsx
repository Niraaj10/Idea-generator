import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const ResDisplay = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { response, prompt } = location.state || {};
    const [typedResponse, setTypedResponse] = useState("");
    const [index, setIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [isHovered, setIsHovered] = useState(false);


    useEffect(() => {
        if (!response || !prompt) return;
        // Typing effect logic
        if (index < response.length) {
            const timeout = setTimeout(() => {
                setTypedResponse((prev) => prev + response[index]);
                setIndex(index + 1);
            }, 20);
            return () => clearTimeout(timeout);
        }
    }, [index, response, prompt]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 400);

        return () => clearInterval(cursorInterval);
    }, []);

    if (!response || !prompt) {
        return (
            <div className="error-page flex flex-col items-center">
                <h1>No response available. Please go back and try again.</h1>
                <button
                    onClick={() => navigate("/")}
                    className="back-button bg-black text-white p-3 px-6 rounded-lg mt-4"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="response-page relative flex justify-center h-screen flex-col p-10">
                {isHovered && (
                    // when prompt is too long
                    <div className="absolute top-[100px] transition-all duration-200 left-0 mt-2 backdrop-blur-md bg-transparent border rounded-lg border-gray-300 shadow-lg p-3 max-w-full whitespace-normal z-50">
                        {prompt}
                    </div>
                )}
                <div
                    className='items-center gap-2 mt-4 border p-3 rounded-lg w-[60vw] max-h-[10vh] relative inline-block whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <h1 className="fixed bg-white">Your thought:</h1>
                    <div className="prompt-display font-semibold ml-32 max-h-[5vh]">{prompt}</div>
                </div>
                <h1 className="font-bold mt-6">Idea generated by AI:</h1>
                <p className="response-display response-text border w-[60vw] max-h-[70vh] overflow-y-scroll rounded-xl p-6 mt-2 ">{typedResponse}
                    <span className={`cursor ${showCursor ? "visible" : "invisible"}`}>|</span>
                </p>
                <button
                    onClick={() => navigate("/")}
                    className="back-button w-fit bg-black text-white p-3 px-6 rounded-lg mt-6"
                >
                    Generate Another
                </button>
            </div>
            
        </>
    );
};

export default ResDisplay;


