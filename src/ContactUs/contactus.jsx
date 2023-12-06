// import React from 'react';
// import './contactus.scss'
// import Header from '../Header/Header';


// function Contactus() {
//     return (
//         <div className='contact-us'>
//             <Header></Header>
//             <section>
//                     <div class="wrapper centered">
//                     <article class="letter">
//                             <div class="side">
//                             <h1 className='contact-h1'>Contact us</h1>
//                             <p className='contact-P'>
//                                 <textarea placeholder="Your message" className='contactus-textarea'></textarea>
//                             </p>
//                         </div>
//                         <div class="side">
//                             <p className='contact-P'>
//                                 <input type="text" placeholder="Your name" className='contactus-input'></input>
//                             </p>
//                             <p className='contact-P'>
//                                 <input type="email" placeholder="Your email" className='contactus-input'></input>
//                             </p>
//                             <p className='contact-P'>
//                                 <button id="sendLetter" className='contact-button'>Send</button>
//                             </p>
//                         </div>
//                     </article>
//                     <div class="envelope front"></div>
//                     <div class="envelope back"></div>
//         </div>
//                     <p class="result-message centered">Thank you for your message</p>
//             </section>
            
//         </div>
//     );

// }

// export default Contactus;
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Header from '../Header/Header';
import './contactus.scss';

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_18hgomi', 'template_wh2ocgv', form.current, 'k7GQ_nCx99EbAp4d4')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        // You can handle success here, e.g., display a success message
      }, (error) => {
        console.log(error.text);
        // You can handle errors here, e.g., display an error message
      });
  };

  return (
    <div className='contact-us'>
      <Header />
      <section>
        <div className="wrapper centered">
          <form ref={form} onSubmit={sendEmail}>
            <article className="letter">
              <div className="side">
                <h1 className='contact-h1'>Contact us</h1>
                <p className='contact-P'>
                  <textarea placeholder="Your message" className='contactus-textarea' name="message"></textarea>
                </p>
              </div>
              <div className="side">
                <p className='contact-P'>
                  <input type="text" placeholder="Your name" className='contactus-input' name="user_name"></input>
                </p>
                <p className='contact-P'>
                  <input type="email" placeholder="Your email" className='contactus-input' name="user_email"></input>
                </p>
                <p className='contact-P'>
                  <button id="sendLetter" className='contact-button' type="submit">Send</button>
                </p>
              </div>
            </article>
          </form>
          <div className="envelope front"></div>
          <div className="envelope back"></div>
        </div>
        <p className="result-message centered">Thank you for your message</p>
      </section>
    </div>
  );
};

export default Contactus;
