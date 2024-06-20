import { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

const myContext = createContext();

function MainContextProvider({ children }) {
  const { t } = useTranslation();
  const categories = [
    {
      id: 0,
      name: t("textileChemicals"),
      icon_url: "icons/LIGHT_ChemistryPNG_Hansachem.png",
      subCategories: [
        {
          name: "Katyonik Yumuşatıcılar",
          id: 0,
        },
        {
          name: "Nanyonik Yumuşatıcılar",
          id: 1,
        },
        {
          name: "Polyester İçin Yumuşatıcılar",
          id: 2,
        },
        {
          name: "Nanyonik Islatıcılar",
          id: 3,
        },
        {
          name: "İyon Tutucular",
          id: 4,
        },
        {
          name: "Peroksit Sitabilizatörleri",
          id: 5,
        },
        {
          name: "Reaktif Yıkama Sabunları",
          id: 6,
        },
        {
          name: "Asidik Redüktanlar",
          id: 7,
        },
        {
          name: "Bazik Redüktanlar",
          id: 8,
        },
        {
          name: "Ekolojik Carrier",
          id: 9,
        },
        {
          name: "Polyester Dispergatörleri",
          id: 10,
        },
        {
          name: "Dispergatör Egalizatörleri",
          id: 11,
        },
        {
          name: "Polyester ve Akrilik İçin Antistatik",
          id: 12,
        },
      ],
    },
    {
      id: 1,
      name: t("textileColours"),
      icon_url: "icons/drop.png",
      subCategories: [
        {
          name: "Disperts Boyalar",
          id: 0,
        },
        {
          name: "Reaktif Boyalar",
          id: 1,
        },
      ],
    },
    {
      id: 2,
      name: t("textileSilicones"),
      icon_url: "icons/LIGHT_SiliconePNG_Hansachem.png",
      subCategories: [
        {
          name: "Hidrofil Slikonlar",
          id: 0,
        },
        {
          name: "Mikro Silikonlar",
          id: 1,
        },
        {
          name: "Makro Silikonlar",
          id: 2,
        },
      ],
    },
    {
      id: 3,
      name: t("textileEnzymes"),
      icon_url: "icons/icons8-enzyme-100.png",
      subCategories: [
        {
          name: "Asidik Tüy Enzimleri",
          id: 0,
        },
        {
          name: "Nötr Tüy Enzimleri",
          id: 1,
        },
        {
          name: "Anti Peroksit Enzimleri",
          id: 2,
        },
      ],
    },
  ];
  const myProducts = [
    // -------- KATYONİK YUMUŞATICILAR
    {
      id: 0,
      categoryID: 0,
      subCategoryID: 0,
      shortName: "SASOFT",
      productNo: "KH-25",
    },
    {
      id: 1,
      categoryID: 0,
      subCategoryID: 0,
      shortName: "SASOFT",
      productNo: "KP1",
    },
    {
      id: 2,
      categoryID: 0,
      subCategoryID: 0,
      shortName: "SASOFT",
      productNo: "H-20",
    },
    // -------- NANYONİK YUMUŞATICILAR
    {
      id: 3,
      categoryID: 0,
      subCategoryID: 1,
      shortName: "SASOFT",
      productNo: "NH-25",
    },
    {
      id: 4,
      categoryID: 0,
      subCategoryID: 1,
      shortName: "SASOFT",
      productNo: "NPY",
    },
    {
      id: 5,
      categoryID: 0,
      subCategoryID: 1,
      shortName: "SASOFT",
      productNo: "M-20",
    },
    // -------- POLYESTER İÇİN YUMUŞATICILAR
    {
      id: 6,
      categoryID: 0,
      subCategoryID: 2,
      shortName: "SASOFT",
      productNo: "THE CONZ",
    },
    // -------- NANYONİK ISLATICILAR
    {
      id: 7,
      categoryID: 0,
      subCategoryID: 3,
      shortName: "SAWET",
      productNo: "NW CONZ",
    },
    {
      id: 8,
      categoryID: 0,
      subCategoryID: 3,
      shortName: "SAWET",
      productNo: "NE CONZ",
    },
    // -------- İYON TUTUCULAR
    {
      id: 9,
      categoryID: 0,
      subCategoryID: 4,
      shortName: "SASOL",
      productNo: "COMPLEX",
    },
    {
      id: 10,
      categoryID: 0,
      subCategoryID: 4,
      shortName: "SASOL",
      productNo: "C-SK",
    },
    // -------- PEROKSİT SİTABİLİZATÖRLERİ
    {
      id: 11,
      categoryID: 0,
      subCategoryID: 5,
      shortName: "SANSTAB",
      productNo: "OXY",
    },
    {
      id: 12,
      categoryID: 0,
      subCategoryID: 5,
      shortName: "SANSTAB",
      productNo: "PKS",
    },
    // -------- REAKTIF YIKAMA SABUNLARI
    {
      id: 13,
      categoryID: 0,
      subCategoryID: 6,
      shortName: "SAWASH",
      productNo: "RYA",
    },
    {
      id: 14,
      categoryID: 0,
      subCategoryID: 6,
      shortName: "SAWASH",
      productNo: "EYK",
    },
    // -------- ASIDIK REDÜKTANLAR
    {
      id: 15,
      categoryID: 0,
      subCategoryID: 7,
      shortName: "SAYAR",
      productNo: "MYR CONZ",
    },
    {
      id: 16,
      categoryID: 0,
      subCategoryID: 7,
      shortName: "SAYAR",
      productNo: "FBY",
    },
    // -------- BAZIK REDÜKTANLAR
    {
      id: 17,
      categoryID: 0,
      subCategoryID: 8,
      shortName: "SAYAR",
      productNo: "BRA CONZ",
    },
    {
      id: 18,
      categoryID: 0,
      subCategoryID: 8,
      shortName: "SAYAR",
      productNo: "ADM",
    },
    // -------- EKOLOJIK CARRIER
    {
      id: 19,
      categoryID: 0,
      subCategoryID: 9,
      shortName: "SAYER",
      productNo: "CRB-70",
    },
    {
      id: 20,
      categoryID: 0,
      subCategoryID: 9,
      shortName: "SAYER",
      productNo: "CRB CONZ",
    },
    // -------- POLYESTER DISPERGATÖRLERI
    {
      id: 21,
      categoryID: 0,
      subCategoryID: 10,
      shortName: "SAPERS",
      productNo: "UK-500",
    },
    {
      id: 22,
      categoryID: 0,
      subCategoryID: 10,
      shortName: "SAPERS",
      productNo: "PDS_G",
    },
    {
      id: 23,
      categoryID: 0,
      subCategoryID: 10,
      shortName: "SAPERS",
      productNo: "NW_50",
    },
    // -------- DISPERGATÖR EGALIZATÖRLERI
    {
      id: 24,
      categoryID: 0,
      subCategoryID: 11,
      shortName: "SASOL",
      productNo: "HK-200",
    },
    // -------- POLYESTER VE AKRILIK İÇIN ANTISTATIK
    {
      id: 25,
      categoryID: 0,
      subCategoryID: 12,
      shortName: "SANTİ",
      productNo: "SK-100",
    },
    {
      id: 26,
      categoryID: 0,
      subCategoryID: 12,
      shortName: "SANTİ",
      productNo: "STA",
    },
    {
      id: 27,
      categoryID: 0,
      subCategoryID: 12,
      shortName: "SANTİ",
      productNo: "ARD",
    },
    // ------------------------- TEKSTİL BOYALAR
    // -------- DİSPERTS BOYALAR
    {
      id: 28,
      categoryID: 1,
      subCategoryID: 0,
      shortName: "SASİL",
      productNo: "BOYA-1",
    },
    // -------- REAKTİF BOYALAR
    {
      id: 29,
      categoryID: 1,
      subCategoryID: 1,
      shortName: "SASİL",
      productNo: "BOYA-2",
    },
    // ------------------------- TEKSTİL SİLİKONLARI
    // -------- HIDROFIL SLIKONLAR
    {
      id: 30,
      categoryID: 2,
      subCategoryID: 0,
      shortName: "SASİL",
      productNo: "PSP",
    },
    {
      id: 31,
      categoryID: 2,
      subCategoryID: 0,
      shortName: "SASİL",
      productNo: "NJP",
    },
    {
      id: 32,
      categoryID: 2,
      subCategoryID: 0,
      shortName: "SASİL",
      productNo: "MSP",
    },
    // -------- MIKRO SLIKONLAR
    {
      id: 33,
      categoryID: 2,
      subCategoryID: 1,
      shortName: "SASİL",
      productNo: "ZSM",
    },
    {
      id: 34,
      categoryID: 2,
      subCategoryID: 1,
      shortName: "SASİL",
      productNo: "HSM",
    },
    {
      id: 35,
      categoryID: 2,
      subCategoryID: 1,
      shortName: "SASİL",
      productNo: "PSM",
    },
    // -------- MAKRO SLIKONLAR
    {
      id: 34,
      categoryID: 2,
      subCategoryID: 2,
      shortName: "SASİL",
      productNo: "AHT",
    },
    {
      id: 35,
      categoryID: 2,
      subCategoryID: 2,
      shortName: "SASİL",
      productNo: "HMC",
    },
    {
      id: 36,
      categoryID: 2,
      subCategoryID: 2,
      shortName: "SASİL",
      productNo: "EMC",
    },
    // ------------------------- TEKSTİL ENZİMLERİ
    // -------- ASIDIK TÜY ENZIMLERI
    {
      id: 37,
      categoryID: 3,
      subCategoryID: 0,
      shortName: "SANZYME",
      productNo: "ATE",
    },
    {
      id: 38,
      categoryID: 3,
      subCategoryID: 0,
      shortName: "SANZYME",
      productNo: "ATC",
    },
    // -------- NÖTR TÜY ENZIMLERI
    {
      id: 39,
      categoryID: 3,
      subCategoryID: 1,
      shortName: "SANZYME",
      productNo: "NTE",
    },
    {
      id: 40,
      categoryID: 3,
      subCategoryID: 1,
      shortName: "SANZYME",
      productNo: "NTL",
    },
    // -------- ANTI PEROKSIT ENZIMLERI
    {
      id: 41,
      categoryID: 3,
      subCategoryID: 2,
      shortName: "SANZYME",
      productNo: "PRE",
    },
    {
      id: 42,
      categoryID: 3,
      subCategoryID: 2,
      shortName: "SANZYME",
      productNo: "P10",
    },
  ];

  const db = {
    categories,
    myProducts,
  };
  return <myContext.Provider value={db}>{children}</myContext.Provider>;
}

export default MainContextProvider;

export const useMainContextData = () => useContext(myContext);
