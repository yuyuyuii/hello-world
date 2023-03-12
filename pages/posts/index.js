import Link from "next/link";

export async function getStaticProps() {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();

  return {
    props: {
      // データが100個あるけど、全部いらないので、最初の三つだけ取得
      posts: data,
    },
  };
}



export default function PostList({ posts }) {
  return (
    <>
      <h1>Post一覧</h1>
      {
        posts.map((post) => {
          return (
            <div key={post.id}>
              <Link href={`/posts/${post.id}`} passHref>
                <h2>{post.id} {post.title}</h2>              
              </Link>
              <hr />
            </div>
          )
        })
      }
    </>
  )
}