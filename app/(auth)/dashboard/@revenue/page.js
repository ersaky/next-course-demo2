export default async function Revenue() {
  await new Promise((resolve) => setTimeout(resolve, 2500));
  return <div className="font-bold text-green-700 mt-4">150.000 TL</div>;
}
