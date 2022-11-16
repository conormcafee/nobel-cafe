import { Fragment } from "react";
import Image from "next/image";

import { FacebookVideo } from "@components/misc";

const ChristmasHeroInlineButton = ({ href, label }) => {
  if (!href || !label) return null;

  return (
    <a
      href={href}
      className="inline-flex items-center font-bold text-red-400 hover:text-red-200 focus:outline-none"
    >
      {label}
    </a>
  );
};

const prices = [
  { id: 0, label: "Sit in", price: 14.95 },
  { id: 1, label: "Takeaway*", price: 12.95 },
];

export const ChristmasHero = () => {
  return (
    <Fragment>
      <div className="wrapper py-16 md:py-24 space-y-4 [ grid grid-cols-1 md:grid-cols-2 gap-16 ]">
        <section className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl text-left max-w-4xl font-bold leading-snug md:leading-snug">
              Christmas at
              <span className="text-red-400">
                <i> Nobel Cafe</i>
              </span>
            </h1>

            <span className="inline-flex px-2 py-1 rounded-full font-bold tracking-wide uppercase bg-red-200 text-red-700 text-sm">Starting 21st November</span>

            <p className="max-w-2xl text-lg">
              We can accommodate large parties for sit in or takeaway! Perfect
              for a family get together or work Christmas lunch! If you would
              like to arrange a takeaway order - either email{" "}
              <ChristmasHeroInlineButton
                href="mailto:info@nobelcafe.co.uk"
                label="info@nobelcafe.co.uk"
              />{" "}
              or telephone{" "}
              <ChristmasHeroInlineButton
                href="tel:+442825654302"
                label="028 2565 4302"
              />
              .
            </p>
          </div>

          <div className="text-center space-y-4 border-2 border-red-400 bg-white px-8 py-6 rounded-lg shadow-xl">
            <h2 className="text-xl md:text-2xl max-w-4xl font-bold leading-snug md:leading-snug text-red-600">
              Christmas Lunch Prices
            </h2>

            <ul className="md:flex items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              {prices.map(({ id, label, price }) => (
                <li key={id}>
                  <span className="inline-flex px-4 py-1 rounded-full font-bold tracking-wide uppercase bg-red-200 text-red-600">
                    {label}{" "}
                    <span className="inline-block ml-2 text-red-700">
                      £{price}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-center">
            * Christmas lunches can be purchased cold and cooking instructions
            will be provided.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div className="transform rotate-2">
              <Image
                className="shadow-lg rounded-lg"
                src="/assets/images/christmas/sitin.jpg"
                alt="Member of staff standing beside Christmas Tree in the Cafe"
                width="300"
                height="300"
              />
            </div>

            <div className="transform -rotate-2">
              <Image
                className="shadow-lg rounded-lg"
                src="/assets/images/christmas/takeaway.jpg"
                alt="Member of staff standing beside Christmas Tree in the Cafe"
                width="300"
                height="300"
              />
            </div>
          </div>

          <p className="max-w-2xl text-lg">
            Nobel Christmas Dinner consists of Roast turkey, ham, herb stuffing,
            seasonal vegetables, mash, roast potatoes, chipolatas served with
            gravy & cranberry.
            <ChristmasHeroInlineButton
              href="mailto:info@nobelcafe.co.uk"
              label="info@nobelcafe.co.uk"
            />{" "}
            or telephone{" "}
            <ChristmasHeroInlineButton
              href="tel:+442825654302"
              label="028 2565 4302"
            />
            .
          </p>

          <div className="text-center space-y-4 border-2 border-red-400 bg-white px-8 py-6 rounded-lg shadow-xl">
            <h2 className="text-xl md:text-2xl max-w-4xl font-bold leading-snug md:leading-snug text-red-600">
              Nobel vouchers
            </h2>

            <p className='text-gray-700'>The perfect gift for Christmas! Monetary vouchers can be purchased at Nobel Cafe!</p>
          </div>

          <FacebookVideo
            video={{
              iframe:
                "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNobelBallymena%2Fvideos%2F526979757470982%2F&show_text=0&width=560",
            }}
          />
        </section>

        <aside className="transform -rotate-2 ">
          <Image
            className="shadow-lg rounded-lg"
            src="/assets/images/christmas/christmas-at-nobel.jpeg"
            alt="Member of staff standing beside Christmas Tree in the Cafe"
            width="828"
            height="1472"
          />
        </aside>
      </div>
    </Fragment>
  );
};
