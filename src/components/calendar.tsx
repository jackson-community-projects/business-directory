import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/components/utilities";

const months = [
  {
    name: "Feburary",
    days: [
      { date: "2023-01-28" },
      { date: "2023-01-29" },
      { date: "2023-01-30" },
      { date: "2023-01-31" },
      { date: "2024-02-01", isCurrentMonth: true },
      { date: "2024-02-02", isCurrentMonth: true },
      { date: "2024-02-03", isCurrentMonth: true },
      { date: "2024-02-04", isCurrentMonth: true },
      { date: "2024-02-05", isCurrentMonth: true },
      { date: "2024-02-06", isCurrentMonth: true },
      { date: "2024-02-07", isCurrentMonth: true },
      { date: "2024-02-08", isCurrentMonth: true },
      { date: "2024-02-09", isCurrentMonth: true },
      { date: "2024-02-10", isCurrentMonth: true },
      { date: "2024-02-11", isCurrentMonth: true },
      { date: "2024-02-12", isCurrentMonth: true },
      { date: "2024-02-13", isCurrentMonth: true },
      { date: "2024-02-14", isCurrentMonth: true },
      { date: "2024-02-15", isCurrentMonth: true },
      { date: "2024-02-16", isCurrentMonth: true },
      { date: "2024-02-17", isCurrentMonth: true },
      { date: "2024-02-18", isCurrentMonth: true },
      { date: "2024-02-19", isCurrentMonth: true, isToday: true },
      { date: "2024-02-20", isCurrentMonth: true },
      { date: "2024-02-21", isCurrentMonth: true },
      { date: "2024-02-22", isCurrentMonth: true },
      { date: "2024-02-23", isCurrentMonth: true },
      { date: "2024-02-24", isCurrentMonth: true },
      { date: "2024-02-25", isCurrentMonth: true },
      { date: "2024-02-26", isCurrentMonth: true },
      { date: "2024-02-27", isCurrentMonth: true },
      { date: "2024-02-28", isCurrentMonth: true },
      { date: "2024-02-29", isCurrentMonth: true },
      { date: "2024-03-01" },
      { date: "2024-03-02" },
      { date: "2024-03-03" },
      { date: "2024-03-04" },
      { date: "2024-03-05" },
      { date: "2024-03-06" },
      { date: "2024-03-07" },
      { date: "2024-03-08" },
      { date: "2024-03-09" },
    ],
  },
  {
    name: "March",
    days: [
      { date: "2024-02-25" },
      { date: "2024-02-26" },
      { date: "2024-02-27" },
      { date: "2024-02-28" },
      { date: "2024-02-29" },
      { date: "2024-03-01", isCurrentMonth: true },
      { date: "2024-03-02", isCurrentMonth: true },
      { date: "2024-03-03", isCurrentMonth: true },
      { date: "2024-03-04", isCurrentMonth: true },
      { date: "2024-03-05", isCurrentMonth: true },
      { date: "2024-03-06", isCurrentMonth: true },
      { date: "2024-03-07", isCurrentMonth: true },
      { date: "2024-03-08", isCurrentMonth: true },
      { date: "2024-03-09", isCurrentMonth: true },
      { date: "2024-03-10", isCurrentMonth: true },
      { date: "2024-03-11", isCurrentMonth: true },
      { date: "2024-03-12", isCurrentMonth: true },
      { date: "2024-03-13", isCurrentMonth: true },
      { date: "2024-03-14", isCurrentMonth: true },
      { date: "2024-03-15", isCurrentMonth: true },
      { date: "2024-03-16", isCurrentMonth: true },
      { date: "2024-03-17", isCurrentMonth: true },
      { date: "2024-03-18", isCurrentMonth: true },
      { date: "2024-03-19", isCurrentMonth: true },
      { date: "2024-03-20", isCurrentMonth: true },
      { date: "2024-03-21", isCurrentMonth: true },
      { date: "2024-03-22", isCurrentMonth: true },
      { date: "2024-03-23", isCurrentMonth: true },
      { date: "2024-03-24", isCurrentMonth: true },
      { date: "2024-03-25", isCurrentMonth: true },
      { date: "2024-03-26", isCurrentMonth: true },
      { date: "2024-03-27", isCurrentMonth: true },
      { date: "2024-03-28", isCurrentMonth: true },
      { date: "2024-03-29", isCurrentMonth: true },
      { date: "2024-03-30", isCurrentMonth: true },
      { date: "2024-03-31", isCurrentMonth: true },
      { date: "2024-04-01" },
      { date: "2024-04-02" },
      { date: "2024-04-03" },
      { date: "2024-04-04" },
      { date: "2024-04-05" },
      { date: "2024-04-06" },
    ],
  },
];

const Calendar = () => {
  return (
    <div>
      <div className="relative grid grid-cols-1 gap-x-14 md:grid-cols-2">
        <button
          type="button"
          className="absolute -left-1.5 -top-1 flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="absolute -right-1.5 -top-1 flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        {months.map((month, monthIdx) => (
          <section
            key={monthIdx}
            className={classNames(
              monthIdx === months.length - 1 && "hidden md:block",
              "text-center",
            )}
          >
            <h2 className="text-sm font-semibold text-gray-900">
              {month.name}
            </h2>
            <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
              <div>S</div>
            </div>
            <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
              {month.days.map((day, dayIdx) => (
                <button
                  key={day.date}
                  type="button"
                  className={classNames(
                    day.isCurrentMonth
                      ? "bg-white text-gray-900"
                      : "bg-gray-50 text-gray-400",
                    dayIdx === 0 && "rounded-tl-lg",
                    dayIdx === 6 && "rounded-tr-lg",
                    dayIdx === month.days.length - 7 && "rounded-bl-lg",
                    dayIdx === month.days.length - 1 && "rounded-br-lg",
                    "relative py-1.5 hover:bg-gray-100 focus:z-10",
                  )}
                >
                  <time
                    dateTime={day.date}
                    className={classNames(
                      day.isToday && "bg-emerald-600 font-semibold text-white",
                      "mx-auto flex h-7 w-7 items-center justify-center rounded-full",
                    )}
                  >
                    {day.date.split("-").pop().replace(/^0/, "")}
                  </time>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
      <section className="mt-12">
        <h2 className="text-base font-semibold leading-6 text-gray-900">
          Upcoming events
        </h2>
        <ol className="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
          <li className="py-4 sm:flex">
            <time dateTime="2022-01-17" className="w-28 flex-none">
              Wed, Jan 12
            </time>
            <p className="mt-2 flex-auto sm:mt-0">
              Nothing on today’s schedule
            </p>
          </li>
          <li className="py-4 sm:flex">
            <time dateTime="2022-01-19" className="w-28 flex-none">
              Thu, Jan 13
            </time>
            <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">
              View house with real estate agent
            </p>
            <p className="flex-none sm:ml-6">
              <time dateTime="2022-01-13T14:30">2:30 PM</time> -{" "}
              <time dateTime="2022-01-13T16:30">4:30 PM</time>
            </p>
          </li>
          <li className="py-4 sm:flex">
            <time dateTime="2022-01-20" className="w-28 flex-none">
              Fri, Jan 14
            </time>
            <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">
              Meeting with bank manager
            </p>
            <p className="flex-none sm:ml-6">All day</p>
          </li>
          <li className="py-4 sm:flex">
            <time dateTime="2022-01-18" className="w-28 flex-none">
              Mon, Jan 17
            </time>
            <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">
              Sign paperwork at lawyers
            </p>
            <p className="flex-none sm:ml-6">
              <time dateTime="2022-01-17T10:00">10:00 AM</time> -{" "}
              <time dateTime="2022-01-17T10:15">10:15 AM</time>
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Calendar;
