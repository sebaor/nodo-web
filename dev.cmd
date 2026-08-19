@echo off
rem Lanzador de desarrollo: agrega el Node portable al PATH y levanta Astro.
set "PATH=C:\Users\sebas\.local\node\node-v22.23.2-win-x64;%PATH%"
cd /d C:\Users\sebas\nodo-web
npm run dev
