# 📝 Full-Stack To-Do App (React + FastAPI + SQLite)

A simple yet powerful **To-Do list application** built with a **FastAPI** backend and a **React (Vite)** frontend.  
It supports full **CRUD operations** — Create, Read, Update, Delete — with instant UI updates.

---

## 🚀 Features

- ✅ Add, edit, and delete tasks
- 🌀 Toggle completion status
- ⚡ Instant UI updates (no refresh needed)
- 🗄️ SQLite database via SQLModel ORM
- 🧩 REST API built with FastAPI
- 🔗 CORS enabled for cross-origin access
- 🧱 Modern React frontend (Vite setup)

---

## 📂 Project Structure

todo-fullstack/
├── backend/
│   ├── app/
│   │   ├── main.py          # FastAPI app with CRUD routes
│   │   └── models.py        # Todo model using SQLModel
│   ├── requirements.txt     # Backend dependencies
│   └── todos.db             # SQLite DB (auto-created)
│
├── frontend/
│   ├── index.html
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite config (auto-generated)
│   └── src/
│       ├── App.jsx          # Main React component
│       ├── main.jsx         # React entry point
│       ├── components/      # TodoList & TodoItem components
│       └── styles.css       # Minimal styling
│
└── README.md                # (You’re reading this!)

---

## 🖥️ Backend Setup (FastAPI)

### 1️⃣ Navigate to backend
```bash
cd backend

2️⃣ Create virtual environment
python -m venv .venv
source .venv/bin/activate

3️⃣ Install dependencies
pip install -r requirements.txt

4️⃣ Run the FastAPI server
uvicorn app.main:app --reload --port 8000

Open http://localhost:8000/docs to see auto-generated API documentation.

🌐 Frontend Setup (React + Vite)
1️⃣ Navigate to frontend
cd frontend

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev

By default, Vite serves the app at http://localhost:5173.

🧩 The frontend connects to the backend via the base URL set in src/App.jsx:
const API = 'http://localhost:8000'



🧪 Test the App


Open http://localhost:5173



