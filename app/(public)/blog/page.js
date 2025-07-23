"use client";
import { use } from "react";
import { useRouter } from "next/navigation";

export default function Blog({ searchParams }) {
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
      <h1>{pageTitle}</h1>
      <button onClick={handleclick}>Yönlendir</button>
    </div>
  );
}
