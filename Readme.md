# 📊 Sales Leaderboard Backend - Express.js

A **simple Express.js REST API** built in **JavaScript** that manages sales records and generates a ranked leaderboard.

---

## 🎯 Project Overview

This backend allows you to:

* ✅ Submit sales records via REST API
* ✅ Automatically aggregate multiple records per sales agent
* ✅ Generate a ranked leaderboard based on total sales and deals
* ✅ Handle tie-breaking consistently

---

## ⚡ Why Express.js?

* **Simple & Easy**: No complex decorators or TypeScript
* **Fast**: Lightweight and performant
* **Industry Standard**: Widely used in Node.js applications

---

## 📁 Project Structure

```
sales-leaderboard-backend/
├── src/
│   ├── server.js                    # Entry point
│   ├── routes/                      # Route definitions
│   │   ├── salesRoutes.js
│   │   └── leaderboardRoutes.js
│   ├── controllers/                 # Request handlers
│   │   ├── salesController.js
│   │   └── leaderboardController.js
│   ├── services/                    # Business logic
│   │   ├── salesService.js
│   │   └── leaderboardService.js
│   ├── utils/                       # Helper functions
│   │   ├── validation.js
│   │   └── ranking.js
│   └── data/                        # Data storage
│       └── salesStore.js
├── package.json
├── .gitignore
└── README.md
```

---

## 🔧 API Endpoints

### 1. Root Endpoint

**GET /**
**Response:**

```json
{
  "message": "Welcome to Sales Leaderboard API",
  "version": "1.0.0",
  "endpoints": {
    "addSale": "POST /sales",
    "getLeaderboard": "GET /leaderboard"
  }
}
```

---

### 2. Health Check

**GET /health**
**Response:**

```json
{
  "status": "OK",
  "timestamp": "2026-02-10T12:00:00.000Z"
}
```

---

### 3. Add Sale Record

**POST /sales**
**Request Body:**

```json
{
  "agentName": "Ram Sharma",
  "amountSold": 150000,
  "salesCount": 3
}
```

**Success Response (201):**

```json
{
  "success": true,
  "message": "Sale record created successfully",
  "data": {
    "agentName": "Ram Sharma",
    "amountSold": 150000,
    "salesCount": 3
  }
}
```

**Validation Error (400):**

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "agentName must be a non-empty string",
    "amountSold must be a positive number"
  ]
}
```

---

### 4. Get Leaderboard

**GET /leaderboard?page=1&limit=5**
**Query Parameters (optional):**

| Parameter | Type   | Default | Description                |
| --------- | ------ | ------- | -------------------------- |
| page      | number | 1       | Page number for pagination |
| limit     | number | 5       | Number of agents per page  |

**Success Response (200):**

```json
{
  "success": true,
  "message": "Leaderboard generated successfully",
  "count": 3,
  "data": [
    {
      "rank": 1,
      "agentName": "Ram Sharma",
      "totalSalesAmount": 450000,
      "totalDeals": 15
    },
    {
      "rank": 2,
      "agentName": "Sita Patel",
      "totalSalesAmount": 450000,
      "totalDeals": 10
    },
    {
      "rank": 3,
      "agentName": "Hari Thapa",
      "totalSalesAmount": 300000,
      "totalDeals": 8
    }
  ]
}
```

---

## 🏆 Ranking Rules

1. **Primary:** Highest `totalSalesAmount` (descending)
2. **Tie-breaker 1:** Highest `totalDeals` (descending)
3. **Tie-breaker 2:** Alphabetical order of `agentName`
4. **Sequential ranks:** No skipped ranks

---

## 🚀 Installation & Setup

### Prerequisites

* Node.js 14+
* npm

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Server

```bash
npm start
```

Server runs at: `http://localhost:3000`

---

## 🧪 Testing the API

### Using Postman / HTTP Clients

**Add Sale:**

* POST `http://localhost:3000/sales`
* Body (raw JSON):

```json
{
  "agentName": "Ram Sharma",
  "amountSold": 150000,
  "salesCount": 3
}
```

**Get Leaderboard:**

* GET `http://localhost:3000/leaderboard?page=1&limit=5`

---

## 🔄 Routes to Test Full Functionality

1. `GET /` → Welcome & endpoints check
2. `GET /health` → Health check
3. `POST /sales` → Add multiple sales
4. `GET /leaderboard` → Verify ranking & aggregation

---

## 🌐 Deployment

### Deploy to Render

1. Push your code to GitHub
2. Go to [Render.com](https://render.com)
3. New → **Web Service** → Connect GitHub repo
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Deploy!

---

### 📝 Notes

* Ensure **DATABASE_URL** and **PORT** are set in Render’s environment variables
* Make sure **sales table exists** in PostgreSQL with correct schema

---

## 📄 License

MIT

---

**Built with ❤️ using Express.js**
