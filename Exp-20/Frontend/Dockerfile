FROM node:20

WORKDIR /app

# Copy only package files
COPY package*.json ./

# Clean install with exact versions and no optional dependencies issues
RUN npm ci --verbose

# Copy the rest of the application
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
