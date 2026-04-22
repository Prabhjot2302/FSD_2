# Docker Setup Guide for CI/CD

## Overview
This guide explains the Docker configuration for the FSD-2 backend application, optimized for CI/CD pipelines.

## 📋 Files

### `Dockerfile`
Production-ready multi-stage Dockerfile with:
- **Multi-stage build**: Reduces final image size by ~50%
- **Security**: Non-root user (appuser)
- **Performance**: Optimized gunicorn configuration with 4 workers
- **Health checks**: Built-in container health monitoring
- **Signal handling**: Proper graceful shutdown with exec form

### `docker-compose.yml`
Local development and testing configuration including:
- Backend service on port 5000
- Environment variable management
- Health checks
- Volume mounts for development

### `.github/workflows/docker-build.yml`
Automated CI/CD pipeline with:
- **Build & Test**: Builds image and runs pytest with coverage
- **Security Scan**: Trivy vulnerability scanning
- **Registry Push**: Pushes to Docker Hub on main branch push

## 🚀 Quick Start

### Local Development
```bash
# Build and run locally
docker-compose up -d

# View logs
docker-compose logs -f backend

# Stop containers
docker-compose down
```

### Manual Docker Build
```bash
# Build the image
docker build -t fsd-backend:latest ./Exp-20/backend

# Run the container
docker run -p 5000:5000 --env-file .env fsd-backend:latest

# Test the container
curl http://localhost:5000/
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the backend directory:
```env
FLASK_ENV=production
DATABASE_URL=mysql+pymysql://user:password@localhost/dbname
CORS_ORIGINS=http://localhost:3000
```

### Docker Build Arguments
You can customize the build with build arguments:
```bash
docker build --build-arg PYTHON_VERSION=3.10 -t fsd-backend:latest .
```

## 📊 Image Specifications
- **Base Image**: python:3.10-slim
- **Final Size**: ~200MB (optimized)
- **Exposed Port**: 5000
- **Health Check**: HTTP GET to / every 30s

## 🔐 Security Features
- Non-root user execution
- Multi-stage build reduces attack surface
- Vulnerable dependency scanning in CI/CD
- No secrets stored in image

## 📈 Performance
- **Worker Configuration**: 4 workers with 2 threads each
- **Worker Class**: gthread (for async operations)
- **Memory**: Uses /dev/shm for worker temp directory
- **Logging**: Structured access and error logs

## 🐛 Health Checks
The container includes a health check that:
- Runs every 30 seconds
- Times out after 3 seconds
- Retries up to 3 times
- Waits 5 seconds before first check

Check health status:
```bash
docker ps  # Look for "healthy" or "unhealthy" status
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow
The `.github/workflows/docker-build.yml` file includes:

1. **On Push/PR**: Builds image and runs tests
2. **Security**: Scans with Trivy
3. **Push to Registry**: On main branch, pushes to Docker Hub

### Required Secrets
Configure these in GitHub repository settings:
- `DOCKER_USERNAME`: Your Docker Hub username
- `DOCKER_PASSWORD`: Your Docker Hub access token

### Workflow Triggers
- Pushes to `main` and `develop` branches
- Pull requests to `main` and `develop` branches
- Changes in `Exp-20/backend/**` directory

## 📝 deployment
```bash
# Using docker-compose in production
docker-compose -f docker-compose.yml up -d

# Using plain Docker with environment variables
docker run -d \
  --name backend \
  --env-file .env \
  -p 5000:5000 \
  --restart unless-stopped \
  fsd-backend:latest
```

## 🛠️ Troubleshooting

### Container exits immediately
- Check logs: `docker logs container_id`
- Verify environment variables are set
- Ensure database connection is available

### Port already in use
```bash
# Find process using port 5000
netstat -tulpn | grep 5000

# Change port in docker-compose.yml or run command
docker run -p 8000:5000 fsd-backend:latest
```

### Build failures
- Clear build cache: `docker build --no-cache -t fsd-backend:latest .`
- Check requirements.txt for dependency issues
- Verify Python 3.10 compatibility

## 📚 References
- [Docker Documentation](https://docs.docker.com/)
- [Flask Deployment Guide](https://flask.palletsprojects.com/deployment/)
- [Gunicorn Documentation](https://gunicorn.org/)
- [GitHub Actions Docker](https://github.com/features/actions)
