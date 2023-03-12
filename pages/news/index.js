
export async function getServerSideProps() {
  const res = await fetch('http://localhost:4000/news')
  const data = await res.json()

  return {
    props: {
      articles: data,
    },
  };
}


export default function NewsArticlesList({articles}) {
  return (
    <>
      <h1>ニュース記事一覧</h1>
      {articles.map((article => {
        return (
          <div key={article.id}>
            <h2>{article.id} {article.title} | { article.category}</h2>
          </div>
        )
      }))}
    </>
  )
}