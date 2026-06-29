$content = Get-Content "$PSScriptRoot\data\projects.json" -Raw -Encoding UTF8
Set-Content "$PSScriptRoot\js\projects-data.js" -Value "// Auto-synced from data/projects.json`nconst PROJECTS_DATA = $content" -Encoding UTF8
Write-Host "Synced projects-data.js successfully."
