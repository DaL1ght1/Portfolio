#!/bin/bash

echo "🔍 Testing Production Build..."
echo ""

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out

# Build for production
echo "🏗️  Building for production..."
NODE_ENV=production npm run build

# Check if out directory was created
if [ -d "out" ]; then
    echo "✅ Build successful! Output directory created."
    echo ""
    
    # Check for images in out directory
    echo "🖼️  Checking for images in build output..."
    if [ -d "out/Portfolio" ]; then
        echo "✅ Found /Portfolio directory (basePath applied)"
        ls -la out/Portfolio/*.jpg 2>/dev/null && echo "✅ Images found in out/Portfolio/" || echo "⚠️  No .jpg images in out/Portfolio/"
    else
        echo "⚠️  No /Portfolio directory found"
        ls -la out/*.jpg 2>/dev/null && echo "✅ Images found in out/" || echo "⚠️  No .jpg images in out/"
    fi
    
    echo ""
    echo "📁 Build output structure:"
    ls -la out/ | head -20
    
    echo ""
    echo "🚀 To test locally, run:"
    echo "   npx serve out"
    echo ""
    echo "Then visit: http://localhost:3000/Portfolio"
else
    echo "❌ Build failed! No output directory created."
    exit 1
fi
