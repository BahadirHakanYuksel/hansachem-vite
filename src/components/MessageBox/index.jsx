import classNames from "classnames";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function MessageBox() {
  const { t } = useTranslation();

  const [Name, setName] = useState("");
  const [Surname, setSurname] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const [NameIsCorrect, setNameIsCorrect] = useState(undefined);
  const [SurnameIsCorrect, setSurnameIsCorrect] = useState(undefined);
  const [EmailIsCorrect, setEmailIsCorrect] = useState(undefined);
  const [MessageIsCorrect, setMessageIsCorrect] = useState(undefined);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  useEffect(() => {
    Name.trim().length > 1 ? setNameIsCorrect(true) : setNameIsCorrect(false);
    Surname.trim().length > 1
      ? setSurnameIsCorrect(true)
      : setSurnameIsCorrect(false);
    validateEmail(Email.trim())
      ? setEmailIsCorrect(true)
      : setEmailIsCorrect(false);
    Message.trim().length > 9
      ? setMessageIsCorrect(true)
      : setMessageIsCorrect(false);
  }, [Name, Surname, Email, Message]);

  const sendForm = (e) => {
    e.preventDefault();

    if (
      NameIsCorrect &&
      SurnameIsCorrect &&
      EmailIsCorrect &&
      MessageIsCorrect
    ) {
      alert("Sended");
      setName("");
      setSurname("");
      setEmail("");
      setMessage("");
    } else alert("ERROR !");
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
            <span
              className={classNames("text-gray-400 font-medium", {
                "!text-red-600":
                  NameIsCorrect === false && Name.trim().length > 0,
                "!text-green-600": NameIsCorrect === true,
              })}
            >
              * Min 2 karakter
            </span>
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
            <span
              className={classNames("text-gray-400 font-medium", {
                "!text-red-600":
                  SurnameIsCorrect === false && Surname.trim().length > 0,
                "!text-green-600": SurnameIsCorrect === true,
              })}
            >
              * Min 2 karakter
            </span>
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
          <span
            className={classNames("text-gray-400 font-medium", {
              "!text-red-600":
                EmailIsCorrect === false && Email.trim().length > 0,
              "!text-green-600": EmailIsCorrect === true,
            })}
          >
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
            <span
              className={classNames("text-gray-400 font-medium", {
                "!text-red-600":
                  MessageIsCorrect === false && Message.trim().length > 0,
                "!text-green-600": MessageIsCorrect === true,
              })}
            >
              * Min 10 karakter
            </span>
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
        className="h-12 rounded-full bg-[color:var(--hansaBlue)] text-white font-medium text-lg hover:opacity-90 duration-200 disabled:opacity-70 disabled:pointer-events-none"
        type="submit"
      >
        {t("send")}
      </button>
    </form>
  );
}

export default MessageBox;
