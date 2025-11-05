import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import "./Contact.scss";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form Data:", data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-hero">
        <div className="container">
          <motion.div
            className="hero-content text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Hubungi Kami</h1>
            <p>
              Siap membantu Anda menemukan mobil impian untuk perjalanan yang
              berkesan
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Informasi Kontak</h2>
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Icon icon="mdi:phone" />
                </div>
                <div className="info-content">
                  <h3>Telepon</h3>
                  <p>0896-5519-5880</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Icon icon="mdi:email" />
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p>info@tjrentcar.com</p>
                  <p>support@tjrentcar.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Icon icon="mdi:map-marker" />
                </div>
                <div className="info-content">
                  <h3>Alamat</h3>
                  <p>Jl. Muara No.24, RT.2/RW.3, Tj. Bar., Kec. Jagakarsa</p>
                  <p>
                    Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 13770
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Icon icon="mdi:clock-time-four" />
                </div>
                <div className="info-content">
                  <h3>Jam Operasional</h3>
                  <p>Senin - Jumat: 08:00 - 20:00</p>
                  <p>Sabtu - Minggu: 09:00 - 17:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="form-card card">
              <h2>Form Pemesanan</h2>
              <p>
                Isi formulir berikut untuk melakukan pemesanan atau konsultasi
              </p>

              {submitSuccess && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <Icon icon="mdi:check-circle" className="success-icon" />
                  Pesan Anda berhasil dikirim! Kami akan menghubungi Anda
                  segera.
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nama Lengkap *</label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", {
                      required: "Nama lengkap wajib diisi",
                      minLength: {
                        value: 2,
                        message: "Nama minimal 2 karakter",
                      },
                    })}
                    className={errors.name ? "error" : ""}
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Nomor Telepon *</label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone", {
                      required: "Nomor telepon wajib diisi",
                      pattern: {
                        value: /^[0-9+\-\s()]+$/,
                        message: "Format nomor telepon tidak valid",
                      },
                    })}
                    className={errors.phone ? "error" : ""}
                  />
                  {errors.phone && (
                    <span className="error-message">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Format email tidak valid",
                      },
                    })}
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && (
                    <span className="error-message">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="carType">Jenis Mobil</label>
                  <select id="carType" {...register("carType")}>
                    <option value="">Pilih jenis mobil</option>
                    <option value="MPV">MPV</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="SUV">SUV</option>
                    <option value="Sedan">Sedan</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="startDate">Tanggal Mulai</label>
                    <input
                      type="date"
                      id="startDate"
                      {...register("startDate")}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="endDate">Tanggal Selesai</label>
                    <input type="date" id="endDate" {...register("endDate")} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Pesan atau Kebutuhan Khusus *</label>
                  <textarea
                    id="message"
                    rows="5"
                    {...register("message", {
                      required: "Pesan wajib diisi",
                      minLength: {
                        value: 10,
                        message: "Pesan minimal 10 karakter",
                      },
                    })}
                    className={errors.message ? "error" : ""}
                    placeholder="Ceritakan kebutuhan rental mobil Anda..."
                  />
                  {errors.message && (
                    <span className="error-message">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <motion.button
                  type="submit"
                  className={`btn btn-primary btn-lg ${
                    isSubmitting ? "loading" : ""
                  }`}
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
