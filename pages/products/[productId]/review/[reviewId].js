import { useRouter } from "next/router"


export default function Review() {

  const router = useRouter();
  console.log(router);
  const { productId, reviewId } = router.query;
  
  return (
    <>
      <h2>Review { reviewId } for product { productId }</h2>
    </>
  )
}