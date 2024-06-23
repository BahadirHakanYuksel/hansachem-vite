import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PageHeader from "../../components/PageHeader";
import { useSelector } from "react-redux";
import ContactBox from "./ContactBox";
import MessageBox from "../../components/MessageBox";

function Contact() {
  const { t } = useTranslation();
  const { contactInfos } = useSelector((state) => state.admin);
  const defaultContactInfos = [
    {
      id: 0,
      icon: "fa-solid fa-phone",
      text: false,
      link: false,
    },
    {
      id: 1,
      icon: "fa-solid fa-envelope",
      text: false,
      link: false,
    },
    {
      id: 2,
      icon: "fa-solid fa-location-dot",
      text: t("addressText"),
      link: "",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-10 px-36 mt-10"
    >
      <PageHeader text={t("contact")} />
      <div className="grid grid-cols-3 gap-10 justify-center items-center">
        {contactInfos.map((info, index) => (
          <ContactBox
            key={index}
            text={info.text}
            icon_class={defaultContactInfos[info.id].icon}
            url={info.link}
            big_font={true}
          />
        ))}
        <ContactBox
          text={defaultContactInfos[2].text}
          icon_class={defaultContactInfos[2].icon}
          url={defaultContactInfos[2].link}
          key={2}
        />
      </div>
      <div className="w-full grid gridForm rounded-lg shadow-lg overflow-hidden min-h-[400px]">
        <div className="flex items-center justify-center flex-col gap-2 bg-gradient-to-tl to-[color:var(--hansaBlue)] to-90% from-[color:var(--hansaRed)] text-white">
          <i className="fa-regular fa-message text-9xl"></i>
          <header className="text-4xl font-medium">{t("contactUs")}</header>
        </div>
        <div className="bg-white flex flex-col">
          <header className="flex items-center justify-end text-2xl font-semibold px-6 py-3 text-gray-600">
            {t("getInTouch")}
          </header>
          <MessageBox />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <header className="text-slate-500 font-normal text-4xl text-center">
          Hansachem - Google Maps
        </header>
        <div className="overflow-hidden w-full h-96 rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.8780466597455!2d37.33740187572765!3d37.203125972134984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531fd4b15ccb183%3A0x379320f8251a660!2sHansachem!5e0!3m2!1str!2str!4v1718984654486!5m2!1str!2str"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full h-full opacity-80 hover:opacity-100 duration-500"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
