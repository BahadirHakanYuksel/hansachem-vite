const turkishToEnglish = (text) => {
  const charMap = {
    ç: "c",
    Ç: "C",
    ğ: "g",
    Ğ: "G",
    ı: "i",
    I: "I",
    İ: "I",
    ö: "o",
    Ö: "O",
    ş: "s",
    Ş: "S",
    ü: "u",
    Ü: "U",
  };

  return text
    .split("")
    .map((char) => charMap[char] || char)
    .join("");
};

export default turkishToEnglish;

export const url_data = [
  {
    first: "/about",
    second: "/kurumsal",
  },
  {
    first: "/kurumsal",
    second: "/about",
  },
  {
    first: "/contact",
    second: "/iletisim",
  },
  {
    first: "/iletisim",
    second: "/contact",
  },
];

export const defaultAbout =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellat aut reiciendis tempora cum ut nemo eos facilis! Totam sed corporis incidunt aut quisquam eligendi consequuntur aliquam cumque ut eum, reprehenderit velit repudiandae fugiat neque molestiae quibusdam officiis assumenda explicabo dolorem accusantium, possimus qui! Esse temporibus quia laboriosam distinctio saepe, non ducimus quas nostrum totam officia ratione magni quaerat quidem repellendus magnam beatae corporis facere dicta! Mollitia, porro eum saepe voluptatum ex quidem sequi quo ipsa facere. Ratione illum voluptates quod veritatis maiores debitis non facilis in qui minus, ducimus quam itaque exercitationem, fuga nulla soluta corrupti odio? Minus pariatur qui sit ab ratione aliquid quia commodi delectus ipsam distinctio facilis mollitia quis debitis assumenda exercitationem voluptatem repellendus maiores, molestiae saepe at porro? Assumenda, accusantium. Iusto labore error enim. Rerum ex vitae nostrum repudiandae, suscipit quas neque eum aspernatur id illum a consequuntur possimus magni eos necessitatibus sequi laboriosam laudantium! Labore laboriosam, quam doloribus ipsum quisquam tenetur saepe, eius architecto aliquam blanditiis aut autem ducimus, iste ad. Cupiditate quam alias tempore fugiat, et quo sint nihil at cumque quaerat id iusto voluptatum veniam magnam maiores, reiciendis sapiente nostrum itaque non! Natus, facilis minima voluptatum placeat incidunt nihil inventore quod officia dolorum veritatis aliquid esse quis sequi optio, omnis enim sed veniam suscipit itaque ipsum distinctio. Ut, laudantium aliquam consequuntur libero iusto ea numquam temporibus, error, facilis veniam maiores dolorum quas? Rerum necessitatibus ea, consectetur dolore eius a totam eveniet illo qui minus sint quasi fugiat deleniti obcaecati aliquid repellat architecto voluptatum reprehenderit provident aliquam nobis molestiae. Repudiandae reprehenderit nulla minus ex mollitia eveniet unde quos ad quis dignissimos! Vero laborum adipisci provident incidunt hic, rem explicabo amet temporibus similique illum odit molestias, nam repellat numquam reprehenderit! Possimus aspernatur dolore ea. Rem soluta perferendis laudantium odit provident perspiciatis quis a dignissimos beatae explicabo qui earum modi deserunt harum aliquam tenetur, nihil debitis maiores laborum unde. Cum explicabo nesciunt aperiam a reprehenderit facere commodi molestiae asperiores? Sequi quis amet dolorum dolor ex architecto eveniet odio exercitationem incidunt voluptatum aliquid, tempora reprehenderit sit ipsum magnam esse quibusdam asperiores veritatis dolores ullam eos ducimus consectetur? Dolor molestias facere debitis minima nam autem libero provident incidunt, excepturi possimus, repellat at delectus. Magni ea deleniti dolorem itaque veritatis eius nostrum libero architecto culpa iusto earum porro, quam consequuntur exercitationem! Quae eius, totam neque nobis placeat ipsum sit? Vel, in nulla atque temporibus qui voluptas facere eum quas repudiandae libero nostrum et sed asperiores similique laboriosam. Fugiat qui esse provident nostrum. Ipsa aspernatur tempora obcaecati molestiae nisi sequi fugiat eum sit odit corporis cumque magnam veritatis quibusdam, deserunt, ipsum voluptate quae. Dolorum nobis dolore, libero nam reprehenderit magni pariatur quia id, odio corporis ipsum vel in inventore esse beatae. Repudiandae voluptate numquam asperiores voluptatum ab? Nulla voluptatem adipisci ad enim incidunt ipsum aliquam corporis beatae eius, laudantium quo asperiores voluptates molestiae expedita sapiente maxime ut suscipit aliquid minima error amet totam nesciunt architecto repellat. Culpa saepe vero debitis facere libero dolorem. Libero exercitationem alias vitae odio amet";
