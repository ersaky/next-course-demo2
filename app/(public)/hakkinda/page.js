export const metadata = {
  title: "Hakkında",
  description: "Açıklama",
};

export default async function Hakkinda({ searchParams }) {
  const { lang } = await searchParams;

  let pageTitle = "Hakkında";
  if (lang === "en") {
    pageTitle = "About";
  }
  return <h1 className="text-3xl">{pageTitle}</h1>;
}
