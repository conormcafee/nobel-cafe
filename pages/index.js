import { Layout } from "@components/layout";
import { About, Hero } from "@components/home";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}
