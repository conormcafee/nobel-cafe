import { Layout } from "@components/layout";
import { Videos as FacebookVideos } from "@components/misc";

const meta = {
  title: "Videos",
  description:
    "Over the years we have produced a number of great videos to show you what Nobel is all about",
};

export default function Videos() {
  return (
    <Layout meta={meta}>
      <div className="wrapper py-16 md:py-24 space-y-4">
        <h1 className="text-4xl md:text-5xl text-left max-w-4xl font-bold leading-snug md:leading-snug">
          Get a glimse of the fun we have in{" "}
          <span className="text-green-500">
            <i>Nobel Cafe</i>
          </span>
        </h1>

        <div className="mt-16 md:mt-32">
          <FacebookVideos />
        </div>
      </div>
    </Layout>
  );
}
