import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar.jsx";
import { PATH } from "../../path.js";

export default function AdminUserManagement() {
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "John Doe", email: "john@gmail.com", role: "User", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@gmail.com", role: "User", status: "Banned" },
    { id: 3, name: "Alex Kim", email: "alex@gmail.com", role: "Admin", status: "Active" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex">

     <AdminSidebar PATH={PATH} />

      {/* Main */}
      <main className="flex-1">

        {/* Header */}
        <div className="bg-white h-20 flex items-center justify-between px-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">User Management</h2>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users..."
            className="border px-4 py-2 rounded-xl w-64 focus:outline-none focus:ring-2 focus:ring-[#004953]"
          />
        </div>

        {/* Content */}
        <div className="p-6">

          {/* Mobile Cards */}
          <div className="grid gap-4 lg:hidden">
            {users.map((u) => (
              <div key={u.id} className="bg-white p-4 rounded-2xl shadow">
                <h3 className="font-bold">{u.name}</h3>
                <p className="text-sm text-gray-500">{u.email}</p>

                <div className="flex justify-between mt-3">
                  <span className="text-sm">{u.role}</span>

                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      u.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {u.status}
                  </span>
                </div>

                <div className="flex gap-2 mt-4">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block bg-white rounded-2xl shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr className="text-left">
                  <th className="p-4">ID</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {users
                  .filter((u) =>
                    u.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((u) => (
                    <tr key={u.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">{u.id}</td>
                      <td className="p-4 font-medium">{u.name}</td>
                      <td className="p-4">{u.email}</td>
                      <td className="p-4">{u.role}</td>

                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            u.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {u.status}
                        </span>
                      </td>

                      <td className="p-4 flex gap-2">
                        <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm">
                          Edit
                        </button>
                        <button className="px-3 py-1 bg-yellow-500 text-white rounded-lg text-sm">
                          Ban
                        </button>
                        <button className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}