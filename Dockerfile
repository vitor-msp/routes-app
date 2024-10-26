FROM node:18.17 AS builder
WORKDIR /usr/routes-app
COPY package.json .
COPY tsconfig.json .
COPY public ./public
COPY src ./src
RUN npm install
RUN npm run build

FROM nginx:1.21.0-alpine
ENV NODE_ENV production
COPY --from=builder /usr/routes-app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]