# Troll Project

This is the Troll project repository - a chat interface with a troll AI model that responds to users in a negative, sarcastic, and trolling manner.

## Features
- Real-time chat interface with troll bot responses
- Dark theme UI with distinct styling for user and troll messages
- Typing indicators for better user experience
- Powered by Groq API with LLaMA 3 model

## Prerequisites
- Node.js installed on your system
- Vercel account and CLI installed globally
- Groq API key

## Setup Instructions
1. Clone this repository
2. Install dependencies: `npm install`
3. Install Vercel CLI globally: `npm install -g vercel`
4. Login to Vercel: `vercel login`
5. Set up your Groq API key as an environment variable: `GROQ_API_KEY`
6. Run the development server: `npm run dev`

## Environment Variables
- `GROQ_API_KEY`: Your API key from Groq to access the LLaMA 3 model

### Setting Environment Variables in Vercel
For production deployments, set the environment variable in Vercel dashboard:
1. Go to your project settings in Vercel
2. Navigate to "Environment Variables" 
3. Add `GROQ_API_KEY` with your actual API key value
4. Redeploy your project

### Setting Environment Variables Locally
Create a `.env.local` file in the root of your project:
```
GROQ_API_KEY=your_actual_api_key_here
```

## Security Notice
Never commit API keys directly to your code or version control. Always use environment variables to store sensitive information like API keys.

## Deployment
This project is configured for deployment on Vercel. Simply run `vercel` in the project directory to deploy.

## Technologies Used
- HTML/CSS/JavaScript (Frontend)
- Node.js (Backend)
- Groq API (AI Model)
- Vercel (Deployment)