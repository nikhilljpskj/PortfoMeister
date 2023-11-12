import React from 'react';
import './contactus.scss'
import Header from '../Header/Header';


function Contactus() {
    return (
        <div className='contact-us'>
            <Header></Header>
            <section>
                    <div class="wrapper centered">
                    <article class="letter">
                            <div class="side">
                            <h1 className='contact-h1'>Contact us</h1>
                            <p className='contact-P'>
                                <textarea placeholder="Your message" className='contactus-textarea'></textarea>
                            </p>
                        </div>
                        <div class="side">
                            <p className='contact-P'>
                                <input type="text" placeholder="Your name" className='contactus-input'></input>
                            </p>
                            <p className='contact-P'>
                                <input type="email" placeholder="Your email" className='contactus-input'></input>
                            </p>
                            <p className='contact-P'>
                                <button id="sendLetter" className='contact-button'>Send</button>
                            </p>
                        </div>
                    </article>
                    <div class="envelope front"></div>
                    <div class="envelope back"></div>
        </div>
                    <p class="result-message centered">Thank you for your message</p>
            </section>
            
        </div>
    );

}

export default Contactus;