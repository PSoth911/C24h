import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar.jsx";
import { PATH } from "../../path.js";

export default function AdminDeliveryManagement() {
  const [search, setSearch] = useState("");

  const drivers = [
    { id: 1, name: "David", vehicle: "Bike", status: "Online", orders: 12 },
    { id: 2, name: "Anna", vehicle: "Car", status: "Offline", orders: 5 },
    { id: 3, name: "Leo", vehicle: "Bike", status: "Online", orders: 20 },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex">

      <AdminSidebar PATH={PATH} />

      <main className="flex-1">

        <div className="bg-white h-20 flex items-center justify-between px-6 shadow-sm">
          <h2 className="text-xl font-bold">Delivery Management</h2>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search driver..."
            className="border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004953]"
          />
        </div>

        <div className="p-6">

          <div className="hidden lg:block bg-white rounded-2xl shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4">ID</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Vehicle</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Orders</th>
                </tr>
              </thead>

              <tbody>
                {drivers
                  .filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
                  .map(d => (
                    <tr key={d.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">{d.id}</td>
                      <td className="p-4 font-medium">{d.name}</td>
                      <td className="p-4">{d.vehicle}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          d.status === "Online"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-600"
                        }`}>
                          {d.status}
                        </span>
                      </td>
                      <td className="p-4">{d.orders}</td>
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