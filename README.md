# SniperThink Interactive Strategy Flow

A production-ready interactive frontend section showcasing SniperThink's strategy methodology with smooth scroll-based animations and user engagement features.

## Features

✅ **4 Interactive Strategy Steps** with unique animations  
✅ **Scroll-based Progress Tracking** with visual indicators  
✅ **User Interactions** (hover effects, click to expand)  
✅ **Backend Integration** with loading/error states  
✅ **Fully Responsive** (Desktop & Mobile optimized)  
✅ **Clean Component Architecture**  
✅ **Performance Optimized** (no scroll lag)

## Tech Stack

### Frontend
- React 19 (Functional Components + Hooks)
- Framer Motion (Animations)
- Axios (API calls)
- Tailwind CSS (Styling)
- Vite (Build tool)

### Backend
- Node.js + Express
- CORS enabled
- In-memory data storage

## Project Structure

```
sniperthink-assignment/
├── backend/
│   ├── server.js           # Express server with /api/interest endpoint
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ResponsiveStrategyFlow.jsx  # Main orchestrator
    │   │   ├── StrategyStep.jsx            # Desktop step component
    │   │   ├── MobileStrategyStep.jsx      # Mobile step component
    │   │   ├── InterestModal.jsx           # Form modal
    │   │   └── ProgressIndicator.jsx       # Progress bar
    │   ├── data/
    │   │   └── strategyData.js             # Strategy steps data
    │   ├── hooks/
    │   │   └── useScrollProgress.js        # Scroll tracking hook
    │   ├── services/
    │   │   └── api.js                      # API service layer
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    └── package.json
```

## Setup & Installation

### 1. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 2. Run the Application

**Terminal 1 - Start Backend:**
```bash
cd backend
npm start
```
Server runs on `http://localhost:5000`

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm run dev
```
Frontend runs on `http://localhost:5173`

### 3. Open in Browser

Navigate to `http://localhost:5173`

## Key Features Explained

### 1. Unique Animations Per Step
- **Step 1-2**: Slide from left/right with 3D rotation
- **Step 3-4**: Alternate direction with spring animations
- **Icons**: Rotate and scale with spring physics
- **Details**: Staggered fade-in on expand

### 2. Scroll-Based Interactions
- Progress bar at top tracks scroll position
- Step indicators update based on viewport position
- Smooth transitions between steps

### 3. User Action Responses
- **Hover**: Cards lift up, icons rotate 360°
- **Click**: Expand/collapse details with smooth height animation
- **Button**: Scale effect on press

### 4. Backend Integration
- Form validation (name, email, step)
- Loading spinner during submission
- Success/error feedback messages
- Auto-close on success

### 5. Responsive Design
- Desktop: Side-by-side layout with center timeline
- Mobile: Stacked cards with optimized spacing
- Adaptive text sizes and touch-friendly buttons

## API Endpoint

### POST /api/interest

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "selectedStep": "Discovery & Analysis"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Thank you for your interest! We will contact you soon.",
  "data": {
    "id": 1234567890,
    "name": "John Doe",
    "email": "john@example.com",
    "selectedStep": "Discovery & Analysis",
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Invalid email format"
}
```

## Performance Optimizations

- Passive scroll listeners
- Viewport-based animation triggers (once: true)
- Debounced resize handlers
- Optimized re-renders with proper state management
- CSS transforms for smooth animations

## Code Quality

- Clean separation of concerns
- Reusable components
- Custom hooks for shared logic
- Service layer for API calls
- Structured data source
- Proper error handling
- Loading states

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Add database integration (MongoDB/PostgreSQL)
- Implement email notifications
- Add analytics tracking
- Create admin dashboard
- Add more animation variants
