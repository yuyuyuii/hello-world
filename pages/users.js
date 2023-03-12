import User from "@/components/user";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  // 上まで書いたらreturnを書かずにconsole.log(data)でターミナル上にuser一覧が出力されるかを確認するといいかも。
  // ブラウザ上ではエラー吐いてるけど気にしない
  return {
    props: {
      users: data,
    },
  }
}

export default function Users({ users }) {
  return (
    <>
      <h1>ユーザー一覧</h1>
      <Link href={`/`} legacyBehavior>
        <a>Home</a>
      </Link>
      {/* {console.log(users)} */}
      {
        users.map((user) => {
          return (
            <ol key={user.id}>
              <li>{ user.id }</li>
              <User user={ user } />
            </ol>
          )
        })
      }
    </>
  )
}
