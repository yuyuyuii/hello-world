import Link from "next/link"
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("aaaaaa"); 
    //handleClickを押したら/productに飛ばすこともできる
    // ユーザ登録が終わったらtopページに飛ばしたりとか
    router.push('/products');

  }

  return (
    <div>
      <h1>hello, world</h1>
      <Link href={`/blog`} legacyBehavior>
        <a>Blog</a>
      </Link>
      <Link href={`/products`} legacyBehavior>
        <a>Products</a>
      </Link>
      <button onClick={handleClick}>
        Press Order
      </button>
    </div>
  )
}
