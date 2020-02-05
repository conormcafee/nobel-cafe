import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import MenuIntro from "../components/Menu/intro"
import OurStory from "../components/ourStory"

import OS01 from "../images/nobel-shopfront.jpg"
import OS02 from "../images/nobel-ability.jpg"
import OS03 from "../images/nobel-food.jpg"
import OS04 from "../images/nobel-fast.jpg"

// Move to own component

const ourStory = [
  {
    background: OS01,
    heading: "Since 1994",
    text:
      "Nobel Café first opened in 1994, a long time ago. Since 1994 we have been serving first class breakfast and lunch to the people of Ballymena. Nobel is Ballymena, Ballymena is Nobel!",
  },
  {
    background: OS02,
    heading: "Our Staff Rock",
    text:
      "They will make your visit worthwhile. They smile, provide the best, efficient service for miles and they love Nobel Café. We look after them, they look after our customers. Simple.",
  },
  {
    background: OS03,
    heading: "The Best Food",
    text:
      "Going for a Nobel breakfast will be the best part of your day. A Nobel lunch is freshly prepped and to the best consistent standard. You won’t be disappointed.",
  },
  {
    background: OS04,
    heading: "Winners",
    text:
      "We win awards – lots of them but we stay humble. Thank you to our customers and staff.",
  },
  {
    background: OS01,
    heading: "Ability",
    text:
      "We have the drive and determination to make our business better and better for you.",
  },
]

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <MenuIntro hasButton={true} />
    {ourStory.map((story, index) => (
      <OurStory
        key={index}
        background={story.background}
        heading={story.heading}
        text={story.text}
      />
    ))}
  </Layout>
)

export default HomePage
