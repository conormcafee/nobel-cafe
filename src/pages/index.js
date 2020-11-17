import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/Layout"
import { Hero } from "../components/Hero"
import { OurStory } from "../components/OurStory"
import { SocialBlock } from "../components/SocialBlock"
// import Takeaway from "../components/Takeaway/Takeaway"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <SocialBlock />
    <OurStory />
  </Layout>
)

export default HomePage
