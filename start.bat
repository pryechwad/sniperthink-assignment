@echo off
echo Starting SniperThink Assignment...
echo.

echo [1/2] Starting Backend Server...
start cmd /k "cd backend && npm start"

timeout /t 3 /nobreak > nul

echo [2/2] Starting Frontend Development Server...
start cmd /k "cd frontend && npm run dev"

echo.
echo Both servers are starting in separate windows.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo.
pause
