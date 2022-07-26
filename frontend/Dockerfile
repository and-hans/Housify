FROM node:18.6-buster-slim

WORKDIR /app

# copies package and package-lock
COPY package*.json ./

RUN npm install --silent

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm" , "start"]

# docker build -f Dockerfile -t client .
# docker run -it -p 3000:3000 client
