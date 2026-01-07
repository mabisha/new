import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import TanstackTable from "../Elements/TanstackTable";
import { getAllUsers, updateUser } from "../../../../utils/apiRequest";
import toast from "react-hot-toast";
import { AiTwotoneDelete } from "react-icons/ai";
import { PiNotePencilDuotone } from "react-icons/pi";
// import { useStore } from "../../../../store";
import avatarOne from "../../../../../public/avatar.jpg";
import avatarTwo from "../../../../../public/avatar-2.jpg";

const DashUserListTable = ({ data }) => {
  const [filter, setFilter] = useState("");
  const queryClient = useQueryClient();
  // const user = useStore((state) => state.user);
  const userProfileLocal = JSON.parse(localStorage.getItem("userprofile"));
  const isAdmin = userProfileLocal?.role === "admin";
  const handleRoleChange = async (e, id) => {
    const role = e.target.value;

    const confirm = window.confirm("Are you sure you want to change the role?");
    if (!confirm) return;

    const result = await updateUser(id, { role });

    if (result.status === "success") {
      queryClient.invalidateQueries(["users"]);

      return toast.success(`User successfully updated to ${role}`);
    }

    toast.error("User role change failed!");
  };
  const columns = [
    {
      header: "User ID",
      accessorKey: "id",
    },
    {
      accessorKey: "imagelink",
      header: "Avatar",
      cell: (props) => {
        const currentImage =
          (props.row.index + 1) % 2 === 0 ? avatarOne : avatarTwo;
        const avatar = props.getValue() || currentImage;

        return (
          <img
            src={avatar}
            alt=""
            className="aspect-square w-12 rounded-full object-cover"
          />
        );
      },
    },
    {
      accessorKey: "username",
      header: "Name",
    },

    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorFn: (row) =>
        JSON.stringify({
          id: row.id,
          role: row.role,
        }),
      header: "Role",
      cell: (props) => {
        const { id, role } = JSON.parse(props.getValue());

        return (
          <select
            className={`w-28 cursor-pointer rounded-lg  px-1 py-1.5 focus:outline-none disabled:cursor-default disabled:opacity-70 ${
              role === "manager"
                ? "bg-matte/10 text-matte/60"
                : "bg-matte/10 text-matte/60"
            }`}
            name="role"
            defaultValue={role}
            onChange={(e) => handleRoleChange(e, id)}
            disabled={
              // !isAdmin ||
              // userProfileLocal?.role !== "admin" ||
              // userProfileLocal?.userId === id

              true
            }
          >
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
          </select>
        );
      },
    },

    {
      accessorFn: (row) => {
        return row.id;
      },
      header: "Update",
      cell: (props) => {
        const isMatchingId = props.getValue() === userProfileLocal?.userId;
        return (
          <Link
            to={isMatchingId || !isAdmin ? "#" : `edit/${props.getValue()}`}
            className={`mr-auto ml-3 flex aspect-square w-9 items-center justify-center rounded-md  text-xl ${
              isMatchingId || !isAdmin
                ? "text-[#888] cursor-not-allowed"
                : " hover:text-[#50c878]"
            }`}
            onClick={(e) => {
              if (isMatchingId || !isAdmin) {
                e.preventDefault();
              }
            }}
          >
            <PiNotePencilDuotone />
          </Link>
        );
      },
    },
    {
      accessorFn: (row) => row.id,
      header: "Delete",
      cell: (props) => {
        const isMatchingId = props.getValue() === userProfileLocal?.userId;
        return (
          <Link
            to={isMatchingId || !isAdmin ? "#" : `delete/${props.getValue()}`}
            onClick={(e) => {
              if (isMatchingId || !isAdmin) {
                e.preventDefault();
              }
            }}
            className={`mr-auto ml-3 flex aspect-square w-9 items-center justify-center rounded-md text-xl ${
              isMatchingId || !isAdmin
                ? "text-[#888] cursor-not-allowed"
                : " duration-200 hover:text-[#FF5556] "
            }`}
          >
            <AiTwotoneDelete />
          </Link>
        );
      },
    },
  ];

  const prefetchGenres = async () => {
    await queryClient.prefetchQuery({
      queryKey: ["users"],
      queryFn: () => getAllUsers(),
    });
  };

  return (
    <div className="user__table">
      <div className="flex items-center justify-between gap-3 px-3 py-2 lg:px-5 lg:py-3">
        <p className="hidden text-lg font-semibold text-[#1d1d1d] sm:block ">
          Users List
        </p>
        <div className="flex justify-end flex-1 items-center gap-4">
          <div className="relative w-[60%] max-w-[220px] sm:w-auto sm:max-w-none">
            <input
              type="text"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              placeholder="Search Users"
              className="block w-full focus:border-matte/30 rounded-lg border border-gray-300 px-2 py-1.5 pl-8 text-sm placeholder:text-[#bbb] focus:outline-none sm:w-44 sm:rounded-xl sm:px-3 sm:py-2 sm:pl-8 sm:text-xs"
            />
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-lg text-gray-400/80">
              <HiOutlineSearch />
            </span>
          </div>
          {isAdmin && (
            <Link
              to="new"
              className="flex items-center gap-1 rounded-sm bg-matte p-2 px-2 text-xs font-medium text-white"
              onMouseOver={prefetchGenres}
            >
              <span className="text-xl">
                <MdOutlineAdd />
              </span>
              <p>Add New</p>
            </Link>
          )}
        </div>
      </div>
      <TanstackTable
        data={data ? data : []}
        columns={columns}
        filter={filter}
        setFilter={setFilter}
        pageSize={10}
      />
    </div>
  );
};

export default DashUserListTable;
