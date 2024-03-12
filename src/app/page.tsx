"use client";
import PrimaryLayout from "@/components/primary-layout";
import { classNames } from "@/components/utilities";
import Header from "@/components/header";
import Testimonials from "@/components/testimonials";

import { useState, useEffect } from "react";
import { PhotoIcon } from "@heroicons/react/20/solid";

const businesses = [
  {
    name: "Kind Closet",
    connections: [
      {
        name: "Facebook",
        href: "https://www.facebook.com/kindclosetllc",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/kindclosetllc",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
    categories: ["Clothing", "Retail"],
    image:
      "https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/370132234_816547827141405_6331425402470169112_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Nh-bAllxoH0AX-h49Ki&_nc_ht=scontent-msp1-1.xx&oh=00_AfDzdPrW30AZrNF3Br8i29Q8LJXmNf8xnX4YcMwhHpoTOg&oe=65DA3445",
  },
  {
    name: "Cosmos & Clover",
    categories: ["Clothing", "Retail"],
    image:
      "https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/357076058_670366285109626_7700259070154507200_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=i0TVlotiyjwAX-2ZkwS&_nc_ht=scontent-msp1-1.xx&oh=00_AfAmhayE1SITilNZtSsJYABecvjWyFNQhmCRKkzeXkv3Cg&oe=65DBE698",
  },
  {
    name: "Bob's Fleet Supply",
    categories: ["Clothing", "Retail"],
    image:
      "https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/359790442_994027098719522_8150830944581301650_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=0q50HJm1-AgAX-vKB8a&_nc_ht=scontent-msp1-1.xx&oh=00_AfC0Wsc7UQzBCTFmTpItzxJSK_GYMqHuTzbfeVeaJSiNqA&oe=65DC3C80",
  },
  {
    name: "Smokin' Java",
    categories: ["Coffee", "Food", "Drink"],
    image:
      "https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/412089498_953567249527961_5122337035673614016_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=783fdb&_nc_ohc=q-IuYI1_EPEAX8034By&_nc_ht=scontent-msp1-1.xx&oh=00_AfC3plk9FPh31kN6H3TmhnLez__gPzWRbPpCjLDwoxKTew&oe=65DAA060",
  },
  {
    name: "Cabin Coffee",
    categories: ["Coffee", "Food", "Drink"],
    image:
      "https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/428691471_376200978501748_5275517572382745266_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=1wSHZ3wFnusAX_Pio98&_nc_ht=scontent-msp1-1.xx&oh=00_AfBvlgVxbLNZ9AgZjZw95bcWaToMwf0JTzKsdomM1Wld0A&oe=65DADCD7",
  },
  {
    name: "Pillars Pub & Eatery",
    categories: ["Food", "Bar"],
    image:
      "https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/396738755_1503493183807537_5487658627941958187_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=783fdb&_nc_ohc=sYbJD_Z5QzMAX8u2lrx&_nc_ht=scontent-msp1-1.xx&oh=00_AfCao4A5JCo_FCAyWlI685HynsKzy5Gl1cou431uZiC6Rg&oe=65DAB7BD",
  },
  {
    name: "Kat's Hog Heaven",
    categories: ["Food", "Drink"],
    image:
      "https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/323045565_685121156658769_4819301310408941397_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=QZx1Rfl8f_gAX9kFcwg&_nc_ht=scontent-msp1-1.xx&oh=00_AfAv2AGzUl4P7fFBMa2K2pYoQpZzJ9UL5tOhp7Oufzvo3A&oe=65DA8D6D",
  },
];

export function Template() {
  return (
    <li className="relative animate-pulse">
      <div className="focus-within:ring-emerld-500 group flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <PhotoIcon className="pointer-events-none aspect-square h-24 w-24 object-cover text-zinc-300 group-hover:opacity-75" />
      </div>
      <div className="mx-auto mt-2 h-4 w-48 rounded bg-zinc-300"></div>
    </li>
  );
}
export default function Home() {
  const [businessQuery, setBusinessQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const filteredBusiness = businesses.filter((business) => {
    return (
      business.name.toLowerCase().includes(businessQuery.toLowerCase()) ||
      business.categories.some((category) =>
        category.toLowerCase().includes(businessQuery.toLowerCase()),
      )
    );
  });

  return (
    <PrimaryLayout>
      <Header />
      <main className="m-h-screen mx-auto -mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-4 h-24 w-full rounded-sm border border-zinc-200 bg-white p-4 shadow-sm">
          <form>
            <div className="flex items-center justify-between">
              <div className="relative mr-4 mt-2 flex w-full items-center">
                <input
                  type="text"
                  name="search"
                  id="search"
                  onChange={(event) => setBusinessQuery(event.target.value)}
                  placeholder="Search for a business by name or category"
                  className="block h-12 w-full rounded-sm border-0 py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                  <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                    ⌘K
                  </kbd>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {loading && (
              <>
                <Template />
                <Template />
                <Template />
              </>
            )}

            {!loading && filteredBusiness.length > 0 && (
              <>
                {filteredBusiness.map((business) => (
                  <li key={business.name} className="relative">
                    <div className="focus-within:ring-emerld-500 group block aspect-square w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                      <img
                        src={business.image}
                        alt=""
                        className="pointer-events-none aspect-square object-cover group-hover:opacity-75"
                      />
                      <button
                        type="button"
                        className="absolute inset-0 focus:outline-none"
                      >
                        <span className="sr-only">
                          View details for {business.name}
                        </span>
                      </button>
                    </div>
                    <p className="lead text-md pointer-events-none mt-2 block truncate text-center font-medium text-gray-900">
                      {business.name}
                    </p>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </main>
      <Testimonials />
    </PrimaryLayout>
  );
}
