import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import TanstackTable from "../Elements/TanstackTable";
import { PiNotePencilDuotone } from "react-icons/pi";
import { AiTwotoneDelete } from "react-icons/ai";

const DashsmsTable = ({ data = [] }) => {
  const [filter, setFilter] = useState("");

  const columns = [
    {
      header: "SN",
      cell: (props) => {
        return <span>{props.row.index + 1}</span>;
      },
    },
    {
      accessorKey: "title",
      header: "Title",
    },

    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (props) => {
        const active = props.getValue();

        return <span>{active ? "Active" : "Not Active"}</span>;
      },
    },
    {
      accessorKey: "imagelink",
      header: "Images",
      cell: (props) => {
        const cover = props.getValue();

        return (
          <img src={cover} alt="" className="aspect-[3/4] w-12 object-cover" />
        );
      },
    },

    {
      accessorFn: (row) => {
        return row.id;
      },
      header: "Update",
      cell: (props) => {
        return (
          <Link
            to={`edit/${props.getValue()}`}
            className=" mr-auto ml-3 flex aspect-square w-9 items-center justify-center rounded-md  text-xl hover:text-[#50C878] duration-200"
          >
            <PiNotePencilDuotone />
          </Link>
        );
      },
    },
    {
      accessorFn: (row) => row.id,
      header: "Delete",
      cell: (props) => (
        <Link
          to={`delete/${props.getValue()}`}
          className="mr-auto ml-2 flex aspect-square w-9 items-center justify-center rounded-md  text-xl hover:text-[#FF5556] duration-200  "
        >
          <AiTwotoneDelete />
        </Link>
      ),
    },
  ];

  return (
    <div className="sms__table">
      <div className="flex items-center justify-between gap-3 px-3 py-2 lg:px-5 lg:py-3">
        <p className="hidden text-lg font-semibold text-[#1d1d1d] sm:block ">
          Message List
        </p>
        <div className="flex justify-end flex-1 items-center gap-4">
          <div className="relative w-[60%] max-w-[220px] sm:w-auto sm:max-w-none">
            <input
              type="text"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              placeholder="Search Messages"
              className="block w-full focus:border-matte/30 rounded-lg border border-gray-300 px-2 py-1.5 pl-8 text-sm placeholder:text-[#bbb] focus:outline-none sm:w-44 sm:rounded-xl sm:px-3 sm:py-2 sm:pl-8 sm:text-xs"
            />
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-lg text-gray-400/80">
              <HiOutlineSearch />
            </span>
          </div>

          <Link
            to="new"
            className="flex items-center gap-1 rounded-sm bg-matte p-2 px-2 text-xs font-medium text-white"
          >
            <span className="text-xl">
              <MdOutlineAdd />
            </span>
            <p>Send New</p>
          </Link>
        </div>
      </div>
      <TanstackTable
        data={data}
        columns={columns}
        filter={filter}
        setFilter={setFilter}
        pageSize={10}
      />
    </div>
  );
};

export default DashsmsTable;
