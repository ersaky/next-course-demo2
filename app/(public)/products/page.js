import Link from "next/link";

const productList = [
  {
    id: 1,
    name: "Samsung",
    url: "samsung",
  },
  {
    id: 2,
    name: "Macbook Pro",
    url: "macbook-pro",
  },
  {
    id: 3,
    name: "Lenovo",
    url: "lenovo",
  },
  {
    id: 4,
    name: "Asus",
    url: "asus",
  },
];

export default async function Products() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("gecikme");
    }, 2000);
  });
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {productList.map((product) => {
          return (
            <li key={product.id}>
              <h2 className="text-lg">
                <Link href={`/products/${product.url}`}>{product.name}</Link>
              </h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
