// eslint-disable-next-line no-unused-vars
import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';

const Terms = () => {
  return (
    <div className="min-h-screen bg-knchr-light flex flex-col font-sans">
      <TopBar />
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-12 bg-white my-8 shadow-sm rounded-xl border border-slate-200/60">
        <h1 className="text-3xl font-extrabold text-knchr-navy mb-2">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-8">Effective Date: June 11, 2026</p>
        
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Acceptable Use Policy</h2>
            <p>You agree to use the Services only for lawful purposes. You strictly agree not to use the platform for fraudulent activities, bypass security elements, scrape unauthorized content, or submit false identity data.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Intellectual Property</h2>
            <p>All content, branding, features, and source architecture available through our Services are the exclusive property of the organization and are protected under international copyright and trademark acts.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Liability Limitations</h2>
            <p>Services are provided on an "as is" layout parameters. We disclaim all warranties regarding system interruptions, failures out of our logical control, or data synchronization issues.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Account Termination</h2>
            <p>We reserve the authority to restrict or suspend access permissions without notice for systemic violations of our operational terms or malicious platform interactions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">5. Dispute Resolution & Governing Law</h2>
            <p>These terms are governed and construed cleanly under the legislation framework of the Republic of Kenya. Disputes shall be directed to structural arbitration within Nairobi before pursuing statutory court mechanisms.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;