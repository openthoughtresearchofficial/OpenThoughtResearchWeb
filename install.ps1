# Clean Installation Script for Windows PowerShell

Write-Host "🧹 Cleaning up old files..." -ForegroundColor Yellow

# Remove node_modules if exists
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
    Write-Host "✓ Removed node_modules" -ForegroundColor Green
}

# Remove package-lock.json if exists
if (Test-Path "package-lock.json") {
    Remove-Item -Force "package-lock.json"
    Write-Host "✓ Removed package-lock.json" -ForegroundColor Green
}

# Remove .next if exists
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
    Write-Host "✓ Removed .next" -ForegroundColor Green
}

Write-Host ""
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow

# Install with legacy peer deps to handle version conflicts
npm install --legacy-peer-deps

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Installation successful!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🚀 You can now run:" -ForegroundColor Cyan
    Write-Host "   npm run dev    - Start development server" -ForegroundColor White
    Write-Host "   npm run build  - Build for production" -ForegroundColor White
    Write-Host "   npm run lint   - Run linting" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ Installation failed!" -ForegroundColor Red
    Write-Host "Please check the error messages above." -ForegroundColor Yellow
    Write-Host ""
}
