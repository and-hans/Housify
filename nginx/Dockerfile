FROM alpine:latest

RUN apk --update add nginx && \
    ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log && \
    mkdir /etc/nginx/sites-enabled/ && \
    mkdir -p /run/nginx && \
    rm -rf /etc/nginx/conf.d/default.conf && \
    rm -rf /var/cache/apk/*

# default nginx config
COPY conf.d/nginx.conf /etc/nginx/conf.d/default.conf

# 443 is the secure port
EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]