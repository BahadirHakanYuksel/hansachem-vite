import { useTranslation } from "react-i18next";
import MessageBox from "../../../components/MessageBox";

function HomeContact() {
  const { t } = useTranslation();
  return (
    <div className="w-full grid gridForm rounded-lg shadow-lg overflow-hidden min-h-[400px]">
      <div className="flex items-center justify-center flex-col gap-2 bg-gradient-to-tl to-[color:var(--hansaBlue)] from-blue-500 text-white">
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
  );
}

export default HomeContact;
