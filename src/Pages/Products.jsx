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
    { name: "Snacks", img: "/images/snacks.png" },

    { name: "Ajwa Dates", img: "/images/ajwa-dates.png" },
    { name: "Medjool Dates", img: "/images/medjool-dates.png" },
    { name: "Kimia Dates", img: "/images/kimia-dates.png" },
    { name: "Safawi Dates", img: "/images/safawi-dates.png" },

    { name: "Biscoff Biscuit", img: "/images/biscoff-biscuit.png" },
    { name: "Biscoff Cream", img: "/images/biscoff-cream.png" },

    { name: "Marshmallow", img: "/images/marshmallow.png" },
    { name: "Nutella", img: "/images/nutella.png" },

    { name: "Wines", img: "/images/wines.png" },
    { name: "Chocolates", img: "/images/chocolates.png" },
    { name: "Juices", img: "/images/juices.png" },
    { name: "Flavoured Makhana", img: "/images/makhana-flavoured.png" },
    { name: "Makhana Plain", img: "/images/makhana-plain.png" },

    { name: "Gift Hampers", img: "/images/gift-hampers.png" },
    { name: "Customized Gifts", img: "/images/custom-gifts.png" },

    { name: "Indian Chocolates", img: "/images/indian-chocolates.png" },
    { name: "Imported Chocolate", img: "/images/imported-chocolate.png" },

    { name: "Kalkandu", img: "/images/kalkandu.png" },
    { name: "ABC Malt", img: "/images/abc-malt.png" },
    { name: "Honey Mix Nuts", img: "/images/honey-mix-nuts.png" },
    { name: "Coco Powder", img: "/images/coco-powder.png" },
    { name: "Biscuits", img: "/images/biscuits.png" },

    { name: "Honey Amla", img: "/images/honey-amla.png" },
    { name: "Twister Wafer", img: "/images/twister-wafer.png" },
    { name: "Butter Cookies", img: "/images/butter-cookies.png" },

    { name: "Hazelnut", img: "/images/hazelnut.png" },
    { name: "Brazil Nut", img: "/images/brazil-nut.png" },
    { name: "Mamra Badam", img: "/images/mamra-badam.png" },
    { name: "Pecan Nut", img: "/images/pecan-nut.png" },

    { name: "Pepper Cashew", img: "/images/pepper-cashew.png" },
    { name: "Chili Cashew", img: "/images/chili-cashew.png" },

    { name: "Quaker White Oats 250g", img: "/images/quaker-white-oats-250g.png" },
    { name: "American Juice", img: "/images/american-juice.png" },
    { name: "Peanut Butter", img: "/images/peanut-butter.png" },

    { name: "Fig Regular", img: "/images/fig-regular.png" },
    { name: "Fig Jumbo", img: "/images/fig-jumbo.png" },

    { name: "Badam Regular", img: "/images/badam-regular.png" },
    { name: "Badam Jumbo", img: "/images/badam-jumbo.png" },
    { name: "Badam Independent", img: "/images/badam-independent.png" },

    { name: "Cashew W320", img: "/images/cashew-w320.png" },
    { name: "Cashew W240", img: "/images/cashew-w240.png" },
    { name: "Cashew W180", img: "/images/cashew-w180.png" },
    { name: "Cashew W400", img: "/images/cashew-w400.png" },
    { name: "Cashew JH", img: "/images/cashew-jh.png" },

    { name: "Black Raisin", img: "/images/black-raisin.png" },
    { name: "Black Seedless Raisin", img: "/images/black-seedless-raisin.png" },
    { name: "Yellow Grapes", img: "" },
    { name: "Golden Grapes", img: "" }
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
