# Use the official Node.js 18 Alpine image for smaller size and better security
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy package files
COPY package*.json ./

# Install dependencies using npm ci for faster, reliable, reproducible builds
RUN npm ci

# Install Angular CLI globally
RUN npm install -g @angular/cli@17

# Copy source code
COPY . .

# Build the Angular application for production
RUN ng build --configuration=production

# Expose port 4200
EXPOSE 4200

# Start the application
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]