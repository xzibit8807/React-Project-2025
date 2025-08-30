FROM node:22

ENV PORT =3030

WORKDIR usr/src/app

COPY package.json ./

RUN npm install

EXPOSE 3030

CMD [ "npm", "run", "start" ]
