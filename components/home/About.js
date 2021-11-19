const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
};

const Sparkle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  );
};

const Lightening = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
};

const AcademicCap = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
      />
    </svg>
  );
};

const about = [
  {
    id: 0,
    title: "Our Staff Rock",
    text: "They will make your visit worthwhile. They smile, provide the best, efficient service for miles and they love Nobel Café. We look after them, they look after our customers. Simple.",
    icon: Star,
  },
  {
    id: 1,
    title: "The Best Food",
    text: "Going for a Nobel breakfast will be the best part of your day. A Nobel lunch is freshly prepped and to the best consistent standard. You won’t be disappointed.",
    icon: Sparkle,
  },
  {
    id: 2,
    title: "Winners",
    text: "We win awards – lots of them but we stay humble. Thank you to our customers and staff.",
    icon: Lightening,
  },
  {
    id: 3,
    title: "Ability",
    text: "We have the drive and determination to make our business better and better for you.",
    icon: AcademicCap,
  },
];

export const About = () => {
  return (
    <div className="mt-24">
      <div className="wrapper pb-16">
        <h2 className="text-3xl font-bold tracking-tight">About Nobel Cafe</h2>
        <p className="mt-4 max-w-3xl text-lg">
          The doors were first opened in 1994 and we knocked down a few more
          walls in 2008 to give you more room to sit! We’re all about selling
          fantastic fries and luxury lunches with friendly, fast service! We’re
          happy, happy, happy that we’ve just been awarded 1st place in Customer
          Service in Ballymena.
        </p>
        <p className="mt-4 max-w-3xl text-lg">
          We know it’s overplayed but at Nobel we only provide the freshest,
          highest quality products! We really mean it. Our customers are busy
          people, that’s why we provide fast and efficient service from the
          friendliest faces in town!
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {about.map(({ id, title, text, icon }) => {
            const Icon = icon;
            const backgroundColour =
              id % 2 == 0 ? "bg-green-400" : "bg-green-600";
            return (
              <div key={id}>
                <div>
                  <span
                    className={`flex items-center justify-center h-12 w-12 rounded-full text-white ${backgroundColour} bg-opacity-90`}
                  >
                    <Icon />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-base">{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
