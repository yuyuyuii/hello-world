
export async function getServerSideProps(context) {
  /*
  contextには以下の感じのデータが入ってるから、queryかparamsを持ってくる{params} = contextってしたら、params = context.paramsってしなくてもいいみたい
  query: { category: 'sports' },
  resolvedUrl: '/news/sports',
  params: { category: 'sports' },
  locales: undefined,
  locale: undefined,
  defaultLocale: undefined
  */
  const { params } = context
  const { category } = params
  const res = await fetch(`http://localhost:4000/news?category=${category}`)
  const data = await res.json();
  return {
    props: {
      articles: data,
      category,
    },
  }
}

export default function ArticleListByCategory({ articles, category}) {
  return (
    <>
      <h1> showing news for category <i>{category}</i></h1>
      {
        articles.map((article => {
          return (
            <div key={article.id}>
              <h2>{article.id} {article.title}</h2>
              <p>{article.description}</p>
              <hr />
            </div>
          )
        }))
      }
    </>
  )
}