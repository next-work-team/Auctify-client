#!/bin/bash

# 에러 발생 시 즉시 스크립트 중단
set -e

echo "🔧 Installing dependencies..."
npm ci  # `npm install --frozen-lockfile`과 비슷한 역할

echo "⚙️ Building project..."
npm run build

echo "📂 Preparing output directory..."
mkdir -p output
cp -r .next output/

echo "✅ Build complete!"
