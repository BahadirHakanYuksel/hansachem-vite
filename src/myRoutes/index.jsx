import MainLayout from "../MainLayout";
import About from "../pages/About";
import Admin from "../pages/Admin";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Products from "../pages/Products";
import { useTranslation } from "react-i18next";

export const useDynamicRoutes = () => {
  const { i18n } = useTranslation();

  return [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: i18n.language === "tr" ? "kurumsal" : "about",
          element: <About />,
        },
        {
          path: i18n.language === "tr" ? "/iletisim" : "contact",
          element: <Contact />,
        },
        {
          path: ":path_subCategoryName",
          element: <Products />,
        },
        {
          path: i18n.language === "tr" ? "yonetici" : "admin",
          element: <Admin />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ];
};
