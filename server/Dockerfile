# Server (Node.js + Express) Dockerfile

# Use Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

# Install all dependencies
RUN yarn install

# Copy all project files to the container
COPY . .

# Create uploads directory
RUN mkdir -p uploads

# Expose the backend port 8000
EXPOSE 8000

# Run the backend server
CMD ["yarn", "start"]