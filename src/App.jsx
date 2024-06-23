import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { useDynamicRoutes } from "./myRoutes";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { url_data } from "./consts";
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    const path_name = location.pathname;
    url_data.forEach((url) => {
      url.first === path_name && navigate(url.second);
    });
    // switch (path_name) {
    //   case "/about":
    //     navigate("/kurumsal");
    //     break;
    //   case "/kurumsal":
    //     navigate("/about");
    //     break;
    //   case "/contact":
    //     navigate("/iletisim");
    //     break;
    //   case "/iletisim":
    //     navigate("/contact");
    //     break;
    //   default:
    //     break;
    // }
  }, [i18n.language]);
  const myRoutes = useDynamicRoutes();
  return useRoutes(myRoutes);
}

export default App;
