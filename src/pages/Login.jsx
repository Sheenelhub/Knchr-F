import { useState } from 'react';
import { FaEnvelope, FaLock, FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';

// Import your assets
import bgImage from '../assets/cvs.webp';
import knchrLogo from '../assets/knchr-logo.webp';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert("Password reset instructions will be sent to your email.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login functionality will be integrated with the backend.");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      
      {/* LEFT SIDE: Image/Branding */}
      <div className="hidden md:flex md:w-1/2 relative bg-slate-900 items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-knchr-gold/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 p-12 text-white max-w-lg">
          <a href="#home" className="inline-flex items-center gap-2 text-knchr-gold font-bold mb-12 hover:text-white transition-colors">
            <FaArrowLeft /> Back to Home
          </a>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Welcome Back to the <span className="text-knchr-gold">KNCHR Portal</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Sign in to access your dashboard, track your complaints, and engage with our human rights resources.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-24 bg-white relative">
        {/* Mobile Back Button */}
        <a href="#home" className="md:hidden absolute top-6 left-6 inline-flex items-center gap-2 text-slate-500 font-bold hover:text-knchr-gold transition-colors text-sm">
          <FaArrowLeft /> Back
        </a>

        <div className="w-full max-w-md">
          <div className="text-center md:text-left mb-10">
            <img src={knchrLogo} alt="KNCHR Logo" className="h-16 mx-auto md:mx-0 mb-6" />
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Sign In</h2>
            <p className="text-slate-500 font-medium">Enter your email and password to continue.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email Field */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaEnvelope className="text-slate-400" />
                </div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-knchr-gold focus:border-transparent transition-all outline-none"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock className="text-slate-400" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-11 pr-11 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-knchr-gold focus:border-transparent transition-all outline-none"
                  placeholder="••••••••"
                  required
                />
                <button 
                  type="button" 
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-knchr-gold transition-colors focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="w-4 h-4 text-knchr-gold border-slate-300 rounded focus:ring-knchr-gold" 
                />
                <span className="font-medium">Remember me</span>
              </label>
              
              <button 
                type="button" 
                onClick={handleForgotPassword}
                className="text-sm font-bold text-slate-700 hover:text-knchr-gold transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-slate-900 text-white font-extrabold py-3.5 rounded-xl hover:bg-knchr-gold hover:text-slate-900 transition-colors shadow-lg hover:shadow-xl mt-6"
            >
              Sign In
            </button>
          </form>

          {/* Toggle to Register */}
          <div className="mt-8 text-center text-sm font-medium text-slate-500">
            Don't have an account?{' '}
            <a href="#register" className="text-slate-900 font-extrabold hover:text-knchr-gold transition-colors">
              Create one now
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Login;