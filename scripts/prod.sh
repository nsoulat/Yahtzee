#!/usr/bin/env bash

./scripts/print_title.sh "Fetching from GitHub..."
git fetch

./scripts/print_title.sh "Pulling main..."
git pull

./scripts/print_title.sh "Updating dependencies..."
npm run update

./scripts/print_title.sh "Killing the previous daemon..."
screen -X -S node quit

./scripts/print_title.sh "Building the frontend..."
npm run build

./scripts/print_title.sh "Launching the daemon..."
cd backend
/usr/bin/screen -d -m -S node node server.js 

../scripts/print_title.sh "All good, the server is online !"