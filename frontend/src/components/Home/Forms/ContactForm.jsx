import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import ClearIcon from "@mui/icons-material/Clear";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { EMAIL, PHONE_NUMBER } from "../../../constants/InformationConstants";
import { AiTwotoneMessage } from "react-icons/ai";
import { PiHashDuotone, PiMailboxDuotone, PiUserDuotone } from "react-icons/pi";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { sendMail } from "../../../utils/apiRequest";
import roseLogo from "../../../../public/rosebud-favicon.png";
import Spinner from "../../../components/Admin/AdminComponents/Elements/Spinner";
export default function ContactForm({
  openContactForm,
  updateContactFormState,
}) {
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
  const { register, handleSubmit, reset } = useForm();
  const mutation = useMutation({
    mutationFn: sendMail,
    onSuccess: (res) => {
      if (res.status === "success") {
        toast.dismiss();
        updateContactFormState();
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
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openContactForm}
      onClose={() => {
        updateContactFormState();
        reset();
      }}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openContactForm}>
        <div className=" w-full h-full flex justify-center items-center p-2">
          <div className="bg-white w-[60%] h-[80%] rounded-md z-10 p-2  overflow-hidden ">
            <div className="w-full relative h-10 flex items-center justify-center border-b-[1px] border-b-gray-200">
              <span className="Capitalize font-semibold text-xl">Contact</span>
              <ClearIcon
                onClick={() => {
                  updateContactFormState();
                  reset();
                }}
                className=" cursor-pointer absolute top-2 right-1 hover:text-secondary uppercase gap-1"
              />
            </div>

            <div className="h-[92%] overflow-x-auto overflow-y-auto xl:px-5 flex-col xl:flex-row flex flex-1 justify-start xl:justify-center gap-5">
              <div className="w-full flex-col justify-evenly xl:w-[40%] bg-white flex py-2 pl-2 xl:pl-0 pr-2 xl:pr-4 gap-2">
                {/* card */}
                <div className="h-28 bg-secondary cursor-pointer text-white rounded-md  gap-4 flex justify-between px-3 items-center">
                  <div className="bg-gray-200/40 p-[2px] px-1 h-10 w-12 rounded-lg flex justify-center items-center">
                    <MyLocationIcon sx={{ height: "18px" }} />
                  </div>
                  <div className="overflow-hidden h-[90%] flex-col w-full flex justify-center items-start">
                    <span className="font-semibold text-lg">Location :</span>
                    <section className="text-sm font-medium">
                      32 Rudramati Marg 1, Buddha Nagar 10, Kathmandu
                    </section>
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
                  <div className="overflow-hidden h-[85%] flex-col w-full flex justify-center items-start">
                    <span className="font-semibold text-lg">Call :</span>
                    <p className="text-sm font-medium gap-2 flex h-[22px] flex-wrap">
                      {PHONE_NUMBER.map((item, index) => (
                        <span className="whitespace-nowrap " key={index}>
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
                    <span className="text-sm font-medium">
                      Sun-Fri : 8AM - 6PM
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-[55%] pl-2 xl:pl-0 pr-2 xl:pr-0">
                <form
                  onSubmit={handleSubmit(handleSendEmail)}
                  className="php-email-form h-full py-4 flex flex-col justify-between gap-5"
                >
                  <div className="w-full flex justify-between items-center gap-5">
                    <div className="w-full relative min-w-[280px] flex flex-col items-start text-sm font-semibold gap-1 text-matte/80">
                      <input
                        {...register("sender", {
                          required: "Name is required",
                        })}
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
                  </div>
                  <div className="w-full relative min-w-[280px] flex flex-col items-start text-sm font-semibold gap-1 text-matte/80">
                    <input
                      {...register("email", {
                        required: "Name is required",
                      })}
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
                  <div className="w-full relative flex justify-between items-center gap-5 font-semibold">
                    {/* <div className="w-full relative min-w-[280px] flex flex-col items-start text-sm font-semibold gap-1 text-matte/80"> */}
                    <input
                      required
                      {...register("subject", {
                        required: "Name is required",
                      })}
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
                      {...register("message", {
                        required: "Name is required",
                      })}
                      required
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
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
