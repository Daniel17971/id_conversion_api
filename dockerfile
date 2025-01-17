FROM node:19.5.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080, MONGO_URI="mongodb://localhost:27017/test_songs"

EXPOSE 8080

CMD ["npm", "start"]