import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Terms from './pages/Terms';
import AccessibilityWidget from './components/AccessibilityWidget'; 

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {/* The widget floats globally over all pages */}
      <AccessibilityWidget /> 
      
      {currentPath === '#terms' ? <Terms /> : <Home />}
      
      <div className="fixed bottom-4 right-4 bg-slate-900 text-white text-xs px-3 py-2 rounded-full shadow-lg z-50 flex gap-3 font-semibold opacity-60 hover:opacity-100 transition-opacity">
        <a href="#home" className="hover:text-knchr-gold">Go Home</a>
        <span className="text-slate-600">|</span>
        <a href="#terms" className="hover:text-knchr-gold">Go Terms</a>
      </div>
    </>
  );
}

export default App;