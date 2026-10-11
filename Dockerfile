FROM node:20-alpine
WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY src ./src

# copy scramjet bundle from node_modules into static so it's served
RUN mkdir -p src/static/scramjet && \
    cp node_modules/@mercuryworkshop/scramjet/dist/* src/static/scramjet/ 2>/dev/null || true

EXPOSE 8080
CMD ["node", "src/server.js"]