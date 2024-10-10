FROM node:20.8.0

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and lock file first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app files
COPY . .

# Set environment to production
ENV NODE_ENV=production

# Build the app for SSR production
RUN npm run build

# Expose the desired port
EXPOSE 3000

# Run the SSR server in production mode
# Start the Nuxt server in production mode using the correct command
CMD ["node", ".output/server/index.mjs"]
