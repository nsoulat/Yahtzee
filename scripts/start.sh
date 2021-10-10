#!/usr/bin/env bash

title="Launching the Yahtzee server..."
./scripts/print_title.sh "$title"

cd backend
node server.js