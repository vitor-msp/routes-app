FROM node:latest as builder
RUN mkdir /usr/routes-app
WORKDIR /usr/routes-app
COPY package.json .
COPY tsconfig.json .
COPY public ./public
COPY src ./src
RUN npm install
RUN npm run build

FROM node:latest
WORKDIR /usr/routes-app
COPY package.json .
COPY --from=builder /usr/routes-app/build ./build
RUN npm install --only=production
EXPOSE 3000
CMD ["npm", "run", "start"]