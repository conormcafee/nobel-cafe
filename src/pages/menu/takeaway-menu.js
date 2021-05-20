import React from "react"
import SEO from "../../components/seo"
import { Layout } from "../../components/Layout"
// import Takeaway from "../../components/Takeaway/Takeaway"

const Desc = `Please call 028 2565 4302 to place an order.  Alternatively you can place your order at the cafe`

const TakeawayMenu = () => (
  <Layout>
    <SEO title="Takeaway Menu" description={Desc} />

    {/* <Takeaway /> */}
  </Layout>
)

export default TakeawayMenu
