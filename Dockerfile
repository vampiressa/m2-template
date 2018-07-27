# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:latest as node
EXPOSE 80
WORKDIR /app
WORKDIR /app/dist/M2/


COPY ./ /app/
RUN npm install


RUN npm run build --prod
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist/M2/ /var/www
COPY nginx.conf /etc/nginx/conf.d/default.conf
