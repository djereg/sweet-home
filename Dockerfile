FROM node:lts-slim as build

COPY . .
RUN yarn install --prod --no-progress --non-interactive
RUN yarn build

#----------------------------------------------------------

FROM nginx:alpine

COPY --from=build ./build/ /usr/share/nginx/html/
