import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonials.scss";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Pengusaha",
      image: "images/user.jpg",
      rating: 5,
      review:
        "Pelayanan sangat memuaskan! Mobil dalam kondisi prima dan proses penyewaannya sangat mudah. Akan menggunakan jasa ini lagi untuk perjalanan selanjutnya.",
    },
    {
      id: 2,
      name: "Sari Dewi",
      role: "Ibu Rumah Tangga",
      image: "images/user.jpg",
      rating: 5,
      review:
        "Staff sangat ramah dan profesional. Mobil bersih dan nyaman untuk perjalanan keluarga. Harga juga sangat terjangkau. Highly recommended!",
    },
    {
      id: 3,
      name: "Ahmad Wijaya",
      role: "Karyawan Swasta",
      image: "images/user.jpg",
      rating: 5,
      review:
        "Pengalaman menyewa mobil terbaik yang pernah saya alami. Proses cepat, transparan, dan tidak ada biaya tersembunyi. Terima kasih!",
    },
    {
      id: 4,
      name: "Linda Sari",
      role: "Mahasiswa",
      image: "images/user.jpg",
      rating: 4,
      review:
        "Harga student-friendly dan pelayanan ramah. Mobil sesuai dengan deskripsi dan dalam kondisi baik. Pasti akan merekomendasikan ke teman-teman.",
    },
    {
      id: 5,
      name: "Dedi Prasetyo",
      role: "Tour Guide",
      image: "images/user.jpg",
      rating: 5,
      review:
        "Sebagai tour guide, saya sering menggunakan jasa rental ini. Selalu puas dengan kualitas mobil dan pelayanannya. Sangat profesional!",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`star ${index < rating ? "active" : ""}`}>
        <Icon icon="mdi:star" />
      </span>
    ));
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <motion.div
          className="section-header text-center mb-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Testimoni Pelanggan</h2>
          <p>Apa kata pelanggan kami tentang layanan rental mobil terbaik</p>
        </motion.div>

        <motion.div
          className="testimonials-slider"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  className="testimonial-card card"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="testimonial-header">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-info">
                      <h4>{testimonial.name}</h4>
                      <p className="role">{testimonial.role}</p>
                      <div className="rating">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>

                  <blockquote className="testimonial-review">
                    "{testimonial.review}"
                  </blockquote>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-navigation">
            <button className="swiper-button-prev-custom">←</button>
            <button className="swiper-button-next-custom">→</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
