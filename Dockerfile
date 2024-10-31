# Stage 1: Build
# Use an official Node.js runtime as a base image for building
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's files to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Production
# Use a smaller base image for serving the built app
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the built assets from the previous stage
COPY --from=builder /app/ ./

# Install only production dependencies
RUN npm install --production

# Expose the Next.js default port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
