FROM node:latest as builder
RUN mkdir /usr/routes-app
WORKDIR /usr/routes-app
COPY package.json .
COPY tsconfig.json .
COPY public ./public
COPY src ./src
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]