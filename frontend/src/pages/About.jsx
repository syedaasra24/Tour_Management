import React from 'react';
import './About.css';

import Video from '../../src/video1.mp4';
import Footer from '../components/Footer/Footer';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';

import tourImg01 from "../assets/images/photo01.jpg";
import tourImg02 from "../assets/images/photo02.jpg";
import tourImg03 from "../assets/images/photo03.jpg";
import tourImg04 from "../assets/images/photo04.jpg";
import tourImg05 from "../assets/images/photo05.jpg"; // Import your team member image

const About = () => {
  const team = [
    { id: "01", name: "Saathi Paul", role: "Frontend Developer", photo: tourImg01 },
    { id: "02", name: "Ankita Chowdhury", role: "Frontend Developer", photo: tourImg03 },
    { id: "03", name: "Sayeda Asra Faisal", role: "Frontend Developer", photo: tourImg05 },
    { id: "04", name: "Anshu Raj", role: "Backend Developer", photo: tourImg02 },
    { id: "05", name: "Bapon Paramanik", role: "Backend Developer", photo: tourImg04 },
  ];

  return (
    <div className='About'>
      <div className='videoBg1'>
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className='sectionText1'>
        <h1>About Us</h1>
        <SearchBar />
        <Subtitle />
      </div>
       
      <div className='welcome'>
        <p>Welcome to Travel Tales</p>
      </div>
      <div className='paragraph'>
        <p>
          Embark on extraordinary journeys with Travel Tales, where innovation meets adventure. 
          Our passionate team of five MERN stack developers has crafted a cutting-edge platform 
          that transforms your travel dreams into reality. We specialize in curating exceptional 
          tour experiences that cater to every traveler's unique preferences, ensuring your 
          adventures are not just memorable but truly extraordinary.
        </p>
      </div>

      <div className="contentSection">
        <div className="visionSection">
          <h2>Our Vision</h2>
          <p>
            At Travel Tales, we envision a world where extraordinary travel experiences are 
            accessible to everyone. Our mission is to revolutionize the way people discover, 
            plan, and experience the world around them. We believe that every journey should 
            be more than just a trip—it should be a transformative experience that enriches 
            your life and broadens your horizons. Whether you're seeking solo adventures, 
            family bonding experiences, or group expeditions, we're here to make your travel 
            aspirations come to life.
          </p>
        </div>

        <div className="trustSection">
          <h2>Why Travelers Choose Us</h2>
          <p>
            Trust is the cornerstone of our success, and we've earned it through unwavering 
            commitment to excellence. Here's what sets Travel Tales apart:
          </p>
          <ul>
            <li><strong>Transparent & Honest Pricing:</strong> Complete transparency in all costs with no hidden fees or surprises.</li>
            <li><strong>Bank-Grade Security:</strong> State-of-the-art encryption protects your personal data and payment information.</li>
            <li><strong>Curated Excellence:</strong> Every tour and experience is personally vetted to ensure exceptional quality.</li>
            <li><strong>Round-the-Clock Support:</strong> Our dedicated team is available 24/7 to assist you throughout your journey.</li>
            <li><strong>Flexible Booking Options:</strong> Customizable plans that adapt to your schedule and preferences.</li>
          </ul>
        </div>

        <div className="servicesSection">
          <h2>Premium Services We Offer</h2>
          <p>
            We go beyond traditional travel booking to deliver comprehensive, personalized 
            experiences that exceed expectations and create lasting memories.
          </p>
          <ul>
            <li><strong>Expertly Curated Packages:</strong> Handpicked destinations and experiences tailored to diverse travel styles.</li>
            <li><strong>Personalized Travel Planning:</strong> Custom itineraries designed around your interests, budget, and timeline.</li>
            <li><strong>Seamless Digital Experience:</strong> Intuitive platform with real-time updates and instant confirmations.</li>
            <li><strong>Comprehensive Travel Support:</strong> From initial planning to post-trip assistance, we're with you every step.</li>
            <li><strong>Exclusive Access:</strong> Special deals and unique experiences available only to our valued customers.</li>
          </ul>
        </div>

        <div className="commitmentSection">
          <h2>Our Unwavering Commitment</h2>
          <p>
            Travel Tales is built on a foundation of integrity, innovation, and customer 
            satisfaction. We continuously evolve our platform based on real user feedback, 
            ensuring every feature serves your needs. Our commitment extends beyond booking 
            tours—we're committed to being your trusted travel partner, helping you create 
            stories worth sharing and memories that last a lifetime. Every booking represents 
            our promise to deliver excellence, reliability, and unforgettable experiences.
          </p>
        </div>

        <div className="teamSection">
          <h2>Meet Our Exceptional Team</h2>
          <p>
            Behind every successful journey is our dedicated team of passionate professionals 
            who bring expertise, creativity, and dedication to every aspect of your travel experience.
          </p>
          <div className="teamContainer">
            {team.map((member) => (
              <div key={member.id} className="teamMember">
                <img src={member.photo} alt={member.name} />
                <h3>{member.name}</h3>
                <p className="role"><strong>{member.role}</strong></p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default About;