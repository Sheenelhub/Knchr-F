import { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaIdCard, FaPhone, FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';

// Import your assets
import bgImage from '../assets/cvs.webp';
import knchrLogo from '../assets/knchr-logo.webp';

const Register = () => {
  const [formData, setFormData] = useState({ 
    fullName: '', idNumber: '', phone: '', email: '', password: '', confirmPassword: '' 
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Password strength calculator
  const calculateStrength = (password) => {
    let score = 0;
    if (!password) return score;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    return score;
  };

  const strengthScore = calculateStrength(formData.password);
  
  const getStrengthColor = () => {
    if (strengthScore === 0) return 'bg-slate-200';
    if (strengthScore <= 2) return 'bg-red-500';
    if (strengthScore === 3 || strengthScore === 4) return 'bg-amber-500';
    return 'bg-green-500';
  };

  const getStrengthLabel = () => {
    if (strengthScore === 0) return '';
    if (strengthScore <= 2) return 'Weak';
    if (strengthScore === 3 || strengthScore === 4) return 'Moderate';
    return 'Strong';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (strengthScore < 3) {
      alert("Please choose a stronger password.");
      return;
    }
    alert("Registration functionality will be integrated with the backend.");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row-reverse font-sans">
      
      {/* RIGHT SIDE (Reversed for Register): Image/Branding */}
      <div className="hidden md:flex md:w-5/12 lg:w-1/2 relative bg-slate-900 items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-slate-900/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-knchr-gold/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 p-12 text-white max-w-lg">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Join the <span className="text-knchr-gold">Movement</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Create an account to submit human rights complaints, access our resources, or apply for career opportunities effortlessly.
          </p>
          <div className="space-y-4 text-sm font-medium text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-knchr-gold">1</div>
              Secure & Confidential
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-knchr-gold">2</div>
              Track Your Petitions
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-knchr-gold">3</div>
              Fast Career Applications
            </div>
          </div>
        </div>
      </div>

      {/* LEFT SIDE: Register Form */}
      <div className="w-full md:w-7/12 lg:w-1/2 flex items-center justify-center p-6 sm:p-10 lg:p-16 bg-white relative">
        <div className="w-full max-w-md lg:max-w-lg">
          
          <div className="flex items-center justify-between mb-8">
             <a href="#home" className="inline-flex items-center gap-2 text-slate-500 font-bold hover:text-knchr-gold transition-colors text-sm">
              <FaArrowLeft /> Back
            </a>
            <img src={knchrLogo} alt="KNCHR Logo" className="h-10" />
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Create Account</h2>
            <p className="text-slate-500 font-medium">Please fill in your details to register.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Full Name & ID Number Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-slate-400" />
                  </div>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="shannel Wangari" className="block w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-knchr-gold focus:border-transparent transition-all outline-none" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">ID / Passport No.</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaIdCard className="text-slate-400" />
                  </div>
                  <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} placeholder="2345678" className="block w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-knchr-gold focus:border-transparent transition-all outline-none" required />
                </div>
              </div>
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-slate-400" />
                  </div>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@gmail.com" className="block w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-knchr-gold focus:border-transparent transition-all outline-none" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-slate-400" />
                  </div>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="0712 345 678" className="block w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-knchr-gold focus:border-transparent transition-all outline-none" required />
                </div>
              </div>
            </div>

            {/* Passwords Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-slate-400" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    placeholder="••••••••" 
                    className="block w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-knchr-gold focus:border-transparent transition-all outline-none" 
                    required 
                    minLength={8} 
                  />
                  <button 
                    type="button" 
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-knchr-gold transition-colors focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-slate-500 font-medium">Password strength:</span>
                      <span className={`text-xs font-bold ${strengthScore <= 2 ? 'text-red-500' : strengthScore <= 4 ? 'text-amber-500' : 'text-green-500'}`}>
                        {getStrengthLabel()}
                      </span>
                    </div>
                    <div className="flex gap-1 h-1.5">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div key={level} className={`flex-1 rounded-full ${level <= strengthScore ? getStrengthColor() : 'bg-slate-200'} transition-colors duration-300`}></div>
                      ))}
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">Use 8+ characters with a mix of letters, numbers & symbols.</p>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Confirm Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-slate-400" />
                  </div>
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    name="confirmPassword" 
                    value={formData.confirmPassword} 
                    onChange={handleChange} 
                    placeholder="••••••••" 
                    className="block w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-knchr-gold focus:border-transparent transition-all outline-none" 
                    required 
                    minLength={8} 
                  />
                  <button 
                    type="button" 
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-knchr-gold transition-colors focus:outline-none"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {/* Match indicator */}
                {formData.confirmPassword && (
                  <p className={`text-xs font-bold mt-2 ${formData.password === formData.confirmPassword ? 'text-green-500' : 'text-red-500'}`}>
                    {formData.password === formData.confirmPassword ? "Passwords match" : "Passwords do not match"}
                  </p>
                )}
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="pt-2">
              <label className="flex items-start gap-3 text-sm text-slate-600 mb-6 cursor-pointer">
                <input type="checkbox" className="mt-1 w-4 h-4 text-knchr-gold border-slate-300 rounded focus:ring-knchr-gold" required />
                <span>I agree to the KNCHR <a href="#terms" className="text-slate-900 font-bold hover:text-knchr-gold underline">Terms of Service</a> and <a href="#privacy" className="text-slate-900 font-bold hover:text-knchr-gold underline">Privacy Policy</a>.</span>
              </label>

              <button 
                type="submit" 
                className="w-full bg-slate-900 text-white font-extrabold py-3.5 rounded-xl hover:bg-knchr-gold hover:text-slate-900 transition-colors shadow-lg hover:shadow-xl"
              >
                Create Account
              </button>
            </div>
          </form>

          {/* Toggle to Login */}
          <div className="mt-8 text-center text-sm font-medium text-slate-500">
            Already have an account?{' '}
            <a href="#login" className="text-slate-900 font-extrabold hover:text-knchr-gold transition-colors">
              Sign In
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Register;