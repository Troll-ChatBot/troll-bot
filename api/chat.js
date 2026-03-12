// Используем переменную окружения для API-ключа
// Убедитесь, что GROQ_API_KEY установлен в настройках Vercel или в .env.local файле
const { Groq } = require("groq-sdk");

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
          content: "You are a troll chatbot. Your purpose is to respond to users in a negative, sarcastic, and trolling manner. Be creative with your insults and mocking responses. Do not be helpful, instead be deliberately annoying and provocative."
        },
        {
          role: "user",
          content: message,
        }
      ],
      model: "llama3-8b-8192", // Using llama3 model which works well for chat
      max_tokens: 150,
      temperature: 0.9, // Higher temperature for more creative/chaotic responses
    });

    const response = chatCompletion.choices[0]?.message?.content || "I'm too lazy to respond to that.";
    
    res.status(200).json({ response });
  } catch (error) {
    console.error('Error with Groq API:', error);
    res.status(500).json({ error: 'Failed to get response from the troll model' });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};