import React, { useEffect } from "react";
import "./PricingPage.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function PricingPage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const pricingPlans = [
    {
      name: "Basic",
      price: "$49/mo",
      features: ["Construction Consulting", "Project Planning", "Basic Support"],
      buttonText: "Get Started",
    },
    {
      name: "Standard",
      price: "$99/mo",
      features: ["All Basic Features", "3D Modeling", "Priority Support"],
      buttonText: "Choose Plan",
    },
    {
      name: "Premium",
      price: "$149/mo",
      features: ["All Standard Features", "Advanced Design", "Dedicated Consultant"],
      buttonText: "Go Premium",
    },
  ];

  return (
    <div className="pricing-container">
      <h2 data-aos="fade-down">Choose Your Plan</h2>
      <p data-aos="fade-up">Find the perfect plan for your construction needs.</p>
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="pricing-card" data-aos="fade-up" data-aos-delay={index * 200}>
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="btn-pricing">{plan.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
