import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMainContextData } from "../../MainContext";
import Error from "../Error";
import { motion } from "framer-motion";

function Products() {
  const { path_subCategoryName, path_categoryID, path_subCategoryID } =
    useParams();
  const [subCategoryTitle, setSubCategoryTitle] = useState("");

  const [products, setProducts] = useState([]);
  const [yesProducts, setYesProducts] = useState(false);

  const { categories, myProducts } = useMainContextData();

  const editSubCategoryName = () => {
    var metin = path_subCategoryName;

    // "-" karakterlerini boşluklarla değiştirme
    var boslukluMetin = metin.replace(/-/g, " ");

    // Her kelimenin baş harfini büyütme
    var duzeltilmisMetin = boslukluMetin
      .split(" ")
      .map(function (kelime) {
        return kelime.charAt(0).toUpperCase() + kelime.slice(1);
      })
      .join(" ");

    // Sonucu yazdırma
    setSubCategoryTitle(duzeltilmisMetin);
    console.log(
      "--- main",
      categories[path_categoryID].subCategories[
        path_subCategoryID
      ].name.toLowerCase() + " path :",
      subCategoryTitle.toLowerCase()
    );
    categories[path_categoryID].subCategories[
      path_subCategoryID
    ].name.toLowerCase() === subCategoryTitle.toLowerCase()
      ? setYesProducts(true)
      : setYesProducts(false);
  };
  const findProducts = () => {
    setProducts([]);
    myProducts.forEach((product) => {
      if (
        product.categoryID.toString() === path_categoryID &&
        product.subCategoryID.toString() === path_subCategoryID
      ) {
        setProducts((prevProduct) => [...prevProduct, product]);
      }
    });
  };
  const pageLoaded = () => {
    editSubCategoryName();
    findProducts();
  };

  useEffect(() => {
    editSubCategoryName();
  }, [subCategoryTitle]);

  useEffect(() => {
    editSubCategoryName();
    findProducts();
    pageLoaded();
  }, [path_subCategoryName, path_categoryID, path_subCategoryID]);

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
                className="w-44 h-60 p-1 rounded-xl bg-gradient-to-br to-[color:var(--hansaRed)] from-[color:var(--hansaBlue)] text-white flex items-center justify-center flex-col pointer-events-none"
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
