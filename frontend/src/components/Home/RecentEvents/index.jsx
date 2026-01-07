import EventsCard from "../Cards/EventsCard";
import { useQuery } from "@tanstack/react-query";
import { getAllEvent } from "../../../utils/apiRequest";

const RecentEvents = () => {
  const {
    data: events,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["event"],
    queryFn: getAllEvent,
  });

  const currentDate = new Date();

  const currentEvents =
    events &&
    events.filter((event) => {
      const eventDate = new Date(event?.start);
      return eventDate >= currentDate;
    });

  const sortedEvents = currentEvents?.sort(
    (a, b) => new Date(a?.start) - new Date(b?.start)
  );

  const recentEvents = sortedEvents?.slice(0, 5);

  if (isLoading) {
    return null;
  }

  if (error) {
    return null;
  }

  if (!recentEvents || recentEvents.length === 0) {
    return null;
  }

  return (
    <div className="w-full flex justify-start items-center flex-col px-20 gap-7 pb-2">
      <p className="w-full capitalize text-[45px] font-bold">
        Upcoming <span className="text-secondary">Events</span>
      </p>
      <div className="w-full flex justify-start items-center gap-5 flex-wrap">
        {recentEvents.map((item, idx) => (
          <EventsCard key={idx} data={item} />
        ))}
      </div>
    </div>
  );
};

export default RecentEvents;
