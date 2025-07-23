"use client";

export default function ErrorBoundary({ error }) {
  return (
    <div>
      <h2>Hata Oluştu !</h2>
      <p>{error.message}</p>
    </div>
  );
}
