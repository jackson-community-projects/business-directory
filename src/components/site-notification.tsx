import { XMarkIcon } from "@heroicons/react/20/solid";

type event = {
  name: string;
  date: string;
  location: string;
  description: string;
  cta?: {
    label: string;
    url: string;
  };
};
const event: event = {
  name: "2024 Farm & Home Show",
  date: "Feburary 24th",
  location: "JCC High School",
  description: "Join us to see what’s coming next.",
  // cta: {
  //   label: "Learn more",
  //   url: "/events/2024-farm-home-show",
  // },
};

const SiteNotification = () => {
  return (
    <div className="relative isolate flex items-center justify-center gap-x-6  bg-zinc-900 p-3 px-3 sm:px-3.5">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 h-8 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#80ff8d] to-[#89cafc] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#80ff8d] to-[#89cafc] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>
      <div className="ml-auto flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-zinc-100">
          <strong className="font-semibold">{event.name}</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          {event.location} {event.date}. {event.description}
        </p>
        {event.cta && (
          <a
            href={event.cta.url}
            className="flex-none rounded-full bg-emerald-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            {event.cta.label} <span aria-hidden="true">&rarr;</span>
          </a>
        )}
      </div>
      <div className="ml-auto flex justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-zinc-100" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default SiteNotification;
