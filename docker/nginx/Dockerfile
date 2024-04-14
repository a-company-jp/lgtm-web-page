FROM nginx:1.25.3-alpine

COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
COPY docker/nginx/www /var/www
COPY build /var/www
CMD ["nginx", "-g", "daemon off;"]
