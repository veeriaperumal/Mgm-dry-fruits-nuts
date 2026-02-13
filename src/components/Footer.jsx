import "./Footer.css";
import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";


export default function Footer() {

  const location = useLocation();
const navigate = useNavigate();

const handleScroll = (id) => {

  if (location.pathname !== "/") {
    navigate("/");

    setTimeout(() => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);

  } else {

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

};

  return (
    <section id="Footer">
      <footer className="footer-section">

        <div className="footer-top">

          {/* LEFT */}
          <div className="footer-left">

            <img
              src={logo}
              alt="MGM Logo"
              className="footer-logo"
            />

            <h3>MGM – Nuts & Dry Fruits</h3>

          </div>


       {/* CENTER */}
<div className="footer-links">

  <h4>Quick Links</h4>

  <ul>

    {/* Products Page */}
    <li>
      <Link to="/products">Products</Link>
    </li>


    {/* About Section */}
    <li>
      <button onClick={() => handleScroll("about")}>
        About Us
      </button>
    </li>


    {/* Testimonials */}
    <li>
      <button onClick={() => handleScroll("testimonials")}>
        Testimonials
      </button>
    </li>


    {/* Footer */}
    <li>
      <button onClick={() => handleScroll("Footer")}>
        Contact Us
      </button>
    </li>

  </ul>

</div>



          {/* RIGHT */}
          <div className="footer-contact">

            <h4>Contact Us</h4>

            <p>
              MGM DRY FRUIT'S & Nuts 
              Address : 230,Vazhudhavur Rode, Near IGMCH, Government Hospital, Opposite KBS, Kadhirkamam, Pondicherry - 09.
              PinCode - 605009
            </p>

            <p className="footer-phone">
              📞 6380081667
            </p>

          </div>

        </div>


        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>© 2026, MGM Dry Fruits & Nuts</p>

          <a
            href="https://www.instagram.com/mgm2.006?igsh=NnNpcXV5Z29hc2hq"
            target="_blank"
            rel="noreferrer"
            className="footer-insta"
          >
            <img src="/images/instagram.png" alt="Instagram" />
          </a>

        </div>

      </footer>
    </section>
  );
}