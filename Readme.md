# 📊 Sales Leaderboard Backend - Express.js

A **simple, clean Express.js REST API** built in **JavaScript** that manages sales records and generates a ranked leaderboard.

## Project Overview
# 📊 Sales Leaderboard Backend

A professional Node.js & Express.js REST API designed for real-time sales tracking and performance ranking.

This system allows organizations to monitor sales agent activity by submitting sales records and automatically generating a ranked leaderboard based on performance.

## ✨ Key Features
* **Automated Data Aggregation**: The system automatically groups individual sales entries by agent name, calculating cumulative sales totals and total deal counts.
* **Multi-Tier Ranking Algorithm**: Implements a sophisticated ranking logic that prioritizes the highest total sales amount, followed by the total number of deals as a primary tie-breaker, and alphabetical sorting as a final tie-breaker.
* **Modular Architecture**: Follows a clean "Layered Architecture" (Routes, Controllers, Services, and Data layers) to ensure code maintainability and scalability.
* **Input Validation**: Features a dedicated validation utility to ensure data integrity for all incoming sales records, requiring non-empty strings for names and positive numeric values for sales figures.


##  Installation & Setup

### Prerequisites
- Node.js 14+ installed
- npm package manager

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start the Server

```bash
npm start
```

The server will start at `http://localhost:3000`

### Step 3: Test It!

Open your browser and go to:
```
http://localhost:3000
```

You should see the welcome message!

---
