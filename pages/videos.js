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
      <div className="wrapper">
        <FacebookVideos />
      </div>
    </Layout>
  );
}
