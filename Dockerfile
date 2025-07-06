FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run generate:openapi

EXPOSE 3000

CMD ["npm", "run", "start-server"]
