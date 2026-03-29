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

## Project Structure <br>
 attendance-app/<br>
 │<br>
 ├── backend/ # Backend server (Node.js)<br>
 │ ├── server.js<br>
 │ ├── package.json<br>
 │ ├── Dockerfile<br>
 │ └── index.html<br>
 │<br>
 ├── frontend/ # Frontend UI<br>
 │ └── index.html<br>
 │<br>
 ├── k8s/ # Kubernetes configuration files<br>
 │ ├── backend-deployment.yaml<br>
 │ ├── backend-service.yaml<br>
 │ ├── mongo-deployment.yaml<br>
 │ └── mongo-service.yaml<br>
 │<br>
 ├── docker-compose.yml<br>
 └── README.md<br>


---


---

## Docker Setup

- **Build Docker Image:** docker build -t attendance-app .
- **Run Containers:** docker-compose up

## Kubernetes Setup
- **Start Minikube:** minikube start
- **Check Running Pods:** kubectl get pods
- **Access Application:** minikube service backend-service

## Learning Outcomes
- Docker containerization
- Kubernetes deployment
- Backend + frontend integration
- Working with MongoDB
- Debugging container networking
