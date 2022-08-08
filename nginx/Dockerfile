FROM nginx:1.23.1-alpine

# delete default configs
RUN rm /etc/nginx/conf.d/default.conf
# default nginx config
COPY /conf.d/nginx.conf /etc/nginx/conf.d/default.conf

# 443 is the secure port
EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]