import { GoogleGenAI } from "@google/genai";
import { GOOGLE_AI_API_URL } from "./geminiAiApi";

const ai = new GoogleGenAI({
    apiKey: GOOGLE_AI_API_URL,
});

export default ai