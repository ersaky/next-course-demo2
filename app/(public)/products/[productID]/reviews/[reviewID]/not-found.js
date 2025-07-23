"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const path = usePathname();
  const productID = path.split("/")[2];
  const reviewID = path.split("/")[4];
  console.log(productID);
  return (
    <div>
      <h1>
        {productID} Ürününe ait {reviewID} nolu Yorum bulunamadı !
      </h1>
    </div>
  );
}
