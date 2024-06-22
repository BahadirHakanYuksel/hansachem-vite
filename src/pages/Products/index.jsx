import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMainContextData } from "../../MainContext";
import Error from "../Error";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { searchProductHandle } from "../../utils";
import turkishToEnglish from "../../consts";

function Products() {
  const { path_categoryID, path_subCategoryID } = useSelector(
    (state) => state.products_store
  );
  const { path_subCategoryName } = useParams();
  const [subCategoryTitle, setSubCategoryTitle] = useState("");

  const [products, setProducts] = useState([]);
  const [yesProducts, setYesProducts] = useState(false);

  const { categories, myProducts } = useMainContextData();

  const id_update = async () => {
    await categories.map((category) => {
      category.subCategories.map((sub) => {
        const myName = encodeURIComponent(
          turkishToEnglish(sub.name.replace(/ /g, "-"))
        ).toLowerCase();
        if (myName === path_subCategoryName) {
          setSubCategoryTitle(sub.name);
          setYesProducts(true);
          searchProductHandle({
            categoryID: category.id,
            subCategoryID: sub.id,
          });
        }
      });
    });
  };

  const products_update = () => {
    setProducts(
      myProducts.filter(
        (p) =>
          p.categoryID === path_categoryID &&
          p.subCategoryID === path_subCategoryID
      )
    );
  };

  useEffect(() => {
    document.scrollingElement.scrollTop = 0;
    id_update();
    products_update();
  }, [path_categoryID, path_subCategoryID, path_subCategoryName]);

  return (
    <>
      {yesProducts ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col px-36 mt-8 gap-5"
        >
          <motion.header
            initial={{ width: 1 }}
            animate={{ width: "100%" }}
            className="text-3xl py-3 overflow-hidden transition-all ease-in-out text-nowrap font-normal border-b-2 duration-[1500ms] border-b-solid border-b-slate-300"
          >
            {subCategoryTitle}
          </motion.header>
          <div className="flex flex-wrap gap-10">
            {products.map((product) => (
              <button
                key={product.id}
                className="w-44 h-60 p-1 rounded-xl bg-gradient-to-br to-[color:var(--hansaRed)] from-[color:var(--hansaBlue)] text-white flex items-center justify-center flex-col cursor-default hover:to-black hover:from-gray-600"
              >
                <span className="text-gray-300 text-base font-normal">
                  {product.shortName}
                </span>
                <span className="text-[26px] font-bold">
                  {product.productNo}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      ) : (
        <Error />
      )}
    </>
  );
}

export default Products;
