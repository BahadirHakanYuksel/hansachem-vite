import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import NavMenu from "./NavMenu";
import NavProductsMenu from "./NavProductsMenu";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

function Navbar() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const { navProductsMenuIsOpened } = useSelector((state) => state.modal);
  return (
    <div className="w-full h-20 px-36 sticky top-0 left-0 z-10 bg-[color:var(--back)] ">
      <nav className="w-full h-full flex items-center justify-between ">
        <button
          onClick={() => navigation("/")}
          className="flex items-center gap-1 active:scale-105 duration-200"
        >
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
        </button>
        <NavMenu />
      </nav>
      <AnimatePresence>
        {navProductsMenuIsOpened && <NavProductsMenu />}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
