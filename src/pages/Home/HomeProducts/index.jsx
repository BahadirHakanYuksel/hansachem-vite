import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useMainContextData } from "../../../MainContext";
import { searchProductHandle } from "../../../utils";
import { useInView } from "framer-motion";
import { useRef } from "react";

function HomeProducts() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const goSubCategory = (subCategoryName, categoryID, subCategoryID) => {
    searchProductHandle({
      categoryID,
      subCategoryID,
    });
    const urlSubCategoryName = subCategoryName.replace(/ /g, "-").toLowerCase();
    const myURL = `/${urlSubCategoryName}`;
    navigation(myURL);
  };
  const { categories } = useMainContextData();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={ref}
    >
      <header className="text-[32px] text-slate-500 pb-1 border-b-2 border-solid mb-6 border-slate-700">
        {t("products").toUpperCase()}
      </header>
      <div className="flex flex-wrap gap-10 justify-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="product_home bg-slate-200 rounded-xl w-60 h-80 overflow-hidden relative"
          >
            <header className="product_title_home text-[22px] text-[color:var(--text)] text-center font-bold flex justify-center items-center productTitleHome absolute left-1/2 -translate-x-1/2 duration-150 ease-in pt-3 px-3">
              {category.name}
            </header>
            <img
              className="absolute bottom-20 w-[110px] duration-500 h-[110px] left-1/2 -translate-x-1/2"
              src={category.icon_url}
              alt=""
            />
            <div
              className={classNames(
                "subCategoryHome absolute w-full flex flex-col gap-2.5 -left-60 top-14 h-64 overflow-y-auto px-3 text-sm font-medium duration-500 pointer-events-none",
                {
                  "!grid !grid-cols-1": category.id === 0,
                }
              )}
            >
              {category.subCategories.map((subCategory) => (
                <button
                  onClick={() =>
                    goSubCategory(subCategory.name, category.id, subCategory.id)
                  }
                  key={subCategory.id}
                  className="w-full h-10 rounded-lg bg-white hover:bg-[color:var(--hansaRed)] hover:text-white"
                >
                  {subCategory.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeProducts;
