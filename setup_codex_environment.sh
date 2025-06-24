#!/usr/bin/env bash
# Update the Codex environment configuration for this repository
set -euo pipefail

CODEX_DIR=".codex"
CONFIG_FILE="$CODEX_DIR/environment.json"

mkdir -p "$CODEX_DIR"

# Ensure Node 20 is active when generating the configuration
if command -v nvm >/dev/null 2>&1; then
  nvm install 20 >/dev/null
  nvm use 20 >/dev/null
fi

if command -v node >/dev/null 2>&1; then
  NODE_VERSION="$(node --version | sed 's/^v//')"
else
  NODE_VERSION="unknown"
fi

cat > "$CONFIG_FILE" <<JSON
{
  "node": "$NODE_VERSION",
  "packageManager": "npm"
}
JSON

echo "Installing npm dependencies..."
if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm is not installed. Please install npm and try again." >&2
  exit 1
fi
npm ci

echo "Running TypeScript checks..."
npm run typecheck

echo "Codex environment configuration updated in $CONFIG_FILE"
