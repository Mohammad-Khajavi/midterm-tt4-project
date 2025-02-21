#!/bin/bash
set -e

export $(cat /app/.env | xargs)

service nginx restart

pm2 start /app/index.js --name api > /dev/null 2>&1

# "hack" to avoid container down
tail -f /dev/null