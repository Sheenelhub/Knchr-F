import { useState, useEffect, useRef } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

// ==========================================
// CUSTOM ANIMATION WRAPPER
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
      className={`transition-all duration-1000 ease-out h-full ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// ==========================================
// FOCAL AREAS DATA
// ==========================================
const focalAreasData = [
  {
    id: 1,
    title: "Elections And Human Rights",
    description: "Kenya held its second General Election under the Constitution of Kenya 2010 against a backdrop of key legal and institutional reforms in the electoral sector.",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80", // Crowd/voting placeholder
    link: "#focal-elections"
  },
  {
    id: 2,
    title: "Prevention Of Torture",
    description: "Cruel, inhuman and degrading treatment or punishment includes a deliberate and aggravated treatment or punishment not amounting to torture, inflicted by a person.",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&w=800&q=80", // Human rights abstract placeholder
    link: "#focal-torture"
  },
  {
    id: 3,
    title: "Business And Human Rights",
    description: "Business enterprises have immense power to influence policies which may result into the violations of human rights. Even more common are violations that arise directly.",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80", // Mining/Industrial placeholder
    link: "#focal-business"
  },
  {
    id: 4,
    title: "Economic, Social & Cultural Rights",
    description: "Monitoring the progressive realization of the right to accessible and adequate housing, health, food, water, and social security for all Kenyans.",
    image: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?auto=format&fit=crop&w=800&q=80", // Social rights placeholder
    link: "#focal-ecosoc"
  },
  {
    id: 5,
    title: "Refugees & Migrant Rights",
    description: "Advocating for the protection of displaced persons, ensuring their access to basic services, documentation, and protection against refoulement.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80", // Refugees placeholder
    link: "#focal-refugees"
  },
  {
    id: 6,
    title: "Transitional Justice",
    description: "Ensuring accountability, serving justice and achieving reconciliation for victims of historical human rights violations and systemic marginalization.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80", // Justice/gavel placeholder
    link: "#focal-justice"
  }
];

const FocalAreas = () => {
  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 uppercase tracking-widest">
            Our Human Rights <span className="font-extrabold text-knchr-gold">Focal Areas</span>
          </h2>
          <p className="text-slate-500 font-medium mt-4 max-w-2xl mx-auto">
            The Following Are Some Of The Main Projects Being Undertaken By The Commission.
          </p>
          <div className="w-16 h-1 bg-knchr-gold mx-auto mt-6"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focalAreasData.map((area, index) => (
            <FadeInSection key={area.id} delay={index * 100}>
              <a 
                href={area.link} 
                className="group flex flex-col bg-slate-50 hover:bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full"
              >
                
                {/* Image Container */}
                <div className="h-56 w-full relative overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col items-center text-center flex-grow">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-4 group-hover:text-knchr-gold transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {area.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 group-hover:text-knchr-gold transition-colors mt-auto">
                    Learn More <FaAngleDoubleRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </a>
            </FadeInSection>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FocalAreas;