#!/usr/bin/env bash

./scripts/print_title.sh "Installing Yahtzee's backend dependencies..."
cd backend
npm install

../scripts/print_title.sh "Installing Yahtzee's frontend dependencies..."
cd ../frontend
npm install

printf "\nYou can run \`npm run fix\` if you'd like to fix backend and frontend vulnerabilities"