FROM node:20.5

ENV PORT=5173

COPY . /frontend-react-js
WORKDIR /frontend-react-js
RUN npm install
EXPOSE ${PORT}
CMD ["npm", "run", "dev"]