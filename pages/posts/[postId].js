import { useRouter } from "next/router"

//親ページからの引数(postId)を取得するには子ページのgetStaticPropsの引数からpostIdを取得する必要がある
export async function getStaticProps(context) {
  const { params } = context
  //getStaticPathsで取得した{ postId: '1'}とかが入ってる
//  console.log(params);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}

// どのPostデータを取得したらいいかわからんからgetStaticPathsを定義してIDを指定してあげる
export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const post = await res.json();
  const paths = post.map((post => {
    return {
      params: {
        postId: `${post.id}`
      }
    }
  }))
  return {
      paths,// paths: paths,を省略して書けるみたい
      fallback: false
  }
}


//getStaticsPropsのreturnの値を引数に入れる
export default function Post({ post }) {
  
  return (
    <>
      {console.log(post)}
      <h1>Post詳細</h1>
      <h2>{post.id} {post.title}</h2>
      <p>{post.body}</p>
    </>
  )
}