import aboutImg from "../../assets/middle-school.jpg";
import welcomeImg from "../../assets/kids-circle-2.jpg";
import rosebudSchool from "../../assets/Rose-Bud-Secondary-School.jpg";
import PagesLayout from "../../components/Home/layout/PagesLayout";
const AboutUs = () => {
  return (
    <PagesLayout
      img={welcomeImg}
      breadCrumb="About Us"
      seotTitle={"About Rosebud"}
      metaContent={`Located in the bustling heart of Kathmandu city, Rosebud School
    stands as a beacon of educational excellence and holistic
    development.`}
    >
      <div className="w-full flex-1 flex gap-10 flex-col justify-start items-center py-9">
        <div className="flex w-[80%]  gap-5 flex-col lg:flex-col h-auto  pt-10 justify-start items-start px-7">
          <div className="w-full h-full flex flex-col justify-start items-start px-7 pl-0">
            <div className="text-2xl sm:text-4xl md:text-5xl h-[1rem] sm:h-[2rem]  text-black font-bold w-full flex  justify-start items-center gap-3">
              <span>About</span>
              <span className="text-secondary">Rosebud</span>
            </div>
          </div>
          <p className="relative w-[90%] flex-col lg:flex-row justify-evenly items-center lg:items-start h-full gap-10 flex font-normal text-default/60 text-md top-2">
            Located in the bustling heart of Kathmandu city, Rosebud School
            stands as a beacon of educational excellence and holistic
            development. Established in 1993 (2049 B.S), Rosebud School has been
            a cornerstone of academic innovation and student-centered learning
            for over two decades. With a commitment to nurturing the potential
            of each individual, Rosebud offers a comprehensive educational
            experience from Grade 1 to Grade 12, catering to approximately 1800
            students. More than just an institution of learning, Rosebud is a
            vibrant community where values of respect, integrity, and
            inclusivity are woven into the fabric of daily life. Through a
            diverse array of co-curricular activities and a dedicated team of
            educators, Rosebud School empowers students to thrive academically,
            emotionally, and socially, preparing them to navigate the
            complexities of an ever-changing world with confidence and
            compassion.
            <div className="lg:h-[15rem] min-h-[10rem] sm:min-h-[15rem] lg:min-w-[20rem] relative right-0">
              <img
                src={rosebudSchool}
                alt=""
                className="h-[90%] w-full relative object-cover z-[1] rounded-[30px_0_30px_0]"
              />
              <span className="w-full h-full absolute -top-3 -right-4 bg-gray-100 rounded-[30px_0_30px_0]"></span>
            </div>
          </p>
        </div>
        {/* divs */}
        <div className="w-full h-full flex flex-col justify-start items-center px-7">
          <div className="text-xl md:text-3xl  h-[1rem] sm:h-[2rem] font-bold w-[80%] px-3 flex  justify-start items-center gap-0">
            <span>Intro</span>
            <span className="text-secondary">duction</span>
          </div>
          <p className="w-[80%] h-full p-5 font-normal text-md text-default/60">
            Established in 1993 (2049 B.S), Rosebud School is a co-educational
            institute located at the heart of Kathmandu city. It offers
            education from Grade 1 to Grade 12. Rosebud currently has about 1800
            students. Our mission is to provide a child-centered learning
            environment within which every child has an equal opportunity to
            realize their full potential, have a healthy intellectual, physical
            and emotional growth and prepare themselves for life in a rapidly
            changing world. Instead of emphasizing only on academic growth,
            Rosebud School seeks to provide opportunity for holistic and
            all-around development of every child through our Complete Schooling
            Program (CSP).
          </p>
        </div>
        {/*  */}
        <div className="w-full relative h-[50rem] lg:h-[38rem] md:flex-row flex-col bg-gray-100 flex justify-center items-center flex-1 ">
          <div className="w-full md:w-[60%] h-[20rem] md:h-[50rem] lg:h-[38rem] flex-1">
            <img
              src={aboutImg}
              alt="Explore Rosebud"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[50%] xl:w-[40%] relative h-[58rem] sm:h-[35rem] md:h-[50rem] lg:h-[38rem] flex justify-center items-start md:items-center">
            <div className="left-0 -top-20 md:top-[70px] lg:top-16 md:-left-[15rem] gap-1  flex-col relative  md:absolute bg-white h-[80%] shadow-md  p-7 pr-10 font-md text-default/60 text-justify flex justify-start  rounded-md overflow-hidden leading-[30px] w-[90%] md:w-full lg:w-[90%]">
              <div className="flex min-h-10 font-bold text-xl relative text-default">
                <span className="w-[70%] md:w-[65%] xl:w-[40%] h-[3px] absolute bg-secondary bottom-2"></span>
                Explore Rosebud
              </div>
              <p>
                With a rich tapestry of diversity, our school is home to
                approximately 1800 students, each of whom is valued and
                cherished for their unique talents and abilities. Our mission is
                simple yet profound: to provide a child-centered learning
                environment where every student is empowered to realize their
                full potential. Central to our philosophy is the belief in equal
                opportunity. We strive to create an inclusive atmosphere where
                every child, regardless of background or circumstance, can
                thrive. Our educational approach goes beyond academic
                excellence; we are dedicated to fostering holistic growth,
                encompassing intellectual, physical, and emotional well-being.
              </p>
            </div>
          </div>
        </div>
        {/* sub div */}
        <div className="w-full h-full flex flex-col justify-start items-center px-7">
          <div className="w-[80%] h-full flex flex-col justify-start items-start px-7 pl-1">
            <div className="text-xl md:text-3xl  h-[1rem] sm:h-[2rem] font-bold w-[80%] px-3 flex  justify-start items-center gap-0">
              <span>Loca</span>
              <span className="text-secondary">tion</span>
            </div>
          </div>
          <p className="w-[80%] h-full p-5 font-normal flex justify-center text-md text-default/60">
            Rosebud School is spread over 15 ropanis of land with top-class
            facilities for quality education in the heart of Kathmandu city.
            Rosebud School is located in a prime downtown area in Kathmandu city
            between Buddhanagar and Thapathali where many government offices,
            business, hospitals and bus stops are within walking distances. The
            school is easily accessible from the main roads in Baneswor and
            Thapathali.
          </p>
        </div>
        {/* sub div end*/}
        {/* sub div */}
        <div className="w-full h-full flex flex-col justify-start items-center px-7">
          <div className="w-[80%] h-full flex flex-col justify-start items-start px-7 pl-1">
            <div className="text-xl md:text-3xl  h-[1rem] sm:h-[2rem] font-bold w-[80%] px-3 flex  justify-start items-center gap-3">
              <span>Belief</span> <span className="text-gray-400/50"> & </span>
              <span className="text-secondary">Values</span>
            </div>
          </div>
          <p className="w-[80%] h-full p-5 font-normal flex justify-center text-md text-default/60">
            At Rosebud School, we firmly believe in creating an educational
            environment where every member of our community is encouraged to
            thrive and grow. Our core values serve as the foundation for our
            collective journey towards excellence, fostering a culture of
            respect, integrity, and inclusivity. We hold steadfast to the belief
            that every student possesses unique talents and potential, and it is
            our responsibility to nurture and celebrate these individual
            strengths. With an unwavering commitment to lifelong learning,
            empathy, and ethical conduct, we strive to cultivate a community of
            learners who are not only academically proficient but also
            compassionate, resilient, and equipped to make meaningful
            contributions to a diverse and interconnected world. Through our
            dedication to these values, we endeavor to inspire excellence,
            foster personal growth, and empower students to become engaged
            citizens and leaders of tomorrow.
          </p>
        </div>
        {/* sub div end*/}
        {/* sub div */}
        <div className="w-full h-full flex flex-col justify-start items-center px-7">
          <div className="w-[80%] h-full flex flex-col justify-start items-start px-7 pl-1">
            <div className="text-xl md:text-3xl  h-[1rem] sm:h-[2rem] font-bold w-[80%] px-3 flex  justify-start items-center gap-0">
              <span>Vis</span>
              <span className="text-secondary">ion</span>
            </div>
          </div>
          <p className="w-[80%] h-full flex justify-start p-5 font-normal text-md text-default/60">
            Rosebud School envisions a future where adolescents are empowered to
            seize life's opportunities with confidence and resilience. Our
            vision is to cultivate a generation of individuals who not only
            excel academically but also possess the creativity, practicality,
            emotional maturity, and strong ethical grounding necessary to
            navigate an ever-evolving world. We aspire to be a beacon of
            transformative education, where every student is inspired to reach
            their highest potential and contribute positively to society.
          </p>
        </div>
        {/* sub div end*/} {/* sub div */}
        <div className="w-full h-full flex flex-col justify-start items-center px-7">
          <div className="w-[80%] h-full flex flex-col justify-start items-start px-7 pl-1  ">
            <div className="text-xl md:text-3xl  h-[1rem] sm:h-[2rem] font-bold w-[80%] px-3 flex  justify-start items-center gap-0">
              <span>Miss</span>
              <span className="text-secondary">ion</span>
            </div>
          </div>
          <p className="w-[80%] h-full flex justify-start p-5 font-normal text-md text-default/60">
            Instilling in them the essential qualities and skills to thrive in a
            dynamic global landscape. We are committed to providing a nurturing
            environment that encourages critical thinking, fosters creativity,
            and promotes practical application of knowledge. Grounded in our
            core values, we aim to empower students to become compassionate,
            socially responsible citizens who embody integrity, resilience, and
            a lifelong love for learning. Through our comprehensive educational
            programs and unwavering dedication to excellence, we strive to equip
            students with the tools they need to shape a brighter future for
            themselves and the world around them.
          </p>
        </div>
        {/* sub div end*/} {/* sub div */}
        <div className="w-full h-full flex flex-col justify-start items-center px-7">
          <div className="w-[80%] h-full flex flex-col justify-start items-start px-7 pl-1">
            <div className="text-xl md:text-3xl  h-[1rem] sm:h-[2rem] font-bold w-[80%] px-3 flex  justify-start items-center gap-3">
              <span>Rules</span> <span className="text-gray-400/50"> & </span>
              <span className="text-secondary">Regulations</span>
            </div>
          </div>
          <p className="w-[80%] flex justify-start h-full p-5 font-normal text-md text-default/60">
            {`  We look forward to encouraging every individual associated to our
            family abide by the basic norms of good values, integrity and
            discipline in and outside school as defined by the school's code of
            conduct.`}
          </p>
        </div>
        {/* sub div end*/}
      </div>
    </PagesLayout>
  );
};

export default AboutUs;
