import { FacebookVideo } from "@components/misc";

const videos = [
  {
    label: "Merry Christmas (2021)",
    iframe: "https://www.facebook.com/plugins/video.php?height=316&href=https%3A%2F%2Fwww.facebook.com%2FNobelBallymena%2Fvideos%2F1337304330072814%2F&show_text=false&width=560&t=0" 
  },
  {
    label: "We're Back!",
    iframe:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNobelBallymena%2Fvideos%2F3811324915560921%2F&show_text=0&width=560",
  },
  {
    label: "The Nobel Fry",
    iframe:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNobelBallymena%2Fvideos%2F445928015576157%2F&show_text=0&width=560",
  },
  {
    label: "Christmas Love",
    iframe:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNobelBallymena%2Fvideos%2F881046588730962%2F&show_text=0&width=560",
  },
  {
    label: "Nobel Elves",
    iframe:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNobelBallymena%2Fvideos%2F689900841178872%2F&show_text=0&width=560",
  },
  {
    label: "Nobel Baby!",
    iframe:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNobelBallymena%2Fvideos%2F642298362605787%2F&show_text=0&width=560",
  },
  {
    label: "Nobel Christmas",
    iframe:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNobelBallymena%2Fvideos%2F526979757470982%2F&show_text=0&width=560",
  },
];

export const Videos = () => {
  return (
    <div className="flex flex-wrap mt-10 pb-8 -mx-10">
      {videos.map((video, idx) => (
        <div className="w-full md:w-1/2 px-10 mb-10">
          <FacebookVideo key={idx} video={video} />
        </div>
      ))}
    </div>
  );
};
