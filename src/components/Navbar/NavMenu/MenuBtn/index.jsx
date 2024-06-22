import classNames from "classnames";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  closeNavProductsMenuHandle,
  openNavProductsMenuHandle,
} from "../../../../utils";
import { useEffect, useState } from "react";

function MenuBtn({ title, type, url }) {
  const { navProductsMenuIsOpened } = useSelector((state) => state.modal);
  const [productsBtnActive, setProductsBtnActive] = useState(false);

  const { path_subCategoryName } = useParams();

  useEffect(() => {
    type === "button" && path_subCategoryName !== undefined
      ? setProductsBtnActive(true)
      : setProductsBtnActive(false);
  }, [path_subCategoryName]);

  const NavProductsMenuControl = () => {
    navProductsMenuIsOpened
      ? closeNavProductsMenuHandle()
      : openNavProductsMenuHandle();
  };

  return (
    <>
      {type === "navlink" && (
        <NavLink
          onClick={closeNavProductsMenuHandle}
          className={({ isActive }) =>
            classNames(
              "navBtn font-medium text-base text-black duration-200 relative",
              {
                "scale-105 !text-[color:var(--hansaRed)]": isActive,
              }
            )
          }
          to={url}
        >
          {title}
          <span
            className={classNames(
              "absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 duration-300 bg-[color:var(--hansaBlue)] rounded-full h-1 block"
            )}
          ></span>
        </NavLink>
      )}
      {type === "button" && url === false && (
        <button
          onClick={NavProductsMenuControl}
          className={classNames(
            "navBtn font-medium text-base text-black duration-200 relative active:scale-105",
            {
              "scale-105 !text-[color:var(--hansaRed)]": productsBtnActive,
            }
          )}
        >
          {title}
          <span
            className={classNames(
              "absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 duration-300 bg-[color:var(--hansaBlue)] rounded-full h-1 block"
            )}
          ></span>
        </button>
      )}
    </>
  );
}

export default MenuBtn;
