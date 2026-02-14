import "./Products.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Products() {

  const products = [
    { name: "Dates", img: "/images/dates.png" },
    { name: "Dry Fruits", img: "/images/dryfruits.png" },
    { name: "Nuts", img: "/images/nuts1.png" },
    { name: "Seeds", img: "/images/seeds1.png" },
    { name: "Anjeer / Fig", img: "/images/anjeer.png" },
    { name: "Dry Grapes", img: "/images/grapes.png" },
    { name: "Combo Pack", img: "/images/combo.png" },
    { name: "Organic Millets", img: "/images/millet.png" },
     { name: "Snacks", img: "/images/snacks.png",},

  {name: "Wines",img: "/images/wines.png",},
  {name: "Chocolates",img: "/images/chocolates.png",},
  {name: "Juices",img: "/images/juices.png",},
  {name: "Flavoured Makhana",img: "/images/makhana-flavoured.png",},
  {name: "Gift Hampers",img: "/images/gift-hampers.png",},
  {name: "Customized Gifts",img: "/images/custom-gifts.png",},
  {name: "Makhana Plain",img: "/images/makhana-plain.png",},

   {name: "Indian Chocolates",img: "/images/indian-chocolates.png",},
  {name: "Imported Chocolate",img: "/images/imported-chocolate.png",},
  {name: "Kalkandu",img: "/images/kalkandu.png",},
  {name: "ABC Malt",img: "/images/abc-malt.png",},
  {name: "Honey Mix Nuts",img: "/images/honey-mix-nuts.png",},
  {name: "Coco Powder",img: "/images/coco-powder.png",},
  {name: "Biscuits",img: "/images/biscuits.png",},
  ];

  return (
    <div>
    <section className="products-page">

      {/* Title */}
      <h2 className="products-title">
        Our Products
      </h2>

      <p className="products-subtitle">
        Healthy Snacking Starts Here
      </p>


      {/* Grid */}
      <div className="products-grid">

        {products.map((item, i) => (
          <div className="product-card" key={i}>

            <div className="product-img">
              <img src={item.img} alt={item.name} />
            </div>

            <h3>{item.name}</h3>

          </div>
        ))}
        

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
