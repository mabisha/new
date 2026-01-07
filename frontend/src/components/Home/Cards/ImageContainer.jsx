const ImageContainer = ({
  containerImage,
  quotes,
  breadCrumb,
  objectPosition,
}) => {
  return (
    <div className="w-full h-[25rem] overflow-hidden flex relative justify-center items-center">
      <div className="w-full absolute h-full bg-[#0009]"></div>
      <img
        src={containerImage}
        alt=""
        className="w-full h-full object-cover"
        style={{ objectPosition: `${objectPosition ? "top" : ""}` }}
      />
      {quotes && !breadCrumb && (
        <div className="w-full text-center  h-full capitalize flex flex-col tracking-wider  absolute p-10 font-extrabold text-xl sm:text-2xl z-10 top-0 text-white  justify-center items-center">
          <div className="">{quotes}</div>
          <span className="h-[4px] bg-secondary relative w-[20%] mt-[4px] rounded-full"></span>
        </div>
      )}
      {!quotes && breadCrumb && (
        <div className="w-full text-center  h-full capitalize flex flex-col tracking-wider  absolute p-10 font-extrabold text-2xl z-10 top-0 text-white  justify-center items-center">
          <div className="font-extrabold">{breadCrumb}</div>
          <span className="h-[4px] bg-secondary relative w-[70px] mt-[4px] rounded-full"></span>
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
