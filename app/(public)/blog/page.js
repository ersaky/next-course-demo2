"use client";
import { use } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/providers/theme";

export default function Blog({ searchParams }) {
  const theme = useTheme();
  console.log(theme);
  const { lang } = use(searchParams);
  const router = useRouter();
  let pageTitle = "Blog Sayfam";
  if (lang === "en") {
    pageTitle = "My Blog Page";
  }
  const handleclick = () => {
    router.push("/hakkinda");
  };
  return (
    <div>
      <h1 style={{ color: theme.colors.secondary }}>{pageTitle}</h1>
      <button onClick={handleclick}>Yönlendir</button>
    </div>
  );
}
