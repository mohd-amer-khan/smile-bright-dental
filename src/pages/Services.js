import FAQ from '../components/FAQ';

const Services = () => {
  const services = [
    { title: "General Dentistry 🦷", icon: "bi-tooth", description: "Routine check-ups, cleanings, and fillings.", details: "Includes X-rays, sealants, and preventive care.", className: "service-general" },
    { title: "Orthodontics 🦷", icon: "bi-braces", description: "Braces and clear aligners for teeth alignment.", details: "Customized treatment plans for all ages.", className: "service-ortho" },
    { title: "Cosmetic Dentistry 😁", icon: "bi-droplet", description: "Teeth whitening, veneers, and bonding.", details: "Enhance your smile with professional treatments.", className: "service-cosmetic" },
    { title: "Dental Implants 🦷", icon: "bi-tooth-fill", description: "Permanent solutions for missing teeth.", details: "High-quality implants for durability and aesthetics.", className: "service-implants" },
    { title: "Root Canal Therapy 🔧", icon: "bi-tools", description: "Treatment for infected or damaged teeth.", details: "Pain-free procedures with advanced techniques.", className: "service-root-canal" },
    { title: "Periodontal Care ❤️", icon: "bi-heart-pulse", description: "Gum disease treatment and prevention.", details: "Deep cleaning and surgical options available.", className: "service-periodontal" },
  ];

  return (
    <div className="container my-5">
      <h1>Our Services</h1>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className={`card service-card ${service.className}`}>
              <div className="card-body text-center">
                <div className="icon-circle">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h5 className="card-title mt-3">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <div className="accordion" id={`serviceAccordion${index}`}>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                        More Details
                      </button>
                    </h2>
                    <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent={`#serviceAccordion${index}`}>
                      <div className="accordion-body">{service.details}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <FAQ />
    </div>
  );
};

export default Services;