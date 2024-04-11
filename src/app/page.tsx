"use client";
import PrimaryLayout from "@/components/primary-layout";
import { classNames } from "@/components/utilities";
import { NextPage } from "next";
import Image from "next/image";
import Header from "@/components/header";
import Testimonials from "@/components/testimonials";

import { useState, useEffect } from "react";
import { PhotoIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const businesses = [
  {
    name: "Kind Closet",
    categories: ["Clothing", "Retail", "Thrift Store", "Consignment"],
    image: "images/kindclosetllc.jpeg",
    cta: "https://facebook.com/kindclosetllc",
  },
  {
    name: "Cosmos & Clover",
    categories: ["Clothing", "Retail"],
    image: "images/cosmos+clover.jpeg",
    cta: "https://facebook.com/cosmosandcloverboutique",
  },
  {
    name: "Bob's Fleet Supply",
    categories: ["Clothing", "Retail", "Fleet Supplies"],
    image: "images/bobsfleet.jpeg",
    cta: "https://facebook.com/bobsfleet",
  },
  {
    name: "Smokin' Java",
    categories: ["Coffee", "Food", "Drinks", "Cafe"],
    image: "images/smokinjava.jpeg",
    cta: "https://facebook.com/thecoffeenest",
  },
  {
    name: "Cabin Coffee",
    categories: ["Coffee", "Food", "Drinks"],
    image: "images/cabincoffee.png",
    cta: "https://facebook.com/cabincoffeejackson",
  },
  {
    name: "Pillars Pub & Eatery",
    categories: ["Food", "Bar"],
    image: "images/pillars.jpg",
    cta: "https://www.pillarspubeatery.com",
  },
  {
    name: "Kat's Hog Heaven",
    categories: ["Food", "Drink"],
    image: "images/katshogheaven.jpeg",
    cta: "https://facebook.com/katshogheaven",
  },
  {
    name: "A Pet's Tale",
    categories: ["Pet Supplies", "Dog Food", "Cat Food"],
    image: "images/apetstale.jpg",
    cta: "https://www.apetstale.com",
  },
  {
    name: "Exit Realty",
    categories: ["Real Estate", "Housing"],
    image: "images/exit.png",
    cta: "https://www.exitisgreat.com/",
  },
  {
    name: "Dawn's Fabrics & Yarn",
    categories: ["Fabric", "Yarns"],
    image: "",
    cta: "https://facebook.com/profile.php?id=100057197750647",
  },
  {
    name: "TnD Crafts",
    categories: ["Crafts"],
    image: "",
    cta: "https://facebook.com/profile.php?id=100066543970285",
  },
  {
    name: "Jackson Center for the Arts",
    categories: ["Art", "Gallery", "Classes"],
    image: "images/artcenter.jpeg",
    cta: "https://facebook.com/jacksoncenterforthearts",
  },
  {
    name: "Historic State Theatre",
    categories: [
      "Theatre",
      "Theater",
      "Cinema",
      "Movies",
      "silverscreen",
      "3D",
      "Historic",
      "State Theatre",
    ],
    image: "images/hst.webp",
    cta: "https://www.facebook.com/JacksonMovies",
  },
];

businesses.sort((a, b) => a.name.localeCompare(b.name));

const Template = () => {
  return (
    <li className="relative animate-pulse">
      <div className="focus-within:ring-emerld-500 group flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <PhotoIcon className="pointer-events-none aspect-square h-24 w-24 object-cover text-zinc-300 group-hover:opacity-75" />
      </div>
      <div className="mx-auto mt-2 h-4 w-48 rounded bg-zinc-300"></div>
    </li>
  );
};
const Page: NextPage = () => {
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
                  placeholder="Search by name or category"
                  className="block h-12 w-full rounded-sm border-0 py-1.5 pl-12 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                />
                <div className="left-o absolute inset-y-0 inline-flex items-center py-1.5 pl-2">
                  <MagnifyingGlassIcon className="h-8 w-8 px-1 font-sans text-xs text-gray-400" />
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
                    <div className="focus-within:ring-emerld-500 group flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg ring-1 ring-gray-900/5 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                      {business.image !== "" ? (
                        <Image
                          src={business.image}
                          alt=""
                          width={200}
                          height={200}
                          className="pointer-events-none aspect-square h-full w-full object-cover group-hover:opacity-75"
                          unoptimized
                        />
                      ) : (
                        <PhotoIcon className="pointer-events-none aspect-square h-24 w-24 object-cover text-zinc-300 group-hover:opacity-75" />
                      )}
                      <a
                        href={business.cta}
                        className="absolute inset-0 focus:outline-none"
                      >
                        <span className="sr-only">
                          View details for {business.name}
                        </span>
                      </a>
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
};

export default Page;
