FROM node:8-alpine as builder
WORKDIR /usr/src/app
RUN npm i -g @angular/cli
COPY package.json package.json
RUN npm install --silent
COPY . /usr/src/app
#RUN npm rebuild node-sass
#RUN npm install -g @angular/cli
#WORKDIR /src/app/docrestaurant
#COPY dist /src/app/docrestaurant
#COPY deploy-package.json /src/app/docrestaurant/package.json
#COPY deploy-server.js /src/app/docrestaurant/deploy-server.js
#WORKDIR /src/app/docrestaurant
#RUN npm i -g cordova
#RUN npm i -g ionic@latest && ionic --no-interactive config set -g daemon.updates false
#RUN npm rebuild node-sass
#RUN npm i -g @angular/cli@1.6.1
EXPOSE 4200
CMD [ "node", "deploy-server"]
