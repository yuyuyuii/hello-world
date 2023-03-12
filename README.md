参考
<https://www.youtube.com/watch?v=9P8mASSREYM&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=1>

サンプルでAPIの取得とかができるサイト
<https://jsonplaceholder.typicode.com/>

jsonserverインストール
npm install json-server

swrのインストール
npm install swr

swrはよくわからんけど、クライアントがデータ要求したときに
キャッシュでデータを返して、データベースはその後に返すようにしようぜって感じかなあ

dbのデータが変わったときに、swrを使えばページをリロードしなくても取得できるのかなあ
swrの方はキャッシュを使ってるからリロードもいらんし、表示が早いから良いよねって感じ