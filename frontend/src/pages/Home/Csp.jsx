import img from "../../assets/csp.jpg";
import csp from "../../assets/CSP-Logo.png";
import PagesLayout from "../../components/Home/layout/PagesLayout";
const Csp = () => {
  return (
    <PagesLayout
      img={img}
      breadCrumb="Complete Schooling Program (CSP)"
      seotTitle={"Complete Schooling Program"}
      metaContent={` The Complete Schooling Program (CSP) aims to help every student
      attain his or her full potential. It believes in holistic
      development by focusing on three distinct but critical areas of
      child development.`}
    >
      <div className="w-full flex-1 flex gap-10 flex-col justify-start items-center py-9">
        <div className="flex w-[80%]  gap-5 flex-col lg:flex-col h-full min-h-[25rem] lg:h-[20rem] pt-10 justify-start items-start px-7 pl-8">
          <div className="w-full h-full flex flex-col justify-start items-start px-7 pl-0">
            <div className="text-2xl sm:text-4xl md:text-5xl mobile:h-[4rem] sm:h-[6rem]  text-black font-bold w-full flex  justify-start items-center flex-wrap gap-3">
              <span>Complete</span>
              <span className="text-secondary">Schooling</span>
              <span className="text-secondary">Program</span>
            </div>
          </div>
          <p className="relative w-[90%] flex-col lg:flex-row justify-evenly items-center lg:items-start h-full gap-10 flex font-normal text-default/60 text-md top-2">
            The Complete Schooling Program (CSP) aims to help every student
            attain his or her full potential. It believes in holistic
            development by focusing on three distinct but critical areas of
            child development. At the same time, by allowing the separation of
            school and home activities, our CSP makes the process of learning
            and development enjoyable to both the students and the parents.
            <div className="h-[20rem] lg:min-w-[20rem] relative right-0 -top-10">
              <img
                src={csp}
                alt=""
                className="h-[90%] w-full relative object-contain z-[1] rounded-[30px_0_30px_0]"
              />
            </div>
          </p>
        </div>
        {/* sub div */}
        <div className="w-full h-full flex flex-col justify-start items-center px-7">
          <div className="text-xl md:text-3xl  h-[1rem] sm:h-[2rem] font-bold w-[80%] px-3 flex  justify-start items-center gap-3">
            <span className=" capitalize">Intellectual </span>
            <span className="text-secondary"> Development </span>
          </div>
          <p className="w-[80%] h-full p-5 pl-3 font-normal flex justify-center text-md text-default/60">
            {` Students spend 4-5 hours in the classroom where the emphasis is
            given on developing their learning skills. Students are encouraged
            to actively participate in the learning process, discuss problems
            with teachers and classmates, engage in rational and "out of the
            box" thought processes and draw logical conclusions. They research,
            experiment, and share findings. The objectives of classroom teaching
            is not only academic development but also allowing students to
            develop questioning spirit and critical thinking ability and
            enhancing their interpretational, problem solving skills.`}
          </p>
        </div>
        {/* sub div end*/}
        {/* sub div */}
        <div className="w-full h-full flex flex-col justify-start items-center px-7">
          <div className="text-xl md:text-3xl  h-[1rem] sm:h-[2rem] font-bold w-[80%] px-3 flex  justify-start items-center gap-3">
            <span className="text-secondary capitalize">Kinesthetic </span>
            <span> Development</span>
          </div>
          <p className="w-[80%] h-full flex justify-center p-5 font-normal text-md text-default/60">
            {`Every student of Rosebud School spends at least one session a day
            practicing a sport or participating in a competitive sport.
            Participation in various individual and team sports is mandatory for
            every student. We believe that engagement in such activities not
            only provides every student with physical exercise necessary to
            promote every student's health and mental well being but such
            involvement also provides every student with the opportunity to
            learn about teamwork, discipline, commitment and develop a
            competitive spirit with a sense of fairness. Visit Co-Curricular
            Activities.`}
          </p>
        </div>
        {/* sub div end*/} {/* sub div */}
        <div className="w-full h-full flex flex-col justify-start items-center px-7">
          <div className="text-xl md:text-3xl  h-[1rem] sm:h-[2rem] font-bold w-[80%] px-3 flex  justify-start items-center gap-3">
            <span className="text-secondary capitalize">Emotional</span>
            <span>Development </span>
          </div>
          <p className="w-[80%] h-full flex justify-center p-5 font-normal text-md text-default/60">
            Besides classrooms and sporting activities, the students also
            participate in other co-curricular activities like arts and crafts,
            music, drama, dance, creative writing and yoga on a daily basis.
            Such engagements allow students to realize their creative potential
            and express their feelings and emotions in constructive and
            meaningful forms. Emotional development activities allow students to
            gain self confidence, build self esteem, be creative, develop
            positive attitude, control negative energy and behave in a
            responsible manner.
          </p>
        </div>
        {/* sub div end*/} {/* sub div */}
        <div className="w-full h-full flex flex-col justify-start items-center px-7">
          <div className="text-xl md:text-3xl  h-[1rem] sm:h-[2rem] font-bold w-[80%] px-3 flex  justify-start items-center gap-3">
            <span className=" capitalize text-secondary">After </span>
            <span className=""> School </span>
          </div>
          <p className="w-[80%] flex justify-center h-full p-5 font-normal text-md text-default/60">
            {`After school, students join their families without the substantial burden of school assignments. Students spend quality time with their families, pursue their interests, interact with friends, help their parents and relatives at house work and learn valuable lessons what schools cannot teach from their greatest teachers - their parents. Parents are encouraged to discuss the school life with their children and take interest in their work. Simple words of encouragement, allowing children to engage in meaningful yet entertaining activities and teaching good habits and discipline will broaden their children's horizon and make them more receptive and better prepared for school life.`}
          </p>
        </div>
        {/* sub div end*/}
      </div>
    </PagesLayout>
  );
};

export default Csp;
