export default function Card({ children }) {
  return (
    <div className="border p-4 border-r-2 border-black rounded-2xl">
      {children}
    </div>
  );
}
