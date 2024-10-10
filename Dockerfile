# Stage 1: Build the app
FROM node:20.8.0 as builder

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies for building the app
RUN npm ci --production=false

# Copy the rest of the application code
COPY . .

# Build the Nuxt app
RUN npm run build

# Stage 2: Create the final production image
FROM node:20.8.0-slim

WORKDIR /usr/src/app

# Copy only the production dependencies and the build artifacts
COPY package*.json ./
RUN npm ci --only=production

# Copy the built app from the builder stage
COPY --from=builder /usr/src/app/.output ./.output

# Expose the necessary port
EXPOSE 3000

# Run the app
CMD ["node", ".output/server/index.mjs"]
