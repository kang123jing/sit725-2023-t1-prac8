FROM node:16-alpine
WORKDIR /app
COPY . .
EXPOSE 8080
RUN npm install
CMD ["npm", "start"]
FROM ubuntu:latest
CMD echo "Hello, World!"
