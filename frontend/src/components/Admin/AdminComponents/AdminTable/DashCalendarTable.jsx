import { useState } from "react";
import { Link } from "react-router-dom";
import CalendarPage from "../../AdminPages/Calendar/Calendar";
import { PiNotePencilDuotone } from "react-icons/pi";
import TanstackTable from "../Elements/TanstackTable";
import { AiTwotoneDelete } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import NepaliDate from "nepali-date-converter";
import moment from "moment";
import CustomDropdown from "../../../../components/Home/DropDown";
const DashCalendarTable = ({ data }) => {
  const [filter, setFilter] = useState("");
  const [language, setLanguage] = useState("np");
  const [selectedDateLang, setSelectedDateLang] = useState("np");
  //date
  const getNepaliDate = (date) => {
    const nepaliConDate = new NepaliDate(moment(date)?.toDate());

    return nepaliConDate.format("dd, MMMM DD, YYYY", language);
  };

  const handleChangeLanguage = (lang) => {
    if (lang === "np" || lang === "en") {
      setLanguage(lang);
      setSelectedDateLang("bs");
    }
    if (lang === "bs" || lang === "ad") {
      setSelectedDateLang(lang);
      setLanguage(lang === "bs" ? "np" : "en");
    }
  };
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
      accessorKey: "start",
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
        return (
          <span className="flex justify-start items-center gap-1 select-none">
            {selectedDateLang === "ad"
              ? formattedDate
              : getNepaliDate(formattedDate)}
          </span>
        );
      },
    },
    {
      accessorKey: "enddate",
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
        return (
          <span className="flex justify-start items-center gap-1 select-none">
            {selectedDateLang === "ad"
              ? formattedDate
              : getNepaliDate(formattedDate)}
          </span>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: () => {
        return <span>Active</span>;
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
    <div className="calendar__container">
      <CalendarPage
        data={data ? data : []}
        columns={columns}
        filter={filter}
        setFilter={setFilter}
        pageSize={10}
      />{" "}
      {/* add space */}
      <div className="bg-[#F6F7FB] h-10">&nbsp;</div>
      {data?.length > 0 && (
        <>
          <div className="calendar__table border bg-white border-gray-200/70  rounded-xl ">
            <div className="flex items-center justify-between gap-3 px-3 py-2 lg:px-5 lg:py-3">
              <p className="hidden text-lg font-semibold text-[#1d1d1d] sm:block ">
                Events List
              </p>
              <div className="flex justify-end flex-1 items-center gap-4">
                <div className="relative w-[60%] max-w-[220px] sm:w-auto sm:max-w-none">
                  <input
                    type="text"
                    onChange={(e) => setFilter(e.target.value)}
                    value={filter}
                    placeholder="Search Events"
                    className="block w-full focus:border-matte/30 rounded-lg border border-gray-300 px-2 py-1.5 pl-8 text-sm placeholder:text-[#bbb] focus:outline-none sm:w-44 sm:rounded-xl sm:px-3 sm:py-2 sm:pl-8 sm:text-xs"
                  />
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-lg text-gray-400/80">
                    <HiOutlineSearch />
                  </span>
                </div>
                <CustomDropdown
                  selectLanguage={handleChangeLanguage}
                  language={selectedDateLang}
                />
              </div>
            </div>

            <TanstackTable
              data={data ? data.slice(0, 60) : []}
              columns={columns}
              filter={filter}
              setFilter={setFilter}
              pageSize={10}
            />
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default DashCalendarTable;
