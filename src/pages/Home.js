import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';

const Home = () => (
  <div>
    <div className="hero">
      <div className="container">
        <h1>Welcome to SmileBright Dental</h1>
        <p>Your trusted dental care provider for a healthy smile.</p>
        <Link to="/contact" className="btn btn-light btn-lg">Book Appointment</Link>
      </div>
    </div>
    <div className="container my-5">
      <h2>About Our Clinic</h2>
      <p>SmileBright Dental is dedicated to providing top-quality dental care in a comfortable environment. Our experienced team uses the latest technology to ensure your smile is bright and healthy.</p>
      <h2>Our Services</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card service-card service-general">
            <div className="card-body text-center">
              <div className="icon-circle">
                <i className="bi bi-tooth"></i>
              </div>
              <h5 className="card-title mt-3">General Dentistry</h5>
              <p className="card-text">Routine check-ups and cleanings.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card service-card service-ortho">
            <div className="card-body text-center">
              <div className="icon-circle">
                <i className="bi bi-braces"></i>
              </div>
              <h5 className="card-title mt-3">Orthodontics</h5>
              <p className="card-text">Braces and aligners for perfect alignment.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card service-card service-cosmetic">
            <div className="card-body text-center">
              <div className="icon-circle">
                <i className="bi bi-droplet"></i>
              </div>
              <h5 className="card-title mt-3">Cosmetic Dentistry</h5>
              <p className="card-text">Teeth whitening and veneers.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to="/services" className="btn btn-primary">View All Services</Link>
      </div>
    </div>
    <FAQ />
  </div>
);

export default Home;