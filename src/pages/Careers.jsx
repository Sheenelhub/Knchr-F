import { useState, useEffect, useRef } from 'react';
import { 
  FaBriefcase, FaGraduationCap, FaExclamationTriangle, 
  FaChevronDown, FaChevronUp, FaTimesCircle, FaCheckCircle, 
  FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaEnvelope, FaFileDownload
} from 'react-icons/fa';

import topBanner from '../assets/cvs.webp'; 

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
      }, 30); 
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
// MASSIVE JOB LISTINGS DATA 
// (Updated with ICT, Legal, Audit, Admin, etc.)
// ==========================================
const jobsData = [
  {
    id: 1,
    title: "Information Communication and Technology Officer",
    refNo: "KNCHR/ADM/ICT/06/2024",
    status: "closed",
    location: "Nairobi with occasional travel",
    duration: "Permanent and Pensionable",
    salary: "Kshs. 100,250",
    reportsTo: "Assistant Director, ICT",
    purpose: "This position is responsible for supporting the implementation of the Commission’s ICT strategy for provision of information communication and technology services in the Commission.",
    requirements: [
      "Bachelor’s Degree in Computer Science, Information Technology, Business Information Technology or any relevant field.",
      "At least 1 year of relevant service in a comparable position from a reputable organization.",
      "Professional Certification in Cisco Certified Network Associate (CCNA).",
      "Good knowledge of Active Directory Services, software development tools, and relational database management."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf" // REPLACE WITH ACTUAL PDF PATH
  },
  {
    id: 2,
    title: "Director - Research Advocacy and Outreach",
    refNo: "KNCHR/ADM/ DRAO/01/05/2026",
    status: "closed", 
    location: "Nairobi with occasional travel",
    duration: "5 year Contract (Renewable)",
    salary: "Kshs. 406,750",
    reportsTo: "Commission Secretary / CEO",
    purpose: "This position is responsible for providing strategic leadership and oversight in the development, implementation and evaluation of policies, procedures, plans, strategies, standards and guidelines relating to the functions of research, advocacy and outreach.",
    requirements: [
      "Master’s degree in Law, Social Sciences, Peace Building/Conflict Management, Political Science or equivalent.",
      "Served in the grade of Deputy Director for a minimum period of three (3) years.",
      "Twelve years work Experience with at least five years at a supervisory level.",
      "Certificate in strategic leadership/management course lasting not less than 6 weeks."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  },
  {
    id: 3,
    title: "Deputy Director, Finance & Accounts",
    refNo: "KNCHR/ADM/ DFA/02/05/2026",
    status: "closed",
    location: "Nairobi with occasional Travel",
    duration: "5 year Contract (Renewable)",
    salary: "Kshs. 281,950",
    reportsTo: "Director – Corporate Services",
    purpose: "Responsible for coordination of all Finance and Accounting activities at the Commission, including the formulation of financial policies and budgetary control to ensure prudent management and utilization of resources.",
    requirements: [
      "Master’s Degree in Commerce, Accounting, Business Administration, Finance or equivalent.",
      "Part III of Certified Public Accountant (CPA) K and registered member of ICPAK.",
      "8 years of service in a comparable position from a reputable organization.",
      "Computer skills, with working knowledge of IFMIS and Accounting Software such as SagePastel."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  },
  {
    id: 4,
    title: "Assistant Director, Supply Chain Management",
    refNo: "KNCHR/ADM/ ADSCM/04/05/2026",
    status: "closed",
    location: "Nairobi with occasional Travel",
    duration: "Permanent and Pensionable",
    salary: "Kshs. 205,850",
    reportsTo: "Deputy Director Supply Chain Management",
    purpose: "Responsible for coordination and implementation of policies, procedures, plans, strategies, standards and guidelines relating to the functions of Supply Chain Management to enhance efficiency.",
    requirements: [
      "Bachelor’s degree in Supply Chain Management, Logistics, Purchasing or equivalent.",
      "Certified Procurement and Supply Professional of Kenya (CPSP-K) Course.",
      "Must be a full member of KISM with a valid Professional Practicing License.",
      "Seven (7) years of experience with a Bachelor's, or Five (5) years with a Master's degree."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  },
  {
    id: 5,
    title: "Internal Audit and Risk Officer",
    refNo: "KNCHR/ADM/IARO/08/2025",
    status: "closed",
    location: "Nairobi with occasional travel",
    duration: "Permanent and Pensionable",
    salary: "Kshs. 100,025",
    reportsTo: "Assistant Director – Internal Audit and Risk",
    purpose: "This position is responsible for provision of support in implementation of internal audit and risk management functions to enhance the effectiveness and efficiency of the Commission.",
    requirements: [
      "Bachelor’s degree in Finance, Accounting, Business Administration, Mathematics, Actuarial Science, Statistics, Economics or equivalent.",
      "Passed Part I of CPA, Certified Internal Auditor (CIA), or relevant professional qualification.",
      "1 year of service, or similar experience in a comparable position.",
      "Knowledge of relevant legislation and global audit standards."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  },
  {
    id: 6,
    title: "Legal Officer (KNCHR 6)",
    refNo: "KNCHR/ADM/LO/02/2025",
    status: "closed",
    location: "Nairobi with occasional travel",
    duration: "Permanent and Pensionable",
    salary: "Kshs. 100,250",
    reportsTo: "Deputy Director, Legal Services",
    purpose: "This position is responsible for offering support to the Legal Services Division with regard to provision of legal services to the Commission including drafting pleadings and court attendance.",
    requirements: [
      "Bachelor’s degree in Law from a recognized university and a Post graduate Diploma in Law from the Kenya School of Law.",
      "1 year of service in a comparable position from a reputable organization.",
      "Must be an Advocate of the High Court of Kenya with a current practicing certificate.",
      "Conversant and understanding of human rights principles."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  },
  {
    id: 7,
    title: "Data Analyst",
    refNo: "KNCHR/PME/SAO/10/2023",
    status: "closed",
    location: "Nairobi",
    duration: "8 months Contract",
    salary: "Kshs. 64,614",
    reportsTo: "Project Lead",
    purpose: "Responsible for supporting the project lead in executing operational and administrative tasks under the project on 'Advancing Human Security & Community Trust' through data collection, cleaning, and statistical analysis.",
    requirements: [
      "Bachelor's degree in data science, statistics, social sciences, or a related discipline.",
      "One (1) year solid experience in data analysis or research especially related to human rights.",
      "Proficiency in data analysis software and tools (e.g., Excel, SPSS, STRATA, R, Python).",
      "Strong attention to detail and commitment to data accuracy and integrity."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  },
  {
    id: 8,
    title: "Human Rights Monitors (6 Positions)",
    refNo: "KNCHR/MONITORS/2024",
    status: "closed",
    location: "Mandera, Wajir and Garissa",
    duration: "8 months Contract",
    salary: "Kshs. 37,666 (Stipend)",
    reportsTo: "Regional Coordinator",
    purpose: "Support KNCHR to Monitor the Human Rights situation in borderland counties through collecting information and observation targeting the community, state and non-state actors.",
    requirements: [
      "KCSE Grade D+ and a Certificate in a related field.",
      "A minimum of three (3) years’ active experience in the field of human rights, research or social work.",
      "Resident in one of the identified counties of interest.",
      "Good understanding of the local languages in addition to English and Kiswahili."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  },
  {
    id: 9,
    title: "Transport Assistant / Senior Driver",
    refNo: "KNCHR/ADM/TA/05/2025",
    status: "closed",
    location: "Nairobi with occasional travel",
    duration: "Permanent and Pensionable",
    salary: "Kshs. 64,614",
    reportsTo: "Administration Officer",
    purpose: "Support the daily operations of the transport department by ensuring the safe and efficient transfer of the Commission’s staff and visitors, vehicle maintenance, and route planning.",
    requirements: [
      "Kenya Certificate of Secondary Education (D+) or equivalent grade.",
      "Clean, valid Kenyan driving license (Classes B, C, C1, D2).",
      "Passed Occupational Trade Test I for Drivers.",
      "Defensive Driving Certificate from a recognized institution.",
      "3 years relevant work experience with a valid Certificate of Good Conduct."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  },
  {
    id: 10,
    title: "Member of the Audit and Risk Committee",
    refNo: "KNCHR/ADM/ ACM /01/2022",
    status: "closed",
    location: "Nairobi (Part-Time)",
    duration: "3 year Contract",
    salary: "As determined by SRC",
    reportsTo: "KNCHR Commission",
    purpose: "Assist the Kenyan National Commission on Human Rights to fulfil its oversight responsibilities in respect to financial and governance reporting, process and systems internal control, risk management, and internal audit.",
    requirements: [
      "Bachelor’s Degree from a university recognized in the Republic of Kenya.",
      "Served in Senior Management level for at least 10 years or Board with proven experience.",
      "A member in good standing of a professional body including ICPAK, IIA, ICSK, LSK, among others.",
      "Knowledge in Governance, Public Administration, Law, Human Rights, or Finance."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  },
  {
    id: 11,
    title: "Assistant Director Regional Services",
    refNo: "KNCHR/ADRS/05/05/2026",
    status: "closed",
    location: "Nyahururu",
    duration: "Permanent and Pensionable",
    salary: "Kshs. 205,850",
    reportsTo: "Director Regional Services",
    purpose: "Responsible for leading and guiding the development and implementation of policies, procedures, plans, strategies, standards and guidelines and programmes in relation to the functions of regional services.",
    requirements: [
      "Bachelors’ degree in social sciences, Law, Peace Building, Political Science, or Development Studies.",
      "Certificate in Strategic Leadership Development Course lasting not less than four (4) weeks.",
      "Bachelor’s degree from a recognized institution with seven (7) years of experience OR Master’s degree with five (5) years’ experience.",
      "For advocates – Membership with LSK."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  },
  {
    id: 12,
    title: "Senior Regional Services Officer – Kisumu",
    refNo: "KNCHR/ADM/ RSO /06/05/2026",
    status: "closed",
    location: "Kisumu with occasional travel",
    duration: "Permanent and Pensionable",
    salary: "Kshs. 141,950",
    reportsTo: "Assistant Director / Regional Coordinator",
    purpose: "Responsible for the implementation of programs and practices that support region-specific best practices that contribute to the realization of Human Rights within the Western Region.",
    requirements: [
      "Bachelor’s Degree in Social Sciences or an equivalent from a recognized university.",
      "Be admitted as an Advocate of the High Court of Kenya (for lawyers).",
      "3 years of service in a comparable position from a reputable organization.",
      "Good understanding of human rights and other relevant laws."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  },
  {
    id: 13,
    title: "Deputy Director- Economic, Social and Cultural Rights",
    refNo: "KNCHR/ADM/ DD, ECOSOC/01/12/2025",
    status: "closed",
    location: "Nairobi with occasional travel",
    duration: "5 Year Contract (Renewable)",
    salary: "Kshs. 281,950",
    reportsTo: "Director, Research Advocacy and Outreach",
    purpose: "Responsible for the provision of leadership in conceptualization, planning and implementation of programmes and activities aimed at the achievement of the commissions’ mandate of enhancing the realization of ECOSOC rights.",
    requirements: [
      "Master’s degree in International Relations and Diplomacy, Law, Social Sciences or equivalent.",
      "Eight (8) years’ experience of which three (3) should be at a senior level with supervisory role.",
      "Strategic Leadership Development certificate lasting not less than 6 weeks.",
      "Demonstrable knowledge in review of legislation and policy formulation."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  },
  {
    id: 14,
    title: "Public Education and Training Officer",
    refNo: "KNCHR/ADM/PET/04/12/2025",
    status: "closed",
    location: "Nairobi (Deployable)",
    duration: "Permanent and Pensionable",
    salary: "Kshs. 100,250",
    reportsTo: "Deputy Director, Public Education and Training",
    purpose: "Supporting the delivery of information, education, communication and sensitization to the public, state and non-state actors on human rights issues.",
    requirements: [
      "Bachelor’s degree in Political science, Sociology, Statistics, Education or equivalent social sciences.",
      "At least 1 year of relevant experience in a comparable position.",
      "Demonstrable experience in conducting actual public training programmes.",
      "Skills in developing relevant educative short messages for mainstream or social media."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  },
  {
    id: 15,
    title: "Accounts Clerk",
    refNo: "KNCHR/ADM/AC/04/2025",
    status: "closed",
    location: "Nyahururu / Regional Offices",
    duration: "Permanent & Pensionable",
    salary: "Kshs. 49,193",
    reportsTo: "Assistant Director Regional Services",
    purpose: "Preparation of books of accounts, carrying out bank reconciliation, monitoring regional budgetary expenditure and making timely payment for services and goods.",
    requirements: [
      "Diploma in Business Administration or Business Management or an equivalent.",
      "1 year of service in a comparable position from a reputable organization.",
      "Part I of Certified Public Accountant (C.P.A) (K) or ACCA.",
      "Knowledge of Generally Accepted Accounting Principles (GAAP)."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  },
  {
    id: 16,
    title: "Administration Officer",
    refNo: "KNCHR/ADM/HRAO/01/2024",
    status: "closed",
    location: "Nairobi with occasional travel",
    duration: "Permanent and Pensionable",
    salary: "Kshs. 100,250",
    reportsTo: "Deputy Director, Human Resources and Administration",
    purpose: "Supporting the implementation of the organization’s logistical and administration strategies including fleet management, facilities, and security management.",
    requirements: [
      "Bachelor’s degree in business administration, human resources, public administration or related field.",
      "At least one (1) year of relevant service in a comparable position.",
      "Demonstrable experience in the supervision and management of fleet and logistics.",
      "Knowledge of government standards and requirements on management of assets."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  },
  {
    id: 17,
    title: "Senior Complaints and Investigations Officer",
    refNo: "KNCHR/CID/01/2024",
    status: "closed",
    location: "Nairobi with occasional travel",
    duration: "Permanent and Pensionable",
    salary: "Kshs. 141,950",
    reportsTo: "Deputy Director, Complaints and Investigation",
    purpose: "Responsible for the implementation of the organization’s complaints strategy and processing complaints on human rights violations falling within the Mandate of the Commission.",
    requirements: [
      "Bachelor’s degree in law from a recognized university.",
      "Post graduate Diploma in law (from Kenya school of law) and Advocate of the Kenya High Court.",
      "3 years of service in a comparable position from a reputable organization.",
      "Analytical skills for complaints handling/processing skills."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  },
  {
    id: 18,
    title: "Complaints and Investigations Clerk",
    refNo: "KNCHR/CID/02/2024",
    status: "closed",
    location: "Nairobi with occasional travel",
    duration: "Permanent and Pensionable",
    salary: "Kshs. 49,193",
    reportsTo: "Deputy Director, Complaints and Investigation",
    purpose: "Responsible for the management of the directorate’s registry to ensure efficient documentation and processing of all complaints received by KNCHR.",
    requirements: [
      "Diploma in information management or records management or equivalent.",
      "1-year relevant experience in a similar position.",
      "Knowledge of general information management and handling sensitive documents.",
      "Computer literacy and ability to work in stressful environments."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  },
  {
    id: 19,
    title: "Senior Public Affairs & Communication Officer",
    refNo: "KNCHR/ADM/PAC/08/15",
    status: "closed",
    location: "Nairobi with occasional travel",
    duration: "Permanent and Pensionable",
    salary: "Kshs. 205,850",
    reportsTo: "Deputy Commission Secretary",
    purpose: "Oversee, conceptualize, design and implement internal and external communication strategies and programmes that advance the commission strategic objectives.",
    requirements: [
      "Master’s degree in Social Sciences, Communications, Journalism or Public Relations.",
      "Eight years relevant experience in a comparable position.",
      "Member of the Public Relation Society of Kenya (PRSK).",
      "Excellent communication (written and oral), interpersonal and negotiation skills."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  },
  {
    id: 20,
    title: "Consultancy: National Action Plan on Business & Human Rights",
    refNo: "KNCHR/CONSULTANCY/NAP-BHR/2026",
    status: "closed",
    location: "Remote / Field Based",
    duration: "13 Weeks",
    salary: "Consultancy Rate",
    reportsTo: "KNCHR & State Department of Justice",
    purpose: "Review and Thematic Research for the National Action Plan on Business and Human Rights (NAP-BHR) across 5 lots including Land, Environment, Labour, Tech, and State-Business Nexus.",
    requirements: [
      "Master’s degree or higher in a relevant field (Law, Public Policy, Governance, Economics, etc.).",
      "Minimum 7 years’ experience in the thematic area.",
      "Demonstrated understanding of UNGPs and business and human rights frameworks.",
      "Strong research, analytical and stakeholder-engagement capabilities."
    ],
    downloadAdvertUrl: "/downloads/placeholder-advert.pdf"
  }
];

// ==========================================
// MAIN COMPONENT
// ==========================================
const Careers = () => {
  const [activeTab, setActiveTab] = useState('employment');
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJob = (id) => {
    if (expandedJob === id) {
      setExpandedJob(null);
    } else {
      setExpandedJob(id);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans pb-20 overflow-x-hidden">
      
      {/* ========================================== */}
      {/* 1. HERO HEADER                             */}
      {/* ========================================== */}
      <section className="relative h-[45vh] min-h-[350px] w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${topBanner})`, backgroundColor: '#1e293b' }}
        >
          <div className="absolute inset-0 bg-slate-900/85 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <span className="inline-block bg-knchr-gold text-slate-900 font-extrabold text-sm px-4 py-2 rounded-full uppercase tracking-widest mb-6 shadow-xl">
            Join Our Team
          </span>
          <TypewriterHeading 
            text="Careers & Opportunities" 
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg" 
          />
          <p className="text-lg text-slate-300 font-medium mt-4 max-w-2xl mx-auto">
            Build a rewarding career advocating for justice, equality, and human dignity across the Republic of Kenya.
          </p>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. TABBED NAVIGATION                       */}
      {/* ========================================== */}
      <section className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-2 flex flex-col sm:flex-row border border-slate-100">
          <button 
            onClick={() => setActiveTab('employment')}
            className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-extrabold text-sm md:text-base transition-all ${
              activeTab === 'employment' 
                ? 'bg-slate-900 text-white shadow-md' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <FaBriefcase className={activeTab === 'employment' ? 'text-knchr-gold' : ''} />
            Employment Opportunities
          </button>
          <button 
            onClick={() => setActiveTab('internships')}
            className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-extrabold text-sm md:text-base transition-all ${
              activeTab === 'internships' 
                ? 'bg-slate-900 text-white shadow-md' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <FaGraduationCap className={activeTab === 'internships' ? 'text-knchr-gold' : ''} />
            Internship Programme
          </button>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. DYNAMIC CONTENT AREA                    */}
      {/* ========================================== */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 min-h-[50vh]">
        
        {/* --- TAB 1: EMPLOYMENT --- */}
        {activeTab === 'employment' && (
          <FadeInSection className="space-y-8">
            
            {/* ANTI-FRAUD WARNING BANNER */}
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-2xl shadow-sm flex items-start gap-4">
              <FaExclamationTriangle className="text-red-600 text-3xl shrink-0 mt-1" />
              <div>
                <h3 className="font-extrabold text-red-900 text-lg mb-1">Important Recruitment Notice</h3>
                <p className="text-red-800 text-sm md:text-base leading-relaxed">
                  KNCHR does <strong>NOT</strong> have recruitment agents and does <strong>NOT</strong> charge a fee at any stage of its recruitment process (application, interview, processing, or training). Please report any incident of extortion to KNCHR or to the Police immediately.
                </p>
              </div>
            </div>

            {/* INTRO TEXT */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-slate-700 leading-relaxed">
              <p className="mb-4">
                The Kenya National Commission on Human Rights (KNCHR) is an independent National Human Rights Institution created under Article 59 of the Constitution of Kenya 2010. We fulfill our mandate through five Directorates: Complaints and Investigations, Research, Advocacy and Outreach, Legal Services, Regional Services, and Corporate Services.
              </p>
              <p className="font-medium text-sm text-slate-500">
                <em>We are an equal opportunity employer committed to implementing the provisions of Chapter 232 (1) on fair competition, merit, and representation. Qualified intersex persons, persons with disabilities, marginalized communities, and minority groups are strongly encouraged to apply.</em>
              </p>
            </div>

            {/* JOB ACCORDIONS LIST */}
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Current & Past Listings</h3>
              
              {jobsData.map((job) => {
                const isClosed = job.status === 'closed';
                const isExpanded = expandedJob === job.id;

                return (
                  <div key={job.id} className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isExpanded ? 'shadow-xl border-slate-300' : 'shadow-sm border-slate-100 hover:border-slate-300'}`}>
                    
                    {/* Header (Always Visible) */}
                    <button 
                      onClick={() => toggleJob(job.id)}
                      className="w-full flex flex-col md:flex-row items-start md:items-center justify-between p-6 gap-4 text-left focus:outline-none"
                    >
                      <div className="flex-1 pr-4">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded">
                            {job.refNo}
                          </span>
                        </div>
                        <h4 className={`text-xl md:text-2xl font-extrabold ${isClosed ? 'text-slate-600' : 'text-slate-900'}`}>
                          {job.title}
                        </h4>
                      </div>
                      
                      <div className="flex items-center justify-between w-full md:w-auto gap-6 shrink-0">
                        {/* Status Badge */}
                        {isClosed ? (
                          <div className="flex items-center gap-2 bg-slate-100 text-slate-500 px-4 py-2 rounded-full font-bold text-sm">
                            <FaTimesCircle /> CLOSED
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-bold text-sm border border-green-200">
                            <FaCheckCircle /> OPEN
                          </div>
                        )}
                        
                        {/* Expand Icon */}
                        <div className="text-slate-400">
                          {isExpanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                        </div>
                      </div>
                    </button>

                    {/* Expandable Body */}
                    <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50">
                        
                        {/* Quick Stats Strip */}
                        <div className="flex flex-wrap gap-y-4 gap-x-8 py-6 text-sm text-slate-700 font-medium">
                          <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-knchr-gold" /> {job.location}</span>
                          <span className="flex items-center gap-2"><FaClock className="text-knchr-gold" /> {job.duration}</span>
                          <span className="flex items-center gap-2"><FaMoneyBillWave className="text-knchr-gold" /> {job.salary}</span>
                          <span className="flex items-center gap-2"><FaUser className="text-knchr-gold" /> Reports to: {job.reportsTo}</span>
                        </div>

                        {/* Purpose */}
                        <div className="mb-6">
                          <h5 className="font-extrabold text-slate-900 mb-2 uppercase tracking-wide text-sm">Job Purpose</h5>
                          <p className="text-slate-600 leading-relaxed">{job.purpose}</p>
                        </div>

                        {/* Requirements */}
                        <div className="mb-8">
                          <h5 className="font-extrabold text-slate-900 mb-3 uppercase tracking-wide text-sm">Minimum Qualifications</h5>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-slate-600">
                                <FaCheckCircle className="text-knchr-gold mt-1 shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Area (Apply & Download PDF) */}
                        <div className="bg-slate-100 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
                          
                          <div className="flex flex-col gap-3 w-full md:w-auto text-center md:text-left">
                            <p className="text-sm text-slate-600 font-medium">
                              {isClosed 
                                ? "The application window for this position has closed." 
                                : "Please apply online through the KNCHR recruitment portal."}
                            </p>
                            
                            {/* DOWNLOAD ADVERT LINK */}
                            {job.downloadAdvertUrl && (
                              <a 
                                href={job.downloadAdvertUrl} 
                                download 
                                className="inline-flex items-center justify-center md:justify-start gap-2 text-knchr-gold hover:text-amber-600 font-extrabold text-sm transition-colors group"
                              >
                                <FaFileDownload className="group-hover:-translate-y-1 transition-transform" size={16} /> 
                                Click Here to Download Advert Document
                              </a>
                            )}
                          </div>

                          <button 
                            disabled={isClosed}
                            className={`px-8 py-3 rounded-xl font-extrabold transition-all shrink-0 w-full md:w-auto ${
                              isClosed 
                                ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                                : 'bg-knchr-gold text-slate-900 hover:bg-amber-400 shadow-lg hover:shadow-amber-500/20'
                            }`}
                          >
                            {isClosed ? 'Closed' : 'Apply Now'}
                          </button>
                        </div>

                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </FadeInSection>
        )}

        {/* --- TAB 2: INTERNSHIPS --- */}
        {activeTab === 'internships' && (
          <FadeInSection className="space-y-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-amber-50 text-knchr-gold p-4 rounded-2xl">
                  <FaGraduationCap size={40} />
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-slate-900">The KNCHR Internship Programme</h3>
                  <p className="text-slate-500 font-medium mt-1">Nurturing the next generation of human rights defenders.</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
                <p>
                  Since its inception in 2003, the KNCHR initiated and implemented an internship programme. This programme is born out of the realization that internships are a significant way in which to lure new and youthful talent from students to the Commission while enabling them to meet their short term needs and assistance in the career learning process. 
                </p>
                <p>
                  Student-interns bring with them enthusiasm and current theoretical knowledge that is highly useful and value-adding to our work. The programme is a product of careful research and planning. Fresh graduates are recruited to the <strong>one-year programme</strong> and are attached to various departments to gain important lessons on the operations and functions of a National Human Rights Institution. <em>International students are also granted short term internships.</em>
                </p>

                <h4 className="text-xl font-extrabold text-slate-900 mt-8 mb-4 border-b pb-2">Programme Objectives</h4>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex items-start gap-4">
                    <div className="bg-slate-900 p-1.5 rounded-full text-knchr-gold mt-1 shrink-0"><FaCheckCircle size={12} /></div>
                    <span><strong>Exposure & Understanding:</strong> To expose interns to the work of the National Commission thereby giving them an in-depth understanding of the Commission’s mandate, objectives, opportunities and challenges.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-slate-900 p-1.5 rounded-full text-knchr-gold mt-1 shrink-0"><FaCheckCircle size={12} /></div>
                    <span><strong>Practical Experience:</strong> To provide a framework by which students from diverse academic backgrounds are assigned to the Commission where their educational experience can be enhanced through practical assignments.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-slate-900 p-1.5 rounded-full text-knchr-gold mt-1 shrink-0"><FaCheckCircle size={12} /></div>
                    <span><strong>Mutual Benefit:</strong> To provide the Commission with the assistance of qualified students who have specialised in various research and academic disciplines related to different aspects of human rights.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-slate-900 p-1.5 rounded-full text-knchr-gold mt-1 shrink-0"><FaCheckCircle size={12} /></div>
                    <span><strong>Advocacy Creation:</strong> To create active supporters and advocates of human rights who, through their network, raise awareness of the work and influence of the KNCHR nationally and internationally.</span>
                  </li>
                </ul>

                {/* Application Call to Action */}
                <div className="mt-10 bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-knchr-gold opacity-10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
                  
                  <div className="relative z-10">
                    <h4 className="text-xl font-extrabold text-knchr-gold mb-2 m-0">How to Apply</h4>
                    <p className="text-slate-300 m-0 text-sm max-w-xl">
                      Internship vacancies are announced on a need-be basis through daily newspapers, our website, and our partners. For general enquiries regarding the programme, please contact us via email.
                    </p>
                  </div>
                  
                  <a href="mailto:internships@knchr.org" className="relative z-10 bg-knchr-gold text-slate-900 px-6 py-4 rounded-xl font-extrabold flex items-center gap-3 hover:bg-amber-400 transition-all shrink-0 no-underline shadow-lg">
                    <FaEnvelope /> internships@knchr.org
                  </a>
                </div>

              </div>
            </div>
          </FadeInSection>
        )}

      </section>

    </div>
  );
};

// Helper icon component used in the jobs mapping
const FaUser = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
);

export default Careers;