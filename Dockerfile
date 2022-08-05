#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:latest

WORKDIR /fenrir

COPY package.json .
COPY tsconfig.json .
COPY cypress.config.ts .
COPY /cypress .
COPY makefile .

RUN npm install -g yarn
RUN yarn install

CMD tail -f /dev/null
