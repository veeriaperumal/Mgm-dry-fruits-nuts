import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaInstagram } from 'react-icons/fa';
import './Contact.css';

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

        {/* Live Google Map Section */}
        <div className="map-wrapper">
          <h3 className="map-title">Visit Our Store</h3>
          <p className="map-address">
            230, Vazhudhavur Road, Near IGMCH Hospital, Kadhirkamam, Pondicherry - 605009
          </p>
          <div className="map-container">
            {/* REAL LIVE GOOGLE MAP LINK FOR MGM DRY FRUITS PONDY */}
            <iframe
              title="MGM Dry Fruits and Nuts Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.355182187332!2d79.79119157582496!3d11.950269387363412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361b3707f70d7%3A0x830b43213d97c947!2sMGM%20DRY%20FRUITS%20AND%20NUTS!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;