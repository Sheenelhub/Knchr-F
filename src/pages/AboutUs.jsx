import { useState, useEffect, useRef } from 'react';
import { 
  FaBalanceScale, FaGlobeAfrica, FaEye, FaBullseye, 
  FaUsers, FaShieldAlt, FaCheckDouble, FaHandsHelping,
  FaGavel, FaLightbulb
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
// DATA ARRAYS
// ==========================================
const coreValues = [
  { title: 'Participation', icon: FaUsers, desc: 'Engaging citizens actively in human rights discourse.' },
  { title: 'Independence', icon: FaBalanceScale, desc: 'Operating free from external control or influence.' },
  { title: 'Integrity', icon: FaShieldAlt, desc: 'Upholding the highest moral and ethical standards.' },
  { title: 'Inclusion', icon: FaHandsHelping, desc: 'Ensuring no one is left behind, embracing diversity.' },
  { title: 'Accountability', icon: FaCheckDouble, desc: 'Taking responsibility for our actions and mandates.' }
];

const leadershipData = [
  {
    id: 'claris-ogangah',
    name: 'Claris Ogangah',
    title: 'Chairperson',
    tag: 'Commission Leadership',
     img: '/images/Claris Ogangah - Chairperson.jpeg', 
    bio: 'Claris Ogangah is a distinguished Human Rights Specialist, Advocate of the High Court, and Development Leader. She has over two decades of extensive experience in advancing social justice, gender equality, and the rule of law in Kenya and the wider region.\n\nA seasoned legal practitioner holding a Master of Laws (LL.M) from the University of Nairobi, she served as the Deputy Head of the Office of the High Commissioner for Human Rights (OHCHR) in Kenya. Her key achievements include providing the strategic leadership that led to the development and adoption of Kenya’s first-ever National Action Plan on Business and Human Rights. She was instrumental in shaping the government\'s pledges during the 2023 commemoration of the 75th anniversary of the Universal Declaration of Human Rights.'
  },
  {
    id: 'raymond-nyeris',
    name: 'Dr. Raymond Nyeris, MBS',
    title: 'Vice-Chairperson',
    tag: 'Commission Leadership',
    img: '/images/COMM NYERIS.jpg', // Placeholder
    bio: 'Dr. Raymond Nyeris is the Vice Chairperson and a Commissioner of the KNCHR. He holds a PhD in Policy studies and Education Management from Masinde Muliro University, a Master in Educational Management and Policy studies from Kenyatta University, and a Bachelor of Laws from the University of Nairobi.\n\nHe has over 15 years experience in Policy and Governance matters specialising in Public Administration, Dispute resolution, Education management and Human Rights Advocacy in Public and Private sectors. He worked as an Executive Member in the Inter-governmental Relations Technical Committee (2015–2020) where he championed Alternative Dispute Resolution. Dr. Nyeris has the integrity, experience and passion to advance the Human Rights agenda.'
  },
  {
    id: 'marion-mutugi',
    name: 'Prof. Marion Wanjiku Mutugi, EBS',
    title: 'Commissioner',
    tag: 'Commission Member',
    img:'/images/WANJIKU-MUTUGI.jpg', // Placeholder
    bio: 'Prof. Marion Mutugi who graduated with a PhD from the University of Edinburgh in 1993 is an accomplished scholar. She has been involved in research particularly at the confluence of biomedical and social sciences and is widely published in the areas of genetics, ethics and human rights.\n\nIn addition, she is a seasoned academician in various tertiary institutions, through whose hands have passed many students from the region. One of her major passions is knowledge transfer of research findings to communities particularly in the economic and social rights. Prof Mutugi endeavours to be faithful to her motto: "what\'s worth doing is worth doing well".'
  },
  {
    id: 'sara-bonaya',
    name: 'Hon. Sara Talaso Bonaya',
    title: 'Commissioner',
    tag: 'Commission Member',
    img: '/images/COMMISSIONER SARAH.jpg',// Placeholder
    bio: 'Hon. Sara Talaso Bonaya holds a Masters Degree in Health Management, Policy and Planning from the University of Leeds (UK), and Diplomas in Nursing and Midwifery from KMTC. She has served in the Ministry of Health for 21 years in different capacities.\n\nCommissioner Sara was later nominated as a Member of Parliament to the East African Legislative Assembly (EALA) where she served for 10 years. She participated in the formulation of numerous regional laws geared towards promoting regional integration, including developing a regional HIV Bill and Gender Bill. She is passionate about advancing health rights, gender equality, and social justice.'
  },
  {
    id: 'dennis-wamalwa',
    name: 'Dr. Dennis Nyongesa Wamalwa',
    title: 'Commissioner',
    tag: 'Commission Member',
    img: '/images/COMM_ WAMALWA.jpg', // Placeholder
    bio: 'Dr. Dennis Wamalwa, Ph.D. is a governance, community organizer, social justice advocate, gender specialist and human rights defender with a wealth of experience in advocacy initiatives. He is also a Board Member and the Vice-Chairperson of the Intersex Persons Society of Kenya (IPSK).\n\nHe holds a PhD in Peace and Conflict Studies from Masinde Muliro University of Science and Technology (MMUST) and a Masters of Arts in Counselling Studies from The University of Manchester (UK). He has to his credit, 20 publications in referred journals with high impact factors and has supervised over 25 postgraduate Master’s students to completion.'
  },
  {
    id: 'bernard-mogesa',
    name: 'Dr. Bernard Mogesa, PhD, CBS',
    title: 'Commission Secretary / CEO',
    tag: 'Secretariat Leadership',
    img: '/images/DR_ MOGESA_1.jpg', // Placeholder
    bio: 'A passionate and visionary leader who within a span of 7 years has risen within the KNCHR ranks from Head of Public Education and Training; Head of Research and Compliance and Deputy Commission Secretary and now the Commission Secretary.\n\nA teacher by profession, Dr. Mogesa began his career as a high school Principal before venturing to his calling of working on and with learners with disability. A doctorate degree holder with a keen interest in teaching, writing and training, he is a Certified Public Mediator and accredited trainer in the field of Human Rights. He has over time acquired vast experience at an advisory and supervisory capacity in several African countries.'
  }
];

// ==========================================
// MAIN COMPONENT
// ==========================================
const AboutUs = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans pb-20 overflow-x-hidden">
      
      {/* ========================================== */}
      {/* 1. HERO HEADER                             */}
      {/* ========================================== */}
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1920&q=80')` }}
        >
          <div className="absolute inset-0 bg-slate-900/85 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <span className="inline-block bg-knchr-gold text-slate-900 font-extrabold text-sm px-4 py-2 rounded-full uppercase tracking-widest mb-6 shadow-xl">
            Who We Are
          </span>
          <TypewriterHeading 
            text="About KNCHR" 
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg" 
          />
          <p className="text-xl md:text-2xl text-knchr-gold font-bold italic mt-4">
            "Haki kwa wote, kila wakati"
          </p>
          <p className="text-slate-300 font-medium mt-2 uppercase tracking-widest text-sm">
            (Human Rights for all, all the time)
          </p>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. SECTION 1: ESTABLISHMENT & MANDATE      */}
      {/* ========================================== */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Background Block */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
              <FaGlobeAfrica className="text-knchr-gold" /> Establishment & Background
            </h3>
            <div className="prose prose-lg text-slate-600 max-w-none leading-relaxed">
              <p>
                The <strong>Kenya National Commission on Human Rights (KNCHR)</strong> is an independent National Human Rights Institution created by <em>Article 59 of the Constitution of Kenya 2010</em> and established through the KNCHR Act of Parliament (the Kenya National Commission on Human Rights Act, 2011). It is the state’s lead agency in the promotion and protection of human rights.
              </p>
              
              <div className="bg-slate-50 border-l-4 border-knchr-gold p-6 my-8 rounded-r-xl">
                <h4 className="font-bold text-slate-900 mb-2 mt-0">International Status</h4>
                <p className="m-0 text-base">
                  The operations of the KNCHR are guided by the United Nations-approved Paris Principles. The National Commission has been accredited by the International Co-ordinating Committee of National Human Rights Institutions (ICC) in Geneva as an <strong>‘A status’</strong> institution. The KNCHR is also a proud member of the Network of African National Human Rights Institutions (NANHRI).
                </p>
              </div>

              <h4 className="font-bold text-slate-900 text-xl mt-8 mb-4">Our Core Mandate</h4>
              <p>The Commission plays two key broad mandates:</p>
              <ul className="list-none pl-0 space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <div className="bg-slate-900 p-2 rounded text-knchr-gold mt-1"><FaEye size={12} /></div>
                  <span>It acts as a <strong>watch-dog</strong> over the Government in the area of human rights.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-slate-900 p-2 rounded text-knchr-gold mt-1"><FaLightbulb size={12} /></div>
                  <span>Provides key <strong>leadership</strong> in moving the country towards a human rights state.</span>
                </li>
              </ul>
              <p className="mt-6 text-base bg-amber-50 p-5 rounded-xl border border-amber-100 text-slate-800">
                The main goal of KNCHR is to investigate and provide redress for human rights violations, to research and monitor the compliance of human rights norms and standards, to conduct human rights education, to facilitate training, campaigns and advocacy on human rights as well as collaborate with other stakeholders in Kenya.
              </p>
            </div>
          </div>

          {/* Side Cards: Vision, Mission, Goal */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <FadeInSection delay={100} className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl border-b-4 border-knchr-gold">
              <FaEye className="text-knchr-gold text-4xl mb-4" />
              <h3 className="text-xl font-extrabold uppercase tracking-wide mb-3">Our Vision</h3>
              <p className="text-slate-300 font-medium leading-relaxed">
                A Society that Respects and Upholds Human Rights and Fundamental Freedoms.
              </p>
            </FadeInSection>

            <FadeInSection delay={200} className="bg-white rounded-3xl p-8 shadow-xl border-b-4 border-knchr-gold border border-slate-100">
              <FaBullseye className="text-knchr-gold text-4xl mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-wide mb-3">Our Mission</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                To protect and promote human rights and freedoms through policy, law, and practice.
              </p>
            </FadeInSection>

            <FadeInSection delay={300} className="bg-white rounded-3xl p-8 shadow-xl border-b-4 border-knchr-gold border border-slate-100">
              <FaGavel className="text-knchr-gold text-4xl mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-wide mb-3">Our Goal</h3>
              <p className="text-slate-600 font-medium leading-relaxed mb-4">
                Increased enjoyment of human rights and fundamental freedoms.
              </p>
              <div className="space-y-2 text-xs font-bold text-slate-500">
                <p className="p-2 bg-slate-50 rounded">SO1: Education & Capacity Building</p>
                <p className="p-2 bg-slate-50 rounded">SO2: Compliance & Observance</p>
                <p className="p-2 bg-slate-50 rounded">SO3: Redress & Access to Justice</p>
                <p className="p-2 bg-slate-50 rounded">SO4: Institutional Effectiveness</p>
              </div>
            </FadeInSection>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 3. CORE VALUES GRID                        */}
      {/* ========================================== */}
      <section className="bg-white py-20 border-y border-slate-200 mb-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Core Values</h2>
          <p className="text-slate-500 max-w-3xl mx-auto mb-12">
            We base our values on the internationally recognized principles of universality, inalienability, indivisibility, interdependence and inter-relatedness of human rights.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <FadeInSection key={idx} delay={idx * 100} className="bg-slate-50 rounded-2xl p-6 text-center hover:bg-slate-900 hover:text-white transition-colors duration-300 group shadow-sm border border-slate-100">
                  <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:bg-knchr-gold transition-colors">
                    <Icon className="text-2xl text-slate-900" />
                  </div>
                  <h4 className="font-extrabold text-lg mb-2">{val.title}</h4>
                  <p className="text-sm text-slate-500 group-hover:text-slate-300">{val.desc}</p>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. LEADERSHIP & SECRETARIAT (Bento Style)  */}
      {/* ========================================== */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        <div className="text-center mb-16">
          <TypewriterHeading 
            text="Commissioners & Secretariat" 
            className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4" 
          />
          <div className="w-24 h-1 bg-knchr-gold mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Meet the dedicated leadership team guiding the strategic vision and daily operations of the Kenya National Commission on Human Rights.
          </p>
        </div>

        {leadershipData.map((leader, index) => {
          // Alternate the layout side based on odd/even index
          const isEven = index % 2 === 0;

          return (
            <FadeInSection key={leader.id} delay={100}>
              <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 lg:gap-16 items-center`}>
                
                {/* Image Side */}
                <div className="w-full md:w-5/12 relative group perspective-1000">
                  <div className="absolute inset-0 bg-knchr-gold rounded-3xl transform translate-x-4 translate-y-4 opacity-20 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
                  <img 
                    src={leader.img} 
                    alt={leader.name} 
                    className="relative z-10 w-full aspect-[4/5] object-cover rounded-3xl shadow-xl border border-slate-100 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  {/* Decorative Title Badge */}
                  <div className={`absolute bottom-8 ${isEven ? '-right-6' : '-left-6'} z-20 bg-slate-900 text-white p-5 rounded-xl shadow-2xl hidden lg:block border-l-4 border-knchr-gold`}>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{leader.tag}</p>
                    <p className="text-lg font-bold text-white">{leader.title}</p>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-7/12 space-y-6">
                  <div>
                    <span className="text-knchr-gold font-extrabold text-sm uppercase tracking-widest block mb-2">{leader.title}</span>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                      {leader.name}
                    </h3>
                  </div>
                  
                  {/* Bio formatting: we split the string by newlines to render paragraphs properly */}
                  <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                    {leader.bio.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                </div>

              </div>
            </FadeInSection>
          );
        })}

      </section>

    </div>
  );
};

export default AboutUs;