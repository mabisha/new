const VideoButton = ({ title, icon, onClick, open }) => {
  return (
    <div
      onClick={onClick}
      className={`group  bg-default/70 ${
        !open ? "w-[4rem] hover:w-[11rem]" : "w-[11rem]"
      }  min-h-16 gap-1  transition-[width] duration-[700ms]  overflow-hidden ease text-white  rounded-full border-[1px] flex justify-between cursor-pointer items-center p-2 px-[0.8rem] capitalize font-bold text-lg absolute z-[11]`}
    >
      <div className="">{icon}</div>
      <div
        className={`${
          !open ? "relative left-3 flex group-hover:left-1" : "relative flex"
        } transition-all duration-[700ms] ease-in-out w-full whitespace-nowrap`}
      >
        {title}
      </div>
    </div>
  );
};

export default VideoButton;
