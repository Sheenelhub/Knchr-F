import { useState, useEffect, useRef } from 'react';
import { 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, 
  FaTwitter, FaBuilding, FaInfoCircle, FaArrowRight, FaFax, FaCheckCircle
} from 'react-icons/fa';

// ==========================================
// CUSTOM ANIMATION COMPONENTS
// ==========================================
const FadeInSection = ({ children, className, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const TypewriterHeading = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !isTyping && displayedText === '') {
        setIsTyping(true);
      }
    }, { threshold: 0.5 });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [isTyping, displayedText]);

  useEffect(() => {
    if (isTyping && displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, 30); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [displayedText, isTyping, text]);

  return (
    <h2 ref={domRef} className={className}>
      {displayedText}
      <span className="animate-pulse text-knchr-gold ml-1">|</span>
    </h2>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
const OfficesHub = () => {

  // --- COMPREHENSIVE OFFICE DATA ARRAY ---
  const offices = [
    {
      id: 'head-office',
      region: 'Head Office',
      city: 'Nairobi',
      address: 'CVS Plaza 1st Floor, Kasuku Lane, Off Lenana Road',
      postal: 'P.O. Box: 74359-00200 Nairobi, Kenya',
      phones: ['+254-020-3969000', '0726 610 159'],
      whatsapp: '0798 849 871',
      emails: [
        { label: 'General', address: 'haki@knchr.org' },
        { label: 'Complaints', address: 'complaint@knchr.org' }
      ],
      sms: '22359',
      twitter: '@hakiKNCHR',
      shortIntro: 'The Headquarters coordinates all national human rights initiatives, policy formulation, and high-level stakeholder engagements.',
      story: 'Located in the capital, the Head Office serves as the strategic nerve center for the Commission’s countrywide operations. It houses the central complaints division, policy formulation teams, and coordinates high-level engagements with the State, international partners, and civil society. It provides overarching support and strategic direction to all 6 regional offices.',
      focusAreas: ['National Policy Advocacy', 'High-Level State Engagements', 'Central Complaints Management', 'International Treaty Reporting'],
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.825852579133!2d36.7937!3d-1.2783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNDEuOSJTIDM2wrA0NyczNy4zIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske',
      img: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'coast',
      region: 'Coast Regional Office',
      city: 'Mombasa',
      address: 'IMAARA- The New Address Building, Unit 10D, 10th Floor, Dedan Kimathi Avenue, Kizingo',
      postal: 'P.O Box 90171-80100 Mombasa',
      phones: ['041 2220468', 'Complaints: 0757-292932', 'Complaints: 0769-710434'],
      whatsapp: '',
      emails: [{ label: 'Email', address: 'coast@knchr.org' }],
      sms: '',
      twitter: '@KNCHRMombasa',
      shortIntro: 'Established in Dec 2012, serving 6 counties: Taita Taveta, Kwale, Mombasa, Kilifi, Tana River and Lamu.',
      story: 'The Commission established the Coast Regional Office in December 2012. The Coast Office undertakes the Commission’s work in addressing human rights situations specific to the Coastal region. Some of the human rights issues include; historical land injustices, forced evictions, extractives, endemic marginalization, insecurity largely due to terrorism, violent extremism, existence of local gangs and radicalization. The regional office has admitted over 2000 cases since its inception.',
      focusAreas: ['Complaints and Investigation', 'Public Education & Training', 'Supporting CSOs Platforms', 'Institutional Reforms', 'Redress (PIL & ADR)', 'Working with Dev. Partners (UNODC, GIZ, UNOHCHR)'],
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.030635158655!2d39.6575!3d-4.0601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDMnMzYuNCJTIDM5wrAzOScyNy4wIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske',
      img: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'north-rift',
      region: 'North Rift Regional Office',
      city: 'Kitale',
      address: 'AFC Building, Opposite Mega Plaza',
      postal: 'P.O Box 2999-30200 Kitale',
      phones: ['+254-3969057'],
      whatsapp: '',
      emails: [{ label: 'Email', address: 'northrift@knchr.org' }],
      sms: '',
      twitter: '@KNCHRKitale',
      shortIntro: 'Set up in 2007 covering 8 counties including Turkana, West Pokot, Elgeyo Marakwet, Baringo, Nandi, Uasin Gishu, Bungoma & Trans Nzoia.',
      story: 'The North Rift Regional Office (NORRO) was set up in 2007 to address human rights concerns in the North Rift. The Regional Office focuses on among others, labour issues, matters of access to justice, land rights, children and family rights, mining and extractive industries. The office also lends technical support in the policy and legislative processes in the counties besides promoting institutional reforms in the security and penal sectors.',
      focusAreas: ['Complaints and investigation', 'Public Education & Training', 'Supporting CSOs and HRDs', 'Institutional reforms (Prison & Police monitoring)', 'Redress (PIL, Mediation, Arbitration)', 'Business and Human Rights'],
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.330635158655!2d35.0075!3d1.0101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDAnMzYuNCJOIDM1wrAwMCcyNy4wIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske',
      img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'north-eastern',
      region: 'North Eastern Regional Office',
      city: 'Wajir',
      address: 'Airstrip Road/Public Works',
      postal: 'P.O Box 363-70200 Wajir',
      phones: ['(046)-421-512'],
      whatsapp: '',
      emails: [{ label: 'Email', address: 'northernkenya@knchr.org' }],
      sms: '',
      fax: '(046)-421-085',
      twitter: '@KNCHRWajir',
      shortIntro: 'Opened in 2006 to serve Wajir, Marsabit, Garissa, Mandera and Isiolo counties, addressing pastoral challenges and marginalization.',
      story: 'North Eastern Regional Office (NERO) was opened in the year 2006 in living with the Commission’s core value of accessibility. These five vast counties share certain features which make it possible to design programmatic interventions capable of working across the region. Most salient among these features is the pastoral nature of the inhabitants, very low literacy levels, structural marginalization, and sore acts of historical injustices dating back to colonial era policies.',
      focusAreas: ['Complaints and Investigation', 'Public Education & Training (Legal Clinics)', 'Employment of ADR (Alternative Dispute Resolution for clan strife)', 'Strengthening of Alternative Justice Systems', 'Historical Injustices / Transitional Justice', 'Business and Human Rights'],
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15948.330635158655!2d40.0575!3d1.7401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNDQnMjQuNCJOIDQwwrAwMycyNy4wIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske',
      img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'central',
      region: 'Central Regional Office',
      city: 'Nyahururu',
      address: 'Agricultural Finance Corporation (AFC) Building, next to Nyahururu Law Courts',
      postal: 'P.O Box 1100-20300, Nyahururu',
      phones: ['+254(0) 705 982 617'],
      whatsapp: '',
      emails: [{ label: 'Email', address: 'laikipia@knchr.org' }],
      sms: '',
      twitter: '@KNCHRLaikipia',
      shortIntro: 'Championing human rights culture through strategic partnerships, notably with Laikipia University since 2015.',
      story: 'The entrenchment of a human rights culture in Kenya starts with greater understanding of what human rights are. What better place to create this understanding than institutions of learning? Thus, KNCHR and Laikipia University have partnered to provide a platform for mainstreaming of a human rights culture in both state and non-state actors through evidence based training and practice, fortified by an MOA signed in 2015.',
      focusAreas: ['Collaborative Research & Advocacy', 'Strengthening Human Rights Curriculums', 'Complaints and investigation', 'Public Education & Training', 'Supporting CSOs and HRDs', 'Business and Human Rights'],
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.030635158655!2d36.3575!3d0.0401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDInMjQuNCJOIDM2wrAyMScyNy4wIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske',
      img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'western',
      region: 'Western Regional Office',
      city: 'Kisumu',
      address: 'Reinsurance Plaza, 3rd Floor, Oginga Odinga Street',
      postal: 'P.O.Box 1967-40100 Kisumu',
      phones: ['(057)-2020078'],
      whatsapp: '',
      emails: [{ label: 'Email', address: 'kisumu@knchr.org' }],
      sms: '',
      twitter: '@KNCHRkisumu',
      shortIntro: 'Serving the lake basin and western regions, actively championing civil liberties, environmental justice, and community rights.',
      story: 'The Western Regional Office handles comprehensive human rights monitoring across the vital Lake Victoria basin and western corridors. By engaging with local communities, civil society, and state actors, the office ensures that issues of civil liberties, cross-border trade rights, and environmental justice remain at the forefront of the regional agenda.',
      focusAreas: ['Grassroots Complaints Management', 'Public Policy Advocacy', 'Regional Publications & Sensitization', 'Institutional Reforms', 'Community Peace Building'],
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.030635158655!2d34.7575!3d-0.0901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDUnMjQuNCJTIDM0wrA0NScyNy4wIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske',
      img: 'https://images.unsplash.com/photo-1520645521318-f03a712f0e67?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const [activeOfficeId, setActiveOfficeId] = useState(offices[0].id);
  const activeOffice = offices.find(off => off.id === activeOfficeId);

  return (
    <div className="bg-slate-50 min-h-screen font-sans pb-20">
      
      {/* ========================================== */}
      {/* 1. HERO HEADER                             */}
      {/* ========================================== */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-knchr-gold opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent"></div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <TypewriterHeading 
            text="Our National Presence" 
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight" 
          />
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mt-4">
            KNCHR maintains a robust countrywide network to ensure human rights services are accessible to all Kenyans. Find direct contact channels below, or scroll to read our regional stories.
          </p>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. INTERACTIVE CONTACT & MAP HUB (Sticky)  */}
      {/* ========================================== */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-32">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT SIDE: OFFICE SELECTOR LIST */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            <div className="bg-white rounded-2xl shadow-xl p-4 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-knchr-gold to-amber-500"></div>
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-wider px-4 mb-4 mt-2">Select a Region</h3>
              
              <div className="flex flex-col gap-2">
                {offices.map((office) => (
                  <button
                    key={office.id}
                    onClick={() => setActiveOfficeId(office.id)}
                    className={`w-full text-left px-5 py-4 rounded-xl font-bold transition-all flex items-center justify-between group ${
                      activeOfficeId === office.id 
                        ? 'bg-knchr-gold text-slate-900 shadow-md transform scale-[1.02]' 
                        : 'bg-transparent text-slate-600 hover:bg-amber-50 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <FaBuilding className={`${activeOfficeId === office.id ? 'text-slate-900' : 'text-slate-400 group-hover:text-knchr-gold'}`} />
                      <span className="text-[15px]">{office.region}</span>
                    </div>
                    {activeOfficeId === office.id && <FaArrowRight className="text-slate-900" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Global Hotline Quick Card */}
            <div className="bg-slate-900 rounded-2xl shadow-xl p-6 text-white mt-4 border border-slate-800">
              <h4 className="text-knchr-gold font-bold mb-2 flex items-center gap-2"><FaInfoCircle /> Anonymous Reporting</h4>
              <p className="text-sm text-slate-300 mb-4">Have an urgent human rights complaint? Use our toll-free line or SMS.</p>
              <div className="space-y-3 text-sm font-bold bg-white/10 p-4 rounded-xl">
                <div className="flex items-center gap-3"><FaPhoneAlt className="text-knchr-gold text-lg" /> Toll Free: 0800 720 627</div>
                <div className="flex items-center gap-3"><FaEnvelope className="text-knchr-gold text-lg" /> SMS: 22359</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: DYNAMIC DETAILS PANEL */}
          <div className="w-full lg:w-2/3 lg:sticky lg:top-28">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 animate-fade-in relative">
              
              {/* Dynamic Header */}
              <div className="bg-slate-50 border-b border-slate-100 p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-knchr-gold font-extrabold text-xs uppercase tracking-widest block mb-1">
                    {activeOffice.city}
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900">{activeOffice.region}</h2>
                </div>
                {activeOffice.twitter && (
                  <a href={`https://twitter.com/${activeOffice.twitter.replace('@','')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#1DA1F2]/10 text-[#1DA1F2] px-4 py-2 rounded-full font-bold text-sm hover:bg-[#1DA1F2]/20 transition-colors shrink-0">
                    <FaTwitter /> {activeOffice.twitter}
                  </a>
                )}
              </div>

              {/* Dynamic Content Grid */}
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                
                {/* Column 1: Contact Details */}
                <div className="space-y-8">
                  {/* Address Box */}
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                    <h4 className="flex items-center gap-2 text-sm font-black text-slate-400 uppercase tracking-wider mb-3">
                      <FaMapMarkerAlt className="text-knchr-gold" /> Physical Address
                    </h4>
                    <p className="font-bold text-slate-800 leading-snug">{activeOffice.address}</p>
                    <p className="text-sm text-slate-500 mt-2 pt-2 border-t border-slate-200">{activeOffice.postal}</p>
                  </div>

                  {/* Contact Methods */}
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-black text-slate-400 uppercase tracking-wider mb-4">
                      <FaPhoneAlt className="text-knchr-gold" /> Contact Channels
                    </h4>
                    <div className="space-y-4">
                      
                      {activeOffice.phones.length > 0 && (
                        <div className="flex items-start gap-3">
                          <div className="bg-slate-100 p-2 rounded-lg text-slate-600 mt-1"><FaPhoneAlt /></div>
                          <div>
                            {activeOffice.phones.map((phone, idx) => (
                              <div key={idx} className="text-slate-800 font-bold">{phone}</div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeOffice.fax && (
                        <div className="flex items-center gap-3">
                          <div className="bg-slate-100 p-2 rounded-lg text-slate-600"><FaFax /></div>
                          <div className="text-slate-800 font-bold">Fax: {activeOffice.fax}</div>
                        </div>
                      )}
                      
                      {activeOffice.whatsapp && (
                        <div className="flex items-center gap-3">
                          <div className="bg-green-50 p-2 rounded-lg text-green-600"><FaWhatsapp className="text-lg"/></div>
                          <div className="text-green-700 font-bold">{activeOffice.whatsapp}</div>
                        </div>
                      )}

                      {activeOffice.emails.length > 0 && (
                        <div className="flex items-start gap-3">
                           <div className="bg-slate-100 p-2 rounded-lg text-slate-600 mt-1"><FaEnvelope /></div>
                           <div className="space-y-1 w-full">
                            {activeOffice.emails.map((email, idx) => (
                              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between w-full pb-1 border-b border-slate-50 last:border-0">
                                <span className="text-xs font-bold text-slate-400 uppercase">{email.label}</span>
                                <a href={`mailto:${email.address}`} className="text-slate-800 font-bold hover:text-knchr-gold transition-colors">{email.address}</a>
                              </div>
                            ))}
                           </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Column 2: Map & Quick Intro */}
                <div className="space-y-6 flex flex-col">
                  {/* Google Map Embed */}
                  <div className="rounded-xl overflow-hidden shadow-inner border border-slate-200 h-[250px] w-full bg-slate-200 relative group">
                    <iframe 
                      src={activeOffice.mapUrl} 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${activeOffice.region} Map`}
                      className="absolute inset-0"
                    ></iframe>
                  </div>

                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 flex-1">
                    <h4 className="flex items-center gap-2 text-sm font-black text-knchr-gold uppercase tracking-wider mb-2">
                      <FaInfoCircle /> Overview
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {activeOffice.shortIntro}
                    </p>
                    <a href={`#story-${activeOffice.id}`} className="inline-block mt-4 text-xs font-bold bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 hover:bg-knchr-gold hover:text-slate-900 transition-colors text-slate-700">
                      Read Full Mandate ↓
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 3. REGIONAL STORIES BENTO GRID (Scroll Reveal) */}
      {/* ========================================== */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900">Regional Mandates & Impact</h2>
          <div className="w-24 h-1 bg-knchr-gold mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Explore the deep history, operational focus, and historical context driving the mission of each regional office across Kenya.</p>
        </div>

        {offices.map((office, index) => {
          // Skip head office if you just want the regional stories, or keep it. We'll keep it.
          const isEven = index % 2 === 0;

          return (
            <FadeInSection key={office.id} id={`story-${office.id}`}>
              <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                
                {/* Image Side */}
                <div className="w-full md:w-1/2 relative group perspective-1000">
                  <div className="absolute inset-0 bg-knchr-gold rounded-3xl transform translate-x-4 translate-y-4 opacity-20 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
                  <img 
                    src={office.img} 
                    alt={office.region} 
                    className="relative z-10 w-full h-[400px] object-cover rounded-3xl shadow-xl border border-slate-100 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className={`absolute bottom-8 ${isEven ? '-right-6' : '-left-6'} z-20 bg-white p-4 rounded-xl shadow-2xl border border-slate-100 hidden lg:block`}>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <FaMapMarkerAlt className="text-knchr-gold" /> {office.city}
                    </p>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 space-y-6">
                  <span className="text-knchr-gold font-extrabold text-xs uppercase tracking-widest">About The Office</span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                    {office.region}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {office.story}
                  </p>
                  
                  {/* Key Focus Areas Checklist */}
                  <div className="pt-6 border-t border-slate-200">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4">Key Focus Areas</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {office.focusAreas.map((area, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <FaCheckCircle className="text-knchr-gold mt-1 shrink-0" />
                          <span className="text-sm text-slate-700 font-medium">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Button to scroll back up to map */}
                  <button 
                    onClick={() => {
                      setActiveOfficeId(office.id);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="mt-6 inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-knchr-gold hover:text-slate-900 transition-colors"
                  >
                    View Contact Details <FaArrowRight />
                  </button>

                </div>

              </div>
            </FadeInSection>
          );
        })}

      </section>

    </div>
  );
};

export default OfficesHub;