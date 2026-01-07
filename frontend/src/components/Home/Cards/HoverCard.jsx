import img from "../../../assets/wushu.jpg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const HoverCard = ({
  hoverImage = img,
  hoverTitle = "Title",
  hoverDescription = "description",
  handler,
}) => {
  return (
    <div
      onClick={handler}
      className="group min-h-[18rem] sm:min-h-[18rem] cursor-pointer overflow-hidden relative min-w-[20rem] max-w-full flex-1 rounded-sm "
    >
      <img
        src={hoverImage ?? img}
        alt=""
        className="z-[0] top-0 absolute w-full h-full object-cover"
      />
      <div className="w-full absolute h-full bg-matte/30"></div>
      <div className="z-[5] absolute w-full  top-0 group-hover:text-secondary  text-white flex justify-between items-center h-16 lg:h-20 px-5">
        <span className="font-extrabold text-2xl pr-[2px] pt-2 ">
          {hoverTitle}
        </span>
        <span className="relative -left-2 group-hover:left-0 duration-[500ms] transition-[left] ease">
          <KeyboardBackspaceIcon className="rotate-180" sx={{ fontSize: 30 }} />
        </span>
      </div>
      <div className="group-hover:opacity-100 opacity-0  transition-[opacity] duration-[300ms] ease justify-center items-center flex z-[2] absolute bg-default/20  h-full w-full">
        <div className="px-2 overflow-hidden text-center text-xl leading-[26px] md:leading-[28px] capitalize font-semibold text-white relative top-8 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-[top,opacity] duration-[900ms] ease-out max-h-[85%] sm:max-h-[50%] lg:max-h-[57%] max-w-[90%]">
          {hoverDescription}
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
