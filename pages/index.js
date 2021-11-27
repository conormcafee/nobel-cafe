import { Layout } from "@components/layout";
import { About, Hero } from "@components/home";

const meta = {
  title: "Home",
  description:
    "The best place to kick off your day or just take a break and enjoy a yummy breakfast in Ballymena.  For takeaway call 028 256 54302",
};

export default function Home() {
  return (
    <Layout meta={meta}>
      <Hero />
      <About />
    </Layout>
  );
}
