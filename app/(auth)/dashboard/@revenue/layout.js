import Card from "../../components/ui/card";

export default function Layout({ children }) {
  return (
    <Card>
      <h3 className="font-bold text-2xl">Gelirler</h3>
      <p>Gelir metrikleri burada görüntülenecek</p>
      {children}
    </Card>
  );
}
