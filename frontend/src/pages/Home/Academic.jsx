import rosebudSchool from "../../assets/cooperation.jpg";
import PagesLayout from "../../components/Home/layout/PagesLayout";
import students from "../../assets/desk.jpg";
import kids from "../../assets/academic.jpg";
import secondary from "../../assets/uniform.jpg";
const Academic = () => {
  return (
    <PagesLayout
      img={kids}
      quotes={`Through Mindful Actions, A Shared Destiny Unfolds.`}
      seotTitle={"Academic"}
      metaContent={` At Rosebud School, our academic program is meticulously crafted to
      foster a lifelong passion for learning, beginning with our primary
      elementary education curriculum.`}
    >
      <div className="w-full flex-1 flex gap-5 flex-col justify-start items-center py-9">
        <div className="flex w-[80%]  gap-5 flex-col lg:flex-col h-auto pt-10 justify-start items-start px-7">
          <div className="w-full h-full flex flex-col justify-start items-start px-7 pl-0">
            <div className="text-2xl sm:text-4xl md:text-5xl h-[1rem] sm:h-[2rem]  text-black font-bold w-full flex  justify-start items-center gap-0">
              <span>Aca</span>
              <span className="text-secondary">demic</span>
            </div>
          </div>

          <p className="relative w-full flex-col lg:flex-row  justify-evenly items-center lg:items-start h-full gap-10 flex font-normal text-default/60 text-md top-2">
            At Rosebud School, our academic program is meticulously crafted to
            foster a lifelong passion for learning, beginning with our primary
            elementary education curriculum.Our primary school core curriculum
            encompasses a comprehensive range of subjects, including Language
            Arts, Mathematics, Science, Social Studies, and more, ensuring a
            well-rounded educational experience. With small class sizes, our
            experienced teachers provide personalized attention to each student,
            understanding and addressing their unique learning needs to foster
            academic growth and build confidence. Technological integration is a
            key component of our approach, with interactive smart boards and
            educational software enhancing the learning experience. We highly
            value parent involvement, facilitating regular meetings, workshops,
            and open communication channels to forge a strong partnership
            between the school and families. Above all, we prioritize creating a
            safe and supportive environment where every student feels valued,
            respected, and empowered to reach their full potential.
            <span className="min-h-[6rem] h-[10rem] md:h-[25rem] min-w-[15rem] lg:min-w-[25rem]  relative right-0">
              <img
                src={students}
                alt=""
                className="h-[90%] w-full relative object-cover z-[1] rounded-xl"
              />
              <span className="w-full h-[90%] absolute -top-3 -right-4 bg-gray-200/70 rounded-xl"></span>
            </span>
          </p>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center px-7 pl-5 pr-20">
          <div className="w-full sm:w-[80%] h-full p-5 text-md text-default/60 flex-col gap-10 py-3  ">
            {/* div */}{" "}
            <div className="w-full h-full flex flex-col justify-start items-start px-7 pl-0">
              <div className="text-2xl md:text-5xl whitespace-nowrap md:h-[4rem] text-black font-bold w-full flex  justify-start items-center gap-3">
                <span>Primary</span>
                <span className="text-secondary">School</span>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Core Curriculum :
              </span>
              <p>
                Our primary elementary curriculum is thoughtfully designed to
                instill a strong academic base while nurturing essential life
                skills. Students engage in a balanced blend of subjects,
                including Language Arts, Mathematics, Science, Social Studies,
                and more, ensuring a well-rounded educational experience.
              </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Individualized Attention :
              </span>
              <p>
                With small class sizes, our experienced teachers can provide
                personalized attention to each student. This approach allows us
                to understand and address the unique learning needs of every
                child, fostering their academic growth and building confidence.
              </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Technological Integration :
              </span>
              <p>
                Incorporating technology into our primary education allows
                students to develop essential digital literacy skills. Our
                classrooms are equipped with interactive smart boards and
                educational software, enhancing the learning experience.
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
        <div className="flex w-[80%]  gap-5 flex-col lg:flex-col h-full pt-10 justify-start items-start px-7">
          <div className="text-2xl md:text-5xl min-h-[4rem] md:h-[4rem] text-black font-bold w-full flex  justify-start items-center gap-3">
            <span>Middle</span>
            <span className="text-secondary">School</span>
          </div>
          <p className="relative w-[90%] flex-col lg:flex-row justify-evenly items-center lg:items-start h-full gap-10 flex font-normal text-default/60 text-md top-2">
            <span className="min-h-[6rem] h-[10rem] md:h-[25rem] min-w-[15rem] lg:min-w-[25rem]  relative right-0">
              <img
                src={rosebudSchool}
                alt=""
                className="h-[90%] w-full relative object-cover z-[1] rounded-xl"
              />
              <span className="w-full h-[90%] absolute -top-3 -right-4 bg-gray-200/70 rounded-xl"></span>
            </span>
            At Rosebud School, we lay the foundation for a lifelong love of
            learning through our primary elementary education program. We are
            dedicated to providing a nurturing and stimulating environment that
            fosters academic growth, curiosity, and creativity in our young
            learners.In our middle school program, we continue to emphasize
            these principles while also nurturing leadership skills and
            preparing students for future challenges through various
            opportunities and activities.
          </p>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center px-7 pl-5 pr-20">
          <div className="w-full sm:w-[80%] h-full p-5 text-md text-default/60 flex-col gap-10 py-3  ">
            {/* div */}
            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Middle School Leadership :
              </span>
              <p>
                We encourage leadership development among our Middle School
                students. Through various leadership opportunities and
                activities, students learn essential skills such as
                communication, teamwork, and problem-solving, preparing them for
                future challenges.
              </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Individualized Attention :
              </span>
              <p>
                With small class sizes, our experienced teachers can provide
                personalized attention to each student. This approach allows us
                to understand and address the unique learning needs of every
                child, fostering their academic growth and building confidence.
              </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Technological Integration :
              </span>
              <p>
                Incorporating technology into our primary education allows
                students to develop essential digital literacy skills. Our
                classrooms are equipped with interactive smart boards and
                educational software, enhancing the learning experience.
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
        <div className="flex w-[80%]  gap-5 flex-col lg:flex-col h-full pt-10 justify-start items-start px-7">
          <div className="text-2xl md:text-5xl min-h-[4rem] md:h-[4rem] text-black font-bold w-full flex  justify-start items-center gap-3">
            <span>Senior</span>
            <span className="text-secondary">School</span>
          </div>
          <p className="relative w-[90%] flex-col lg:flex-row justify-evenly items-center lg:items-start h-full gap-10 flex font-normal text-default/60 text-md top-2">
            At Rosebud School, our Senior School program builds on the strong
            foundations laid in our earlier educational stages. We are committed
            to cultivating a deepened love for learning and preparing our
            students for higher education and beyond. By fostering intellectual
            rigor, advanced critical thinking skills, and greater personal
            responsibility, we enable our students to excel and navigate the
            complexities of the modern world.
            <span className="min-h-[6rem] h-[10rem] md:h-[25rem] min-w-[15rem] lg:min-w-[25rem]  relative right-0">
              <img
                src={secondary}
                alt=""
                className="h-[90%] w-full relative object-cover z-[1] rounded-xl"
              />
              <span className="w-full h-[90%] absolute -top-3 -right-4 bg-gray-200/70 rounded-xl"></span>
            </span>
          </p>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center px-7 pl-5 pr-20">
          <div className="w-full sm:w-[80%] h-full p-5 text-md text-default/60 flex-col gap-10 py-3  ">
            {/* div */}
            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Advanced Academic Curriculum :
              </span>
              <p>
                Our curriculum is designed to challenge students and expand
                their knowledge and skills in a broad range of subjects
                including advanced sciences, mathematics, humanities, and arts.
                We offer a variety of AP and honors courses to prepare students
                for university-level studies and to help them stand out in the
                college admissions process.
              </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Leadership and Personal Development :
              </span>
              <p>
                Building on our middle school's emphasis on leadership, the
                senior school provides enhanced opportunities for students to
                take on roles that shape their environment. Through student
                government, peer mentoring, and community service initiatives,
                students hone their leadership skills and learn the value of
                civic engagement.
              </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Career and College Guidance :
              </span>
              <p>
                Our dedicated career and college counseling program helps
                students navigate their future career paths and college choices.
                From one-on-one counseling sessions to college preparation
                workshops, we equip students with the tools and knowledge
                necessary for success after graduation.
              </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Extracurricular Engagement :
              </span>
              <p>
                Rosebud School offers an extensive range of clubs, sports, and
                arts programs, allowing students to explore interests and
                talents outside the classroom. This holistic approach helps in
                nurturing well-rounded individuals who are confident, creative,
                and socially engaged.
              </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start py-3">
              <span className="w-full h-10 flex whitespace-nowrap justify-start text-secondary font-bold text-md sm:text-lg">
                Global Awareness and Diversity :
              </span>
              <p>
                Our global exchange programs, multicultural events, and
                international curricular elements broaden students’ perspectives
                and foster an appreciation for global diversity. Students learn
                to navigate and respect an interconnected world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PagesLayout>
  );
};

export default Academic;
