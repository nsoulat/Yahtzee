#!/usr/bin/env bash

./scripts/print_title.sh "Updating Yahtzee's backend dependencies..."
cd backend
npm ci

../scripts/print_title.sh "Updating Yahtzee's frontend dependencies..."
cd ../frontend
npm ci