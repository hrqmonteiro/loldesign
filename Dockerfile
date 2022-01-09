FROM node:11

WORKDIR /usr/src/app

COPY package.json .
COPY npm-shrinkwrap.json .

RUN npm install

COPY --chown=node:node . .

EXPOSE 3333

CMD [ "npm", "run", "dev" ]