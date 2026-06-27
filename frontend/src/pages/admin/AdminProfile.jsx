import AdminSidebar from "../../components/admin/AdminSidebar.jsx";
import { PATH } from "../../path.js";
import { useAuth } from "../../context/AuthContext.jsx";

export default function AdminProfile() {
  const { user, loading } = useAuth();

  if (loading) {
    return <p className="p-6">Loading...</p>;
  }
  

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
              value={user?.full_name || ""}
              className="w-full border px-4 py-3 rounded-xl"
              readOnly
            />

            <input
              value={user?.email || ""}
              className="w-full border px-4 py-3 rounded-xl"
              readOnly
            />

            <input
              value={user?.phone || ""}
              className="w-full border px-4 py-3 rounded-xl"
              readOnly
            />

            <button className="w-full bg-[#004953] text-white py-3 rounded-xl">
              Save Changes
            </button>

          </div>
        </div>
      </main>
    </div>
  );
}