# Quick Start Guide

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn

## Installation Steps

### Step 1: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 2: Install Frontend Dependencies
```bash
cd frontend
npm install
```

## Running the Application

### Option 1: Using the Start Script (Windows)
Double-click `start.bat` in the root directory

### Option 2: Manual Start

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## Access the Application

Open your browser and navigate to:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Testing the Features

1. **Scroll Animation**: Scroll down to see steps animate into view
2. **Progress Bar**: Watch the top progress bar fill as you scroll
3. **Hover Effects**: Hover over step cards and icons
4. **Click to Expand**: Click any step card to reveal details
5. **Interest Form**: Click "I'm Interested" to open the modal
6. **Form Submission**: Fill out the form and submit

## Troubleshooting

### Port Already in Use
If port 5000 or 5173 is already in use:
- Backend: Change PORT in `backend/server.js`
- Frontend: Change port in `frontend/vite.config.js`

### CORS Issues
Ensure backend is running before frontend makes API calls

### Dependencies Not Found
Run `npm install` in both backend and frontend directories
