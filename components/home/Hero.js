import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

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
          <Image
            className="w-full h-[600px] object-center object-cover"
            src="/assets/images/homepage/nobel-01.jpeg"
            alt="A Nobel Cafe Fry"
            width="650"
            height="650"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8 mt-16">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden">
            <Image
              className="w-full h-[284px] object-center object-cover"
              src="/assets/images/homepage/nobel-03.jpeg"
              alt="Cup of Coffee at Nobel Cafe"
              width="800"
              height="800"
            />
          </div>
        </div>
        <div className="hidden aspect-w-4 aspect-h-5 sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4 lg:block">
          <Image
            className="w-full h-[600px] object-center object-cover"
            src="/assets/images/homepage/nobel-04.jpeg"
            alt="Bowl of Porridge at Nobel Cafe"
            width="800"
            height="800"
          />
        </div>
      </div>
    </Fragment>
  );
};
