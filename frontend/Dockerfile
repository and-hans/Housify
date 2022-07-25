FROM node:latest

WORKDIR /frontend

ENV PATH /app/node_modules/.bin:$PATH

# copies package and package-lock
COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]

# docker build -f Dockerfile -t client .
# docker run -it -p 3000:3000 client
