# RURA LP microCMS × Next.js

[site](https://timeleap-rura.com/)

## 機能

- 記事一覧
- カテゴリー別記事一覧
- 検索（未表示）
- パンくずリスト
- 記事詳細
- SNS シェアボタン

## 技術構成

- Next.js (SSG + SSR)
- microCMS (コンテンツ)
- Vercel (Hosting, API)

## microCMS の API スキーマ設定

本家 microCMS ブログの API スキーマと同じにしました。

### ブログ

endpoint: blog
type: リスト形式

| フィールド ID | 表示名     | 種類                        |
| ------------- | ---------- | --------------------------- |
| ogimage       | OGP 画像   | 画像                        |
| title         | タイトル   | テキストフィールド          |
| category      | カテゴリー | コンテンツ参照 - カテゴリー |
| postDate      | 公開日     | 日付                        |
| body          | 本文       | リッチエディタ              |
| description   | 概要       | テキストフィールド          |
| tag           | タグ       | 複数コンテンツ参照 - タグ   |

### カテゴリー

endpoint: categories
type: リスト形式

| フィールド ID | 表示名 | 種類               |
| ------------- | ------ | ------------------ |
| name          | 名前   | テキストフィールド |

### タグ

endpoint: tags
type: リスト形式

| フィールド ID | 表示名 | 種類               |
| ------------- | ------ | ------------------ |
| name          | 名前   | テキストフィールド |

## 環境変数

プロジェクトルートに`.env.local`ファイルを作成し、以下の項目を設定してください。

- MICROCMS_APIKEY（microCMS の API キー）
- SERVICE_ID（microCMS のサービス ID）
- NEXT_PUBLIC_BASEURL（ベースとなる URL、API Routes で使用します）
- NEXT_PUBLIC_GOOGLE_ANALYTICS_ID (Google Analytics の ID)

例:

```
MICROCMS_APIKEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
SERVICE_ID=your-service-id
NEXT_PUBLIC_BASEURL=hogehoge
GTM_ID=hogehoge
```

## 開発方法

```bash
# パッケージをインストール
$ npm install

# 開発サーバーを起動（localhost:3000）
$ npm rud dev
```
