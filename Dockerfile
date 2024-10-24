# ┌───────────────────────────────┐
# │ Stage 1: Install Dependencies │
# └───────────────────────────────┘
FROM node:18-alpine AS deps

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --silent

# ┌────────────────────────────────┐
# │ Stage 2: Build the Application │
# └────────────────────────────────┘
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# ┌───────────────────────────────┐
# │ Stage 3: Production Image     │
# └───────────────────────────────┘
FROM node:18-alpine AS runner

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Set working directory
WORKDIR /app

# Copy built files from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]




# 
# ┌─────────────────────────────┐
# # │ Stage 1: Install Dependencies│
# # └─────────────────────────────┘
# FROM node:18-alpine AS deps

# # Set working directory
# WORKDIR /app

# # Copy package.json and package-lock.json (or yarn.lock)
# COPY package.json package-lock.json* ./

# # Install dependencies
# RUN npm ci --silent

# # ┌─────────────────────────────┐
# # │ Stage 2: Build the Application│
# # └─────────────────────────────┘
# FROM node:18-alpine AS builder

# # Set working directory
# WORKDIR /app

# # Copy dependencies from deps stage
# COPY --from=deps /app/node_modules ./node_modules

# # Copy the rest of the application code
# COPY . .

# # Build the Next.js application
# RUN npm run build

# # ┌─────────────────────────────┐
# # │ Stage 3: Production Image    │
# # └─────────────────────────────┘
# FROM node:18-alpine AS runner

# # Set environment variables
# ENV NODE_ENV=production
# ENV PORT=3000

# # Set working directory
# WORKDIR /app

# # Copy built files from builder stage
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/next.config.mjs ./next.config.mjs

# # Copy node_modules from deps stage
# COPY --from=deps /app/node_modules ./node_modules

# # Expose the port the app runs on
# EXPOSE 3000

# # Start the Next.js application
# CMD ["npm", "start"]
