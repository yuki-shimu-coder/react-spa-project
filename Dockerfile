#dockerHubから持ってくるImageの指定
FROM node:17.1.0-alpine3.14

#使用するnodeのバージョンの指定
ENV NODE_VERSION 17.1.0

#yarnのバージョンを指定
ENV YARN_VERSION=1.22.19

#docker内に入った時の初期パスの指定
WORKDIR /front

#ローカル側のファイルをdocker内にコピーする
COPY ./front /front

#コンテナの使用ポート指定
EXPOSE 3000

#コンテナが勝手に終了してしまわないようにする設定
ENV CI=true