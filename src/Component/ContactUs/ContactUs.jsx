import React, { useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactUs.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContactUs() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2 data-aos="fade-down">Get in Touch</h2>
        <p data-aos="fade-up">
          We'd love to hear from you. Whether you have questions or need a quote, reach out to us!
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info" data-aos="fade-right">
          <h3>Contact Information</h3>
          <div className="info-item">
            <FaPhone className="icon" />
            <p>+1 5589 55488 55
            </p>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>Imran.sarwar@amtegrity.com</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>
        </div>

        <div className="contact-form" data-aos="fade-left">
          <h3>Send Us a Message</h3>
          <form>
            <div className="form-group">
              <input type="text" required />
              <label>Name</label>
            </div>
            <div className="form-group">
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="form-group">
              <textarea required></textarea>
              <label>Message</label>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="map-container" data-aos="zoom-in">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126229.22884647467!2d-74.04700604820673!3d40.68952467457369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1788d45555%3A0x6ac0a97b9b8e5d8f!2sA108%20Adam%20Street,%20New%20York,%20NY%20535022!5e0!3m2!1sen!2sus!4v1623432420393"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
