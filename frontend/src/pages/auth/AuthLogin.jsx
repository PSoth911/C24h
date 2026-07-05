import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../path.js";
import {login} from "../../service/authService.js"

export default function AuthLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login(email, password);

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role);

      switch (user.role) {
        case "admin":
          navigate(PATH.ADMIN.DASHBOARD);
          break;

        case "driver":
          navigate(PATH.DELIVERY.DASHBOARD);
          break;

        case "customer":
          navigate(PATH.USER.HOME);
          break;

        default:
          navigate("/");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="lg:hidden flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[#004953] flex items-center justify-center text-white text-2xl font-bold">
              A
            </div>
            <h1 className="mt-4 text-2xl font-bold text-gray-800">
              Admin Login
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Sign in to access the dashboard
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004953]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004953]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#004953] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left Side */}
        <div className="w-1/2 bg-[#004953] flex flex-col justify-center px-20 text-white">
          <h1 className="text-5xl font-bold mb-6">
            Food Delivery
          </h1>

          <p className="text-lg text-gray-200 max-w-md">
            Manage restaurants, users, orders, delivery drivers,
            analytics, and system settings from one dashboard.
          </p>

          <div className="mt-10 flex gap-4">
            <div className="bg-white/10 p-5 rounded-2xl">
              <h3 className="text-2xl font-bold">10K+</h3>
              <p className="text-gray-300">Orders</p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl">
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-gray-300">Restaurants</p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl">
              <h3 className="text-2xl font-bold">20K+</h3>
              <p className="text-gray-300">Customers</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex items-center justify-center bg-slate-50">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">
            <div className="text-center mb-8">
              <div className="mx-auto w-20 h-20 bg-[#004953] rounded-2xl flex items-center justify-center text-white text-3xl font-bold">
                A
              </div>

              <h2 className="mt-5 text-3xl font-bold text-gray-800">
                Welcome Back
              </h2>

              <p className="text-gray-500 mt-2">
                Login to your admin account
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004953]"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004953]"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-[#004953] font-semibold"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-[#004953] text-white mt-3 py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
              >
                Sign In
              </button>

            </form>
              <div className="flex gap-2 mt-2 w-full text-right  text-slate-600">
                  <p className="flex">Don't has account yet?</p>
                  <p className="cursor-pointer text-[#004953] font-semibold hover:underline" onClick={()=>navigate(PATH.AUTH.SIGNUP)}>Sign Up</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}