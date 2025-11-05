import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <motion.div
              className="footer-brand"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>TJ Rent Car</h3>
              <p>
                Solusi terpercaya untuk kebutuhan rental mobil Anda. Kami
                menyediakan armada berkualitas dengan pelayanan terbaik.
              </p>
            </motion.div>
          </div>

          <div className="footer-section">
            <h4>Navigasi</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cars">Mobil</Link>
              </li>
              <li>
                <Link to="/contact">Kontak</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Layanan</h4>
            <ul className="footer-links">
              <li>
                <a href="#rental">Rental Harian</a>
              </li>
              <li>
                <a href="#rental">Rental Bulanan</a>
              </li>
              <li>
                <a href="#rental">Rental dengan Sopir</a>
              </li>
              <li>
                <a href="#rental">Rental Tanpa Sopir</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontak</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Icon icon="mdi:phone" className="icon" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="contact-item">
                <Icon icon="mdi:email" className="icon" />
                <span>info@carrental.com</span>
              </div>
              <div className="contact-item">
                <Icon icon="mdi:map-marker" className="icon" />
                <span>Kota Jakarta Selatan</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Ikuti Kami</h4>
            <div className="social-links">
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon icon="mdi:facebook" />
              </motion.a>
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon icon="mdi:instagram" />
              </motion.a>
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon icon="mdi:twitter" />
              </motion.a>
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon icon="mdi:linkedin" />
              </motion.a>
            </div>
          </div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p>&copy; {currentYear} TJ Rent Car. Semua hak cipta dilindungi.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Kebijakan Privasi</a>
            <a href="#terms">Syarat & Ketentuan</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
