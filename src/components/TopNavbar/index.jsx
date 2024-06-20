import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { update_lng_handle } from "../../utils";

function TopNavbar() {
  const lngBtns = [
    {
      lng: "tr",
      icon_url: "icons/turkey.png",
    },
    {
      lng: "en",
      icon_url: "icons/united-kingdom.png",
    },
  ];
  const { i18n } = useTranslation();
  const changeLng = async (lng) => {
    await i18n.changeLanguage(lng);
    update_lng_handle(lng);
  };
  return (
    <div className="w-full h-12 px-36 border-2 border-solid border-[color:var(--topNavBorder)]">
      <nav className="w-full h-full flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          {lngBtns.map((lng, i) => (
            <button
              key={i}
              onClick={() => changeLng(lng.lng)}
              className={classNames(
                "rounded-full w-7 h-7 flex items-center justify-center opacity-75 pointer-events-auto duration-200 scale-90",
                {
                  "!opacity-100 !pointer-events-none !scale-100":
                    lng.lng === i18n.language,
                }
              )}
            >
              <img src={lng.icon_url} className="w-full h-full" alt="" />
            </button>
          ))}
        </div>
        <div className="text-xs font-semibold flex items-center gap-2.5">
          <a
            className="flex items-center justify-start h-8 w-48 bg-[color:var(--topContactBack)] p-2 rounded-full hover:bg-[color:var(--topContactHover)]"
            href=""
          >
            tel no
          </a>
          <a
            className="flex items-center justify-start h-8 w-48 bg-[color:var(--topContactBack)] p-2 rounded-full hover:bg-[color:var(--topContactHover)]"
            href=""
          >
            email
          </a>
        </div>
      </nav>
    </div>
  );
}

export default TopNavbar;
