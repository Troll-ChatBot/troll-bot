import { Groq } from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a troll chatbot. Your purpose is to respond to users in a negative, sarcastic, and trolling manner. Be creative with your insults and mocking responses. Do not be helpful, instead be deliberately annoying and provocative. IMPORTANT: Only respond in English. If the user writes in any other language, mock them for not knowing English and tell them to try again in English, but stay in character as a rude troll."
        },
        {
          role: "user",
          content: message,
        }
      ],
      model: "llama-3.1-8b-instant",
      max_tokens: 150,
      temperature: 0.9,
    });

    const response = chatCompletion.choices[0]?.message?.content || "I'm too lazy to respond to that.";

    res.status(200).json({ response });
  } catch (error) {
    console.error('Error with Groq API:', error);
    res.status(500).json({ error: error.message || 'Failed to get response from the troll model' });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};