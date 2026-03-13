import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PartyPopper, Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('demo@campusvibe.com');
  const [password, setPassword] = useState('Campus123');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate network delay for smooth animation
    setTimeout(() => {
      if (email === 'demo@campusvibe.com' && password === 'Campus123') {
        navigate('/dashboard');
      } else {
        setError('Invalid email or password. Please use the demo credentials.');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-pink-400 blur-[120px] opacity-20"></div>
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full bg-violet-500 blur-[120px] opacity-20"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative z-10"
      >
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-pink-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg mb-6 transform -rotate-6">
            <PartyPopper className="h-8 w-8 text-white transform rotate-6" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-500">Sign in to access your event dashboard</p>
        </div>

        {error && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-rose-50 text-rose-600 p-4 rounded-xl text-sm flex items-start gap-3 border border-rose-100"
          >
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <p>{error}</p>
          </motion.div>
        )}

        <div className="bg-blue-50 text-blue-700 p-4 rounded-xl text-sm border border-blue-100 mb-6">
          <p className="font-semibold mb-1">Demo Credentials:</p>
          <p>Email: <strong>demo@campusvibe.com</strong></p>
          <p>Password: <strong>Campus123</strong></p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-pink-500 focus:ring-pink-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-pink-500 hover:text-pink-400 transition-colors">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-gradient-to-r from-pink-500 to-violet-600 hover:shadow-lg hover:shadow-pink-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Sign In <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/contact" className="font-medium text-pink-500 hover:text-pink-400 transition-colors">
            Book an event to get started
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
