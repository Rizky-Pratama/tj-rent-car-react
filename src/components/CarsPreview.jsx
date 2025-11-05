import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useCars } from "../hooks/useCars";
import "./CarsPreview.scss";

const CarsPreview = () => {
  const { getFeaturedCars, loading, getAllCarPrices, getLowestPrice } =
    useCars();
  const featuredCars = getFeaturedCars(4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (loading) {
    return (
      <section className="cars-preview section">
        <div className="container">
          <div className="loading"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="cars-preview section">
      <div className="container">
        <motion.div
          className="section-header text-center mb-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Mobil Unggulan</h2>
          <p>
            Pilihan mobil terbaik dengan kualitas premium dan harga terjangkau
          </p>
        </motion.div>

        <motion.div
          className="cars-grid grid grid-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredCars.map((car) => (
            <motion.div
              key={car.id}
              className="car-card card"
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className="car-image">
                <img
                  src={`http://127.0.0.1:8000/storage/${car.foto}`}
                  alt={car.nama_mobil}
                  onError={(e) => {
                    e.target.src = "/images/placeholder-car.jpg";
                  }}
                />
              </div>

              <div className="car-info">
                <h3>{car.nama_mobil}</h3>
                <p className="car-description">
                  {car.merk} - {car.model} ({car.tahun})
                </p>

                <div className="car-features">
                  <div className="feature-item">
                    <Icon icon="mdi:account-group" className="icon" />
                    <span>{car.kapasitas_penumpang}</span>
                  </div>
                  <div className="feature-item">
                    <Icon icon="mdi:cog" className="icon" />
                    <span>
                      {car.transmisi === "manual" ? "Manual" : "Auto"}
                    </span>
                  </div>
                  <div className="feature-item">
                    <Icon icon="mdi:gas-station" className="icon" />
                    <span>{car.jenis_bahan_bakar}</span>
                  </div>
                </div>

                <div className="car-footer">
                  <div className="car-pricing">
                    <div className="price-display">
                      <div className="main-price">
                        <span className="price">
                          <span>Rp</span>
                          {(() => {
                            const prices = getAllCarPrices(car);
                            return prices.length > 0
                              ? prices[0].harga_per_hari.toLocaleString()
                              : "0";
                          })()}
                        </span>
                        <span className="period">/hari</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/contact" className="btn btn-primary">
                    Sewa Sekarang
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/cars" className="btn btn-outline btn-lg">
            Lihat Semua Mobil
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CarsPreview;
