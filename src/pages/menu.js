import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/Layout"
import MenuIntro from "../components/Menu/intro"

const Desc = `Whats on your plate when you come into Nobel Cafe next? Whether it
is for breakfast or lunch Nobel Cafe has got something for you.
Please ask your server if you have any special dietery
requirements.`

const Menu = () => (
  <Layout>
    <SEO title="Menu" description={Desc} />

    <MenuIntro />
  </Layout>
)

export default Menu
