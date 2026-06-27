import { useState, useEffect } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar.jsx";
import { PATH } from "../../path.js";

export default function AdminDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/admin/dashboard");
        const data = await res.json();

        setDashboard(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Mobile */}
      <div className="lg:hidden p-4">
        <h1 className="text-2xl font-bold text-[#004953] mb-6">
          Dashboard
        </h1>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow">
            <h3 className="text-gray-500">Orders</h3>
            <p className="text-2xl font-bold">
              {dashboard?.totalOrders}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow">
            <h3 className="text-gray-500">Users</h3>
            <p className="text-2xl font-bold">
              {dashboard?.totalUsers}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow">
            <h3 className="text-gray-500">Restaurants</h3>
            <p className="text-2xl font-bold">
              {dashboard?.totalRestaurants}
            </p>
          </div>


          <div className="bg-white rounded-2xl p-4 shadow">
            <h3 className="text-gray-500">Drivers</h3>
            <p className="text-2xl font-bold">
              {dashboard?.totalDrivers}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex h-screen">
        <AdminSidebar PATH={PATH} />

        <main className="flex-1 overflow-auto">
          {/* Header */}
          <header className="bg-white h-20 px-8 flex items-center justify-between shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800">
              Dashboard Overview
            </h2>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-semibold">Admin</p>
                <p className="text-sm text-gray-500">
                  Administrator
                </p>
              </div>

              <div className="w-12 h-12 rounded-full bg-[#004953] text-white flex items-center justify-center">
                A
              </div>
            </div>
          </header>

          {/* Stats */}
          <div className="p-8">
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow">
                <p className="text-gray-500">Total Orders</p>
                <h3 className="text-3xl font-bold mt-2">
                  {dashboard?.totalOrders}
                </h3>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <p className="text-gray-500">Restaurants</p>
                <h3 className="text-3xl font-bold mt-2">
                  {dashboard?.totalRestaurants}
                </h3>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <p className="text-gray-500">Users</p>
                <h3 className="text-3xl font-bold mt-2">
                  {dashboard?.totalUsers}
                </h3>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <p className="text-gray-500">Drivers</p>
                <h3 className="text-3xl font-bold mt-2">
                  {dashboard?.totalDrivers}
                </h3>
              </div>
            </div>

            {/* Recent Orders (static for now) */}
            <div className="bg-white rounded-2xl shadow">
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold">
                  Recent Orders
                </h3>
              </div>

              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="p-4">Order ID</th>
                    <th className="p-4">Customer</th>
                    <th className="p-4">Restaurant</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {dashboard?.orders?.map((order) => (
                    <tr key={order.order_id} className="border-b">
                      
                      <td className="p-4">#{order.order_id}</td>

                      <td className="p-4">
                        {order.Customer?.user_id}
                      </td>

                      <td className="p-4">
                        {order.Restaurant?.restaurant_name}
                      </td>

                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            order.order_status === "delivered"
                              ? "bg-green-100 text-green-700"
                              : order.order_status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {order.order_status}
                        </span>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}