FROM node:18

WORKDIR /app

ENV PORT=3030

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3030

CMD ["node", "server.js"]