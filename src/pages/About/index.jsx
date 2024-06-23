import { useTranslation } from "react-i18next";
import PageHeader from "../../components/PageHeader";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function About() {
  const { t } = useTranslation();
  const { myAbout } = useSelector((state) => state.admin);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-5 px-36 mt-10 pb-28"
    >
      <PageHeader text={t("aboutUs")} />
      <p>{myAbout}</p>
    </motion.div>
  );
}

export default About;
