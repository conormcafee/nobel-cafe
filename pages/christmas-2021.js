import { ChristmasHero } from "@components/christmas";
import { Layout } from "@components/layout";

export default function ChristmasAtNobel() {
  return (
    <Layout hasSnowFall={true}>
      <ChristmasHero />
    </Layout>
  );
}
