# react-spa-project
reactでSPA機能を実装する

# はじめに

以下のツールを事前にインストールしてください

- Docker

## 開発の手順

ルートディレクトリで、下記コマンドを実行してください

```
docker compose build
```

ビルドが完了したら、下記コマンドでDockerコンテナを起動してください

```
docker compose up -d
```

コンテナを起動したら、下記コマンドを実行してアプリの依存関係をインストールしてください

```
docker compose exec front bash
cd my-app
npm install
```

依存関係のインストールが完了したら、下記コマンドを実行してreactアプリを起動してください
```
npm start
```

http://localhost:3000 にアクセスし、「トップページです。...」と表示されていることを確認してください。