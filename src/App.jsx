import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>

      {/* Scroll To Top on Route Change */}
      <ScrollToTop />

      {/* Header */}
      <Header />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;
