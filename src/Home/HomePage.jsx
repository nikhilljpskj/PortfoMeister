// import React from 'react';
// import './HomePage.scss';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import Slider from '../slider/Slider'; 
// import {Link} from 'react-router-dom';
// import Features from '../Features/Feature';
// //import Slider from '@react-native-community/slider';


// function HomePage() {
//   return (

//     <div className="homepage">
//       <Header />
//       <div className="herohome">
//         <h1>Welcome to PortfoMeister</h1>
//         <p>Create and showcase your professional portfolio with ease.</p>
//         <Link to= "/templates" className="button-gs" >Get Started</Link>
//       </div>

//       <section className="features">
//         <Features />
//       </section>

//       <section className="testimonials">
//         <div>
//           <h1>Testimonials</h1>
//           </div>
//       </section>

//       <section className="templates templates-section">
//         <Slider />
        
//       </section>
      
//       {/* Add the iframe here */}
//       {/* <section className="chatbot-section">
//         <iframe
//           src="https://www.chatbase.co/chatbot-iframe/YRzYjkX8P18HBfH4qkpV-"
//           width="100%"
//           style={{ height: '100%', minHeight: '700px' }}
//           frameBorder="0"
//         ></iframe>
//       </section> */}
//       <Footer />
//     </div>
//   );
// }

// export default HomePage;


import React from 'react';
import './HomePage.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Slider from '../slider/Slider'; 
import { Link } from 'react-router-dom';
import Features from '../Features/Feature';

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <div className="herohome">
        <h1>Welcome to PortfoMeister</h1>
        <p>Create and showcase your professional portfolio with ease.</p>
        <Link to="/templates" className="button-gs">Get Started</Link>
      </div>

      <section className="features">
        <Features />
      </section>

      <section className="testimonials">
        <div>
          <h1>Testimonials</h1>
        </div>
      </section>

      <section className="templates templates-section">
        <Slider />
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;

