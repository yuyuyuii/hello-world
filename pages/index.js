import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>Next js Pre-rendering</h1>
      <Link href={`/users`} legacyBehavior>
        <a>user一覧</a>
      </Link>
      <Link href={`/posts`} legacyBehavior>
        <a>post一覧</a>
      </Link>
    </>
  )
}