import Card from "../../components/ui/card";

export default function Layout({ children }) {
  return (
    <Card>
      <h3 className="font-bold text-2xl">Bildirimler</h3>
      <p>Bildirimler burada görüntülenecek</p>
      {children}
    </Card>
  );
}
