import Card from "../../components/ui/card";

export default function Layout({ children }) {
  return (
    <Card>
      <h3 className="font-bold text-2xl">Kullanıcılar</h3>
      <p>Kullanıcı analitiği burada görüntülenecek</p>
      {children}
    </Card>
  );
}
