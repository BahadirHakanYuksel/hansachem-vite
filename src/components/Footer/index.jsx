import { useState } from "react";
import { useMainContextData } from "../../MainContext";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { searchProductHandle } from "../../utils";
import { useTranslation } from "react-i18next";
import turkishToEnglish from "../../consts";

function Footer() {
  const { categories, myProducts } = useMainContextData();
  const [ActiveCategoryId, setActiveCategoryId] = useState(0);
  const [_products, set_products] = useState([]);

  const { t } = useTranslation();

  const navigation = useNavigate();
  const goSubCategory = (subCategoryName, categoryID, subCategoryID) => {
    searchProductHandle({
      categoryID,
      subCategoryID,
    });
    const urlSubCategoryName = encodeURIComponent(
      turkishToEnglish(subCategoryName.replace(/ /g, "-"))
    ).toLowerCase();
    const myURL = `/${urlSubCategoryName}`;
    navigation(myURL);
  };

  return (
    <div className="flex flex-col mt-20">
      <footer className="w-full grid gap-5 footerGrid min-h-96 bg-slate-200">
        <div className="p-3 flex flex-col gap-5">
          <div className="flex flex-wrap justify-center gap-5">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategoryId(category.id)}
                className={classNames(
                  "h-10 bg-transparent rounded-full duration-200 text-black px-5 py-1 text-lg font-medium",
                  {
                    "!bg-blue-600 !text-white":
                      category.id === ActiveCategoryId,
                  }
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 justify-center">
            {categories[ActiveCategoryId].subCategories.map((sub, index) => (
              <button
                key={index}
                onClick={() =>
                  goSubCategory(
                    sub.name,
                    categories[ActiveCategoryId].id,
                    sub.id
                  )
                }
                className="w-full h-11 flex items-center justify-center rounded-md duration-200 bg-white hover:bg-[color:var(--hansaBlue)] hover:text-white font-medium"
              >
                {sub.name}
              </button>
            ))}
          </div>
        </div>
        <div className="p-3 flex flex-col gap-5">
          <div className="overflow-hidden w-full h-40 rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.8780466597455!2d37.33740187572765!3d37.203125972134984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531fd4b15ccb183%3A0x379320f8251a660!2sHansachem!5e0!3m2!1str!2str!4v1718984654486!5m2!1str!2str"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-full hover:scale-110 duration-500"
            ></iframe>
          </div>
          <div className="flex flex-col">
            <header className="text-xl font-semibold text-slate-700">
              {t("address")}
            </header>
            <p className="font-medium">{t("addressText")}</p>
          </div>
          <div className="flex flex-col">
            <header className="text-xl font-semibold text-slate-700">
              {t("contact")}
            </header>
            <div className="flex items-center justify-start rounded-full h-8 text-black text-base font-medium">
              <span>Tel :</span>
              <a
                href=""
                className="hover:bg-[color:var(--hansaBlue)] hover:text-white rounded-full px-2 duration-200"
              >
                00000000000
              </a>
            </div>
            <div className="flex items-center justify-start text-base font-medium  rounded-full h-8 text-black">
              <span>{t("email")} |</span>
              <a
                href=""
                className="hover:bg-[color:var(--hansaBlue)] hover:text-white rounded-full px-2 duration-200"
              >
                ornek123@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex items-center justify-center gap-1.5 h-8 font-semibold text-lg text-[color:var(--hansaRed)]">
        <span className="text-gray-400">2024</span>{" "}
        <span className="text-black">-</span> Hansachem{" "}
        <span className="text-black">{t("officialWebsite")}</span>
      </div>
    </div>
  );
}

export default Footer;
