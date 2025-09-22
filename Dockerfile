# Dockerfile - simple static site served by nginx
FROM nginx:alpine
COPY ./site /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
