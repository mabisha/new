import ImageContainer from "../../components/Home/Cards/ImageContainer";
import eventsImage from "../../assets/events.jpg";
import { useCallback, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  PiCalendarCheckDuotone,
  PiCalendarDotsDuotone,
  PiCalendarStarDuotone,
  PiGlobeDuotone,
} from "react-icons/pi";
import useWindowSize from "../../hooks/useWindowSize";
import NepaliDate from "nepali-date-converter";
import "../../styles/EventsCalendar.css";
import { Helmet } from "react-helmet";

import { useQuery } from "@tanstack/react-query";
import { getAllEvent } from "../../utils/apiRequest";
import { MdOutlineClose } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState({});
  const [viewEvent, setViewEvent] = useState(false);
  const localizer = momentLocalizer(moment);
  const { width } = useWindowSize();
  const [language, setLanguage] = useState("np");
  const [toolBarButtonClass, setToolBarButtonClass] = useState("today-active");
  const [date, setDate] = useState(moment(new Date()).toDate());
  const { data: events } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      try {
        const response = await getAllEvent();
        const decryptedEvents = response.map((event) => ({
          start: event?.start,
          end: event?.enddate,
          title: event?.title,
          data: { type: "Reg", event: event?.event },
          description: event?.description,
        }));
        return decryptedEvents;
      } catch (error) {
        throw new Error("Error fetching events");
      }
    },
  });

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
      borderRadius: "0",
    };
    if (eventType?.toLowerCase() === "holiday") {
      return (
        <div style={{ ...commonStyle, color: "#d92732" }}>
          <span className="min-w-5 rounded flex justify-center items-center pt-[1px]">
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
          <span className="min-w-5 rounded flex justify-center items-center pt-[1px]">
            <PiCalendarStarDuotone size={20} />
          </span>
          <span className="whitespace-nowrap overflow-hidden text-ellipsis text-start">
            {props?.title}
          </span>
        </div>
      );
    }
    if (eventType?.toLowerCase() === "event") {
      return (
        <div style={{ ...commonStyle, color: "#1e90ff" }}>
          <span className="min-w-5 rounded flex justify-center items-center pt-[1px]">
            <PiCalendarStarDuotone size={20} />
          </span>
          <span className="whitespace-nowrap overflow-hidden  text-ellipsis text-start">
            {props?.title}
          </span>
        </div>
      );
    }
    if (eventType?.toLowerCase() === "sports") {
      return (
        <div style={{ ...commonStyle, color: "#005e30" }}>
          <span className="min-w-5 rounded flex justify-center items-center pt-[1px]">
            <PiCalendarStarDuotone size={20} />
          </span>
          <span className="whitespace-nowrap overflow-hidden text-ellipsis text-start">
            {props?.title}
          </span>
        </div>
      );
    }
  };

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
        <span className="rbc-toolbar-label ml-10">
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
  const getNepaliDate = (date) => {
    // NepaliDate.language = "np";
    const nepaliConDate = new NepaliDate(moment(date)?.toDate());

    return nepaliConDate.format("ddd, MMMM DD, YYYY", language);
  };
  const handleChangeLanguage = () => {
    setLanguage(language === "en" ? "np" : "en");
  };

  const start = moment(selectedEvent?.start);
  const end = moment(selectedEvent?.end).subtract(1, "days");

  // Calculate the difference in days
  const dayDifference = end.diff(start, "days");
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
            {language === "np" ? "English" : " नेपाली"}
          </span>
        </button>
      </div>
    </div>
  );
  return (
    <>
      <div className="w-full min-h-screen flex justify-start items-start flex-col relative">
        <Helmet>
          <title>School Calendar</title>
          <meta
            name="description"
            content="Rosebud School
        stands as a beacon of educational excellence and holistic
        development."
          />
        </Helmet>
        <ImageContainer containerImage={eventsImage} breadCrumb={"Events"} />
        <div className="w-full h-full  flex justify-center items-center py-14">
          <Calendar
            localizer={localizer}
            events={events}
            components={components}
            startAccessor="start"
            endAccessor="end"
            date={date}
            onNavigate={setDate}
            views={["month"]}
            style={{
              height: "850px",
              width:
                width < 550
                  ? "320px"
                  : width < 650
                  ? "500px"
                  : width < 850
                  ? "600px"
                  : width < 1000
                  ? "790px"
                  : width <= 1050
                  ? "900px"
                  : width <= 1200
                  ? "950px"
                  : width <= 1300
                  ? "1100px"
                  : width <= 1400
                  ? "1200px"
                  : width <= 1500
                  ? "1300px"
                  : width <= 1600
                  ? "1350px"
                  : "1500px",
            }}
            onSelectEvent={(event) => {
              setSelectedEvent(event);
              setViewEvent(true);
            }}
            popup
            eventPropGetter={(event) => ({
              style: {
                borderLeft: `2px solid ${
                  event?.data?.event === "holiday"
                    ? "#d92732"
                    : event?.data?.event === "sports"
                    ? " #005e30"
                    : event?.data?.event === "event"
                    ? "#1e90ff"
                    : event?.data?.event === "program"
                    ? "#ffd400"
                    : "#808080"
                }`,
                backgroundColor:
                  event?.data?.event === "holiday"
                    ? "#ffdee1"
                    : event?.data?.event === "sports"
                    ? "#a7ffd4"
                    : event?.data?.event === "event"
                    ? "#d0e5ff"
                    : event?.data?.event === "program"
                    ? "#fff9b7"
                    : "#3f3f3f",
              },
            })}
          />
        </div>

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
            } max-h-full w-auto  max-w-[90%] overflow-y-auto overflow-x-hidden rounded-lg relative bg-white`}
          >
            {" "}
            <span
              className="hover:text-[#FF5556] absolute right-0 top-2 w-5 mr-2 flex justify-center items-center cursor-pointer"
              onClick={() => {
                setViewEvent(false);
              }}
            >
              <MdOutlineClose />
            </span>
            <div className="max-h-[40vh] min-w-[300px] max-w-[600px] flex">
              <div className="w-full flex flex-col justify-start items-start p-5  gap-1">
                <div
                  className={`flex justify-start items-start gap-1 ${calendarEventStyle()} `}
                >
                  <span className="w-5 h-5 mt-[4px]">
                    <PiCalendarStarDuotone size={20} />
                  </span>
                  <h2
                    className={`text-lg font-semibold ${calendarEventStyle()} text-justify `}
                  >
                    {selectedEvent.title}
                  </h2>
                </div>{" "}
                <Tooltip
                  title={dayDifference >= 1 ? "Start" : ""}
                  placement="left"
                  arrow
                >
                  <div className="flex justify-start items-center gap-1 text-[12px] font-bold text-matte/60">
                    <PiCalendarDotsDuotone
                      size={20}
                      className="cursor-pointer"
                    />
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
      </div>
    </>
  );
};

export default EventsPage;
