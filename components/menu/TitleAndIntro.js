const Intro = ({ intro }) => {
  if (!intro.length) return null;

  return (
    <div className="flex items-center justify-between">
      {intro.map((item, idx) => (
        <p className="mt-1 max-w-2xl text-xs text-gray-500" key={idx}>
          {item}
        </p>
      ))}
    </div>
  );
};

export const TitleAndIntro = ({ title, intro = [] }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg leading-6 font-bold mb-1">{title}</h3>
      <Intro intro={intro} />
    </div>
  );
};
