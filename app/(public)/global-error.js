"use client";

export default function GlobalError({ error }) {
  return (
    <html>
      <body>
        <h1 className="text-red-600 text-3xl">
          Uygulama Genelinde bir Hata oluştu!
        </h1>
        <p>{error.message}</p>
      </body>
    </html>
  );
}
