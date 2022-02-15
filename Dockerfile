FROM node:16.13 as build

WORKDIR /app
RUN git clone https://github.com/brentbroeckx/City-Influencers-Website

COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/app-challenge/ /usr/share/nginx/html