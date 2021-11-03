FROM node:16.13.0

ENV TZ=Asia/Tokyo
ENV PORT=80

RUN mkdir /app
WORKDIR /app

EXPOSE 80

RUN npm install -g typescript
CMD bash -c "npm install && tsc && npm run start"