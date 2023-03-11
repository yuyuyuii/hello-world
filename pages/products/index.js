import Link from "next/link";

export default function Products({productId = 100}) {
  return (
    <div>
      <h1>Products Page</h1>
      <Link href={`/`} legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href={`/products/1`}>
        <h2>product 1</h2>    
      </Link>
      <Link href={`/products/2`}>
        <h2>product 2</h2>
      </Link>
      <Link href={`/products/3`}>
        <h2>product 3</h2>
      </Link>
      <Link href={`/products/${productId}`}>
        <h2>product { productId }</h2>
      </Link>

    </div>
  )
}