@echo off
echo ===================================================
echo   มุ่งเรียน - Starting Web Server...
echo ===================================================
echo.
echo [1/2] Opening default web browser...
start "" "http://localhost:5500"
echo.
echo [2/2] Starting Python HTTP Server on port 5500...
echo (Keep this window open while using the website. Press Ctrl+C to stop)
echo.
python -m http.server 5500

