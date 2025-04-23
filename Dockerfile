# Use official Node.js LTS image as base
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Copy public folder explicitly
COPY public ./public

# Build the React app
RUN npm run build

# Use nginx for serving the built app
FROM nginx:alpine

# Copy built files from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy public folder to nginx
COPY --from=builder /app/public /usr/share/nginx/html/public

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]