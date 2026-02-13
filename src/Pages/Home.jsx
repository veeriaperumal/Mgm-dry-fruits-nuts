import "./Home.css";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt, FaInstagram  } from "react-icons/fa";
import { NavHashLink } from 'react-router-hash-link';

export default function Home() {
  // 1. Initialize the ref for the slider
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "Mike Torello",
      role: "Executive Engineer",
      image: "/images/user1.png",
      text: "MGM provides excellent quality dry fruits. Fresh, tasty, and always delivered on time. Highly recommended."
    },
    {
      name: "Rick Wright",
      role: "Executive Engineer",
      image: "/images/user2.png",
      text: "Very premium products and great service. I always buy my nuts and snacks from MGM."
    },
    {
      name: "Devon Miles",
      role: "Business Owner",
      image: "/images/user3.png",
      text: "Best dry fruits store in the city. Quality is consistent and packaging is excellent."
    },
    {
      name: "Sarah John",
      role: "Nutritionist",
      image: "/images/user2.png",
      text: "Healthy, clean, and reliable products. Perfect for daily nutrition."
    },
    {
      name: "Arun Kumar",
      role: "Store Manager",
      image: "/images/user1.png",
      text: "Our customers love MGM products. Great brand with strong trust."
    }
  ];

  const faqs = [
    {
      q: "Are MGM dry fruits and nuts fresh?",
      a: "Yes, all our products are sourced fresh and packed hygienically to maintain quality and taste."
    },
    {
      q: "Do you offer bulk or wholesale orders?",
      a: "Yes, we provide bulk and wholesale orders for businesses, events, and retailers."
    },
    {
      q: "Are there any offers or discounts available?",
      a: "Yes, we regularly run special offers and seasonal discounts to give our customers great value on every purchase."
    },
    {
      q: "How are your products packed?",
      a: "Our products are packed in airtight, food-grade packaging to preserve freshness and prevent contamination."
    },
    {
      q: "Can I use MGM dry fruits and nuts for gifting?",
      a: "Absolutely! We offer customized gift hampers suitable for all occasions."
    }
  ];
  const handleExploreClick = () => {
    navigate("/products"); // Change "/products" to your actual products route path
  };

  // Manual Control Functions
  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!sliderRef.current) return;

    let pos = 0;
    let animationId;
    const speed = 0.3;

    const move = () => {
      if (!sliderRef.current) return;

      pos -= speed;

      // Reset position for infinite loop effect
      if (Math.abs(pos) >= sliderRef.current.scrollWidth / 2) {
        pos = 0;
      }

      sliderRef.current.style.transform = `translateX(${pos}px)`;
      animationId = requestAnimationFrame(move);
    };

    animationId = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const [active, setActive] = useState(2); // Third open by default

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  // Helper Component for the Auto-Count effect
const StatCounter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    // Extract numbers from string (e.g., "450000+" -> 450000)
    const target = parseInt(endValue.toString().replace(/\D/g, ""));
    const increment = target / (duration / 16); // 16ms is roughly 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  // Format number back to locale string and add the '+' suffix
  return <span>{count.toLocaleString()}+</span>;
};

  return (
    <div>
      <section className="home-hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">MGM Dry Fruits & Nuts</h1>
          <h3 className="hero-subtitle">Fuel Your Health Naturally</h3>
          <p className="hero-desc">
            From crunchy nuts to premium dry fruits, enjoy nature’s best packed
            with care and freshness for your everyday wellness.
          </p>
<NavHashLink 
  smooth 
  to="/contact" 
  onClick={() => setMenuOpen(false)}
  className="hero-btn" 
>
  Contact
</NavHashLink>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-section" id="products">
        <div className="gallery-grid">
          <div className="gallery-card"><img src="/images/product1.png" alt="Dry Fruits" /></div>
          <div className="gallery-card"><img src="/images/product2.png" alt="Mixed Nuts" /></div>
          <div className="gallery-card"><img src="/images/product3.png" alt="Chocolates" /></div>
          <div className="gallery-card"><img src="/images/product4.png" alt="Walnuts" /></div>
          <div className="gallery-card"><img src="/images/product5.png" alt="Kiwi" /></div>
          <div className="gallery-card"><img src="/images/product6.png" alt="Dates" /></div>
          <div className="gallery-card"><img src="/images/product7.png" alt="Raisins" /></div>
          <div className="gallery-card"><img src="/images/product8.png" alt="Gift Box" /></div>
        </div>
      </section>

<section className="about-section" id="about">
      <div className="about-main">
        <div className="about-img-box">
          <img src="/images/about.png" alt="MGM Shop" />
        </div>
        <div className="about-text-box">
          <h2>About MGM Nuts & Dry Fruits</h2>
          <p>
            At MGM Nuts & Dry Fruits, we provide carefully selected, premium dry
            fruits and nuts packed with freshness and quality. Our commitment
            is to deliver natural taste, purity, and wholesome goodness you can
            trust for everyday health, nutrition, and mindful snacking.
          </p>
        </div>
      </div>

      <div className="about-stats-box">
        <div className="stat-item">
          <h2 className="stat-number"><StatCounter endValue={11} /></h2>
          <p className="stat-label">Stores</p>
        </div>

        <div className="stat-item">
          <h2 className="stat-number"><StatCounter endValue={450000} /></h2>
          <p className="stat-label">Happy Customers</p>
        </div>

        <div className="stat-item">
          <h2 className="stat-number"><StatCounter endValue={500000} /></h2>
          <p className="stat-label">Order Delivered</p>
        </div>
      </div>
    </section>

      {/* SHOP CATEGORY SECTION */}
      <section className="category-section" id="category">
        <h2 className="category-title">Shop Category</h2>
        <div className="category-row">
          <div className="category-card">
            <div className="category-icon"><img src="/images/nuts.png" alt="Nuts" /></div>
            <p>Nuts</p>
          </div>
          <div className="category-card">
            <div className="category-icon"><img src="/images/mixes.png" alt="Mixes" /></div>
            <p>Mixes</p>
          </div>
          <div className="category-card">
            <div className="category-icon"><img src="/images/berries.png" alt="Berries" /></div>
            <p>Berries</p>
          </div>
          <div className="category-card">
            <div className="category-icon"><img src="/images/dried.png" alt="Dried Fruits" /></div>
            <p>Dried Fruits</p>
          </div>
          <div className="category-card">
            <div className="category-icon"><img src="/images/seeds.png" alt="Seeds" /></div>
            <p>Seeds</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section" id="testimonials">
        <p className="test-sub">TESTIMONIALS</p>
        <h2 className="test-title">What Our Customers Say</h2>
        <div className="testimonial-wrapper">
          <div className="testimonial-slider" ref={sliderRef}>
            {[...testimonials, ...testimonials].map((item, i) => (
              <div className="testimonial-card" key={i}>
                <div className="test-user">
                  <img src={item.image} alt={item.name} />
                </div>
                <p className="test-text">{item.text}</p>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="test-controls">
          <button onClick={prevSlide}>&#8249;</button>
          <button onClick={nextSlide}>&#8250;</button>
        </div>
      </section>

      <section className="why-section" id="why">
        <h2 className="why-title">Why You’ll Love MGM</h2>
        <p className="why-subtitle">Premium dry fruits and nuts with great taste, freshness, and regular offers</p>
        <div className="why-box">
          <div className="why-item">
            <div className="why-icon"><img src="/images/quality.png" alt="Quality" /></div>
            <p>Premium Quality</p>
          </div>
          <div className="why-item">
            <div className="why-icon"><img src="/images/organic.png" alt="Organic" /></div>
            <p>Organic Choices</p>
          </div>
          <div className="why-item">
            <div className="why-icon"><img src="/images/gift.png" alt="Gift" /></div>
            <p>Gift Hampers</p>
          </div>
          <div className="why-item">
            <div className="why-icon"><img src="/images/delivery.png" alt="Delivery" /></div>
            <p>Fast Delivery</p>
          </div>
          <div className="why-item">
            <div className="why-icon"><img src="/images/price.png" alt="Price" /></div>
            <p>Best Price</p>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-wrapper">
          {faqs.map((item, index) => (
            <div key={index} className={`faq-item ${active === index ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <p>{item.q}</p>
                <span className="faq-arrow">{active === index ? "▲" : "▼"}</span>
              </div>
              <div className="faq-answer">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

     {/* ... previous sections ... */}

      <section className="cta-section">
        <div className="cta-box">
          <div className="cta-left">
            <h2>Unlock the <br /> Power of a <br /> Healthy Mind!</h2>
            {/* 4. Attach the onClick handler */}
            <button className="cta-btn" onClick={handleExploreClick}>
              Explore Products
            </button>
          </div>
          <div className="cta-right">
            <img src="/images/cta-nuts.png" alt="Dry Fruits" />
          </div>
        </div>
      </section>
<section className="why-section-modern" id="why">
  <div className="why-container">
    <h2 className="why-title-modern">Why You’ll Love MGM</h2>
    <p className="why-subtitle-modern">
      Premium quality dry fruits and nuts crafted with care, freshness, and 
      unbeatable taste for your everyday wellness.
    </p>

    <div className="why-grid-modern">
      {/* Card 1 */}
      <div className="why-card-modern">
        <div className="why-icon-modern">
          <img src="/images/quality.png" alt="Premium Quality" />
        </div>
        <h3>Premium Quality</h3>
        <p>Carefully selected and tested dry fruits to ensure exceptional freshness and nutrition.</p>
      </div>

      {/* Card 2 */}
      <div className="why-card-modern">
        <div className="why-icon-modern">
          <img src="/images/organic.png" alt="Organic Choices" />
        </div>
        <h3>Organic Choices</h3>
        <p>Wide range of natural and organic products sourced directly from trusted farms.</p>
      </div>

      {/* Card 3 */}
      <div className="why-card-modern">
        <div className="why-icon-modern">
          <img src="/images/gift.png" alt="Gift Hampers" />
        </div>
        <h3>Custom Gifts</h3>
        <p>Elegant and healthy gift boxes perfect for festivals, weddings, and celebrations.</p>
      </div>

      {/* Card 4 */}
      <div className="why-card-modern">
        <div className="why-icon-modern">
          <img src="/images/delivery.png" alt="Fast Delivery" />
        </div>
        <h3>Safe Delivery</h3>
        <p>Hygienically packed and delivered quickly to preserve maximum crunch and taste.</p>
      </div>

      {/* Card 5 */}
      <div className="why-card-modern">
        <div className="why-icon-modern">
          <img src="/images/price.png" alt="Best Price" />
        </div>
        <h3>Best Prices</h3>
        <p>Premium quality products at competitive prices without compromising on standards.</p>
      </div>
    </div>
  </div>
</section>

<section className="contact-section" id="contact">
  <div className="contact-container">
    <h2 className="contact-title">Get in Touch Instantly</h2>
    <p className="contact-subtitle">
      Have a question or want to place an order? Reach us in one tap
    </p>

    <div className="contact-buttons">
      <a href="https://wa.me/message/YSP4THEC4TEBH1" target="_blank" className="contact-btn whatsapp">
        <div className="icon-circle">
          <FaWhatsapp />
        </div>
        <span>Whatsapp us</span>
      </a>

      <a href="tel:+916380081667" className="contact-btn call">
        <div className="icon-circle">
          <FaPhoneAlt />
        </div>
        <span>Call Us</span>
      </a>

      <a href="https://www.instagram.com/mgm2.006?igsh=NnNpcXV5Z29hc2hq" target="_blank" className="contact-btn instagram">
        <div className="icon-circle">
          <FaInstagram />
        </div>
        <span>Follow Us</span>
      </a>
    </div>
  </div>
</section>
  {/* FLOATING CONTACT ICONS */}
      <div className="floating-contact">
        <a 
          href="https://wa.me/message/YSP4THEC4TEBH1" 
          target="_blank" 
          rel="noreferrer" 
          className="contact-icon whatsapp"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a 
          href="tel:+916380081667" 
          className="contact-icon phone"
          aria-label="Call Us"
        >
          <FaPhoneAlt />
        </a>
      </div>
    </div>
  );
}