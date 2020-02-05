import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import MenuIntro from "../components/Menu/intro"
import OurStory from "../components/ourStory"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <MenuIntro hasButton={true} />
    <OurStory />
  </Layout>
)

export default HomePage
