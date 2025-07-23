export async function generateMetadata({ params }) {
  const { productID } = await params;

  return {
    title: productID + " Ürün Detayı",
    description: productID + " Ürün Detayı Açıklaması",
  };
}

export default async function ProductDetail({ params }) {
  const { productID } = await params;
  if (productID > 100) {
    throw new Error("Böyle bir ürün numarası bulunmamaktadır !");
  }
  return (
    <div>
      <h1>Product Detail {productID} </h1>
    </div>
  );
}
