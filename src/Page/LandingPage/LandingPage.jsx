import React from 'react'
import Navbar from "../../Component/Navbar/Navbar"
import Hero from '../../Component/Hero/Hero'
import AboutUs from '../../Component/AboutUs/AboutsUs'
import AwardPage from '../../Component/AwardPage/AwardPage'
import Services from '../../Component/Services/Services'
import Testimonials from '../../Component/Testimonials/Testimonials'
import PricingPage from '../../Component/PricingPage/PricingPage'
import Team from '../../Component/Team/Team'
import ContactUs from '../../Component/ContactUs/ContactUs'
import Footer from '../../Component/Footer/Footer'
export default function LandingPage() {
  return (
    <>
    <Navbar/>
    <div id="Hero">
        <Hero/>
    </div>
    <div id="AboutUs">
        <AboutUs/>
    </div>
    <div id="AwardPage">
        <AwardPage/>
    </div>
    <div id="Services">
        <Services/>
    </div>
    <div id="Testimonials">
        <Testimonials/>
    </div>
    {/* <div id="PricingPage">
        <PricingPage/>
    </div> */}
    <div id="Team">
        <Team/>
    </div>
    <div id="ContactUs">
        <ContactUs/>
    </div>
    <div id="Footer">
        <Footer/>
    </div>
    </>
  )
}
