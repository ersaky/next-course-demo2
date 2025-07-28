export default async function UsersServer() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Users (Server-Side)
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
