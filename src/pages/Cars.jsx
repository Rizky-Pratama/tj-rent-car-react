import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useCars } from "../hooks/useCars";
import "./Cars.scss";

const Cars = () => {
  const { cars, loading } = useCars();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.nama_mobil.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.merk.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (loading) {
    return (
      <div className="cars-page">
        <div className="container">
          <div className="loading"></div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="cars-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="cars-hero">
        <div className="container">
          <motion.div
            className="hero-content text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Pilih Mobil Impian Anda</h1>
            <p>
              Temukan mobil yang sempurna untuk perjalanan Anda dari koleksi
              lengkap kami
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <motion.div
          className="cars-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="search-box">
            <input
              type="text"
              placeholder="Cari mobil berdasarkan nama, merk, atau model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </motion.div>

        <motion.div
          className="cars-count"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>Menampilkan {filteredCars.length} mobil</p>
        </motion.div>

        <motion.div
          className="cars-grid grid grid-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCars.map((car) => (
            <motion.div
              key={car.id}
              className="car-card card"
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <div className="car-image">
                <img
                  src={`${car.foto}`}
                  alt={car.nama_mobil}
                  onError={(e) => {
                    e.target.src = "/images/placeholder-car.jpg";
                  }}
                />
                <div className="car-year">{car.tahun}</div>
              </div>

              <div className="car-info">
                <div className="car-header">
                  <h3>{car.nama_mobil}</h3>
                  <span className="car-brand">{car.merk}</span>
                </div>

                <p className="car-model">{car.model}</p>

                <div className="car-features">
                  <div className="feature-item">
                    <Icon icon="mdi:account-group" className="icon" />
                    <span>{car.kapasitas_penumpang} orang</span>
                  </div>
                  <div className="feature-item">
                    <Icon icon="mdi:cog" className="icon" />
                    <span>
                      {car.transmisi === "manual" ? "Manual" : "Automatic"}
                    </span>
                  </div>
                  <div className="feature-item">
                    <Icon icon="mdi:gas-station" className="icon" />
                    <span>{car.jenis_bahan_bakar}</span>
                  </div>
                </div>

                <div className="car-details">
                  <div className="detail-row">
                    <Icon icon="mdi:palette" className="icon" />
                    <span>Warna: {car.warna}</span>
                  </div>
                </div>

                <div className="car-footer">
                  <div className="car-pricing">
                    <div className="price-display">
                      <div className="main-price">
                        <span className="price">
                          Rp {car.harga.toLocaleString("id-ID")}
                        </span>
                        <span className="period">/hari</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`https://wa.me/6289655195880/?text=Halo%20saya%20mau%20sewa%20mobil%20${car.nama_mobil}`}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Sewa Sekarang
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredCars.length === 0 && (
          <motion.div
            className="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Tidak ada mobil yang ditemukan</h3>
            <p>Coba ubah kata kunci pencarian atau filter yang dipilih</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Cars;
