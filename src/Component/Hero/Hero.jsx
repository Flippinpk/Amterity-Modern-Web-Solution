import React from 'react'
import heroimg from "../../assets/hero-img.png"
import "./Hero.css"
export default function Hero() {
  return (

   <div className='Hero-page'>
      <div className="hero-content">
      <h1>We offer modern solutions for growing your business</h1>
      
      <p className='hero-p'>Amtegrity Inc.: Building with excellence, integrity, and unwavering quality.</p>
      </div>
      <div className='hero-image'>
        <img src={heroimg} alt="" />
      </div>
    </div>
  )
}
