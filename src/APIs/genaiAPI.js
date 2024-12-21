import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

export const generateTailwindConfig = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(`Generate a tailwind.config.js file with the following theme: ${prompt}`);
    return result.response.text().trim();
  } catch (error) {
    console.error("Error generating Tailwind config:", error);
    throw error;
  }
};