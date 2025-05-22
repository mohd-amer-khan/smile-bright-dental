import FAQ from '../components/FAQ';

const About = () => (
  <div className="container my-5">
    <h1>About Us</h1>
    <div className="about-clinic mb-5">
      <h2>
        <span className="icon-circle me-2">
          <i className="bi bi-hospital"></i>
        </span>
        Our Clinic
      </h2>
      <p>Founded in 2010, SmileBright Dental has been a cornerstone of dental care in the community, offering personalized treatments with cutting-edge technology.</p>
    </div>
    <h2>Our Practitioners</h2>
    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="card practitioner-card practitioner-jane">
          <div className="card-body text-center">
            <div className="icon-circle">
              <i className="bi bi-person"></i>
            </div>
            <h5 className="card-title mt-3">Dr. Jane Smith</h5>
            <p className="card-text">Lead Dentist with over 15 years of experience in general and cosmetic dentistry.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <div className="card practitioner-card practitioner-john">
          <div className="card-body text-center">
            <div className="icon-circle">
              <i className="bi bi-person"></i>
            </div>
            <h5 className="card-title mt-3">Dr. John Doe</h5>
            <p className="card-text">Orthodontic specialist passionate about creating perfect smiles.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="about-mission mt-5">
      <h2>
        <span className="icon-circle me-2">
          <i className="bi bi-star"></i>
        </span>
        Our Mission
      </h2>
      <p>We strive to provide exceptional dental care with a patient-first approach, ensuring comfort and confidence in every smile.</p>
    </div>
    <FAQ />
  </div>
);

export default About;