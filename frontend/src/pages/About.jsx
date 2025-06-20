// import React from 'react';
// import './About.css';

// import Video from '../../src/video1.mp4';
// import Subtitle from '../shared/Subtitle';
// import SearchBar from '../shared/SearchBar';
// import Footer from '../components/Footer/Footer';



// import tourImg01 from "../assets/images/tour-01.jpg";

// const About = () => {
//   const member = [
//     {
//       id: "01",
//       title: "Saathi Paul",
//       role : "Frontend Developer",
//       reviews: [
//         {
//           name: "Saathi Paul",
//         },
//       ],
//       photo: tourImg01,
//     },

//     {
//       id: "01",
//       title: "Saathi Paul",
//       role : "Frontend Developer",
//       reviews: [
//         {
//           name: "Mukesh roy",
//         },
//       ],
//       photo: tourImg01,
//     },

//     {
//       id: "01",
//       title: "Saathi Paul",
//       role : "Frontend Developer",
//       reviews: [
//         {
//           name: "Mukesh roy",
//         },
//       ],
//       photo: tourImg01,
//     },
    
//     {
//       id: "01",
//       title: "Saathi Paul",
//       role : "Frontend Developer",
//       reviews: [
//         {
//           name: "Mukesh roy",
//         },
//       ],
//       photo: tourImg01,
//     },
    
//     {
//       id: "01",
//       title: "Saathi Paul",
//       role : "Frontend Developer",
//       reviews: [
//         {
//           name: "Mukesh roy",
//         },
//       ],
//       photo: tourImg01,
//     },
    
    
//   ];
//   return (
//     <div className='About'>
//       {/* Background Video Section */}
//       <div className='videoBg1'>
//         <video src={Video} autoPlay loop muted></video>
//       </div>

//       {/* Section Text */}
//       <div className='sectionText1'>
//         <h1>About Us</h1>
//         <br /><br />
//         <SearchBar />
//         <Subtitle />
//       </div>

//       {/* Footer Component */}
//       <Footer />
//     </div>
//   );
// };

// export default About;





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
          We’re a team of five MERN stack developers dedicated to making your travel planning seamless and exciting. 
          Our platform offers curated tour packages for every kind of traveler. 
          With a passion for tech and exploration, we’re here to connect you to unforgettable journeys. 
          Start your next adventure with us today!
        </p>
      </div>

      <div className="contentSection">
        <div className="visionSection">
          <h2>Our Vision</h2>
          <p>
            Our mission at Travel Tales is to bridge the gap between dreams and destinations by creating a reliable and user-friendly 
            platform for travelers. We envision a world where exploring new places is accessible, safe, and enjoyable for everyone. 
            Whether you’re a solo adventurer, family traveler, or a group of friends, we aim to bring you closer to the experiences 
            you seek and cherish.
          </p>
        </div>

        <div className="trustSection">
          <h2>Why People Trust Us</h2>
          <p>
            Trust is the foundation of our platform. Here’s why our users choose Travel Tales:
          </p>
          <ul>
            <li><strong>Transparent Pricing:</strong> We provide honest, up-front costs for every booking.</li>
            <li><strong>Reliable and Secure Bookings:</strong> Our secure systems ensure all payments and personal details remain protected.</li>
            <li><strong>Quality Assurance:</strong> We partner only with trusted providers to offer quality experiences.</li>
            <li><strong>24/7 Customer Support:</strong> Our support team is here to assist you at every stage of your journey.</li>
          </ul>
        </div>

        <div className="servicesSection">
          <h2>Our Services</h2>
          <p>
            From hassle-free booking to unique travel experiences, our services are designed to make every trip unforgettable.
          </p>
          <ul>
            <li><strong>Curated Packages:</strong> Carefully crafted itineraries for various travel styles and interests.</li>
            <li><strong>Customizable Plans:</strong> Tailor your travel experience with flexible, customizable options.</li>
            <li><strong>Secure Online Booking:</strong> A user-friendly and safe booking process for peace of mind.</li>
            <li><strong>Dedicated Support:</strong> Available for group, solo, and family travelers alike.</li>
          </ul>
        </div>

        <div className="commitmentSection">
          <h2>Our Commitment</h2>
          <p>
            At Travel Tales, we are committed to bringing our users the best experiences with professionalism and integrity. 
            We strive to innovate constantly, listening to our customers to improve and expand our offerings. Every journey 
            booked with us is an opportunity to build trust, create memories, and make travel dreams a reality.
          </p>
        </div>

        <div className="teamSection">
          <h2>Meet Our Team</h2>
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
