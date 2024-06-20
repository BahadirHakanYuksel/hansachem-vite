import classNames from "classnames";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { leftSlideHandle, rightSlideHandle } from "../../../utils";

function Slider() {
  const { activeScreenIndex } = useSelector((state) => state.slider);
  const { t } = useTranslation();

  const screens = [
    {
      text: t("slider1"),
      img_url: "icons/SLIDER1.jpg",
      id: 0,
    },
    {
      text: t("slider2"),
      img_url: "icons/SLIDER2.jpg",
      id: 1,
    },
    {
      text: t("slider3"),
      img_url: "icons/SLIDER3.jpg",
      id: 2,
    },
  ];
  const circles = [0, 1, 2];

  const right = () => {
    rightSlideHandle();
  };

  const left = () => {
    leftSlideHandle();
  };

  useEffect(() => {
    const myInterval = setInterval(right, 6000);
    return () => {
      clearInterval(myInterval);
    };
  }, [activeScreenIndex]);

  return (
    <div className="slider_main w-full h-[460px] overflow-hidden rounded-xl relative">
      {screens.map((screen) => (
        <div
          key={screen.id}
          className={classNames(
            "w-full h-full absolute left-0 top-0 opacity-0 invisible duration-500",
            {
              "!opacity-100 !visible": screen.id === activeScreenIndex,
            }
          )}
        >
          <img className="w-full h-full" src={screen.img_url} alt="" />
          <span className="text-[50px] text-white bg-black bg-opacity-35 absolute w-full h-full left-0 top-0 flex items-center justify-center">
            {screen.text}
          </span>
        </div>
      ))}
      <button
        onClick={right}
        className="control_btn control_right_btn text-4xl w-10 h-10 flex items-center justify-center bg-white rounded-full absolute top-1/2 -translate-y-1/2 opacity-0 invisible text-[color:var(--hansaBlue)] duration-200 right-0"
      >
        <i className="fa-solid fa-caret-right"></i>
      </button>
      <button
        onClick={left}
        className="control_btn control_left_btn text-4xl w-10 h-10 flex items-center justify-center bg-white rounded-full absolute top-1/2 -translate-y-1/2 opacity-0 invisible text-[color:var(--hansaBlue)] duration-200 left-0"
      >
        <i className="fa-solid fa-caret-left"></i>
      </button>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex items-center gap-2.5">
        {circles.map((circle) => (
          <button
            onClick={() => setActiveScreenIndex(circle)}
            key={circle}
            className="w-5 h-5 rounded-full overflow-hidden p-1 bg-white"
          >
            <span
              className={classNames(
                "block w-full h-full rounded-full duration-500",
                {
                  "!bg-[color:var(--hansaRed)]": circle === activeScreenIndex,
                }
              )}
            ></span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
