import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaStarOfLife } from "react-icons/fa6";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { TiUserAddOutline } from "react-icons/ti";
import {
  addUser,
  deleteUser,
  updateUser,
  getUserById,
} from "../../../../utils/apiRequest";
import Spinner from "../Elements/Spinner";
import { AiTwotoneDelete } from "react-icons/ai";
const UserListForm = () => {
  const { userId } = useParams();
  const location = useLocation();
  const isDelete = location.pathname.includes("delete");
  const isEdit = location.pathname.includes("edit");

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isUploading, setIsUploading] = useState(false);
  //password toggle
  const [viewPassword, setViewPassword] = useState("password");
  const handlePasswordToggle = () => {
    if (viewPassword === "text") {
      setViewPassword("password");
    }

    if (viewPassword === "password") {
      setViewPassword("text");
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const userByIdQuery = useQuery({
    queryKey: ["users", userId],
    queryFn: () => {
      if (userId && isEdit) {
        return getUserById(userId);
      }
    },
  });

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: (res) => {
      if (res.status === "error") {
        setIsUploading(false);
        toast.dismiss();
        toast.error(res.message);
        return;
      } else {
        setIsUploading(false);
        queryClient.invalidateQueries(["users"]);
        toast.success("User added successfully!");
        navigate(-1);
        return;
      }
    },
  });

  const deleteUserQuery = useMutation({
    mutationFn: (id) => {
      return deleteUser(id);
    },
    onSuccess: () => {
      setIsUploading(false);
      queryClient.invalidateQueries(["users"]);
      toast.success("User deleted successfully!");
      navigate(-1);
    },
    onError: (error) => {
      setIsUploading(false);
      console.error("Error deleting User:", error);
      toast.error("Failed to delete User.");
    },
  });

  const updateMutation = useMutation({
    mutationFn: (formData) => updateUser(formData),
    onSuccess: () => {
      setIsUploading(false);
      queryClient.invalidateQueries(["users", userId]);
      toast.success("User updated successfully!");
      navigate(-1);
    },
    onError: (error) => {
      setIsUploading(false);
      console.log(error);
    },
  });

  const onUpdate = async (data) => {
    setIsUploading(true);
    const { passwordConfirm, ...updatedData } = data;

    const publicationData = {
      ...updatedData,
      imagelink: "",
    };
    if (!userId && !isEdit) {
      return mutation.mutate(publicationData);
    } else {
      return updateMutation.mutate({ userId, data: publicationData });
    }
  };
  useEffect(() => {
    if (userByIdQuery.data && Object.keys(userByIdQuery.data)) {
      const { username, role, email } = userByIdQuery.data;

      reset({
        username,
        role,
        email,
      });
    }
  }, [userByIdQuery.data, reset, userId]);

  if (isDelete) {
    return (
      <div className="w-full max-w-xl p-3  sm:p-8 md:max-w-3xl">
        <div className="text-center w-full">
          <button
            onClick={() => deleteUserQuery.mutate(userId)}
            type="submit"
            className="mt- inline-flex w-full max-w-[200px] items-center justify-center gap-2 rounded-full border-2 border-matte/20 bg-black p-3.5 text-center text-sm font-medium text-white duration-300 hover:bg-white hover:text-matte/50 disabled:pointer-events-none disabled:opacity-60 sm:max-w-[260px] sm:text-base"
            disabled={isUploading || deleteUserQuery?.isUploading}
          >
            {isUploading || deleteUserQuery?.isPending ? (
              <Spinner width="w-5" height="h-5" />
            ) : (
              <span className="text-xl">
                <AiTwotoneDelete />
              </span>
            )}
            Delete
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[calc(100vw-20px)] max-w-xl p-3 relative sm:w-[calc(100vw-40px)] sm:p-8 md:max-w-xl">
      <form onSubmit={handleSubmit(onUpdate)}>
        <div className="grid grid-cols-2 items-start gap-6">
          <div className="col-span-2">
            <div>
              <label
                htmlFor="username"
                className="mb-1 inline-flex items-center gap-1 text-xs font-medium text-gray-400"
              >
                Name
                <span className="text-[10px] text-red-400">
                  <FaStarOfLife />
                </span>
              </label>
              <input
                {...register("username", { required: "Name is required" })}
                type="text"
                id="username"
                name="username"
                required
                maxLength={20}
                placeholder="Enter User's Name"
                className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base focus:border-matte/40"
              />
              {errors.username && (
                <span className="mt-1 block text-xs text-red-400">
                  {errors.username.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 mb-3 grid-cols-2 gap-x-6 gap-y-5 space-y-5 md:grid md:space-y-0">
          {" "}
          <div>
            <label
              htmlFor="email"
              className="mb-1 inline-flex items-center gap-1 text-xs font-medium text-gray-400"
            >
              Email Address
              <span className="text-[10px] text-red-400">
                <FaStarOfLife />
              </span>
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              required
              id="email"
              name="email"
              placeholder="Enter User's Email Address"
              className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base focus:border-matte/40"
            />
            {errors.email && (
              <span className="mt-1 block text-xs text-red-400">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="role"
              className="mb-1 inline-flex items-center gap-1 text-xs font-medium text-gray-400"
            >
              Role
              <span className="text-[10px] text-red-400">
                <FaStarOfLife />
              </span>
            </label>
            <select
              {...register("role", { required: "Status is required" })}
              id="role"
              name="role"
              required
              className="block w-full cursor-pointer rounded-md border p-3 text-sm focus:outline-none sm:text-base"
              defaultValue={"admin"}
            >
              <option value={"admin"}>Admin</option>
              <option value={"manager"}>Manager</option>
            </select>
          </div>
        </div>
        <div className="mt-6 mb-3 grid-cols-2 gap-x-6 gap-y-5 space-y-5 md:grid md:space-y-0">
          <div className="relative">
            <label
              htmlFor="password"
              className="mb-1 inline-flex items-center gap-1 text-xs font-medium text-gray-400"
            >
              Password
              <span className="text-[10px] text-red-400">
                <FaStarOfLife />
              </span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
                pattern: {
                  value: /^(?=.*[0-9])(?=.*[\W_])/,
                  message:
                    "Password must include at least 1 digit and 1 symbol",
                },
              })}
              type={viewPassword}
              id="password"
              name="password"
              required
              placeholder="Enter User's Password"
              maxLength={10}
              className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base focus:border-matte/40"
            />
            <span
              className="password-eye-icon absolute top-9 right-[10px] text-gray-400"
              onClick={handlePasswordToggle}
            >
              {viewPassword === "text" ? (
                <RemoveRedEyeIcon fontSize="small" />
              ) : (
                <VisibilityOffIcon fontSize="small" />
              )}
            </span>
            {errors.password && (
              <span className="mt-1 block text-xs text-red-400">
                {errors.password.message}
              </span>
            )}
          </div>{" "}
          <div>
            <label
              htmlFor="passwordConfirm"
              className="mb-1 inline-flex items-center gap-1 text-xs font-medium text-gray-400"
            >
              Confirm Password
              <span className="text-[10px] text-red-400">
                <FaStarOfLife />
              </span>
            </label>
            <input
              maxLength={10}
              required
              {...register("passwordConfirm", { required: "Name is required" })}
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              placeholder="Confirm User's Password"
              className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base focus:border-matte/40"
            />
            {errors.passwordConfirm && (
              <span className="mt-1 block text-xs text-red-400">
                {errors.passwordConfirm.message}
              </span>
            )}
          </div>
        </div>
        {errors.password && (
          <div className="mt-6 mb-3 grid-cols-2 gap-x-6 gap-y-5 space-y-5 md:grid md:space-y-0">
            <div
              className="flex p-4 mb-4 col-span-2 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-blue-100/50 dark:text-blue-400"
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">
                  Ensure that these requirements are met:
                </span>
                <ul className="mt-1.5 list-disc list-inside">
                  <li>At least 6 characters (upto 10 characters)</li>
                  <li>At least one digit character</li>
                  <li>
                    Inclusion of at least one special character, e.g., ! @ # ?
                  </li>
                  <li>ex : admin123!@</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className="text-center">
          <button
            type="submit"
            className="mt-6 inline-flex w-full max-w-[200px] items-center justify-center gap-2 rounded-full border-2 border-matte/20 bg-black p-3.5 text-center text-sm font-medium text-white duration-300 hover:bg-white hover:text-matte/50 disabled:pointer-events-none disabled:opacity-60 sm:max-w-[260px] sm:text-base"
            disabled={isUploading || mutation?.isUploading}
          >
            {isUploading || mutation?.isPending ? (
              <Spinner width="w-5" height="h-5" />
            ) : (
              <span className="text-xl">
                <TiUserAddOutline size={25} />
              </span>
            )}
            {userId ? "Update User" : "Add User"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserListForm;
