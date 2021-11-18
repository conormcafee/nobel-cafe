import { Fragment } from "react";
import { Layout } from "@components/layout";

export default function Home() {
  return (
    <Layout>
      <Fragment>
        <div className="py-24">
          <h1 className="text-5xl text-center max-w-4xl font-bold mx-auto leading-normal">
            The best place to kick off your day or just take a break and enjoy a{" "}
            <span className="text-accent">yummy breakfast</span>
          </h1>
        </div>

        <div className="mt-6 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src="https://nobel-cafe.co.uk/static/nobel-01-0ac2c5e122cf241c3a8f2c6e3c00985c.jpg"
              alt="Two each of gray, white, and black shirts laying flat."
              className="w-full h-[600px] object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src="https://nobel-cafe.co.uk/static/nobel-18-2f401df852bb1fc8916c0e611b7b6718.jpg"
                alt="Model wearing plain black basic tee."
                className="w-full h-[284px] object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src="https://nobel-cafe.co.uk/static/nobel-17-78a3a6a22c6e4ee2d16f7ebd3bd159fb.jpg"
                alt="Model wearing plain gray basic tee."
                className="w-full h-[284px] object-center object-cover"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img
              src="https://nobel-cafe.co.uk/static/nobel-19-219a7b584a2e9d0f3d9835bb0e364094.jpg"
              alt="Model wearing plain white basic tee."
              className="w-full h-[600px] object-center object-cover"
            />
          </div>
        </div>

        <h2>
          Our Special for Today -{" "}
          <span className="text-[#38a169]">Breakfast!</span> All Day. Every Day.
        </h2>
      </Fragment>
    </Layout>
  );
}
