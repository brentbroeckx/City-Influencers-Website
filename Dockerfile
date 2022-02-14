FROM node:14.15 as build
RUN git clone https://github.com/brentbroeckx/City-Influencers-Website

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/app-challenge/ /usr/share/nginx/html