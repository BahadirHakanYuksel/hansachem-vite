import { useTranslation } from "react-i18next";
import PageHeader from "../../components/PageHeader";
import { motion } from "framer-motion";

function About() {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-5 px-36 mt-10 pb-28"
    >
      <PageHeader text={t("aboutUs")} />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, officiis
        suscipit! Nihil laborum iusto dicta unde voluptatem sunt animi, pariatur
        placeat sit labore possimus magnam, corporis tempora eveniet nemo
        ratione ad ab ut libero, hic illo? Est vero, ea omnis laboriosam rerum
        veritatis? Sequi quo velit ipsa voluptas iste maiores deleniti
        blanditiis asperiores ratione beatae necessitatibus, eos iusto
        consequatur alias quod molestias, qui atque soluta provident voluptatem
        ullam dolorum. Rem, consequuntur voluptatibus? Aliquid accusamus animi
        voluptates, corrupti id incidunt facilis culpa quisquam deserunt illum
        amet delectus perspiciatis commodi laboriosam enim ad! Animi, eos vel
        nostrum et ratione sit enim nesciunt quaerat quae doloremque dolorem
        eveniet neque minima adipisci aperiam cum eius qui ea vitae? Ratione
        eaque fuga voluptate velit eius corporis excepturi quam quas natus
        laborum amet tenetur sunt assumenda autem ab aliquid commodi accusamus
        facilis, deleniti, voluptatum, in unde nam perspiciatis. Libero magni
        natus tempore nesciunt veniam qui doloribus unde debitis perspiciatis
        excepturi vero sapiente dolor nostrum officiis eos praesentium modi,
        iure delectus! Ut vel inventore laudantium eveniet enim facere eius
        distinctio fugiat aperiam, laborum nihil magni modi! Reiciendis magnam
        similique saepe impedit ut deleniti explicabo perferendis culpa repellat
        placeat odit eveniet nobis voluptas velit, voluptatum quidem quas beatae
        aliquid, dolor est ad obcaecati! Accusamus soluta, fuga dignissimos a
        maxime ipsam recusandae, quibusdam consectetur omnis sequi rem inventore
        voluptatibus! Vitae ducimus animi itaque magni deserunt quam earum
        aliquam consectetur incidunt aspernatur adipisci a delectus temporibus
        cumque ea sint doloremque ullam illum, sunt ad iusto? Dicta mollitia
        repellat neque saepe facilis, quae optio deserunt perspiciatis.
        Provident illum eius accusamus id, quas eveniet similique animi
        excepturi, illo ipsum aliquam maiores blanditiis doloremque quia
        reiciendis odit cum ullam doloribus nobis eaque nisi laboriosam
        mollitia. Quaerat sit saepe rem quas necessitatibus ipsum dolores earum
        repellendus, sequi repudiandae! Corporis distinctio ratione voluptatibus
        voluptates non.
      </p>
    </motion.div>
  );
}

export default About;
