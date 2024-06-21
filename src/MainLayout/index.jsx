import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Outlet } from "react-router-dom";
import { update_lng_handle } from "../utils";
import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  const { i18n } = useTranslation();

  useEffect(() => {
    update_lng_handle(i18n.language);
  }, []);
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
