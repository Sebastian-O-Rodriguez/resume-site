#!/usr/bin/env bash
# Build public/resume.pdf from content/resume/resume.md
# Pipeline: pandoc (md -> standalone HTML, -H injects CSS) -> weasyprint (HTML -> PDF)
# Prereqs: brew install pandoc weasyprint
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
HTML="$(mktemp /tmp/resume.XXXXXX.html)"

pandoc "$ROOT/content/resume/resume.md" -f gfm -t html5 -s -H "$ROOT/scripts/resume.css" -o "$HTML"
weasyprint "$HTML" "$ROOT/public/resume.pdf"

rm -f "$HTML"
echo "wrote public/resume.pdf"