import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import CarsPreview from "../components/CarsPreview";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <FeatureSection />
      <CarsPreview />
      <HowItWorks />
      <Testimonials />
    </motion.div>
  );
};

export default Home;
