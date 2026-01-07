import { useState } from "react";
import TanstackTable from "../Elements/TanstackTable";
import { Link } from "react-router-dom";
import { AiTwotoneEye } from "react-icons/ai";
// import NepaliDate from "../../../../utils/EnglishtoNepaliDateConverter/EnglishToNepaliDateConverter";

const DashApproveTable = ({
  data,
  title,
  modelName = "facility",
  updateFn,
}) => {
  const [filter, setFilter] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  //different states for the table column
  const accessorType =
    modelName.toLowerCase() === "teachers"
      ? ["name", "designation"]
      : ["title", "description"];
  const hasDateValues =
    modelName.toLowerCase() === "vacancy" ||
    modelName.toLowerCase() === "calender";

  const isCalendar = modelName.toLowerCase() === "calender";
  const isGallery = modelName.toLowerCase() === "image";
  const columns = [
    {
      header: "SN",
      cell: (props) => {
        return <span>{props.row.index + 1}</span>;
      },
    },
    {
      accessorKey: accessorType[0],
      header: accessorType[0],
    },
    {
      accessorKey: accessorType[1],
      header: accessorType[1],
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (props) => {
        const active = props.getValue();
        if (isCalendar) {
          return <span>Active </span>;
        }
        return <span>{active ? "Active" : "Not Active"}</span>;
      },
    },
  ];

  const additionalColumns = hasDateValues
    ? [
        {
          accessorKey: isCalendar ? "start" : "fromdate",
          header: "Start Date",
          cell: (props) => {
            const value = props.getValue();
            const date = new Date(value);
            const options = {
              year: "numeric",
              month: "long",
              day: "numeric",
              weekday: "short",
            };
            const formattedDate = date.toLocaleDateString("en-US", options);
            // const nepaliDate = new NepaliDate(date);
            // console.log(nepaliDate?.format("mmmm d, yyyy ddd"), date);
            return <span>{formattedDate}</span>;
          },
        },
        {
          accessorKey: isCalendar ? "enddate" : "todate",
          header: "End Date",
          cell: (props) => {
            const value = props.getValue();
            const date = new Date(value);
            const options = {
              year: "numeric",
              month: "long",
              day: "numeric",
              weekday: "short",
            };
            const formattedDate = date.toLocaleDateString("en-US", options);
            return <span>{formattedDate}</span>;
          },
        },
        {
          accessorFn: (row) => row.id,
          header: "Approve",
          cell: (props) => {
            const approveId = props.getValue();
            const isChecked = checkedItems.includes(approveId);

            const handleCheckboxChange = async () => {
              try {
                setIsUploading(true);
                // Toggle checkbox state for the clicked item
                if (isChecked) {
                  setCheckedItems((prev) =>
                    prev.filter((id) => id !== approveId)
                  );
                } else {
                  setCheckedItems((prev) => [...prev, approveId]);
                }

                // Call API to approve activity
                updateFn.mutate({
                  approveId,
                  modelName,
                });
                setIsUploading(false);
              } catch (error) {
                setIsUploading(false);
                console.error("Error approving activity:", error);
                // Handle error, e.g., show an error message to the user
              }
            };

            return (
              <div className="flex items-center">
                <input
                  id={`approve-checkbox-${approveId}`}
                  type="checkbox"
                  checked={isChecked}
                  disabled={isUploading}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 ml-5 cursor-pointer bg-gray-100 border border-blue-300 rounded"
                />
              </div>
            );
          },
        },
      ]
    : [
        {
          accessorKey: "imagelink",
          header: "Images",
          cell: (props) => {
            const cover = props.getValue();
            const rowData = props.row.original;
            if (isGallery) {
              return (
                <Link
                  to={`/admin/gallery/view/${rowData?.id}`}
                  className=" mr-auto ml-3 flex aspect-square w-9 items-center justify-center rounded-md border border-[#eee]  text-xl  duration-200  hover:text-matte"
                >
                  <AiTwotoneEye />
                </Link>
              );
            } else {
              return (
                <img
                  src={cover}
                  alt=""
                  className="aspect-[3/4] w-12 object-cover"
                />
              );
            }
          },
        },
        {
          accessorFn: (row) => row.id,
          header: "Approve",
          cell: (props) => {
            const approveId = props.getValue();
            const isChecked = checkedItems.includes(approveId);

            const handleCheckboxChange = async () => {
              try {
                // Toggle checkbox state for the clicked item
                if (isChecked) {
                  setCheckedItems((prev) =>
                    prev.filter((id) => id !== approveId)
                  );
                } else {
                  setCheckedItems((prev) => [...prev, approveId]);
                }

                await updateFn.mutate({
                  approveId,
                  modelName,
                });

                // Handle API response as needed
              } catch (error) {
                console.error("Error approving activity:", error);
                // Handle error, e.g., show an error message to the user
              }
            };

            return (
              <div className="flex items-center">
                <input
                  id={`approve-checkbox-${approveId}`}
                  type="checkbox"
                  checked={isChecked}
                  disabled={isUploading}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 cursor-pointer ml-5 bg-gray-100 border border-blue-300 rounded"
                />
              </div>
            );
          },
        },
      ];

  const allColumns = [...columns, ...additionalColumns];

  return (
    <div className="approve__table">
      <div className="flex items-center justify-between gap-3 px-3 py-2 lg:px-5 lg:py-3">
        <h2 className="hidden text-lg font-semibold text-[#1d1d1d] sm:block ">
          {title} List
        </h2>
      </div>
      <TanstackTable
        data={data ? data : []}
        columns={allColumns}
        filter={filter}
        setFilter={setFilter}
        pageSize={10}
      />
    </div>
  );
};

export default DashApproveTable;
