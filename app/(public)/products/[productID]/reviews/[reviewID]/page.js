import { notFound, redirect } from "next/navigation";

export default async function ReviewDetail({ params }) {
  const { reviewID, productID } = await params;
  if (reviewID && reviewID > 1000) {
    //notFound();
    redirect("/products");
  }
  return (
    <div>
      <h1>Product : {productID}</h1>
      <h2>Review : {reviewID}</h2>
    </div>
  );
}
