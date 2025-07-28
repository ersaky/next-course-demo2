"use client";
import { useState, useEffect } from "react";

export default function UsersClient() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Veri erişim hatası !");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message || "Bir hata oluştu");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Yükleniyor...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Users (Client-Side)
      </h1>
      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-1">
              <strong>Username : </strong>
              {user.username}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Email : </strong>
              {user.email}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Phone : </strong>
              {user.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
