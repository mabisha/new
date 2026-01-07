import blobSvg from "../../../assets/haikei.svg";
const BlobTitle = ({ title }) => {
  return (
    <p className="relative text-secondary flex flex-col w-full h-[15rem] items-center justify-center font-bold uppercase">
      <img src={blobSvg} alt="" className="absolute w-[13rem]" />
      <span className="z-10 text-white text-[22px]">{title}</span>
    </p>
  );
};

export default BlobTitle;
