import { useState, useEffect } from 'react';

// --- PAGE IMPORTS ---
import Home from './pages/Home';
import Terms from './pages/Terms';
import NewsArticleOgangah from './pages/NewsArticleOgangah'; 
import NewsArticleReport from './pages/NewsArticleReport'; 
import NewsArticleUtumishi from './pages/NewsArticleUtumishi';
import NewsArticleFuelStrike from './pages/NewsArticleFuelStrike';
import OfficesHub from './pages/OfficesHub';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import Login from './pages/Login';
import Register from './pages/Register';
import Publications from './pages/Publications'; // <-- NEW PUBLICATION PAGE IMPORT

// --- COMPONENT IMPORTS ---
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import AccessibilityWidget from './components/AccessibilityWidget';
import FloatingContact from './components/FloatingContact';

const ComingSoonArticle = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 text-center px-6">
    <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Article Being Formatted</h2>
    <p className="text-slate-500 max-w-md mb-8">
      This press release is currently being transcribed and formatted for the new web portal. Please check back shortly.
    </p>
    <a href="#home" className="bg-knchr-gold text-black font-bold px-6 py-3 rounded-xl shadow hover:bg-amber-500 transition-colors">
      Return to Homepage
    </a>
  </div>
);

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#home');
      window.scrollTo(0, 0); 
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    // Basic Pages
    if (currentPath === '#terms') return <Terms />;
    if (currentPath === '#offices') return <OfficesHub />;
    if (currentPath === '#about') return <AboutUs />;
    if (currentPath === '#careers') return <Careers />;
    if (currentPath === '#publications') return <Publications />; // <-- NEW ROUTE
    
    // Auth Pages
    if (currentPath === '#login') return <Login />;
    if (currentPath === '#register') return <Register />;

    // News Articles
    if (currentPath === '#news-remarks-claris') return <NewsArticleOgangah />;
    if (currentPath === '#news-reparations-report') return <NewsArticleReport />;
    if (currentPath === '#news-utumishi-fire') return <NewsArticleUtumishi />;
    if (currentPath === '#news-fuel-strike') return <NewsArticleFuelStrike />;
    
    // Fallback for missing articles
    if (currentPath.startsWith('#news-') || currentPath.startsWith('#pub-')) {
      return <ComingSoonArticle />;
    }
    
    // Default Route
    return <Home />;
  };

  return (
    <div className="relative font-sans">
      <AccessibilityWidget /> 
      <FloatingContact /> 
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-[80] w-full flex flex-col shadow-xl">
        <TopBar />
        <Navbar />
      </header>
      
      {/* Dynamic Page Content */}
      <main>
        {renderPage()}
      </main>
      
    </div>
  );
}

export default App;