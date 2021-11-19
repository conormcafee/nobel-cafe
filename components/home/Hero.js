import { Fragment } from "react";
import Link from "next/link";

export const Hero = () => {
  return (
    <Fragment>
      <div className="wrapper py-16 md:py-24 space-y-4">
        <h1 className="text-4xl md:text-5xl text-left max-w-4xl font-bold leading-snug md:leading-snug">
          The best place to kick off your day or just take a break and enjoy a{" "}
          <span className="text-green-500">
            <i>yummy breakfast</i>
          </span>
        </h1>

        <Link href="/menu">
          <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-bold rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            View Menu
          </a>
        </Link>
      </div>

      <div className="lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div className="aspect-w-3 aspect-h-4 overflow-hidden">
          <img
            src="https://nobel-cafe.co.uk/static/nobel-01-0ac2c5e122cf241c3a8f2c6e3c00985c.jpg"
            alt="Two each of gray, white, and black shirts laying flat."
            className="w-full h-[600px] object-center object-cover"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8 mt-16">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden">
            <img
              src="https://nobel-cafe.co.uk/static/nobel-18-2f401df852bb1fc8916c0e611b7b6718.jpg"
              alt="Model wearing plain black basic tee."
              className="w-full h-[284px] object-center object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-2 overflow-hidden">
            <img
              src="https://nobel-cafe.co.uk/static/nobel-17-78a3a6a22c6e4ee2d16f7ebd3bd159fb.jpg"
              alt="Model wearing plain gray basic tee."
              className="w-full h-[284px] object-center object-cover"
            />
          </div>
        </div>
        <div className="hidden aspect-w-4 aspect-h-5 sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4 lg:block">
          <img
            src="https://nobel-cafe.co.uk/static/nobel-19-219a7b584a2e9d0f3d9835bb0e364094.jpg"
            alt="Model wearing plain white basic tee."
            className="w-full h-[600px] object-center object-cover"
          />
        </div>
      </div>
    </Fragment>
  );
};
