import { Response } from "../models/response.model.js";

const getResponseHistory = async (req, res) => {
    try {
      const responsehistory = await Response.find().sort({ createdAt: -1 });
      res.status(200).json(responsehistory);
    } catch (error) {
      console.error("Error fetching history:", error);
      res.status(500).json({ error: "Failed to fetch history." });
    }
  };

  export {
    getResponseHistory
} 