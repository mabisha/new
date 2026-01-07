import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { updateMyPassword } from "../../../../utils/apiRequest";
import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const DashProfileSecurity = () => {
  //toggle password
  const [viewPassword, setViewPassword] = useState("password");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const userDetail = JSON.parse(localStorage.getItem("userprofile"));
  const mutation = useMutation({
    mutationFn: updateMyPassword,
  });

  const onUpdate = async (data) => {
    if (data.passwordCurrent === data.newPassword) {
      return toast.error("New Password and Current Password cannot be same.", {
        id: "security",
      });
    }
    if (data.newPassword !== data.newPasswordConfirm) {
      return toast.error(
        "New Password and Confirm New Password doesn't match",
        { id: "security" }
      );
    }

    const toastId = toast.loading("Updating password...");
    mutation.mutate(
      {
        newPassword: data?.newPassword,
        currentPassword: data?.passwordCurrent,
        userId: userDetail?.userId,
      },
      {
        onSuccess: (data) => {
          if (data.status === "success") {
            reset();
            return toast.success("Password updated successfully", {
              id: toastId,
            });
          }

          toast.error(data.message, { id: toastId });
        },
        onError: (error) => {
          toast.error(error.message, { id: toastId });
        },
      }
    );
  };

  //password toggle

  const handlePasswordToggle = () => {
    if (viewPassword === "text") {
      setViewPassword("password");
    }

    if (viewPassword === "password") {
      setViewPassword("text");
    }
  };
  return (
    <form
      aria-disabled={mutation.isPending}
      className="aria-disabled:pointer-events-none aria-disabled:opacity-60"
      onSubmit={handleSubmit(onUpdate)}
    >
      <div className="mx-auto max-w-md space-y-5">
        <div>
          <label
            htmlFor="passwordCurrent"
            className="mb-1 inline-block text-xs font-medium text-gray-400"
          >
            Current Password
          </label>
          <input
            {...register("passwordCurrent", {
              required: "Current Password is required",
            })}
            type="password"
            required
            id="passwordCurrent"
            name="passwordCurrent"
            placeholder="Enter current password"
            className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base focus:border-gray-300"
          />
          {errors.passwordCurrent && (
            <span className="mt-1 block text-xs text-red-400">
              {errors.passwordCurrent.message}
            </span>
          )}
        </div>
        <div className="relative">
          <label
            htmlFor="newPassword"
            className="mb-1 inline-block text-xs font-medium text-gray-400"
          >
            New Password
          </label>{" "}
          <span
            className="password-eye-icon cursor-pointer absolute top-[2.3rem] right-4 "
            onClick={handlePasswordToggle}
          >
            {viewPassword === "text" ? (
              <RemoveRedEyeIcon fontSize="small" />
            ) : (
              <VisibilityOffIcon fontSize="small" />
            )}
          </span>
          <input
            {...register("newPassword", {
              required: "New password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[\W_])/,
                message: "Password must include at least 1 digit and 1 symbol",
              },
            })}
            type={viewPassword}
            id="newPassword"
            name="newPassword"
            required
            maxLength={10}
            placeholder="Enter Password"
            className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base focus:border-gray-300"
          />
          {errors.newPassword && (
            <span className="mt-1 block text-xs text-red-400">
              {errors.newPassword.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="newPasswordConfirm"
            className="mb-1 inline-block text-xs font-medium text-gray-400"
          >
            Confirm New Password
          </label>
          <input
            {...register("newPasswordConfirm", {
              required: "Confirm Password is required",
            })}
            type="password"
            id="newPasswordConfirm"
            name="newPasswordConfirm"
            maxLength={10}
            required
            placeholder="Confirm new password"
            className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base focus:border-gray-300"
          />
          {errors.newPasswordConfirm && (
            <span className="mt-1 block text-xs text-red-400">
              {errors.newPasswordConfirm.message}
            </span>
          )}
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="mt-6 inline-flex w-full max-w-[200px] items-center justify-center gap-2 rounded-full border-2 border-matte/20 bg-black p-3.5 text-center text-sm font-medium text-white duration-300 hover:bg-white hover:text-matte/50 disabled:pointer-events-none disabled:opacity-60 sm:max-w-[260px] sm:text-base"
          >
            Change Password
          </button>
        </div>
      </div>
    </form>
  );
};

export default DashProfileSecurity;
