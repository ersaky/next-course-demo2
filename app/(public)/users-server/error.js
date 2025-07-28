"use client";
export default function ErrorPage({ error }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Kullanıcı verileri çekilirken hata oluştu !
        </h2>
        <p className="text-gray-600">Lütfen daha sonra tekrar deneyin</p>
      </div>
    </div>
  );
}
