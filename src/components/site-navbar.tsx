"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/components/utilities";

const navigation: any[] = [
  // { name: "Home", href: "/" },
  // { name: "Events", href: "/events" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-white shadow-sm lg:static lg:overflow-y-visible",
          )
        }
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between lg:gap-8">
                <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static">
                  <div className="flex flex-shrink-0 items-center">
                    <a href="#">
                      <Image
                        width={64}
                        height={64}
                        className="h-16 w-auto"
                        src="/images/logo.webp"
                        alt="Jackson Business Direcotry"
                      />
                    </a>
                  </div>
                </div>
                <div className="h-[72px] min-w-0 flex-1 md:px-8 lg:px-0">
                  <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none">
                    <div className="hidden sm:flex">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          aria-current={
                            item.href === pathname ? "page" : undefined
                          }
                          className={classNames(
                            item.href === pathname
                              ? "bg-gray-100 text-gray-900"
                              : "hover:bg-gray-50",
                            "mx-2 block rounded-md px-3 py-2 text-base font-medium",
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center sm:hidden md:absolute md:inset-y-0 md:right-0">
                  {/* Mobile menu button */}
                  <Popover.Button className="relative -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.href === pathname ? "page" : undefined}
                    className={classNames(
                      item.href === pathname
                        ? "bg-gray-100 text-gray-900"
                        : "hover:bg-gray-50",
                      "block rounded-md px-3 py-2 text-base font-medium",
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}
