import principal from "../../assets/principal.jpg";
import parents from "../../assets/parents-2.jpg";
import PagesLayout from "../../components/Home/layout/PagesLayout";
const MessageFromPrincipal = () => {
  return (
    <PagesLayout
      img={parents}
      objectPosition={"top"}
      breadCrumb={"From Principal"}
      seotTitle={"Message from the Principal"}
      metaContent={`Where minds meet, dreams take flight.`}
    >
      <div className="w-full flex-1 flex gap-10 flex-col justify-start items-center py-9">
        <div className="flex w-[80%]  gap-5 flex-col lg:flex-col h-[25rem] mobile:h-[28rem] sm:h-[35rem] lg:h-[30rem] pt-10  justify-start sm:justify-start md:justify-center items-center px-9">
          <div className="w-full  flex flex-col justify-start items-start px-9 pl-0">
            <div className="text-2xl md:text-5xl h-[4rem] md:h-[8rem] lg:h-[4rem] text-black whitespace-nowrap font-bold w-full flex  justify-start items-center gap-3 flex-wrap">
              <span>Message From</span>
              <span className="text-secondary">Principal</span>
            </div>
          </div>
          <div className=" md:w-[70%] xl:w-[50%] lg:h-[20rem] flex justify-center items-center">
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
              Welcome to Rosebud School! Our school is one of its kinds in the
              nation as it proves itself an exception through the implementation
              of the Complete Schooling Program (CSP) that blends learning with
              participation and exploration. We have always looked forward to
              lessening the study burden to our children through execution of
              modern teaching learning practices and involvements in a number of
              extra co-curricular activities. Our school is an atmosphere of
              academic excellence surrounded by faith and social freedom where
              we strive to educate our students through acts of service and
              kindness. Our vision is to provide education that contributes to
              preparing each child as a responsible member of the family,
              community and the nation. We recognize that the parents are the
              primary educators of their children, and we view the school as an
              extension of the family. Hence, we take this as our responsibility
              to help educate the child in an environment that finally
              contributes in creating a civilized personality from each child
              enrolled with us. We recognize that each child has God given
              dignity and value. We identify each child’s individual needs.
              Through a carefully planned curriculum and qualified staff, we
              help to develop and meet the needs of every child insofar as
              possible.
            </p>
            <p>
              We have always imparted our children with the belief that
              education is not limited in books and classrooms. To confer the
              same to every child who is associated to our family, we have tried
              our best not to let a stone unturned in enrolling every child in
              at least one activity of their choice and interest that can add up
              to their aptitude of performance. We focus on acquisition of
              academic skills necessary for contemporary society and higher
              education that help in adapting to the change and an openness to
              the progressive technique. Understanding today’s parents, who have
              the idea of the international community and their desire of
              bringing up their child as competent and proficient of the caliber
              we except them to perform, we have our school starting from the
              play group that grooms every child contributing to their overall
              development from the early stage of their growth. Growing as a
              student of Rosebud School, a child finds one capable and
              proficient in all life skills.
            </p>
            <p>
              Today Rosebud School is a family on more than 1800 students, over
              150 faculty members and 150 administrative, managerial and other
              associates. We have students, who have passed out from our school
              involved in various works of life contributing in raising the
              development graph of the community, nation and mankind as a whole.
              It makes us proud to see our students live a successful social and
              professional life as they grow under our schooling culture. We
              invite you to learn more about rosebud school by touring this
              website and by also visiting our school environment.
            </p>
            <div className="w-full flex flex-col gap-1 font-medium h-[6rem] justify-end">
              <p>Damodar Dhungana,</p>
              <p>Principal</p>
            </div>
          </div>
        </div>
      </div>
    </PagesLayout>
  );
};

export default MessageFromPrincipal;
