FROM node:18

WORKDIR /app

ENV PORT=8080

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]