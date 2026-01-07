import PagesLayout from "../../components/Home/layout/PagesLayout";
import img from "../../assets/uniform-sweater.jpg";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { EMAIL, PHONE_NUMBER } from "../../constants/InformationConstants";
import { PiHashDuotone, PiMailboxDuotone, PiUserDuotone } from "react-icons/pi";
import { AiTwotoneMessage } from "react-icons/ai";
import roseLogo from "../../../public/rosebud-favicon.png";
import { useMutation } from "@tanstack/react-query";
import { sendMail } from "../../utils/apiRequest";
import { useForm } from "react-hook-form";
import Spinner from "../../components/Admin/AdminComponents/Elements/Spinner";
import toast from "react-hot-toast";

const CustomToast = ({ message, isError }) =>
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-xs w-full relative bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 relative w-0 p-3">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-8 w-8 rounded-full"
                src={roseLogo}
                alt="rosebud-school"
              />
            </div>
            <div className="ml-3 flex-1 flex items-center justify-start">
              <p
                className={`mt-2 text-sm ${
                  isError ? "text-red-400 " : "text-gray-500 "
                }`}
              >
                {message}
              </p>
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    ),
    { position: "top-right" }
  );

const ContactPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const mutation = useMutation({
    mutationFn: sendMail,
    onSuccess: (res) => {
      if (res.status === "success") {
        toast.dismiss();

        CustomToast({
          message: res?.message ?? "Message sent successfully !",
          isError: false,
        });
        reset();
      } else {
        toast.dismiss();

        CustomToast({
          message: res?.message ?? "Failed to send message !",
          isError: true,
        });
      }
    },
  });
  const handleSendEmail = (data) => {
    mutation.mutate(data);
  };
  return (
    <PagesLayout
      img={img}
      breadCrumb="Contact Us"
      seotTitle={"Get in touch"}
      metaContent={`Get in touch.`}
    >
      <div className="w-full flex justify-center items-center font-bold text-5xl h-40">
        <span className="capitalize  text-secondary">con</span>tact
      </div>
      <div className=" w-full h-full flex flex-col sm:flex-row justify-evenly items-start relative p-9 py-13 gap-10">
        <div className="flex-1 w-full sm:w-auto h-full flex flex-col justify-evenly gap-5">
          <div className="h-28 bg-secondary cursor-pointer text-white rounded-md  gap-4 flex justify-between px-3 items-center">
            <div className="bg-gray-200/40 p-[2px] px-1 h-10 w-12 rounded-lg flex justify-center items-center">
              <MyLocationIcon sx={{ height: "18px" }} />
            </div>
            <div className="overflow-hidden h-[80%] flex-col w-full flex justify-center items-start">
              <span className="font-semibold text-lg">Location :</span>
              <span className="text-sm font-medium">
                32 Rudramati Marg 1, Buddha Nagar 10, Kathmandu
              </span>
            </div>
          </div>
          <div className="h-28 bg-secondary cursor-pointer text-white rounded-md  gap-4 flex justify-between px-3 items-center">
            <div className="bg-gray-200/40 p-[2px] px-1 h-10 w-12 rounded-lg flex justify-center items-center">
              <EmailIcon sx={{ height: "18px" }} />
            </div>
            <div className="overflow-hidden h-[80%] flex-col w-full flex justify-center items-start">
              <span className="font-semibold text-lg">Email :</span>
              <span className="text-sm font-medium">{EMAIL}</span>
            </div>
          </div>
          <div className="h-28 bg-secondary cursor-pointer text-white rounded-md  gap-4 flex justify-between px-3 items-center">
            <div className="bg-gray-200/40 p-[2px] px-1 h-10 w-12 rounded-lg flex justify-center items-center">
              <LocalPhoneIcon sx={{ height: "18px" }} />
            </div>
            <div className="overflow-hidden h-[80%] flex-col w-full flex justify-center items-start">
              <span className="font-semibold text-lg">Call :</span>
              <p className="text-sm font-medium gap-2 flex ">
                {PHONE_NUMBER.map((item, index) => (
                  <span className="whitespace-nowrap" key={index}>
                    {item}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="h-28 bg-secondary cursor-pointer text-white rounded-md  gap-4 flex justify-between px-3 items-center">
            <div className="bg-gray-200/40 p-[2px] px-1 h-10 w-12 rounded-lg flex justify-center items-center">
              <ScheduleIcon sx={{ height: "18px" }} />
            </div>
            <div className="overflow-hidden h-[80%] flex-col w-full flex justify-center items-start">
              <span className="font-semibold text-lg">Open Hours :</span>
              <span className="text-sm font-medium">Sun-Fri: 8AM - 6PM</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[55%] pl-2 md:pl-0 pr-2 md:pr-0 h-full ">
          <form
            onSubmit={handleSubmit(handleSendEmail)}
            className="php-email-form py-0 flex flex-col justify-evenly gap-5"
          >
            <div className="w-full flex justify-between items-center gap-5 flex-wrap">
              <div className="w-full relative min-w-[280px] flex flex-col items-start text-sm font-semibold gap-1 text-matte/80">
                <input
                  {...register("sender", { required: "Name is required" })}
                  required
                  id="sender"
                  type="text"
                  placeholder="Your Name"
                  className="block w-full rounded-lg border border-[#d0d0d0] focus:border-[#b2b2b2] bg-[#FAFBFE] p-4 pl-9 placeholder:text-[#c3c3c3] focus:outline-none"
                />
                <span
                  className={
                    "absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-xl text-[#c3c3c3]"
                  }
                >
                  <PiUserDuotone />
                </span>
              </div>

              <div className="w-full relative min-w-[280px] flex flex-col items-start text-sm font-semibold gap-1 text-matte/80">
                <input
                  {...register("email", { required: "email is required" })}
                  required
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="block w-full rounded-lg border border-[#d0d0d0] focus:border-[#b2b2b2] bg-[#FAFBFE] p-4 pl-9 placeholder:text-[#c3c3c3] focus:outline-none"
                />
                <span
                  className={
                    "absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-xl text-[#c3c3c3]"
                  }
                >
                  <PiMailboxDuotone />
                </span>
              </div>
            </div>

            <div className="w-full relative flex justify-between items-center gap-5 font-semibold">
              {/* <div className="w-full relative min-w-[280px] flex flex-col items-start text-sm font-semibold gap-1 text-matte/80"> */}
              <input
                required
                {...register("subject", { required: "subject is required" })}
                id="subject"
                type="text"
                placeholder="Subject"
                className="block w-full rounded-lg border border-[#d0d0d0] focus:border-[#b2b2b2] bg-[#FAFBFE] p-4 pl-9 placeholder:text-[#c3c3c3] focus:outline-none"
              />
              <span
                className={
                  "absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-xl text-[#c3c3c3]"
                }
              >
                <PiHashDuotone />
              </span>
            </div>
            <div className="w-full relative flex justify-between items-center gap-5 font-semibold">
              <textarea
                required
                {...register("message", { required: "message is required" })}
                id="message"
                type="textarea"
                rows={4}
                placeholder="Message"
                className="block w-full rounded-lg border border-[#d0d0d0] focus:border-[#b2b2b2] bg-[#FAFBFE] p-4 pl-9 placeholder:text-[#c3c3c3] focus:outline-none"
              />
              <span
                className={
                  "absolute left-1 top-7 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-xl text-[#c3c3c3]"
                }
              >
                <AiTwotoneMessage />
              </span>
            </div>
            <div className="text-start">
              <button
                type="submit"
                className="mt-4  font-semibold inline-flex w-full max-w-[200px] items-center justify-center gap-2 rounded-lg border border-[#d92732] bg-[#d92732] p-3.5 text-center text-sm text-white duration-300 hover:text-[#d92732] hover:bg-white disabled:pointer-events-none disabled:opacity-60 sm:max-w-[160px] sm:text-base"
                disabled={mutation?.isPending}
              >
                {mutation?.isPending ? (
                  <div className="flex justify-center gap-2  items-center">
                    <Spinner width="w-5" height="h-5" /> Sending...
                  </div>
                ) : (
                  <>Send</>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </PagesLayout>
  );
};

export default ContactPage;
