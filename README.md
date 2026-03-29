# Student Attendance App (Docker + Kubernetes)

---

## Project Overview

This is a full-stack **Student Attendance Application** used to mark and track student attendance.

- **Backend:** Node.js + Express  
- **Database:** MongoDB  
- **Containerization:** Docker  
- **Deployment:** Kubernetes (Minikube)  
- **Frontend:** HTML, CSS, JavaScript  

---

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **DevOps:** Docker, Kubernetes  

---

## Features

- Mark student attendance  
- View attendance records  
- Store data in MongoDB  
- Simple frontend interface  
- Fully Dockerized  
- Kubernetes deployment support  

---

## Project Structure
attendance-app/
│
├── backend/ # Backend server (Node.js)
│ ├── server.js
│ ├── package.json
│ ├── Dockerfile
│ └── index.html
│
├── frontend/ # Frontend UI
│ └── index.html
│
├── k8s/ # Kubernetes configuration files
│ ├── backend-deployment.yaml
│ ├── backend-service.yaml
│ ├── mongo-deployment.yaml
│ └── mongo-service.yaml
│
├── docker-compose.yml
└── README.md


---


---

## Docker Setup

Build Docker Image: docker build -t attendance-app .
Run Containers: docker-compose up

## Kubernetes Setup
Start Minikube:minikube start
Check Running Pods:kubectl get pods
Access Application:minikube service backend-service

## Learning Outcomes
Docker containerization
Kubernetes deployment
Backend + frontend integration
Working with MongoDB
Debugging container networking
