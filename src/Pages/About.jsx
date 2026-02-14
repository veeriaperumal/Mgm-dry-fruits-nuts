import React, { useState, useEffect, useRef } from "react";
import "./About.css";

const StatCounter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.3 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const target = parseInt(endValue.toString().replace(/\D/g, ""));
    const increment = target / (duration / 16);
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
  }, [hasStarted, endValue, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}+</span>;
};

const About = () => {
  return (
    <main className="mgm-about-wrapper">
      <section className="mgm-about-section" id="about">
        <div className="mgm-about-container">
          <div className="mgm-about-visual">
            <img src="/images/about.png" alt="MGM Shop" />
          </div>
          <div className="mgm-about-content">
            <h2>About MGM Nuts & Dry Fruits</h2>
            <p>
              At MGM Nuts & Dry Fruits, we provide carefully selected, premium dry
              fruits and nuts packed with freshness and quality. Our commitment
              is to deliver natural taste, purity, and wholesome goodness you can
              trust for everyday health, nutrition, and mindful snacking.
            </p>
          </div>
        </div>

        <div className="mgm-stats-bar-wrapper">
          <div className="mgm-stats-pill">
            <div className="mgm-stats-item">
              <h2 className="mgm-stats-number"><StatCounter endValue={1} /></h2>
              <p className="mgm-stats-label">Stores</p>
            </div>

            <div className="mgm-stats-item">
              <h2 className="mgm-stats-number"><StatCounter endValue={2000} /></h2>
              <p className="mgm-stats-label">Happy Customers</p>
            </div>

            <div className="mgm-stats-item">
              <h2 className="mgm-stats-number"><StatCounter endValue={1500} /></h2>
              <p className="mgm-stats-label">Orders Delivered</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;