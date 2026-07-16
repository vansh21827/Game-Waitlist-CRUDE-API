# 🎮 Game Waitlist CRUD API with Route Parameters

A RESTful backend application built with **Node.js** and **Express.js** to manage a game waitlist. The API supports complete CRUD operations using route parameters, follows REST architecture best practices, and includes input validation, XSS sanitization, centralized error handling, and standardized JSON responses. It is designed as a modular, secure, and scalable backend suitable for game centers, arcades, or any waitlist management system.

---

## 🚀 Live Demo

**Live API:**  
https://game-waitlist-crude-api.vercel.app/

---

## 📌 Features

- RESTful CRUD API
- Route Parameters
- Standardized JSON Responses
- Express Validator for Input Validation
- XSS Input Sanitization
- Helmet Security Middleware
- CORS Support
- Morgan HTTP Request Logger
- Global Error Handling
- 404 Route Handling
- Analytics Simulation Logging
- Modular Folder Structure
- Production Deployment on Vercel

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Express Validator
- Helmet
- Morgan
- CORS
- Dotenv
- JavaScript (ES6)

---

## 📁 Project Structure

```text
game-waitlist-api/
│
├── api/
│   └── index.js
│
├── src/
│   ├── controllers/
│   │   └── waitlistController.js
│   │
│   ├── data/
│   │   └── waitlist.js
│   │
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   ├── sanitize.js
│   │   └── validateRequest.js
│   │
│   ├── routes/
│   │   └── waitlistRoutes.js
│   │
│   ├── utils/
│   │   └── analytics.js
│   │
│   ├── app.js
│   └── server.js
│
├── .gitignore
├── package.json
├── vercel.json
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/game-waitlist-api.git
```

```bash
cd game-waitlist-api
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

## Run Production Server

```bash
npm start
```

Server starts on

```
http://localhost:5000
```

---

# 📡 API Endpoints

## Health Check

### GET /

Returns API status.

Response

```json
{
  "success": true,
  "message": "Game Waitlist API is running"
}
```

---

## Get All Players

### GET /api/waitlist

Response

```json
{
  "success": true,
  "message": "Waitlist retrieved successfully",
  "data": []
}
```

If no players exist

```json
{
  "success": true,
  "message": "No data found",
  "data": []
}
```

---

## Get Player By ID

### GET /api/waitlist/:id

Example

```
GET /api/waitlist/1
```

---

## Add Player

### POST /api/waitlist

Request Body

```json
{
  "playerName": "Vansh",
  "game": "FIFA 25",
  "partySize": 2
}
```

Success Response

```json
{
  "success": true,
  "message": "Player added successfully",
  "data": {
    "id": 1,
    "playerName": "Vansh",
    "game": "FIFA 25",
    "partySize": 2
  }
}
```

---

## Update Player

### PUT /api/waitlist/:id

Example

```json
{
  "playerName": "Vansh Saxena",
  "game": "Valorant",
  "partySize": 4
}
```

---

## Delete Player

### DELETE /api/waitlist/:id

Response

```json
{
  "success": true,
  "message": "Player deleted successfully"
}
```

---

# 📋 Validation Rules

- Player Name is required.
- Game Name is required.
- Party Size must be a positive integer.
- Invalid requests return HTTP 400.
- User input is sanitized before storing.

---

# 📊 HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Validation Error |
| 404 | Resource Not Found |
| 500 | Internal Server Error |

---

# 🔒 Security Features

- Helmet Security Headers
- Input Sanitization
- Express Validator
- Structured Error Handling
- No Hardcoded Secrets
- Environment Variable Support

---

# 📈 Telemetry Simulation

Every successful create, update, or delete operation logs an analytics message to the console.

Example

```
[Analytics] User interacted with Game Waitlist CRUD API with Route Parameters
```

---

# 🧪 Testing

The API has been tested using:

- Thunder Client
- REST API Requests
- Route Parameter Testing
- CRUD Operations
- Validation Scenarios
- Error Handling
- Empty State Responses

---

# REST Architecture

- GET
- POST
- PUT
- DELETE

---

# 📄 Definition of Done

- ✔ CRUD Operations Implemented
- ✔ Route Parameters Implemented
- ✔ Validation Implemented
- ✔ Error Handling Implemented
- ✔ Security Middleware Added
- ✔ Analytics Logging Added
- ✔ ESLint Passed
- ✔ No Hardcoded API Keys
- ✔ Deployed on Vercel

---

# 👨‍💻 Author

**Vansh Bansal**

---


