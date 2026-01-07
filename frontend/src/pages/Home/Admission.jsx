import img from "../../assets/welcome-kids.jpg";
import kidsCircle from "../../assets/kids-circle.jpg";
import kidsArt from "../../assets/slide6.jpg";
import PagesLayout from "../../components/Home/layout/PagesLayout";

const Admission = () => {
  return (
    <PagesLayout
      img={kidsCircle}
      quotes={`Through Mindful Actions, A Shared Destiny Unfolds.`}
      seotTitle={"Admission"}
      metaContent={`Welcome to Rosebud School, where we foster a nurturing and inclusive
      environment for young minds to thrive.`}
    >
      <div className="w-full flex-1 flex gap-10 flex-col justify-start items-center py-9">
        <div className="flex w-[80%]  gap-5 flex-col lg:flex-col h-auto  lg:h-[20rem] pt-10 justify-start items-start px-7">
          <div className="w-full h-full flex flex-col justify-start items-start px-7 pl-0">
            <div className="text-2xl sm:text-4xl md:text-5xl h-[1rem] sm:h-[2rem]  text-black font-bold w-full flex  justify-start items-center gap-3">
              <span>Admission</span>
              <span className="text-secondary">Details</span>
            </div>
          </div>
          <p className="relative w-[90%] flex-col lg:flex-row justify-evenly items-center lg:items-start h-full gap-10 flex font-normal text-default/60 text-md top-2">
            Welcome to Rosebud School, where we foster a nurturing and inclusive
            environment for young minds to thrive. We are delighted to offer
            admission to aspiring students who seek to embark on a journey of
            knowledge, growth, and character development.
            <span className="min-h-[6rem] h-[10rem] md:h-[20rem] min-w-[15rem] lg:min-w-[25rem]  relative right-0">
              <img
                src={img}
                alt=""
                className="h-[90%] w-full relative object-cover z-[1] rounded-xl"
              />
              <span className="w-full h-[90%] absolute -top-3 -right-4 bg-gray-200/70 rounded-xl"></span>
            </span>
          </p>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center px-7 pl-5 pr-0 mobile:pr-20">
          <div className="w-[80%] h-full p-5 text-md text-default/60 flex-col gap-10 py-3  ">
            {/* div */}
            <div className="w-full h-full flex flex-col justify-start items-start px-7 pl-0">
              <div className="text-2xl md:text-5xl min-h-[4rem] md:h-[4rem] text-black font-bold w-full flex  justify-start items-center gap-0">
                <span>Intro</span>
                <span className="text-secondary">duction</span>
              </div>
            </div>
            {/* <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Online Application :
              </span>
              <p>
                Fill out our user-friendly online application form with your
                personal details, academic history, and any additional
                information required.
              </p>
            </div> */}
            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Admission Criteria :
              </span>
              <p>
                Our admission process is based on a holistic evaluation of each
                student, considering academic achievements, extracurricular
                activities, character references, and a passion for learning.
              </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Entrance Test/Interview :
              </span>
              <div>
                {`Applicants may be required to participate in an entrance test or
                an interview to assess their aptitude and alignment with our
                school's values.`}
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Age Eligibility :
              </span>
              <div>
                Please refer to the age eligibility criteria for the respective
                grade levels.
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Application Fee :
              </span>
              <p>
                A non-refundable application fee may apply. Details will be
                provided during the application process.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-[80%]  gap-5 flex-col lg:flex-col h-auto pt-10 justify-start items-start px-7">
          <div className="text-2xl md:text-5xl min-h-[4rem] md:h-[4rem] text-black font-bold w-full flex  justify-start items-center gap-3">
            <span>Application </span>
            <span className="text-secondary">Category</span>
          </div>
          <p className="relative w-[90%] flex-col lg:flex-row justify-evenly items-center lg:items-start h-full gap-10 flex font-normal text-default/60 text-md top-2">
            <span className="min-h-[6rem] h-[10rem] md:h-[20rem] min-w-[15rem] lg:min-w-[25rem]  relative right-0">
              <img
                src={kidsArt}
                alt=""
                className="h-[90%] w-full relative object-cover z-[1] rounded-xl"
              />
              <span className="w-full h-[90%] absolute -top-3 -right-4 bg-gray-200/70 rounded-xl"></span>
            </span>
            At Rosebud School, we lay the foundation for a lifelong love of
            learning through our primary elementary education program. We are
            dedicated to providing a nurturing and stimulating environment that
            fosters academic growth, curiosity, and creativity in our young
            learners.
          </p>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center px-7 pl-5 pr-20">
          <div className="w-full sm:w-[80%] h-full p-5 text-md text-default/60 flex-col gap-10 py-3  ">
            {/* div */}
            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Regular Admission :
              </span>
              <p>
                Open to all students who meet the eligibility criteria and
                complete the application process within the specified timeframe.
              </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Scholarships :
              </span>
              <p>
                We offer scholarships to exceptional students who demonstrate
                outstanding academic achievements, leadership qualities, and
                community service involvement. Please refer to the scholarship
                details on our website.
              </p>
            </div>

            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Active Parent Involvement :
              </span>
              <p>
                We highly value parent involvement in our academic community.
                Regular parent-teacher meetings, workshops, and open
                communication channels ensure a strong partnership between the
                school and families.
              </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Safe and Supportive Environment :
              </span>
              <p>
                Creating a safe and supportive environment is of utmost
                importance to us. Our school fosters a sense of belonging and
                inclusivity, where every student feels valued, respected, and
                encouraged to reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PagesLayout>
  );
};

export default Admission;
