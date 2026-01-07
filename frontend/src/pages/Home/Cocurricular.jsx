import img from "../../assets/stadium.jpg";
import cocurriImage from "../../assets/cocurricular.jpg";
import houses from "../../assets/houses.jpg";
import classroom from "../../assets/classroom.jpg";
import jointSchool from "../../assets/basketball.jpg";
import computerLab from "../../assets/computer-lab.jpg";
import lab from "../../assets/lab.jpg";
import library from "../../assets/library-2.jpg";
import cocurriImage2 from "../../assets/extra-cocurri.jpg";
import PagesLayout from "../../components/Home/layout/PagesLayout";
const Cocurricular = () => {
  return (
    <PagesLayout
      img={img}
      quotes={`Co-Curricular Whispers: Dreams Take Flight.`}
      seotTitle={"Facilities and Activities"}
      metaContent={`We are committed to bringing world-class, passionate professionals
      together to provide quality education.`}
    >
      <div className="min-h-screen w-full flex-1 flex gap-10 flex-col justify-start items-center py-9">
        <div className="flex w-[80%]  gap-5 flex-col lg:flex-col h-auto  pt-10 justify-start items-start px-7">
          <div className="text-2xl sm:text-4xl md:text-5xl h-[1rem] sm:h-[2rem]  text-black font-bold w-full flex  justify-start items-center">
            <span>Acti</span>
            <span className="text-secondary">vities</span>
          </div>
          <p className="relative w-full flex-col lg:flex-row justify-evenly items-center lg:items-start h-full gap-10 flex font-normal text-default/60 text-md top-2">
            Activities related to the Kinesthetic and emotional developments of
            every student are integral part of our school curriculum. Unlike
            other traditional schools, Sports and other co-curricular activities
            are regular and compulsory activities for all our students in our
            school. Co-curricular activities include individual and team sports
            such as football, basketball, table tennis, swimming, martial arts,
            horse riding and athletics and performing arts such as music, dance,
            drama, arts and craft and yoga. Students have the opportunity to
            display their skills and talents in co-curricular activities in
            various inter school, intra-school, and at the annual functions such
            as Rosebud Day, Sports Day and Annual Cultural Show.
            <div className="min-h-[6rem] h-[10rem] md:h-[20rem] min-w-[15rem] lg:min-w-[25rem]  relative right-0">
              <img
                src={cocurriImage}
                alt=""
                className="h-[90%] w-full relative object-cover z-[1] rounded-[30px_0_30px_0]"
              />
              <div className="w-full h-full absolute -top-3 -right-4 bg-gray-100 rounded-[30px_0_30px_0]"></div>
            </div>
          </p>
        </div>
        {/* sub div */}
        <div className="w-[82%] h-full flex flex-col justify-start items-center px-7">
          <div className="text-xl md:text-3xl  h-[1rem] sm:h-[2rem] font-bold w-full px-3 flex  justify-start items-center gap-0">
            <span className=" capitalize">Hou</span>
            <span className="text-secondary">ses </span>
          </div>
          <p className="w-full h-full p-5 gap-8 flex-col md:flex-row  font-normal flex justify-center text-md text-default/60 ">
            <span className="min-h-[6rem] h-[10rem] md:h-[20rem] min-w-[15rem] lg:min-w-[25rem]  relative right-0">
              <img
                src={houses}
                alt=""
                className="h-[90%] w-full relative object-cover z-[1] rounded-xl"
              />
              <span className="w-full h-[90%] absolute -top-3 -right-4 bg-gray-200/70 rounded-xl"></span>
            </span>
            {`In order to foster teamwork, develop 
            competitive spirit and learn to be a responsible member of the Rosebud School community, the entire student body and teachers of our school are divided into four houses- Rugosa, Osiana, Sericea, and Europa – the initials of which form ROSE. Each house is led by a Head of House supported by assigned teachers.`}
          </p>
        </div>
        {/* sub div end*/}
        {/* sub div */}
        <div className="w-[82%] h-full flex flex-col justify-start items-center px-7">
          <div className="text-xl md:text-3xl capitalize h-[1rem] sm:h-[2rem] font-bold w-full px-3 flex  justify-start items-center gap-3 ">
            <span className="text-secondary ">Joint</span>
            <span className="text-secondary ">school</span>
            <span>activities</span>
          </div>
          <p className="w-full h-full p-5 gap-5 flex-col md:flex-row  font-normal flex justify-center text-md text-default/60 ">
            {`In order to facilitate proper exposure and friendly competitions, Rosebud School is involved in joint school activities with five other reputed schools of Nepal. Sports activities, drama, exhibitions, students and teachers exchange programs, SEE send-up examination are some of the programs jointly organized each year to materialize the concept. St. Xavier’s School at Jawalakhel, St.Xavier’s School at Godawari, St. Mary’s School at Jawalakhel, Nepal Don Bosco School at Lubhu and Kathmandu University High School are our partner schools in these activities.`}
            <span className="min-h-[6rem] h-[10rem] md:h-[20rem] min-w-[15rem] lg:min-w-[25rem]  relative right-0">
              <img
                src={jointSchool}
                alt=""
                className="h-[90%] w-full relative object-cover z-[1] rounded-xl"
              />
              <span className="w-full h-[90%] absolute -top-3 -right-4 bg-gray-200/70 rounded-xl"></span>
            </span>
          </p>
        </div>
        {/*  */}
        <div className="flex w-[80%]  gap-5 flex-col lg:flex-col h-auto lg:h-[20rem] pt-10 justify-start items-start px-7">
          <div className="w-full h-full flex flex-col justify-start items-start px-10 pl-0 ">
            <div className="text-4xl mobile:text-5xl h-[2rem]  text-black font-bold w-full flex  justify-start items-center">
              <span>Faci</span>
              <span className="text-secondary">lities</span>
            </div>
          </div>
          <p className="relative w-full flex-col lg:flex-row justify-evenly items-center lg:items-start h-full gap-10 flex font-normal text-default/60 text-md top-2">
            Students are encouraged to develop awareness of the problems
            plaguing our society, educate other members of the community about
            problems and encourage everyone’s participation and contribution in
            solving such problems by setting an example. A dedicated team of
            professional instructors work hard to provide rigorous training to
            the students in each of the activities throughout the year.
            <div className="min-h-[6rem] h-[10rem] md:h-[20rem] min-w-[15rem] lg:min-w-[25rem]  relative right-0">
              <img
                src={cocurriImage2}
                alt=""
                className="h-[90%] w-full relative object-cover z-[1] rounded-[30px_0_30px_0]"
              />
              <div className="w-full h-full absolute -top-3 -right-4 bg-gray-100 rounded-[30px_0_30px_0]"></div>
            </div>
          </p>
        </div>
        {/*  */}
        <div className="w-[82%] h-full flex flex-col justify-start items-center px-7">
          <div className="text-xl md:text-3xl  h-[1rem] sm:h-[2rem] font-bold w-full px-3 flex  justify-start items-center gap-0">
            <span className="text-secondary capitalize">Class</span>
            <span>rooms</span>
          </div>
          <p className="w-full h-full p-5 gap-8 flex-col md:flex-row  font-normal flex justify-center text-md text-default/60 ">
            <span className="min-h-[6rem] h-[10rem] md:h-[20rem] min-w-[15rem] lg:min-w-[25rem]  relative right-0">
              <img
                src={classroom}
                alt=""
                className="h-[90%] w-full relative object-cover z-[1] rounded-xl"
              />
              <span className="w-full h-[90%] absolute -top-3 -right-4 bg-gray-200/70 rounded-xl"></span>
            </span>
            {`Classrooms are spacious and well-ventilated with ample nature and artificial lighting and cooling facilities. Properly designed furniture, dust free white boards, display boards, and power supply for audio-visual facilities are standard features in our classrooms.`}
          </p>
        </div>
        <div className="w-[82%] h-full flex flex-col justify-start items-center px-7">
          <div className="text-xl md:text-3xl  h-[1rem] sm:h-[2rem] font-bold w-full px-3 flex  justify-start items-center gap-3">
            <span className="text-secondary capitalize">Computer</span>
            <span>Laboratory</span>
          </div>
          <p className="w-full h-full p-5 gap-5 flex-col md:flex-row  font-normal flex justify-center text-md text-default/60 ">
            {`Our computer Laboratory is the pride of our school. Every students of our school has access to computer laboratory which is equipped with more than 100 networked computers with LCD monitors. All computers are connected to the internet with high speed broadband/ ADSL access.`}
            <span className="min-h-[6rem] h-[10rem] md:h-[20rem] min-w-[15rem] lg:min-w-[25rem]  relative right-0">
              <img
                src={computerLab}
                alt=""
                className="h-[90%] w-full relative object-cover z-[1] rounded-xl"
              />
              <span className="w-full h-[90%] absolute -top-3 -right-4 bg-gray-200/70 rounded-xl"></span>
            </span>
          </p>
        </div>
        <div className="w-[82%] h-full flex flex-col justify-start items-center px-7">
          <div className="text-xl md:text-3xl  h-[1rem] sm:h-[2rem] font-bold w-full px-3 flex  justify-start items-center gap-3">
            <span className="text-secondary capitalize">Science</span>
            <span>Laboratory</span>
          </div>
          <p className="w-full h-full p-5 gap-8 flex-col md:flex-row  font-normal flex justify-start text-md text-default/60 ">
            <span className="min-h-[6rem] h-[10rem] md:h-[20rem] min-w-[15rem] lg:min-w-[25rem]  relative right-0">
              <img
                src={lab}
                alt=""
                className="h-[90%] w-full relative object-cover z-[1] rounded-xl"
              />
              <span className="w-full h-[90%] absolute -top-3 -right-4 bg-gray-200/70 rounded-xl"></span>
            </span>
            {`A well-equipped science laboratory has sufficient resources to make science education exciting and fun.`}
          </p>
        </div>
        <div className="w-[82%] h-full flex flex-col justify-start items-center px-7">
          <div className="text-xl md:text-3xl  h-[4rem] sm:h-[2rem] font-bold w-full px-3 flex  justify-start items-center gap-3 flex-wrap">
            <span className="text-secondary capitalize whitespace-nowrap">
              Library / Audio-Visual
            </span>
            <span>centers</span>
          </div>
          <p className="w-full h-full p-5 gap-5 flex-col md:flex-row  font-normal flex justify-center text-md text-default/60 ">
            {`A library with an extensive range of reference books, newspapers, magazines, and educational CDs is at students’ and staff’s disposal. We are committed towards developing our library into a well facilitated resource center with facilities for e-learning. Our separate audio-visual centers equipped with the projectors and the computer help students learn audio-visually.`}
            <span className="min-h-[6rem] h-[10rem] md:h-[20rem] min-w-[15rem] lg:min-w-[25rem]  relative right-0">
              <img
                src={library}
                alt=""
                className="h-[90%] w-full relative object-cover z-[1] rounded-xl"
              />
              <span className="w-full h-[90%] absolute -top-3 -right-4 bg-gray-200/70 rounded-xl"></span>
            </span>
          </p>
        </div>
      </div>
    </PagesLayout>
  );
};

export default Cocurricular;
