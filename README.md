# 🏆 Leaderboad

A full-stack leaderboard application to track and display top users based on points earned. Built with **React**, **Node.js**, and **MongoDB**, the app provides real-time updates, intuitive UI, and backend APIs for managing users and scores.

---

## 🚀 Features

- 🌐 **Real-time Leaderboard**: Automatically updates user rankings.
- 🧠 **Points Management**: Easily add or update user points.
- 🎖️ **Top 3 Highlighting**: Emphasizes the top performers visually.
- 📦 **RESTful API** for user management and points tracking.

---

## 🛠️ Tech Stack

| Frontend   | Backend   | Database | Others          |
|------------|-----------|----------|-----------------|
| React.js   | Node.js   | MongoDB  | Express, Mongoose |
| Tailwind CSS |           |          | Axios, dotenv     |

---

## 📸 Preview

![Leaderboard UI](https://drive.google.com/uc?export=view&id=1ljr0h3IX29dFVFW8y1Snm3Yscx8RooLP)


## 📁 Folder Structure
Leaderboad/
├── client/ # Frontend (React)
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── App.jsx
│ └── main.jsx
├── backend/ # Backend (Node + Express)
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── server.js
├── .env
├── README.md
└── package.json


---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Leaderboad.git
cd Leaderboad


cd Backend
npm install
# Create .env file with MONGODB_URI and PORT
npm run dev

