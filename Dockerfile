FROM node:alpine
LABEL authors="Alex Kern <alex@kern.io>, Luc Bourdot <luc.bourdot@ac-dijon.fr"
 
COPY . ./
RUN npm install && npm run build

ENV NODE_ENV production
EXPOSE 80
CMD node ./dist/index.js
