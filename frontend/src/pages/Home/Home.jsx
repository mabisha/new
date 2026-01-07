import Welcome from "../../components/Home/welcome/Welcome";
import InfoBanner from "../../components/Home/Banner/InfoBanner";
import { MessageFrom } from "../../components/Home/MessageFrom/MessageFrom";
import Facilities from "../../components/Home/Facilities/Facilities";
import "./Home.css";
import DetailBanner from "../../components/Home/Banner/DetailBanner";
import useWindowSize from "../../hooks/useWindowSize";
import DetailedImageCard from "../../components/Home/Cards/DetailedImageCard";
import { Helmet } from "react-helmet";
import TextBanner from "../../components/Home/Banner/TextBanner";
import Hero from "../../components/Home/Hero";
import RecentEvents from "../../components/Home/RecentEvents";
import HomePublication from "../../components/Home/HomePublication";
const Home = () => {
  // const location = useLocation();
  const handleExploreClick = () => {
    const element = document?.getElementById("welcome-section");
    const elementTop =
      element.getBoundingClientRect().top + window.scrollY - 50;
    const scrollToPosition = elementTop;
    window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
  };

  const screen = useWindowSize();

  return (
      <div className="flex relative flex-col flex-1 h-auto min-h-screen gap-14 items-center ">
        <Helmet>
          <title>Rosebud School - Nurturing Minds, Cultivating Futures</title>
          <meta
            name="description"
            content="Rosebud School
            stands as a beacon of educational excellence and holistic
            development."
          />
        </Helmet>

        <Hero />
        <Welcome handleExploreClick={handleExploreClick} screen={screen} />
        <section className="flex justify-center items-start pb-2 bg-white  h-[50rem] lg:h-[17rem] w-full relative -top-10">
          <InfoBanner
            years={"15+"}
            yearsText={"Years of Excellence"}
            teachers={"150+"}
            teachersText={"Teachers"}
            students={"1800+"}
            studentsText={"Students"}
            alumniText="Alumni Network"
            alumni={"Strong"}
          />
        </section>
        <div className="flex w-full min-h-screen justify-center items-center ">
          <DetailedImageCard />
        </div>

        <div className="flex w-full pb-10 justify-center items-center bg-white ">
          <DetailBanner
            buttonLink="/about-us"
            titleOne="Rosebud's"
            titleTwo="Belief"
            titleThree="And Values"
            buttonText="Explore"
            listItemOne="Honesty in Work"
            listItemTwo="Questioning Spirit"
            listItemThree="Learning from Experience"
            description="Our educational environment encourages students to develop strong learning skills that nurture positive attitude and self growth. Develop adolescents that are creative in thinking."
          />
        </div>

        <Facilities />

        {/* {fetchedData.gallery?.length > 0 ? (
        <Gallery data={fetchedData.gallery} />
      ) : null} */}
        <TextBanner title={"The Rosebud Way"} />

        <HomePublication />
        <RecentEvents />
        <div
          id="message-from-principal"
          className=" w-full  flex justify-center items-center"
        >
          <MessageFrom />
        </div>
      </div>
  );
};

export default Home;
