# 🚀 Karam Industry Query Management System

Welcome to **Karam Industry Query Management System**, a powerful, intuitive platform designed to streamline customer query management! Whether you’re an end-user submitting a query or an admin handling them, our system ensures smooth and efficient query resolution.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 Project Overview

The **Karam Industry Query Management System** is a dynamic and user-friendly web application. It allows customers to easily submit inquiries and receive responses in an organized way, while admins can manage, respond to, and resolve these queries efficiently.

---

## ✨ Features

- **🔑 User Authentication**: Secure user registration and login.
- **📝 Query Submission**: Customers can submit new queries with real-time status tracking.
- **⚙️ Admin Dashboard**: Dedicated admin panel for managing and responding to queries.
- **🔄 Real-Time Updates**: Auto-updates on query status.
- **📱 Mobile Responsive**: Optimized for all screen sizes—desktop, tablet, and mobile.

---

## 💻 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (NoSQL)
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Vercel (Frontend), Heroku (Backend)
- **External APIs**: Unsplash API for dynamic images

---

## ⚙️ Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14.x or higher)
- **MongoDB** (local or cloud instance)
- **npm** or **yarn** (package managers)

### 🛠️ Setup Instructions

1. **Clone the repository:**

   git clone https://github.com/DevYameen/Karam_Query
   cd Karam_Query
   
3. **Install dependencies:**

### For the backend:
cd api
npm install

### For the frontend:
cd client
npm install

## Start the servers:

### For the backend:
cd api
npm start

### For the frontend:
cd client
npm start

## Now the app will be running on:
 - Frontend: http://localhost:3000
 - Backend: http://localhost:8080

# 🌍 Environment Variables

## Create .env files in both the frontend and backend directories to configure the app:

### Backend (backend/.env):
PORT=4001
MONGODB_URI=mongodb://localhost:27017/karam-query-db
JWT_SECRET=your_jwt_secret_key

### Frontend (frontend/.env):
REACT_APP_BACKEND_URL=http://localhost:4001

## Restart the server after setting environment variables to apply the changes.

# 🎮 Usage

## 🧑‍💻 User Login/Registration:
 Users can sign up with their email and password to create an account.
 After logging in, users can submit and track queries easily.

## 🔑 Admin Features:
 Admins can log in to the admin dashboard to manage, assign, and respond to user queries.
 The admin has full control over query statuses and user interactions.

## 📧 Query Management:
 - Users: Submit queries, receive responses, and track their status.
 - Admins: Manage, respond to, and resolve queries from the admin panel.

## 🖼️ Screenshots:
 ✨ Login Page
 💬 Query Dashboard
 (Screenshots of the dashboard, query submission, and more!)

## 🤝 Contributing

 We welcome contributions from the community! Here’s how you can contribute:

## Fork the repository.
 Create a new branch: git checkout -b feature-name.
 Make your changes and commit them: git commit -m "Add feature XYZ".
 Push to your branch: git push origin feature-name.
 Submit a pull request.
 We’ll review your changes and get them merged in!

## 🛡️ License
 This project is licensed under the MIT License. Check the LICENSE file for more details.

## 🙏 Thanks for using Karam Industry Query Management System!
 Enjoy the seamless experience and help us improve by contributing or reporting any issues. 💬

   
