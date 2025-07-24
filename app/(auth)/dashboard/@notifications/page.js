export default async function Notifications() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div className="font-bold text-amber-700 mt-4">56</div>;
}
