import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar.jsx";
import { PATH } from "../../path.js";
import { useEffect } from "react";

export default function AdminRestaurantManagement() {
  const [search, setSearch] = useState("");

  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allrestaurants")
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 flex">

         <AdminSidebar PATH={PATH} />

      <main className="flex-1">

        <div className="bg-white h-20 flex items-center justify-between px-6 shadow-sm">
          <h2 className="text-xl font-bold">Restaurant Management</h2>

          <div className="flex gap-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004953]"
            />
            <button className="bg-[#004953] text-white px-4 py-2 rounded-xl">
              + Add
            </button>
          </div>
        </div>

        <div className="p-6">

          <div className="hidden lg:block bg-white rounded-2xl shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4">ID</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Owner</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {restaurants
                  .filter(r => r.full_name.toLowerCase().includes(search.toLowerCase()))
                  .map(r => (
                    <tr key={r.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">{r.id}</td>
                      <td className="p-4 font-medium">{r.full_name}</td>
                      <td className="p-4">{r.owner}</td>
                      <td className="p-4">{r.category}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          r.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}>
                          {r.status}
                        </span>
                      </td>
                      <td className="p-4 flex gap-2">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">Edit</button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm">Delete</button>
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