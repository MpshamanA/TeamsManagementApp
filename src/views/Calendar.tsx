import { useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import allLocales from "@fullcalendar/core/locales-all";
import { Side } from "../components/Side";
import "../css/calendar.css";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
const thisMonth = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}`;
};
const Calendar = () => {
  const handleDateClick = useCallback((arg: DateClickArg) => {
    alert(arg.dateStr);
  }, []);
  return (
    <div>
      <div className="content-body flex flex-vertical flex-1 flex-row">
        <Side />
        <div className="m-40 mh-100vh w-100">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            locales={allLocales}
            locale="ja"
            events={[
              { title: "eventやで", date: `${thisMonth()}-03` },
              { title: "event 2", date: `${thisMonth()}-02` },
            ]}
            dateClick={handleDateClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
