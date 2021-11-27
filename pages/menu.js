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
      <Breakfast records={records} />
      <Sandwiches records={records} />
      <Lunch records={records} />
    </Layout>
  );
}
