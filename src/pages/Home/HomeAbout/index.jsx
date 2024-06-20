import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function HomeAbout() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-full grid grid-cols-2 gap-8">
      <div className="w-full flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <header className="text-[27px] font-medium text-slate-500">
            {t("aboutUs")}
          </header>
          <span className="text-sm font-medium text-[color:var(--hansaRed)]">
            Hansachem
          </span>
        </div>
        <p className="line-clamp-[12]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eum
          a porro incidunt! Voluptates reiciendis, quis magnam maiores enim, at,
          porro deserunt repellat est quo non et unde expedita provident eaque
          atque voluptatum. Exercitationem dolorem asperiores sint, odit libero
          fugit totam deleniti, recusandae maiores officia sit. Est delectus
          rerum mollitia error nisi vitae voluptatem, perspiciatis excepturi
          obcaecati veniam consequatur nobis, neque sint inventore dolorem. Quos
          earum laboriosam soluta beatae quas corrupti voluptas quis eos nostrum
          sequi cumque vitae voluptatem quae explicabo distinctio dolorem cum
          non tempore nemo tempora, accusantium sapiente! Asperiores eos dolore
          ea magnam totam doloribus illum expedita animi exercitationem,
          voluptates architecto ratione dolores minus, veritatis similique
          praesentium quaerat! Voluptatibus illo, debitis incidunt labore vel
          repellendus voluptate eos velit nostrum quos obcaecati aut totam
          dolores, perferendis aspernatur tempora id expedita dolor deserunt,
          commodi autem optio itaque! Fugiat quibusdam magni sequi! Impedit,
          quia hic consequuntur molestiae inventore nisi quidem natus rem saepe
          maiores iure sit distinctio soluta quae? Saepe accusantium ratione
          optio eos incidunt quasi, cum veritatis dicta eligendi necessitatibus,
          amet iure, recusandae quidem expedita vero in culpa tempore
          reprehenderit? Magnam atque, quibusdam molestiae numquam autem nostrum
          accusantium totam incidunt consectetur esse, officia assumenda hic
          blanditiis sunt nam, voluptate in?
        </p>
        <div className="flex items-center justify-end">
          <button
            onClick={() => navigate("/about")}
            className="w-32 h-8 p-1 rounded-full bg-slate-200 duration-200 hover:bg-[color:var(--hansaBlue)] hover:text-white"
          >
            {t("readMore")}
          </button>
        </div>
      </div>
      <div className="w-full h-[400px] overflow-hidden shadow-lg rounded-2xl">
        <img className="w-full h-full" src="icons/homeAbout.jpg" alt="" />
      </div>
    </div>
  );
}

export default HomeAbout;
