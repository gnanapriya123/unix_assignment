Attendance App
A full-stack Attendance Management Application with a Node.js backend, frontend UI, and MongoDB database, containerized using Docker and deployable via Kubernetes.
ATTENDANCE-APP/
│
├── backend/                # Node.js backend server
│   ├── Dockerfile
│   ├── server.js
│   ├── package.json
│   └── index.html
│
├── frontend/               # Frontend UI
│   └── index.html
│
├── node_modules/
├── .gitignore
│
├── docker-compose.yml      # Docker setup
│
├── Kubernetes Files:
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── mongo-deployment.yaml
│   └── mongo-service.yaml
│
└── package-lock.json


---

## 🚀 Features

- Backend API using **Node.js & Express**
- MongoDB database integration
- Simple frontend UI
- Dockerized services
- Kubernetes deployment support

---

## ⚙️ Prerequisites

Make sure you have installed:

- Node.js
- Docker
- Docker Compose
- Kubernetes (kubectl + cluster like Minikube)

---

## 🧪 Running Locally (Without Docker)

### 1. Install Dependencies

```bash
cd backend
npm install

node server.js

frontend/index.html

docker-compose up --build
Backend → http://localhost:5000
MongoDB → Port 27017


