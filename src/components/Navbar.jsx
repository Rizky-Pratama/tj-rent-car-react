import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/cars", label: "Mobil" },
    { path: "/contact", label: "Kontak" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <motion.img
              src="/logo.png"
              alt="Logo"
              className="navbar-logo"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.h3
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              TJ Rent Car
            </motion.h3>
          </Link>

          <div className={`navbar-menu ${isOpen ? "navbar-menu-open" : ""}`}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`navbar-link ${
                    isActive(item.path) ? "active" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Icon
              icon={isOpen ? "mdi:close" : "mdi:menu"}
              className="toggle-icon"
            />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
