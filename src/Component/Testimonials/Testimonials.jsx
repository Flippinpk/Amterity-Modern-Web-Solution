import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import arooj from "../../assets/arooj.jpg";
import ammar from "../../assets/ammar.jpg";
import amna from "../../assets/amna.jpg";
import junaid from "../../assets/junaid.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    text: "My internship at Infinity Tech Labs was an incredibly rewarding experience that pushed me beyond my comfort zone and allowed me to take on meaningful responsibilities...",
    name: "Ammar Hussain",
    title: "National University of Science and Technology",
    image: ammar,
  },
  {
    text: "During my internship at Infinity Tech Labs, I worked on an Industry 4.0 project focused on disruptive technologies...",
    name: "Arooj Fatima",
    title: "Institute Of Space Technology",
    image: arooj,
  },
  {
    text: "My internship at the Infinity Tech Labs has been an enriching experience, offering invaluable hands-on exposure to advanced aerospace systems...",
    name: "Muhammad Junaid",
    title: "Air University",
    image: junaid,
  },
  {
    text: "As an intern at Infinity Tech Labs, I had the unique opportunity to immerse myself in the forefront of Industry 4.0 technologies...",
    name: "Amna Qizilbash",
    title: "Institute of Space Technology",
    image: amna,
  },
];

export default function Testimonials() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="testimonials-section" >
      <h2>✨ What they are saying about us ✨</h2>
      <div className="testimonial-container">
        <button onClick={handlePrev} className="arrow-button left-arrow">
          ❮
        </button>

        <div className="testimonial-card" >
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="testimonial-image"
          />
          <div className="testimonial-content">
            <p>"{testimonials[currentIndex].text}"</p>
            <div className="testimonial-author">
              <h3>{testimonials[currentIndex].name}</h3>
              <p>{testimonials[currentIndex].title}</p>
            </div>
          </div>
        </div>

        <button onClick={handleNext} className="arrow-button right-arrow">
          ❯
        </button>
      </div>

      <div className="indicator-container">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`indicator-dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </section>
  );
}
