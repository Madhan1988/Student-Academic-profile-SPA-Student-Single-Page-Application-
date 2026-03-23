# Student-Academic-profile-SPA-Student-Single-Page-Application-

🎓 Student SPA – MEAN Stack Project

A Student Single Page Application (SPA) developed using Angular (Frontend) and Node.js + Express (Backend) as part of MEAN Stack Practical.

This project demonstrates routing, component-based architecture, modern UI design, and backend API integration.

📌 Project Overview

The Student SPA is a portfolio-style web application that includes:

Home page with introduction
About page with academic & career details
Skills page with animated skill progress
Contact page with form + backend integration

The application follows Single Page Application (SPA) principles, ensuring smooth navigation without page reloads.

🛠️ Tech Stack
Frontend
Angular (Standalone Components)
HTML5
CSS3 (Modern UI with gradients & animations)
TypeScript
Backend
Node.js
Express.js
REST API
CORS & Body Parser
📂 Project Structure
student-spa/
│
├── src/
│   └── app/
│       ├── home/
│       ├── about/
│       ├── skills/
│       ├── contact/
│       ├── app.routes.ts
│       ├── app.ts
│       ├── app.html
│       └── app.css
│
├── backend/
│   ├── server.js
│   └── package.json
│
├── angular.json
├── package.json
└── README.md
✨ Features
✔ Modern & attractive UI
✔ Angular routing (Home, About, Skills, Contact)
✔ Responsive design
✔ Animated skill progress bars
✔ Contact form with backend API
✔ RESTful backend using Express
✔ CORS enabled for frontend-backend communication
▶️ How to Run the Project
1️⃣ Clone Repository
git clone https://github.com/your-username/student-spa.git
cd student-spa
2️⃣ Run Backend Server
cd backend
npm install
npm start

Backend runs at:

http://localhost:3000
3️⃣ Run Angular Frontend
cd ..
npm install
ng serve --no-ssr

Frontend runs at:

http://localhost:4200
📡 API Details
POST /contact

Used to receive contact form data.

Request Body:

{
  "name": "User Name",
  "email": "user@email.com",
  "message": "Message text"
}

Response:

{
  "status": "success",
  "message": "Contact details received successfully"
}
🎯 Learning Outcomes
Understanding Angular standalone components
Implementing SPA routing
Designing modern UI using CSS
Creating REST APIs using Express
Connecting frontend with backend
Handling HTTP POST requests
🚀 Future Enhancements
MongoDB integration for data storage
Authentication & login system
Admin dashboard
Form validation with backend
Deployment on cloud platforms
