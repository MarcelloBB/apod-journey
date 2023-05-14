FROM node:19.9.0 
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM nginx:1.23-alpine
COPY --from=0 /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
