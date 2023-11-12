import { ChristmasHero } from "@components/christmas";
import { Layout } from "@components/layout";

const meta = {
  title: "Christmas 2023",
  description:
    "We can accommodate large bookings for sit in or takeaway! Perfect for a family get together or work Christmas lunch!",
};

export default function ChristmasAtNobel() {
  return (
    <Layout meta={meta} hasSnowFall={true}>
      <ChristmasHero />
    </Layout>
  );
}
