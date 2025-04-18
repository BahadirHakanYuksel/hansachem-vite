import { useTranslation } from "react-i18next";
import MenuBtn from "./MenuBtn";
import { useSelector } from "react-redux";
import { darkModeHandle, lightModeHandle } from "../../../utils";
import turkishToEnglish from "../../../consts";

function NavMenu() {
  const { t } = useTranslation();
  const { modeIcon, mode } = useSelector((state) => state.theme);

  const changeTheme = () => {
    mode !== "dark" ? darkModeHandle() : lightModeHandle();
  };

  const aboutURL = turkishToEnglish(t("about"));
  const contactURL = turkishToEnglish(t("contact"));

  const navData = [
    {
      title: t("homepage"),
      url: "/",
      type: "navlink",
    },
    {
      title: t("about"),
      url: `/${encodeURIComponent(aboutURL).toLowerCase()}`,
      type: "navlink",
    },
    {
      title: t("products"),
      url: false,
      type: "button",
    },
    {
      title: t("contact"),
      url: `/${encodeURIComponent(contactURL).toLowerCase()}`,
      type: "navlink",
    },
  ];

  return (
    <div className="flex items-center gap-6">
      {navData.map((nav, index) => (
        <MenuBtn title={nav.title} type={nav.type} url={nav.url} key={index} />
      ))}
      <button
        onClick={changeTheme}
        className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-300 duration-200 bg-gray-200 text-[color:var(color)]"
      >
        <i className={modeIcon}></i>
      </button>
    </div>
  );
}

export default NavMenu;
