import school from "../../../assets/school-anim.gif";

const LoadingAnimation = () => {
  return (
    <div className="flex w-full bg-white z-[101] h-full fixed top-0 left-0 justify-center items-center flex-col">
      <img src={school} alt="Loading" className="h-[100px] w-[100px]" />
      <div className="font-extrabold  h-15 flex justify-center items-center text-[12px] text-secondary">
        Rosebud School
      </div>
    </div>
  );
};

export default LoadingAnimation;
