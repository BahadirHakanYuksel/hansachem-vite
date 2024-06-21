import { motion } from "framer-motion";
import { useMainContextData } from "../../../MainContext";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import {
  closeNavProductsMenuHandle,
  searchProductHandle,
} from "../../../utils";
import { useSelector } from "react-redux";

function NavProductsMenu() {
  const { categories } = useMainContextData();
  const { path_subCategoryName } = useParams();
  const { path_categoryID } = useSelector((state) => state.products_store);
  const [ActiveCategoryId, setActiveCategoryId] = useState(0);
  const navigation = useNavigate();

  useEffect(() => {
    if (path_categoryID) setActiveCategoryId(path_categoryID);
    else setActiveCategoryId(0);
  }, [path_subCategoryName]);

  const goSubCategory = (subCategoryName, categoryID, subCategoryID) => {
    searchProductHandle({
      categoryID,
      subCategoryID,
    });
    const urlSubCategoryName = subCategoryName.replace(/ /g, "-").toLowerCase();
    const myURL = `/${urlSubCategoryName}`;
    navigation(myURL);
    closeNavProductsMenuHandle();
  };
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "302px", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="absolute left-0 top-20 w-full px-40"
    >
      <div className="w-full h-full bg-white rounded-md shadow-lg overflow-hidden flex flex-col relative">
        <div className="grid grid-cols-4 gap-5 p-5">
          {categories.map((category) => (
            <button
              onClick={() => setActiveCategoryId(category.id)}
              className={classNames(
                "bg-gray-200 text-black h-10 rounded-md duration-200 text-base font-medium hover:bg-gray-300",
                {
                  "!bg-[color:var(--hansaRed)] !text-white":
                    category.id === ActiveCategoryId,
                }
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-2.5 p-4 overflow-hidden">
          {categories[ActiveCategoryId].subCategories.map((sub) => (
            <motion.button
              initial={{ translateY: "200px" }}
              animate={{ translateY: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              onClick={() =>
                goSubCategory(sub.name, categories[ActiveCategoryId].id, sub.id)
              }
              className={classNames(
                "w-full h-10 rounded-md border-2 border-solid border-gray-300 hover:bg-[color:var(--hansaBlue)] text-black font-medium text-sm hover:text-white hover:border-[color:var(--hansaBlue)] duration-100",
                {
                  "!bg-[color:var(--hansaBlue)] !text-white !border-[color:var(--hansaBlue)]":
                    path_subCategoryName !== undefined &&
                    sub.name.toLowerCase() ===
                      path_subCategoryName.replace(/-/g, " "),
                }
              )}
            >
              {sub.name}
            </motion.button>
          ))}
        </div>
        <img
          className="w-14 h-14 absolute right-2 bottom-2"
          src={categories[ActiveCategoryId].icon_url}
        />
      </div>
    </motion.div>
  );
}

export default NavProductsMenu;
