# react-quiz

**react-quiz** is a React-based quiz application that provides an interactive and engaging experience. It fetches questions from a local JSON server, tracks user progress, and provides feedback on correct or incorrect answers.

---

## 🧭 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [License](#license)

---

## 📌 About

**react-quiz** allows users to:

- Answer multiple-choice quiz questions.
- Track progress and score in real-time.
- Receive feedback on correct and incorrect answers.
- View a final score after completing the quiz.

---

## 🌟 Features

- **Question Management**: Fetches questions from a local JSON server.
- **Progress Tracking**: Displays current question number, score, and progress.
- **Feedback System**: Provides immediate feedback on the selected answers.
- **Final Score**: Displays a final score screen with percentage after quiz completion.
- **Loading & Error States**: Manages loading and error states for fetching quiz data.

---

## ⚙️ Tech Stack

- **Frontend**: React, React Router, React useReducer
- **Styling**: CSS Modules
- **Data Fetching**: JSON Server (mock backend)
- **Testing Libraries**: React Testing Library (optional for testing components)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn

### Installation

```bash
git clone https://github.com/yourusername/react-quiz.git
cd react-quiz
npm install
```

### Running the Development Server

```bash
npm run start
```

This command starts the development server. Open your browser and navigate to http://localhost:3000 to view the application.

### Running the Mock Backend

```bash
npm run server
```

This command starts the mock backend using JSON Server. The backend will be available at http://localhost:5000.

## 📄 License

This project is licensed under the [MIT LICENSE](./LICENSE).
