import { motion } from "framer-motion";

function PageHeader({ text }) {
  return (
    <div className="flex items-center justify-center">
      <motion.header
        initial={{ width: 0, opacity: 0, visibility: "hidden" }}
        animate={{ width: "100%", opacity: 1, visibility: "visible" }}
        transition={{ duration: 0.5 }}
        className="flex px-4 justify-center text-wrap items-center bg-gradient-to-l to-[color:var(--hansaBlue)] from-[color:var(--hansaRed)] text-white text-3xl font-medium h-[50px] rounded-full"
      >
        {text}
      </motion.header>
    </div>
  );
}

export default PageHeader;
