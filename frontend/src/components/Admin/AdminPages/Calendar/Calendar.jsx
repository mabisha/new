import { useCallback, useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";
import NepaliDate from "nepali-date-converter";
import { Link } from "react-router-dom";
import useWindowSize from "../../../../hooks/useWindowSize";
import { MdOutlineAdd, MdOutlineClose } from "react-icons/md";
import {
  PiCalendarCheckDuotone,
  PiCalendarDotsDuotone,
  PiCalendarStarDuotone,
  PiGlobeDuotone,
  PiNotePencilDuotone,
} from "react-icons/pi";
import { AiTwotoneDelete } from "react-icons/ai";
import { Tooltip } from "@mui/material";
const CalendarPage = ({ data }) => {
  const [selectedEvent, setSelectedEvent] = useState({});
  const [language, setLanguage] = useState("np");
  const [viewEvent, setViewEvent] = useState(false);
  const [events, setEvents] = useState([]);
  const localizer = momentLocalizer(moment);
  const { width } = useWindowSize();
  const [toolBarButtonClass, setToolBarButtonClass] = useState("today-active");
  const [date, setDate] = useState();
  useEffect(() => {
    if (data) {
      const newEvents = data.map((event) => ({
        id: event?.id,
        start: event.start,
        end: event.enddate,
        title: event.title,
        data: { type: "Reg", event: event.event },
        description: event.description,
      }));
      setEvents([...newEvents]);
    }
  }, [data]);
  const calendarEventStyle = () => {
    return selectedEvent?.data?.event === "holiday"
      ? "text-red-400"
      : selectedEvent?.data?.event === "program"
      ? "text-yellow-400"
      : selectedEvent?.data?.event === "event"
      ? "text-blue-400"
      : selectedEvent?.data?.event === "sports"
      ? "text-green-400"
      : "text-blue-400";
  };

  const CustomEventWrapper = (props) => {
    const eventType = props?.event?.data?.event;
    const commonStyle = {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: "4px",
      height: "18px",
    };
    if (eventType?.toLowerCase() === "holiday") {
      return (
        <div style={{ ...commonStyle, color: "#d92732" }}>
          <span className="min-w-5 rounded">
            <PiCalendarStarDuotone size={20} />
          </span>
          <span className="whitespace-nowrap overflow-hidden text-ellipsis text-start">
            {props?.title}
          </span>
        </div>
      );
    }
    if (eventType?.toLowerCase() === "program") {
      return (
        <div style={{ ...commonStyle, color: "#ffd400" }}>
          <span className="min-w-5 rounded">
            <PiCalendarStarDuotone size={20} />
          </span>{" "}
          <span className="whitespace-nowrap overflow-hidden text-ellipsis text-start">
            {props?.title}
          </span>
        </div>
      );
    }
    if (eventType?.toLowerCase() === "event") {
      return (
        <div style={{ ...commonStyle, color: "#1e90ff" }}>
          <span className="min-w-5 rounded">
            <PiCalendarStarDuotone size={20} />
          </span>{" "}
          <span className="whitespace-nowrap overflow-hidden text-ellipsis text-start">
            {props?.title}
          </span>
        </div>
      );
    }
    if (eventType?.toLowerCase() === "sports") {
      return (
        <div style={{ ...commonStyle, color: "#005e30" }}>
          <span className="min-w-5 rounded">
            <PiCalendarStarDuotone size={20} />
          </span>{" "}
          <span className="whitespace-nowrap overflow-hidden text-ellipsis text-start">
            {props?.title}
          </span>
        </div>
      );
    }
  };
  const start = moment(selectedEvent?.start);
  const end = moment(selectedEvent?.end).subtract(1, "days");

  // Calculate the difference in days
  const dayDifference = end.diff(start, "days");
  const onTodayClick = useCallback(() => {
    setDate(moment().toDate());
    setToolBarButtonClass("today-active");
  }, []);
  const onNextClick = useCallback(() => {
    setDate(moment(date).add(1, "M").toDate());
    setToolBarButtonClass("next-active");
  }, [date]);
  const onPrevClick = useCallback(() => {
    setDate(moment(date).subtract(1, "M").toDate());
    setToolBarButtonClass("prev-active");
  }, [date]);

  const getNepaliDate = (date) => {
    const nepaliConDate = new NepaliDate(moment(date)?.toDate());

    return nepaliConDate.format("ddd, MMMM DD, YYYY", language);
  };
  // const nepaliMonth = nepaliDate.format("mmmm, yyyy");
  const CustomToolbar = ({ ...props }) => {
    const momentDate = moment(date);
    const monthIndex = momentDate.month();
    const bsDate = new NepaliDate(props.date);
    const engDate = moment(props.date).format("MMMM, YYYY");
    const nextBsDate = new NepaliDate(
      new Date(
        momentDate.year(),
        monthIndex - 1,
        momentDate.date(),
        momentDate.day()
      )
    );
    return (
      <div className="rbc-toolbar">
        <span className="rbc-toolbar-label ml-32">
          {engDate} | {nextBsDate?.format("MMMM", "np")} /
          {bsDate?.format("MMMM", "np")},{bsDate?.format("YYYY", "np")}
        </span>
        <span className="rbc-btn-group">
          <button
            type="button"
            className={`today ${toolBarButtonClass}`}
            onClick={onTodayClick}
          >
            Today
          </button>
          <button
            type="button"
            className={`prev ${toolBarButtonClass}`}
            onClick={onPrevClick}
          >
            Back
          </button>
          <button
            type="button"
            className={`next ${toolBarButtonClass}`}
            onClick={onNextClick}
          >
            Next
          </button>
        </span>
      </div>
    );
  };
  let components = {
    event: CustomEventWrapper,
    toolbar: (props) => <CustomToolbar {...props} />,
  };

  const handleChangeLanguage = () => {
    setLanguage(language === "en" ? "np" : "en");
  };

  const languageChangeComponent = () => (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex px-[1px] pr-1 justify-center rounded-full w-full font-semibold border border-gray-400 overflow-hidden shadow-sm  bg-white items-center hover:bg-matte/10 text-gray-700  focus:outline-none"
          id="menu-button"
          aria-haspopup="true"
          onClick={handleChangeLanguage}
        >
          <PiGlobeDuotone className="w-5 h-5 " size={30} />
          <span className="text-[11px] font-bold flex justify-center items-center">
            {language === "np" ? "English" : "नेपाली"}
          </span>
        </button>
      </div>
    </div>
  );
  return (
    <div className="border rounded-xl bg-white border-gray-200/70">
      <div
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={`fixed left-0 top-0 z-[999]  flex h-screen w-screen items-center justify-center bg-[#1d1d1d]/30 backdrop-blur-[4px] ${
          !viewEvent ? "hidden" : ""
        }`}
      >
        <div
          className={`modalCard ${
            !viewEvent ? "hidden" : ""
          } max-h-full w-auto  max-w-[90%] overflow-y-auto overflow-x-hidden rounded-lg bg-white`}
        >
          <div className="flex w-full justify-end items-center h-10">
            <span
              className=" hover:text-[#50C878] w-7 flex justify-center items-center cursor-pointer"
              onClick={() => setViewEvent(false)}
            >
              <Link to={`edit/${selectedEvent?.id}`}>
                <PiNotePencilDuotone />
              </Link>
            </span>
            <span
              className="hover:text-[#FF5556] w-7 flex justify-center items-center cursor-pointer"
              onClick={() => setViewEvent(false)}
            >
              <Link to={`delete/${selectedEvent?.id}`}>
                <AiTwotoneDelete />
              </Link>
            </span>
            <span
              className="hover:text-[#FF5556] w-5 mr-2 flex justify-center items-center cursor-pointer"
              onClick={() => {
                setViewEvent(false);
              }}
            >
              <MdOutlineClose />
            </span>
          </div>
          <div className="max-h-[40vh] min-w-[300px] max-w-[600px] flex">
            <div className="w-full flex flex-col justify-start items-start p-5 pt-0 gap-2">
              <div
                className={`flex justify-start items-start gap-1 ${calendarEventStyle()} `}
              >
                <span className="w-5 h-5 mt-[4px]">
                  <PiCalendarStarDuotone size={20} />
                </span>
                <h2
                  className={`text-lg font-semibold ${calendarEventStyle()} text-justify`}
                >
                  {selectedEvent.title}
                </h2>
              </div>
              <Tooltip
                title={dayDifference >= 1 ? "Start" : ""}
                placement="left"
                arrow
              >
                <div className="flex justify-start items-center gap-1 text-[12px] font-bold text-matte/60">
                  <PiCalendarDotsDuotone size={20} className="cursor-pointer" />
                  {start.format("dddd, MMMM D, yyyy")}
                  &nbsp; | &nbsp;{getNepaliDate(start)}
                  {dayDifference < 1 && languageChangeComponent()}
                </div>
              </Tooltip>
              {dayDifference >= 1 && (
                <Tooltip title="End" placement="left" arrow>
                  <div className="flex justify-start items-center gap-1 text-[12px] font-bold text-matte/60">
                    <PiCalendarCheckDuotone
                      size={20}
                      className="cursor-pointer"
                    />
                    {end.format("dddd, MMMM D, yyyy")}
                    &nbsp; | &nbsp;{getNepaliDate(end)}
                    {languageChangeComponent()}
                  </div>
                </Tooltip>
              )}
              <p className="w-[99%] ml-[2px] h-[0.5px] bg-matte/10"></p>
              <div className="pl-6 text-sm text-justify text-matte/60 pt-0 p-[2px]">
                {selectedEvent?.description}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center  mb-2 justify-between gap-3 px-3 py-2 lg:px-5 lg:py-3">
        <p className="hidden text-lg font-semibold text-[#1d1d1d] sm:block md:text-xl">
          Calendar
        </p>
        <div className="relative w-[60%] max-w-[220px] sm:w-auto sm:max-w-none">
          <Link
            to="new"
            className="flex items-center gap-1 rounded-sm bg-matte p-1.5 px-2 text-xs font-medium text-white"
          >
            <span className="text-xl">
              <MdOutlineAdd />
            </span>
            <p> Add New</p>
          </Link>
        </div>
      </div>
      <div className=" px-10 py-5 flex justify-center items-center">
        <Calendar
          localizer={localizer}
          events={events}
          components={components}
          startAccessor="start"
          endAccessor="end"
          date={date}
          onNavigate={setDate}
          style={{
            height: "750px",
            width:
              width < 550
                ? "320px"
                : width < 650
                ? "500px"
                : width < 850
                ? "600px"
                : width < 1000
                ? "790px"
                : width <= 1023
                ? "900px"
                : width <= 1100
                ? "660px"
                : width <= 1200
                ? "700px"
                : width <= 1300
                ? "850px"
                : width <= 1400
                ? "900px"
                : width <= 1500
                ? "1000px"
                : width <= 1600
                ? "1100px"
                : "1400px",
          }}
          className="calendar-rbc"
          onSelectEvent={(event) => {
            setSelectedEvent(event);
            setViewEvent(true);
          }}
          views={["month", "agenda"]}
          popup
          eventPropGetter={(event) => ({
            style: {
              backgroundColor:
                event?.data?.event === "holiday"
                  ? "#ffdee1"
                  : event?.data?.event === "sports"
                  ? "#a7ffd4"
                  : event?.data?.event === "event"
                  ? "#d0e5ff"
                  : event?.data?.event === "program"
                  ? "#fff9b7"
                  : "#808080",
            },
          })}
        />
      </div>
    </div>
  );
};

export default CalendarPage;
