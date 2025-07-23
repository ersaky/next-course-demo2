export default async function Docs({ params }) {
  const { xyz } = await params;
  if (xyz && xyz.length === 2) {
    return (
      <div>
        <h1>Documents</h1>
        <h2> Feature : {xyz[0]}</h2>
        <h2> Concept : {xyz[1]}</h2>
      </div>
    );
  }
  if (xyz && xyz.length === 1) {
    return (
      <div>
        <h1>Documents</h1>
        <h2> Feature : {xyz[0]}</h2>
      </div>
    );
  }
  return <h1>Documents</h1>;
}
