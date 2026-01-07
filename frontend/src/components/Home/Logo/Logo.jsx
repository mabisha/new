const Logo = () => {
  return (
    <div className="relative group cursor-pointer transition-all duration-[600ms] ease w-[200px] h-[200px] flex justify-center items-center p-0">
      <div className="w-36 h-36  rounded-full absolute p-0 z-0 flex items-center justify-center ">
        <div className=" bg-white/20 rounded-full group-hover:w-[110px] group-hover:h-[110px] w-[120px] h-[120px] relative flex items-center justify-center transition-all duration-[300ms]">
          <div className=" bg-white/10 rounded-full group-hover:w-[78px] group-hover:h-[78px]  w-[90px] h-[90px] relative flex items-center justify-center transition-all duration-[400ms]">
            <div className=" bg-white/10 rounded-full group-hover:w-[48px] group-hover:h-[48px]  w-[65px] h-[65px] relative flex items-center justify-center transition-all duration-[500ms]">
              <div className=" bg-white/10 rounded-full group-hover:w-[26px] group-hover:h-[26px]  w-[35px] h-[35px] relative flex items-center justify-center transition-all duration-[600ms]"></div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Logo;
