FROM node:20.5

COPY . /backend-nest-js
WORKDIR /backend-nest-js
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start:dev"]