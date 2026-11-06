#!/bin/bash
set -e

echo "🧹 Cleaning previous builds..."
rm -rf .next out

echo "🏗️  Building for production..."
NODE_ENV=production bun run build

if [ ! -d "out" ]; then
    echo "❌ Build failed! No output directory created."
    exit 1
fi

echo "✅ Build successful!"
ls out/*.jpg >/dev/null 2>&1 && echo "✅ Images copied to out/" || echo "⚠️  No .jpg images in out/"

echo ""
echo "🚀 To preview locally:  bun run start"
echo "   then visit http://localhost:3000/Portfolio/"
