import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/Layout"
import { Hero } from "../components/Hero"
import MenuIntro from "../components/Menu/intro"
import { OurStory } from "../components/OurStory"

const Desc = `Whats on your plate when you come into Nobel Cafe next? Whether it
is for breakfast or lunch Nobel Cafe has got something for you.
Please ask your server if you have any special dietery
requirements.`

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <MenuIntro hasButton={true} description={Desc} />
    <OurStory />
  </Layout>
)

export default HomePage
