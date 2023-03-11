import { useRouter } from "next/router"


export default function ProductDetail() {

  const router = useRouter();
  console.log(router);
  const { productId } = router.query;
  return (
    <>
      <h2>Details about product {productId }</h2>
    </>
  )
}