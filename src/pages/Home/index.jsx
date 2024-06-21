import { motion } from "framer-motion";
import HomeAbout from "./HomeAbout";
import HomeProducts from "./HomeProducts";
import Slider from "./Slider";
import HomeContact from "./HomeContact";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full flex flex-col px-36 mt-8 gap-20"
    >
      <Slider />
      <HomeAbout />
      <HomeProducts />
      <HomeContact />
    </motion.div>
  );
}

export default Home;
