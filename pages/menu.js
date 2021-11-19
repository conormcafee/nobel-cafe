import { Layout } from "@components/layout";
import { Breakfast, Lunch, Sandwiches } from "@components/menu";

import { data } from "@data/menu";

const { records = [] } = data;

export default function Menu() {
  return (
    <Layout>
      <Breakfast records={records} />
      <Sandwiches records={records} />
      <Lunch records={records} />
    </Layout>
  );
}
