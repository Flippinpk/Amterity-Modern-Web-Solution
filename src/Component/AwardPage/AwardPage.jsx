import React, { useEffect, useState } from 'react';
import { FaSmile, FaProjectDiagram, FaClock, FaAward } from 'react-icons/fa';
import './AwardPage.css';
import image from '../../assets/counts-img.svg';

export default function AwardPage() {
  const stats = [
    { id: 1, label: 'Happy Clients', value: 65, icon: <FaSmile />, description: 'Our clients love our work and services.' },
    { id: 2, label: 'Projects', value: 85, icon: <FaProjectDiagram />, description: 'Successfully completed projects across industries.' },
    { id: 3, label: 'Years of Experience', value: 18, icon: <FaClock />, description: 'Expertise gained over years of dedicated service.' },
    { id: 4, label: 'Awards', value: 15, icon: <FaAward />, description: 'Recognized for excellence in our field.' },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('award-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      stats.forEach((stat, index) => {
        let start = 0;
        const increment = Math.ceil(stat.value / 100);
        const interval = setInterval(() => {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.min(start + increment, stat.value);
            return newCounters;
          });
          start += increment;
          if (start >= stat.value) clearInterval(interval);
        }, 70);
      });
    }
  }, [visible]);

  return (
    <div className='award-container' id='award-section'>
      <div className='content'>
        <div className={`image-container ${visible ? 'fade-in' : ''}`}>
          <img src={image} alt='Award illustration' />
        </div>
        <div className='stats'>
          {stats.map((stat, index) => (
            <div key={stat.id} className={`stat-item ${visible ? 'fade-up' : ''}`}>
              <div className='stat-icon'>{stat.icon}</div>
              <div className='number'>{counters[index]}</div>
              <p className='label'><strong>{stat.label}</strong></p>
              <div><p className='description'>{stat.description}</p> </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
