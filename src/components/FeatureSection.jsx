import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import "./FeatureSection.scss";

const FeatureSection = () => {
  const features = [
    {
      icon: "mdi:car-estate",
      title: "Mobil Berkualitas",
      description:
        "Armada mobil terbaru dengan kondisi prima dan terawat dengan baik",
    },
    {
      icon: "mdi:currency-usd",
      title: "Harga Terjangkau",
      description:
        "Dapatkan harga sewa yang kompetitif tanpa mengurangi kualitas layanan",
    },
    {
      icon: "mdi:clock-time-four",
      title: "Layanan 24/7",
      description: "Tim support siap membantu Anda kapan saja, dimana saja",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="feature-section section">
      <div className="container">
        <motion.div
          className="section-header text-center mb-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Mengapa Memilih Kami?</h2>
          <p>
            Kami memberikan layanan terbaik dengan keunggulan yang tidak akan
            Anda temukan di tempat lain
          </p>
        </motion.div>

        <motion.div
          className="features-grid grid grid-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card card"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <div className="feature-icon">
                <Icon icon={feature.icon} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
