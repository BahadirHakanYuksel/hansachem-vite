import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();
  return (
    <div className="w-full h-20 px-36">
      <nav className="w-full h-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="w-16 h-16 p-1 bg-white rounded-full overflow-hidden">
            <img
              src="icons/hansachemLogo.png"
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-[40px] font-bold text-[color:var(--hansaRed)]">
              Hansachem
            </span>
            <span className="text-[8.37px] -mt-2 font-bold text-[color:var(--hansaBlue)]">
              {t("mark")}
            </span>
          </div>
        </div>
        <div>menu</div>
      </nav>
    </div>
  );
}

export default Navbar;
