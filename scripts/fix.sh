#!/usr/bin/env bash

./scripts/print_title.sh "Fixing Yahtzee's backend dependencies' problems..."
cd backend
npm audit fix

../scripts/print_title.sh "Fixing Yahtzee's frontend dependencies' problems..."
cd ../frontend
npm audit fix