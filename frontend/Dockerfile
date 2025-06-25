FROM node:18 AS builder

WORKDIR /app
COPY ../frontend/ .

RUN npm install && npm run build

# Production stage
FROM node:18-slim AS production

# Serve built React app using a simple static server
RUN npm install -g serve

COPY --from=builder /app/dist /app/dist

WORKDIR /app

CMD ["serve", "-s", "dist", "-l", "3000"]
