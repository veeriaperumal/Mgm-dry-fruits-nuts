import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Ticker from "./components/Ticker";

function App() {
  return (
    <BrowserRouter>

      {/* Scroll To Top on Route Change */}
      <ScrollToTop />

      {/* Header */}
      
      <Header />
      <Ticker />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;
