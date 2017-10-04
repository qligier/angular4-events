#!/usr/bin/env bash

# Build project
npm run build

echo "====== PUBLISHING: angular4-events ====="
npm publish ./dist --access public
echo "====== PUBLISHED: angular4-events ====="
