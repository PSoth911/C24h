import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/Seller/LoginForm';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLoginAuth = async (credentials) => {
    setIsLoading(true);
    setErrorMsg('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log('Authenticating account: ', credentials.email);
      
      navigate('/seller/dashboard');
    } catch (err) {
      setErrorMsg('Invalid terminal credentials. Please verify data inputs.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white border border-gray-200/80 rounded-3xl shadow-xl p-8 space-y-6">
        
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-teal-50 text-[#004D40] font-black text-xl shadow-inner">
            🍩
          </div>
          <h2 className="text-2xl font-black text-gray-800 tracking-tight">Merchant Access</h2>
          <p className="text-xs text-gray-400">
            Secure entry hub node for Glazed & Confused Donut Portals.
          </p>
        </div>

        {errorMsg && (
          <div className="bg-rose-50 text-rose-700 text-xs font-bold px-4 py-2.5 rounded-xl border border-rose-100 text-center animate-shake">
            {errorMsg}
          </div>
        )}

        <LoginForm onSubmit={handleLoginAuth} isLoading={isLoading} />

        <div className="text-center pt-2">
          <p className="text-xs text-gray-400 font-medium">
            New vendor candidate?{' '}
            <a href="#apply" className="text-[#004D40] font-bold hover:underline">
              Submit Store Application
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;