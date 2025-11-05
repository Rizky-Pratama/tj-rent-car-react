import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import "./HowItWorks.scss";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Pilih Mobil",
      description:
        "Pilih mobil yang sesuai dengan kebutuhan perjalanan Anda dari berbagai pilihan yang tersedia",
      icon: "mdi:car-multiple",
    },
    {
      step: "02",
      title: "Isi Formulir",
      description:
        "Lengkapi formulir pemesanan dengan data diri dan detail penyewaan yang diinginkan",
      icon: "mdi:form-select",
    },
    {
      step: "03",
      title: "Konfirmasi & Bayar",
      description:
        "Terima konfirmasi pemesanan dan lakukan pembayaran sesuai dengan metode yang dipilih",
      icon: "mdi:check-circle",
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="how-it-works section">
      <div className="container">
        <motion.div
          className="section-header text-center mb-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Cara Menyewa Mobil</h2>
          <p>
            Proses penyewaan mobil yang mudah dan cepat hanya dalam 3 langkah
            sederhana
          </p>
        </motion.div>

        <motion.div
          className="steps-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-item"
              variants={itemVariants}
            >
              <motion.div
                className="step-icon"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <span className="step-number">{step.step}</span>
                <Icon icon={step.icon} className="icon" />
              </motion.div>

              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <motion.div
                  className="step-connector"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                ></motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
