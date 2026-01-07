// import img from "";
import principal from "../../assets/chairman.jpg";
import PagesLayout from "../../components/Home/layout/PagesLayout";
const MessageFromChairman = () => {
  return (
    <PagesLayout
      img={
        "https://rosebudschoolnepal.org/images/main-images/principals-message.png"
      }
     
      breadCrumb={"Our Team"}
      seotTitle={"Message From the Chairman"}
      metaContent={`Let's water the seeds of potential, cultivating a vibrant garden where our children can bloom and grow.`}
    >
      <div className="w-full flex-1 flex gap-10 flex-col justify-start items-center py-9">
        <div className="flex w-[80%]  gap-5 flex-col lg:flex-col h-[25rem] mobile:h-[30rem] sm:h-[35rem] lg:h-[30rem] pt-10  justify-start sm:justify-start md:justify-center items-center px-9">
          <div className="w-full  flex flex-col justify-start items-start px-9 pl-0">
            <div className="text-2xl md:text-5xl h-[4rem] md:h-[8rem] lg:h-[4rem] text-black whitespace-nowrap font-bold w-full flex  justify-start items-center gap-3 flex-wrap">
              <span>Message From</span>
              <span className="text-secondary">Chairman</span>
            </div>
          </div>
          <div className="md:w-[70%] xl:w-[50%] lg:h-[20rem] flex justify-center items-center">
            <img
              src={principal}
              alt=""
              className="h-full w-full relative object-cover z-[1] rounded-[30px]"
            />
          </div>
        </div>
        {/* divs */}
        <div className="w-full h-full flex flex-col justify-start items-center px-9">
          <div className="w-[70%] h-full p-5 pt-2 font-normal text-lg tracking-wide text-matte/80 gap-4 flex flex-col">
            <p className="font-bold">Dear Parents and Guardians,</p>
            <p>
              Welcome to Rosebud School. Since our humble beginning in 1993,
              Rosebud School, as we know it today, started taking shape in 2005,
              with new ownership and shifting of the school to its own property
              in Buddha Nagar. Our mission thereafter has been to differentiate
              ourselves from other schools and to gradually make our school a
              school of choice for many parents. To set ourselves apart, we
              initiated the Complete Schooling Program (CSP). a unique program
              that is meant to provide holistic, overall development of every
              student by focusing on three distinct and critical areas of child
              development: intellectual, physical, and emotional. Our CSP
              program is designed to engage our students in school for 8–9 hours
              a day by laying equal emphasis on academics, which includes
              regular classes, coaching and assignment classes and physical
              activities by making participation in co-curicular activities,
              which range from various kinds of sports to arts and yoga,
              mandatory for all students.
            </p>
            <p>
              We are proud that our program is consistently serving the needs of
              today's children and parents. Exposure to the proper kind of
              teaching/learning environment and the guidance of qualified
              academicians help our students achieve academic excellence. A
              comfortable and conducive atmosphere between students and teachers
              is encouraged to foster the growth of strong positive relationship
              that will amplify and develop their studies and research. Through
              collective efforts of all our teachers, administrators, and
              support staff, we strive to provide our students with the
              knowledge, skills, abilities, attitudes, and beliefs that are
              essential for a productive and successful life. Working parents
              find our program appealing as the students spend most of the day
              in a secure environment of our school engaged in truthful and
              productive activities. As we seek to reduce the burden of busy
              parents by B increasing our areas of responsibility, parents can
              spend more spending quality time with their child when at home
              instead of being burdened by school work and assignments.
            </p>
            <p>
              Currently, about 1600 enthusiastic learners are enrolled in our
              school. We would like to express our sincere gratitude to our
              current parents and students for their support and contribution .
              Their feedback and suggestions have been very important to us to
              address any shortcomings and to motivate us to make more efforts
              in our mission to improve ourselves continuously. We are committed
              to making our school an extraordinary study and learning centre.
            </p>
            <p>
              We look forward to welcoming prospective parents and students to
              our school.
            </p>
            <div className="w-full flex flex-col gap-1 font-medium h-[6rem] justify-end">
              <p>Antoo Shrestha</p>
              <p>Chairman</p>
              <p>School Management Committee</p>
            </div>
          </div>
        </div>
      </div>
    </PagesLayout>
  );
};

export default MessageFromChairman;
