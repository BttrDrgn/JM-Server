@echo off

rem Start MonogDB if not already started
net start MongoDB

rem npx runs packages if they exists and installs and runs if they do not exist
rem pm2 info will return info if the process is running
rem if not running, start, else just print info
npx pm2 info jm-server || npx pm2 start app.js --name jm-server