import React, { useState } from 'react';
import './Services.css';
import services1 from "../../assets/hero-img.png"
// Service Data
const services = [
  {
    id: 1,
    title: "Construction Building Design and Modeling",
    description:
      "Our team specializes in creating innovative and functional building designs. Using the latest technologies, we provide 3D models and renderings.",
    image: services1,
  },
  {
    id: 2,
    title: "Construction Planning and Scheduling",
    description:
      "We develop detailed plans and schedules to optimize resources, minimize delays, and ensure timely project completion.",
    image: services1,
  },
  {
    id: 3,
    title: "Construction Documentation",
    description:
      "Our construction documentation services ensure all aspects of your project are properly documented, from planning to completion.",
    image: services1,
  },
  {
    id: 4,
    title: "Professional Development",
    description:
      "We offer customized training programs tailored to your needs, enhancing skills in project management, leadership, and technical expertise.",
    image: services1,
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => setSelectedService(service)}
          >
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description.slice(0, 60)}...</p>
            <button className="read-more">Read More</button>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedService && (
        <div className="modal-overlay show" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedService(null)}>
              &times;
            </span>
            <img src={selectedService.image} alt={selectedService.title} className="modal-image" />
            <h2>{selectedService.title}</h2>
            <p>{selectedService.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
