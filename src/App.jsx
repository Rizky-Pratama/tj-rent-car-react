import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Contact from "./pages/Contact";
import "./styles/global.scss";
function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const wa_btnSetting = {
        btnColor: "#16BE45",
        ctaText: "WhatsApp",
        cornerRadius: 40,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        btnPosition: "right",
        whatsAppNumber: "6289655195880",
        welcomeMessage: "Hallo, Saya mau rental mobil nih",
        zIndex: 999999,
        btnColorScheme: "light",
      };
      window._waEmbed(wa_btnSetting);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
