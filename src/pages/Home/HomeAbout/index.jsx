import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HomeAbout() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { myAbout } = useSelector((state) => state.admin);

  return (
    <div className="w-full grid grid-cols-2 gap-8">
      <div className="w-full flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <header className="text-[27px] font-medium text-slate-500">
            {t("aboutUs")}
          </header>
          <span className="text-sm font-medium text-[color:var(--hansaRed)]">
            Hansachem
          </span>
        </div>
        <p className="line-clamp-[12]">{myAbout}</p>
        <div className="flex items-center justify-end">
          <button
            onClick={() => {
              navigate(`/${encodeURIComponent(t("about")).toLowerCase()}`);
              document.scrollingElement.scrollTop = 0;
            }}
            className="w-32 h-8 p-1 rounded-full bg-slate-200 duration-200 hover:bg-[color:var(--hansaBlue)] hover:text-white"
          >
            {t("readMore")}
          </button>
        </div>
      </div>
      <div className="w-full h-[400px] overflow-hidden shadow-lg rounded-2xl">
        <img className="w-full h-full" src="icons/homeAbout.jpg" alt="" />
      </div>
    </div>
  );
}

export default HomeAbout;
