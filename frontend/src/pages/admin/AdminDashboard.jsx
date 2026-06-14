import AdminSidebar from "../../components/admin/AdminSidebar.jsx";
import { PATH } from "../../path.js";
export default function AdminDashboard() {
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
            <p className="text-2xl font-bold">1,254</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow">
            <h3 className="text-gray-500">Revenue</h3>
            <p className="text-2xl font-bold">$8,950</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow">
            <h3 className="text-gray-500">Restaurants</h3>
            <p className="text-2xl font-bold">142</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow">
            <h3 className="text-gray-500">Drivers</h3>
            <p className="text-2xl font-bold">85</p>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex h-screen">
        {/* Sidebar */}
        <AdminSidebar PATH={PATH} />

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <header className="bg-white h-20 px-8 flex items-center justify-between shadow-sm">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Dashboard Overview
              </h2>
            </div>

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

          {/* Dashboard Content */}
          <div className="p-8">
            {/* Statistics */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow">
                <p className="text-gray-500">Total Orders</p>
                <h3 className="text-3xl font-bold mt-2">1,254</h3>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <p className="text-gray-500">Revenue</p>
                <h3 className="text-3xl font-bold mt-2">$8,950</h3>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <p className="text-gray-500">Restaurants</p>
                <h3 className="text-3xl font-bold mt-2">142</h3>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <p className="text-gray-500">Drivers</p>
                <h3 className="text-3xl font-bold mt-2">85</h3>
              </div>
            </div>

            {/* Recent Orders */}
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
                  <tr className="border-b">
                    <td className="p-4">#1001</td>
                    <td className="p-4">John Doe</td>
                    <td className="p-4">Burger House</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        Delivered
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4">#1002</td>
                    <td className="p-4">Jane Smith</td>
                    <td className="p-4">Pizza Hub</td>
                    <td className="p-4">
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                        Preparing
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}