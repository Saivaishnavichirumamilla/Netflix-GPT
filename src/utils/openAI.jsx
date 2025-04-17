import OpenAI from "openai";

const openAI = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});

export default openAI;
