#!/usr/bin/env bash
# Update the Codex environment configuration for this repository
set -euo pipefail

CODEX_DIR=".codex"
CONFIG_FILE="$CODEX_DIR/environment.json"

mkdir -p "$CODEX_DIR"

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
npm ci

echo "Running TypeScript checks..."
npm run typecheck || true

echo "Codex environment configuration updated in $CONFIG_FILE"
