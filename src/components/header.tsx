import Image from "next/image";

const Header = () => {
  return (
    <div className="relative isolate -z-10 flex min-h-[490px] flex-grow flex-col items-center justify-center overflow-clip bg-white px-6 lg:px-8">
      <div
        className="hidden h-full sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#80ff8d] to-[#89cafc] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#80ff8d] to-[#89cafc] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto h-full max-w-2xl text-center">
        <Image
          width={192}
          height={192}
          className="mx-auto h-48 w-auto p-4"
          src="images/logo.webp"
          alt="Jackson Business Direcotry"
        />
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Discover the essence of Jackson, MN.
        </h2>
        <p className="mt-6 text-lg leading-8 text-zinc-700">
          Your guide to boutiques, local eats, cultural gems, and vibrant
          events. Join us in celebrating tradition and innovation. Explore the
          charm of Jackson Minnesota!
        </p>
      </div>
    </div>
  );
};

export default Header;
