import HomeAbout from "./HomeAbout";
import HomeProducts from "./HomeProducts";
import Slider from "./Slider";

function Home() {
  return (
    <div className="w-full flex flex-col px-36 mt-8 gap-20">
      <Slider />
      <HomeAbout />
      <HomeProducts />
    </div>
  );
}

export default Home;
