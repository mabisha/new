import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../../../assets/principal.jpg";
import img2 from "../../../assets/parents.jpg";
import img3 from "../../../assets/chairman-2.jpg";
import img4 from "../../../assets/chairman.jpg";
import SimpleSlider from "../Corousel/SimpleSlider";
const MeetTheFacultyCard = () => {
  const facultyImage = [
    { imagelink: img },
    { imagelink: img2 },
    { imagelink: img3 },
    { imagelink: img4 },
  ];
  return (
    <section className="flex flex-col w-[85%] justify-center items-center md:h-full lg:min-h-screen px-9 py-5 gap-2 lg:gap-5">
      <div className="flex flex-col w-full justify-center items-center gap-7 h-[12rem]">
        <div className="flex w-full font-bold text-3xl sm:text-5xl justify-center items-center gap-2">
          <span className=" text-matte whitespace-nowrap">Our</span>
          <span className=" text-secondary">Team</span>
        </div>
        <span className="font-semibold text-center text-lg flex justify-center w-full ">
          We ensure that our children are taught by cream of the crop.
        </span>
      </div>

      <div className="w-full  h-auto relative flex flex-col overflow-hidden gap-5">
        <div className="first-div md:h-[15rem] lg:h-[20rem] w-full flex gap-10 ">
          <div className="image-div h-full  sm:w-[70%] w-full overflow-hidden rounded-xl">
            <img
              src={img}
              alt=""
              className="h-full w-full object-cover object-right-top"
            />
          </div>
          <div className="first-corousel hidden sm:flex relative top-0 transition-width duration-[600ms] ease hover:w-full w-[30%] min-h-full">
            <div className="h-full lg:h-[20rem] w-full overflow-hidden rounded-xl  bg-red-900 absolute right-0">
              <SimpleSlider
                axis="vertical"
                showNavigation={false}
                showPagination={false}
                containImage={false}
                enableAutoPlay={true}
                speed={3500}
                images={facultyImage}
              />
            </div>
          </div>
        </div>
        <div className="second-div h-[25rem] sm:h-[20rem] w-full flex gap-5  sm:gap-10  flex-col sm:flex-row">
          <div className="first-corousel relative top-0 transition-width duration-[600ms] ease sm:hover:w-full w-full sm:w-[50%] h-full">
            <div className="h-full lg:h-[20rem] w-full overflow-hidden rounded-xl  bg-red-900 absolute right-0">
              <SimpleSlider
                axis="vertical"
                showNavigation={false}
                showPagination={false}
                containImage={false}
                enableAutoPlay={true}
                reverseDirection={true}
                speed={4000}
                images={facultyImage}
              />
            </div>
          </div>
          <div className="first-corousel relative top-0 transition-width duration-[600ms] ease sm:hover:w-full w-full sm:w-[50%] h-full">
            <div className="h-full lg:h-[20rem] w-full overflow-hidden rounded-xl  bg-red-900 absolute right-0">
              <SimpleSlider
                speed={2500}
                showNavigation={false}
                showPagination={false}
                containImage={false}
                enableAutoPlay={true}
                images={facultyImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheFacultyCard;
