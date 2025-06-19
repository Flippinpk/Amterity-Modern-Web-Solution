import React from 'react';
import './AboutUs.css';
import video from '../../assets/we.mp4';
import image from '../../assets/about4.jpg';
import advisory from '../../assets/whoweare2.png';
import mission from '../../assets/values-1.png';
import vission from '../../assets/values-2.png';
import goals from '../../assets/values-3.png';


export default function AboutUs() {
  return (
    <section className="founders-section">
    

      <div className="section-text">
      <div className="text-and-image">
        <div className="text-container">
          <h2>About Us</h2>
          <p className="about">
          Amtegrity Inc. is a multi-disciplinary engineering and construction services company engaged in providing services for construction planning and scheduling, contract documentations, project monitoring and control, and other project related services.

          We understand that successful project execution begins with meticulous planning and efficient scheduling. Whether you're embarking on a small-scale initiative or managing a large-scale enterprise project, our comprehensive services are tailored to meet your unique needs and deliver results that exceed your expectations.
          </p>
          <p className='about'> 
          Your premier partner in construction planning and design solutions. With a commitment to excellence, innovation, and integrity, we specialize in delivering comprehensive planning and design services that bring your vision to life.
          </p>
          {/* <a href="#learn-more" className="learn-more-btn">Learn More</a> */}
        </div>
        <div className="image-containerr">
          <img src={image} alt="Infinity Tech Labs" className="about-image" />
        </div>
      </div>
    </div>


    

{/* 
      <div className="program-benefits">
        <h2>Our Program Benefits Include</h2>
        <div className="benefit-cards">
          {[
            {
              title: 'Unparalleled Mentorship',
              description:
                'Business leaders, seasoned operators, and industry executives will help craft your company’s vision through specific, measurable, realistic, and time-bound goals.',
            },
            {
              title: 'Access to Leading VCs and Investors',
              description:
                'Investment mentors will guide you in crystallizing your fundraising strategy, help you make connections with the investment community, and may even invest in your startup.',
            },
            {
              title: 'Guidance from Leading Scientists',
              description:
                'Prominent scientists and researchers across a myriad of verticals will help you mold your technology development strategy.',
            },
            {
              title: 'Business Development',
              description:
                'ITL works closely with founders to fine-tune business strategies and can help develop financial models and explore potential markets.',
            },
            {
              title: 'ITL Team Guidance',
              description:
                'ITL’s expert team will keep you on track to accomplish your goals by optimizing your access to mentors, experts, and other resources throughout the program.',
            },
            {
              title: 'Corporate Services',
              description:
                'ITL’s corporate partners donate generously in-kind legal, financial, and technological services to participating startups.',
            },
            {
              title: 'Mentorship from Business Leaders and Scientists',
              description:
                'Infinity Tech Labs’ mentors are business leaders, investors, and scientists drawn from thriving business and academic institutions and beyond.',
            },
          ].map((benefit, index) => (
            <div key={index} className="benefit-card">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className="advisory-board">
          <div className="advisory-board-container">
            <div className="board-content">
              <h2>Meet Our Visionary Advisors</h2>
              <p className="about">
                Behind every success story is the wisdom of experience. Our internal advisory board features a panel of seasoned experts, offering strategic insights, mentorship, and unwavering support to empower startups in achieving their highest potential.
              </p>
              <button className="learn-more-btn">Learn More</button>
            </div>
            <div className="board-image">
              <img src={advisory} alt="Advisory Board" />
            </div>
          </div>
        </div> */}


        <div className="program-values">
  <h2>OUR VALUES</h2>
  <p className="values-intro">
  Authenticity, commitment, and excellence in every step
  </p>
  <div className="values-card-container">
    {[
      {
        title: 'MISSION',
        description:
        'We are committed to building an inclusive, equitable, and just community now and for our future.',
        icon: mission, // Example icon
      },
      {
        title: 'VISION',
        description:
          'We are committed to building an inclusive, equitable, and just community now and for our future.',
        icon: vission, // Example icon
      },
      {
        title: 'GOALS',
        description:
        'We are committed to building an inclusive, equitable, and just community now and for our future.',
        icon: goals, // Example icon
      },
    ].map((value, index) => (
      <div key={index} className="value-card">
        <div className="icon-containers"><img className='icon-container' src={value.icon} alt="" /></div>
        <div>
        <h3>{value.title}</h3>
        <p>{value.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}
