import AdminSidebar from "../../components/admin/AdminSidebar.jsx";
import { PATH } from "../../path.js";

export default function AdminProfile() {
  return (
    <div className="min-h-screen bg-slate-100 flex">

        <AdminSidebar PATH={PATH} />

      <main className="flex-1 flex items-center justify-center p-6">

        <div className="w-full max-w-xl bg-white rounded-2xl shadow p-8">

          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 bg-[#004953] text-white flex items-center justify-center text-3xl font-bold rounded-full">
              A
            </div>
            <h2 className="mt-4 text-2xl font-bold">Admin Profile</h2>
            <p className="text-gray-500">Manage your account</p>
          </div>

          <div className="space-y-4">

            <input
              placeholder="Full Name"
              className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#004953]"
            />

            <input
              placeholder="Email"
              className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#004953]"
            />

            <input
              placeholder="Phone"
              className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#004953]"
            />

            <button className="w-full bg-[#004953] text-white py-3 rounded-xl font-semibold hover:opacity-90">
              Save Changes
            </button>

            <button className="w-full border border-red-500 text-red-500 py-3 rounded-xl hover:bg-red-50">
              Change Password
            </button>

          </div>
        </div>

      </main>
    </div>
  );
}