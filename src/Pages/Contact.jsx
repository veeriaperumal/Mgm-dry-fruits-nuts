import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaInstagram } from 'react-icons/fa';
import './Contact.css'; // Ensure the CSS file name matches

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch Instantly</h2>
        <p className="contact-subtitle">
          Have a question or want to place an order? Reach us in one tap
        </p>

        <div className="contact-buttons">
          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/message/YSP4THEC4TEBH1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-btn whatsapp"
          >
            <div className="icon-circle">
              <FaWhatsapp />
            </div>
            <span>Whatsapp us</span>
          </a>

          {/* Call Button */}
          <a 
            href="tel:+916380081667" 
            className="contact-btn call"
          >
            <div className="icon-circle">
              <FaPhoneAlt />
            </div>
            <span>Call Us</span>
          </a>

          {/* Instagram Button */}
          <a 
            href="https://www.instagram.com/mgm2.006?igsh=NnNpcXV5Z29hc2hq" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-btn instagram"
          >
            <div className="icon-circle">
              <FaInstagram />
            </div>
            <span>Follow Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;