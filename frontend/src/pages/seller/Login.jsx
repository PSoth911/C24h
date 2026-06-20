import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Store, HelpCircle, Globe, ArrowRight, ShieldCheck, Zap, BarChart3, AlertCircle } from 'lucide-react';

const PATHS = {
  SELLER: {
    LOGIN: "/seller/login",
    DASHBOARD: "/seller/dashboard",
  }
};

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const CORRECT_EMAIL = 'seyhagaming045@gmail.com';
  const CORRECT_PASSWORD = 'password123'; 

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.email.toLowerCase().trim() !== CORRECT_EMAIL) {
      setError('Invalid merchant partner email address.');
      return;
    }

    if (formData.password !== CORRECT_PASSWORD) {
      setError('Incorrect password. Please try again.');
      return; 
    }
    
    console.log('Authenticating partner:', formData.email);
    navigate(PATHS.SELLER.DASHBOARD); 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans antialiased">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[650px]">

        <div className="md:w-1/2 bg-[#004D40] p-12 text-white flex flex-col justify-between relative">
          <div>
            <div className="flex items-center gap-3 mb-6">
               <div className="bg-white text-[#004D40] p-2 rounded-xl shadow-md">
                 <Store size={24} className="stroke-[2.5]" />
               </div>
               <h1 className="text-3xl font-black tracking-tight">Crave24h</h1>
            </div>
            <p className="text-xl text-teal-100 font-medium">Grow your restaurant delivery operation seamlessly.</p>
          </div>

          <div className="my-8 bg-neutral-900/40 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between border border-teal-500/20 shadow-2xl relative h-52 overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800">Live Terminal</span>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
              </div>
            </div>
            
            <div className="space-y-2 mt-2">
              <div className="h-2 w-3/4 bg-teal-800/40 rounded"></div>
              <div className="h-2 w-1/2 bg-teal-800/20 rounded"></div>
              <div className="h-6 w-full bg-[#004D40]/60 rounded-lg border border-teal-700/30 flex items-center px-3 justify-between">
                <span className="text-[10px] font-mono text-teal-300">Incoming Dispatch order...</span>
                <span className="text-[10px] font-bold text-teal-400">#8821</span>
              </div>
            </div>

            <div className="flex justify-between items-end pt-4 border-t border-teal-800/30">
              <span className="text-xs font-bold font-mono text-gray-400">v2.4.0-stable</span>
              <span className="text-xs text-teal-400 font-bold flex items-center gap-1">Connected <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span></span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <span className="bg-teal-950/40 border border-teal-800 text-teal-100 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5"><ShieldCheck size={14} /> 10k+ Orders</span>
            <span className="bg-teal-950/40 border border-teal-800 text-teal-100 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5"><Zap size={14} /> Zero Overhead</span>
            <span className="bg-teal-950/40 border border-teal-800 text-teal-100 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5"><BarChart3 size={14} /> Real-Time Analytics</span>
          </div>
          
          <p className="text-xs text-teal-300/80 mt-4 font-medium">Join 500+ regional corporate fulfillment chains managing logistics.</p>
        </div>

        <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white">
          <div className="mb-8">
            <h2 className="text-4xl font-black text-[#004D40] tracking-tight">Partner Sign In</h2>
            <p className="text-sm text-gray-400 mt-1.5 font-medium">Access your enterprise restaurant console.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">

            {error && (
              <div className="flex items-center gap-2 bg-red-50 text-red-700 p-3 rounded-xl text-xs font-semibold border border-red-200 animate-in fade-in duration-200">
                <AlertCircle size={16} className="shrink-0 text-red-500" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 text-gray-400" size={18} />
                <input 
                  type="email" 
                  required
                  className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#004D40] focus:border-transparent outline-none transition-all text-sm font-medium text-gray-800 ${
                    error && !formData.email.includes(CORRECT_EMAIL) ? 'border-red-300 bg-red-50/20' : 'border-gray-200'
                  }`}
                  placeholder="seyhagaming045@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider">Password</label>
                <a href="#" className="text-xs text-[#004D40] font-bold hover:underline transition-all">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 text-gray-400" size={18} />
                <input 
                  type="password" 
                  required
                  className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#004D40] focus:border-transparent outline-none transition-all text-sm font-medium text-gray-800 ${
                    error && formData.email.toLowerCase().trim() === CORRECT_EMAIL ? 'border-red-300 bg-red-50/20' : 'border-gray-200'
                  }`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-[#004D40] text-white py-3.5 rounded-xl font-bold text-md hover:bg-[#003d33] transition-all shadow-lg shadow-teal-950/10 active:scale-[0.99] flex items-center justify-center gap-2 mt-2 cursor-pointer">
              Sign In <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-xs text-gray-400 font-medium">New to our network? </span>
            <a href="#" className="text-sm text-[#004D40] font-black hover:underline">Register business</a>
          </div>

          {/* Footer Metadata Utilities */}
          <div className="mt-10 flex justify-between gap-4 border-t border-gray-100 pt-6">
            <button className="flex-1 py-2 border border-gray-100 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50 flex items-center justify-center gap-1.5 transition-colors cursor-pointer">
              <HelpCircle size={14} className="text-gray-400" /> Help Center
            </button>
            <button className="flex-1 py-2 border border-gray-100 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50 flex items-center justify-center gap-1.5 transition-colors cursor-pointer">
              <Globe size={14} className="text-gray-400" /> English (US)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;