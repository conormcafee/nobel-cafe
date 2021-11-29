import { Layout } from "@components/layout";
import { Breakfast, Lunch, Sandwiches } from "@components/menu";

import { data } from "@data/menu";

const { records = [] } = data;

const meta = {
  title: "Breakfast & Lunch Menu",
  description:
    "Delicious breakfast & lunch serverd Monday - Saturday in Nobel Cafe, Ballymena",
};

export default function Menu() {
  return (
    <Layout meta={meta}>
      <div className="wrapper pt-16 md:pt-24 space-y-4">
        <h1 className="text-4xl md:text-5xl text-left max-w-4xl font-bold leading-snug md:leading-snug">
          Join us for some delicious{" "}
          <span className="text-green-500">
            <i>breakfast or lunch</i>
          </span>
        </h1>
      </div>
      <Breakfast records={records} />
      <Sandwiches records={records} />
      <Lunch records={records} />
    </Layout>
  );
}
