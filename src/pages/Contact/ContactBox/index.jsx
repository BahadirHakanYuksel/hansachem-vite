import classNames from "classnames";

function ContactBox({ text, url, icon_class, big_font = false }) {
  return (
    <a
      href={url}
      className="contact_box w-full bg-white rounded-lg shadow-lg relative p-5 h-40 flex flex-col items-center gap-3 duration-300 scale-100 hover:scale-105"
    >
      <div className="icon_div w-14 h-14 bg-slate-200 text-[color:var(--hansaBlue)] duration-300 rounded-full text-3xl flex items-center justify-center shadow-slate-500">
        <i className={icon_class}></i>
      </div>
      <span
        className={classNames(
          "w-full flex items-center justify-center text-center duration-300 text-slate-700 text-base font-semibold",
          {
            "!text-xl": big_font,
          }
        )}
      >
        {text}
      </span>
    </a>
  );
}

export default ContactBox;
