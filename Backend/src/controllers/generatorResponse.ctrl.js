import axios from "axios";
import { Response } from "../models/response.model.js";
import OpenAI from "openai"


const generatePromptResponse = async (req, res) => {
    const { prompt } = req.body;
    // const openai = new OpenAI()


    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required." });
    }

    try {
        // Dummy response for when OpenAI API is unavailable
        const dummyResponse = `Dummy AI Response for: "${prompt}"`;

        // commenting the following code because I am not able to get OpenAI API key because of debit card not working properly
        // const completion = await openai.chat.completions.create({
        //     model: "gpt-4o-mini",
        //     messages: [
        //         { role: "system", content: "You are a helpful assistant." },
        //         {
        //             role: "user",
        //             content: prompt,
        //         },
        //     ],
        // });

        // if (!completion) {
        //     return res.status(500).json({ error: "Something went wrong while openaiResponse." });
        // }

        // console.log(completion.choices[0].message);

        // const aiResponse = completion.choices[0].message.content.trim() || dummyResponse;

        // Use the dummy response in case of API unavailability
        const aiResponse = dummyResponse; //for dummy responses


        //Using RapidApi for AI response generation
        // const options = {
        //     method: 'POST',
        //     url: 'https://open-ai21.p.rapidapi.com/chatgpt',
        //     headers: {
        //         'x-rapidapi-key': process.env.RAPID_API_KEY,
        //         'x-rapidapi-host': 'open-ai21.p.rapidapi.com',
        //         'Content-Type': 'application/json',
        //     },
        //     data: {
        //         messages: [
        //             {
        //                 role: 'user',
        //                 content: prompt,
        //             },
        //         ],
        //         web_access: false,
        //     },
        // };

        // const response = await axios.request(options);
        // if (response.status !== 200) {
        //     return res.status(response.status).json({ error: "Failed to generate response using RapidAPI." });
        // }

        // console.log(response.data.result)
        // const aiResponse = response.data.result || dummyResponse;

        // Save to MongoDB
        const newResponse = await Response.create({
            prompt,
            response: aiResponse
        });

        if (!newResponse) {
            return res.status(500).json({ error: "Something went wrong creating newResponse." });
        }

        res.status(200).json({ prompt, response: aiResponse });
    } catch (error) {
        console.error("Error generating response:", error);
        res.status(500).json({ error: "Failed to generate response." });
    }
};


export {
    generatePromptResponse
} 