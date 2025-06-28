# 🎓 EduMentor AI - Intelligent Personalized Learning Companion


## 🌟 Overview

EduMentor AI is an intelligent, adaptive learning platform that uses advanced AI to create personalized educational experiences. The platform combines Natural Language Processing, Machine Learning, and real-time analytics to adapt to each student's learning style, pace, and preferences.

## 🎯 Problem Statement

Traditional education follows a one-size-fits-all approach, leaving many students behind or unchallenged. Students struggle with:
- Different learning paces and styles
- Lack of personalized feedback  
- Difficulty identifying knowledge gaps
- Limited access to 24/7 educational support

## 💡 Solution

EduMentor AI democratizes personalized education through:
- **AI Learning Path Generator** - Custom curricula based on student goals
- **Intelligent Tutoring Chatbot** - 24/7 AI tutor with personalized guidance
- **Emotion-Aware Learning** - Adapts content based on engagement levels
- **Skill Gap Analysis** - Identifies and addresses knowledge gaps
- **Collaborative AI Matching** - Connects students for peer learning

## 🛠️ Tech Stack

### Frontend
- **React.js** - Component-based UI framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Socket.io** - Real-time communication

### AI/ML Integration
- **OpenAI GPT-4** - Conversational AI and content generation
- **TensorFlow.js** - Machine learning in the browser
- **Hugging Face** - Pre-trained NLP models
- **Python Flask** - AI model serving

### Deployment & Tools
- **Vercel** - Frontend deployment
- **Railway** - Backend deployment
- **Firebase Auth** - Authentication
- **Google Analytics** - Usage analytics

## ⚡ Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn
- MongoDB account
- OpenAI API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/edumentor-ai.git
cd edumentor-ai


![Image](https://github.com/user-attachments/assets/db51dcc0-8fba-469d-8d7b-72db180aa38d)



![Image](https://github.com/user-attachments/assets/335a982a-7bdb-493c-a17e-86ba164d35aa)



![Image](https://github.com/user-attachments/assets/0f4abdae-ff41-46fb-90aa-b700ef1763cc)



![Image](https://github.com/user-attachments/assets/c9af7951-3a50-4bff-966c-3111b3a5c919)



![Image](https://github.com/user-attachments/assets/080a4974-2c28-441a-906d-724f667cf199)



![Image](https://github.com/user-attachments/assets/1e5c73c7-8aad-45ae-955b-d51787444b63)















































































# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
