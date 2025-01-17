import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import LandingPage from '../LandingPage';

const ResGenerator = () => {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!prompt.trim()) return alert("Please enter a prompt!");

        setLoading(true); 
        try {
            // (`${SERVER_URL}/`)
            const { data } = await axios.post("http://localhost:8000/api/ai-res/generateResponse", { prompt });
            // console.log(data.response)
            // setResponse(data.response);
            navigate("/idea", { state: { response: data.response, prompt } });
            // setResponse(data);
            // setPrompt("");
        } catch (error) {
            console.error("Error generating response:", error);
            alert("Failed to generate a response. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <LandingPage /> 
        <div className={`res-generator flex flex-col items-end`}>
            <form onSubmit={handleSubmit} className="prompt-input p-10 border rounded-xl w-[60vw] flex flex-col gap-5 shadow-md">
                <h1 className="title w-full text-2xl text-center">Enter Your thoughts here</h1>
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter your prompt here..."
                    className="prompt-textarea w-full p-4 px-6 border rounded-lg"
                />
                <button type="submit" className="submit-button cursor-pointer bg-black text-white p-3 px-12 rounded-lg w-fit" disabled={loading}>
                    {loading ? "Generating..." : "Get Ideas"}
                </button>
            </form>
            {/* <ResDisplay response={response.response} prompt={response.prompt}/> */}
            <button
                onClick={() => navigate("/history")}
                className="back-button w-fit bg-black text-white p-3 px-6 rounded-lg mt-6"
            >
                Get History
            </button>
        </div>
        </>
    );
};

export default ResGenerator
