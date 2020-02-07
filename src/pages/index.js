import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/Layout"
import { Hero } from "../components/Hero"
import MenuIntro from "../components/Menu/intro"
import { OurStory } from "../components/OurStory"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <MenuIntro hasButton={true} />
    <OurStory />
  </Layout>
)

export default HomePage
