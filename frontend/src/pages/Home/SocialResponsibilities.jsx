import responsibilities2 from "../../assets/children-plants.jpg";
import responsibilities from "../../assets/civic.jpg";
import sustainability from "../../assets/plant.jpg";
import help from "../../assets/help.jpg";
import PagesLayout from "../../components/Home/layout/PagesLayout";
const SocialResponsibilities = () => {
  return (
    <PagesLayout
      img={responsibilities2}
      breadCrumb={"Social Responsibilities"}
      seotTitle={"Social Responsibilities"}
      metaContent={`We embed it in our culture and curriculum, fostering empathy and service in our students.`}
    >
      <div className="w-full flex-1 flex gap-10 flex-col justify-start items-center py-9">
        <div className="flex w-[80%]  gap-5 flex-col lg:flex-col h-auto pt-10 justify-start items-start px-7">
          <div className="text-2xl sm:text-4xl md:text-5xl h-[1rem] sm:h-[2rem]  text-black font-bold w-full flex  justify-start items-center gap-3">
            <span>Community</span>
            <span className="text-secondary">Services</span>
          </div>
          <p className="relative w-[90%] flex-col lg:flex-row justify-evenly items-center lg:items-start h-full gap-10 flex font-normal text-default/60 text-md top-2">
            At Rosebud School, community service isn't just an activity; it's a
            cornerstone of our ethos, ingrained in our culture and curriculum.
            We believe in the power of giving back and making a positive impact
            on the world around us. Our monthly community service initiatives
            provide students with invaluable opportunities to engage
            meaningfully with their communities, fostering empathy, compassion,
            and a sense of responsibility.
            <div className="min-h-[6rem] h-[10rem] md:h-[20rem] min-w-[15rem] lg:min-w-[25rem]  relative right-0">
              <img
                src={responsibilities}
                alt=""
                className="h-[70%] lg:h-[90%] w-full relative object-cover z-[1] rounded-[30px_0_30px_0]"
              />
              <div className="w-full h-[70%] lg:h-[90%] absolute -top-3 -right-4 bg-gray-100 rounded-[30px_0_30px_0]"></div>
            </div>
          </p>
        </div>
        {/* sub div */}
        <div className="w-full h-full flex flex-col justify-start items-center px-7">
          <div className="text-xl md:text-3xl  h-[1rem] sm:h-[2rem] font-bold w-[80%] px-3 flex  justify-start items-center gap-3">
            <span className=" capitalize">Sustainability </span>
            <span className="text-secondary"> Efforts</span>
          </div>
          <p className=" h-full p-5 gap-8 flex-col md:flex-row  font-normal flex justify-center text-md text-default/60 w-[80%]">
            <span className="min-h-[6rem] h-[10rem] md:h-[20rem] min-w-[15rem] lg:min-w-[25rem]  relative right-0">
              <img
                src={sustainability}
                alt=""
                className="h-[90%] w-full relative object-cover z-[1] rounded-xl"
              />
              <span className="w-full h-[90%] absolute -top-3 -right-4 bg-gray-200/70 rounded-xl"></span>
            </span>
            {`At Rosebud School, sustainability is woven into the fabric of our daily practices, reflecting our commitment to environmental stewardship. Our organic garden serves as a living classroom where students learn about sustainable agriculture techniques, fostering a deep connection to nature and promoting responsible resource management. From energy-saving initiatives to waste reduction programs, we actively engage our students in practical, hands-on experiences that empower them to become conscientious stewards of the environment, driving positive change within our school community and beyond.`}
          </p>
        </div>

        <div className="w-full h-full flex flex-col justify-start items-center px-7">
          <div className="text-xl md:text-3xl  h-[1rem] sm:h-[2rem] font-bold w-[80%] px-3 flex  justify-start items-center gap-3">
            <span className="text-secondary capitalize">Ethical </span>
            <span>Values </span>
          </div>
          <p className=" h-full p-5 gap-5 flex-col md:flex-row  font-normal flex justify-center text-md text-default/60 w-[80%]">
            At the heart of Rosebud School's educational philosophy lies a
            steadfast commitment to nurturing not just academically proficient
            students, but also morally upright individuals. Through our
            character education programs, we instill core values such as
            empathy, integrity, and respect in our students, shaping them into
            compassionate and socially conscious individuals. By fostering a
            culture of kindness and ethical behavior, we empower our students to
            make principled decisions, advocate for justice, and contribute
            positively to their communities, thereby embodying the values of
            integrity and empathy in all aspects of their lives.
            <span className="min-h-[6rem] h-[10rem] md:h-[20rem] min-w-[15rem] lg:min-w-[25rem]  relative right-0">
              <img
                src={help}
                alt=""
                className="h-[90%] w-full relative object-cover z-[1] rounded-xl"
              />
              <span className="w-full h-[90%] absolute -top-3 -right-4 bg-gray-200/70 rounded-xl"></span>
            </span>
          </p>
        </div>
        <div className="w-full h-full flex flex-col justify-start items-center px-7">
          <div className="text-xl md:text-3xl  h-[1rem] sm:h-[2rem] font-bold w-[80%] px-3 flex  justify-start items-center gap-3">
            <span className="text-secondary capitalize">Civic </span>
            <span> Education</span>
          </div>
          <p className="w-[80%] h-full flex justify-center p-5 font-normal text-md text-default/60">
            {`Through our civics curriculum, we strive to nurture informed and engaged citizens. Students actively participate in mock elections, engage in debates about current issues, and partake in community forums to understand the importance of responsible citizenship.`}
          </p>
        </div>
      </div>
    </PagesLayout>
  );
};

export default SocialResponsibilities;
