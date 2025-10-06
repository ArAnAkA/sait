# Dockerfile — простой образ для статического сайта на nginx
FROM nginx:stable-alpine

LABEL maintainer="repo-owner@example.com"

# Очистим дефолтный сайт nginx, чтобы точно не было лишних файлов
RUN rm -rf /usr/share/nginx/html/*

# Копируем файлы сайта (index.html, *.html, css, js, images и т.д.)
COPY . /usr/share/nginx/html/

# Открываем порт 80
EXPOSE 80

# Запускаем nginx в форграунд режиме
CMD ["nginx", "-g", "daemon off;"]