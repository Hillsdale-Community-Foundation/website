#!/usr/bin/env bash
# Build and run a Docker container for local development
set -e
IMAGE_NAME="hcf-website-dev"

echo "Checking for Docker..."
if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is required but not installed." >&2
  exit 1
fi

echo "Building development image..."
echo "Creating .dockerignore file..."
cat > .dockerignore <<'EOF'
.git/
node_modules/
*.log
Dockerfile
.dockerignore
EOF
docker build -t "$IMAGE_NAME" -f- . <<'DOCKER'
FROM node:20
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
DOCKER

echo "Starting development container..."
docker run --rm -it -p 3000:3000 -v "$(pwd)":/app -v hcf_node_modules:/app/node_modules "$IMAGE_NAME"

