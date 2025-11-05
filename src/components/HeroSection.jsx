import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import "./HeroSection.scss";

const HeroSection = () => {
  const [mobilCount, setMobilCount] = useState(0);
  const [pelangganCount, setPelangganCount] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);

  const easeOutQuad = (t) => t * (2 - t);

  const animateNumber = (target, setter, duration = 2000) => {
    const startTime = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = easeOutQuad(progress);
      const value = Math.floor(eased * target);
      setter(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    let isMounted = true;

    if (animationStarted && isMounted) {
      animateNumber(11, (val) => isMounted && setMobilCount(val));
      animateNumber(100, (val) => isMounted && setPelangganCount(val), 2500);
    }

    // Cleanup untuk mencegah memory leak
    return () => {
      isMounted = false;
    };
  }, [animationStarted]);

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sewa Mobil <span className="text-secondary">Terpercaya</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Nikmati perjalanan yang nyaman dan aman dengan armada mobil
              terbaru kami. Layanan 24/7 dengan harga terjangkau dan kualitas
              terbaik.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="primary-cta"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255, 140, 66, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/cars" className="btn btn-hero-primary">
                  <Icon icon="mdi:car-multiple" className="btn-icon" />
                  <span>Pilih Mobil Sekarang</span>
                  <Icon icon="mdi:arrow-right" className="btn-arrow" />
                </Link>
              </motion.div>

              <motion.div
                className="secondary-cta"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="https://wa.me/6289655195880"
                  target="_blank"
                  className="btn btn-hero-secondary"
                >
                  <Icon icon="mdi:phone" className="btn-icon" />
                  Konsultasi Gratis
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onAnimationComplete={() => setAnimationStarted(true)}
          >
            <div className="stat-item">
              <div className="stat-icon">
                <Icon icon="mdi:car-multiple" />
              </div>
              <motion.h3
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                {mobilCount}+
              </motion.h3>
              <p>Mobil Tersedia</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Icon icon="mdi:account-heart" />
              </div>
              <motion.h3
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                {pelangganCount}+
              </motion.h3>
              <p>Pelanggan Puas</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Icon icon="mdi:clock-time-four" />
              </div>
              <motion.h3
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                24/7
              </motion.h3>
              <p>Layanan Support</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, x: "-50%" }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          opacity: { duration: 1, delay: 2 },
          y: { duration: 2, repeat: Infinity },
        }}
      >
        <Icon icon="mdi:chevron-double-down" className="scroll-icon" />
        <span>Scroll untuk melihat lebih</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
