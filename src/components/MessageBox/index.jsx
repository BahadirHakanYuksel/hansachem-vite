import { useState } from "react";
import { useTranslation } from "react-i18next";

function MessageBox() {
  const { t } = useTranslation();

  const [Name, setName] = useState("");
  const [Surname, setSurname] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [BtnActive, setBtnActive] = useState(false);

  const sendForm = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={sendForm}
      className="w-full flex flex-col gap-5 p-3 bg-white"
    >
      <div className="grid grid-cols-2 gap-5">
        <div className="w-full flex flex-col gap-1">
          <div className="flex justify-start items-center gap-3">
            <header className="px-3 bg-[color:var(--hansaBlue)] min-w-12 flex items-center justify-center text-white rounded-full">
              {t("name")}
            </header>
            <span className="text-gray-400 font-medium">* Min 1 karakter</span>
          </div>
          <input
            type="text"
            className="h-12 w-full rounded-md px-3 text-base font-medium border-2 border-solid border-gray-300 duration-200 focus:border-[color:var(--hansaBlue)]"
            placeholder={t("name")}
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <div className="flex justify-start items-center gap-3">
            <header className="px-3 bg-[color:var(--hansaBlue)] min-w-12 flex items-center justify-center text-white rounded-full">
              {t("surname")}
            </header>
            <span className="text-gray-400 font-medium">* Min 1 karakter</span>
          </div>
          <input
            type="text"
            className="h-12 w-full rounded-md px-3 text-base font-medium border-2 border-solid border-gray-300 duration-200 focus:border-[color:var(--hansaBlue)]"
            placeholder={t("surname")}
            value={Surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-1">
        <div className="flex justify-start items-center gap-3">
          <header className="px-3 bg-[color:var(--hansaBlue)] min-w-12 flex items-center justify-center text-white rounded-full">
            {t("email")}
          </header>
          <span className="text-gray-400 font-medium">
            * ornek123@gmail.com
          </span>
        </div>
        <input
          type="email"
          className="h-12 w-full rounded-md  px-3 text-base font-medium border-2 border-solid border-gray-300 duration-200 focus:border-[color:var(--hansaBlue)]"
          placeholder={t("email")}
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-start gap-3">
            <header className="px-3 bg-[color:var(--hansaBlue)] min-w-12 flex items-center justify-center text-white rounded-full">
              {t("writeMessage")}
            </header>
            <span className="text-gray-400 font-medium">* Min 10 karakter</span>
          </div>

          <div className="text-lg font-medium text-gray-300">
            <span>{Message.length}</span> / 2000
          </div>
        </div>
        <textarea
          type="text"
          className="h-[150px] w-full rounded-md p-3 text-base font-medium border-2 border-solid border-gray-300 duration-200 focus:border-[color:var(--hansaBlue)] resize-none"
          placeholder={t("writeMessage")}
          value={Message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        disabled={!BtnActive}
        className="h-12 rounded-full bg-[color:var(--hansaBlue)] text-white font-medium text-lg hover:opacity-90 duration-200 disabled:opacity-70 disabled:pointer-events-none"
        type="submit"
      >
        {t("send")}
      </button>
    </form>
  );
}

export default MessageBox;
