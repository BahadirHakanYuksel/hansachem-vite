import { useEffect, useState } from "react";
import { useMainContextData } from "../../MainContext";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { searchProductHandle } from "../../utils";

function Footer() {
  const { categories, myProducts } = useMainContextData();
  const [ActiveCategoryId, setActiveCategoryId] = useState(0);
  const [_products, set_products] = useState([]);

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

  return (
    <footer className="mt-20 grid gap-5 footerGrid min-h-96 bg-slate-200">
      <div className="p-3 flex flex-col gap-5">
        <div className="flex flex-wrap justify-center gap-5">
          {categories.map((category) => (
            <button
              onClick={() => setActiveCategoryId(category.id)}
              className={classNames(
                "h-10 bg-transparent rounded-sm duration-200 text-black px-3 w-44 py-1 text-base font-medium",
                {
                  "!bg-blue-600 !text-white": category.id === ActiveCategoryId,
                }
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 justify-center">
          {categories[ActiveCategoryId].subCategories.map((sub) => (
            <button
              onClick={() =>
                goSubCategory(sub.name, categories[ActiveCategoryId].id, sub.id)
              }
              className="w-full h-11 flex items-center justify-center rounded-md duration-200 bg-white hover:bg-[color:var(--hansaBlue)] hover:text-white"
            >
              {sub.name}
            </button>
          ))}
        </div>
      </div>
      <div className="p-3">box 2</div>
    </footer>
  );
}

export default Footer;
