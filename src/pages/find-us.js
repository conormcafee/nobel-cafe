import React from "react"
import SEO from "../components/seo"
import { Container, Layout } from "../components/Layout"
import { Heading } from "../components/Typography"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import FindUsImage from "../images/find-us.jpg"

const FindUs = () => (
  <Layout>
    <SEO title="Find Us" />

    <Introduction>
      <Container>
        <Heading as="h1" upperCase={true}>
          Find Us
        </Heading>

        <Intro>
          Nobel Café first opened in 1994, a long time ago. Since 1994 we have
          been serving first class breakfast and lunch to the people of
          Ballymena. Nobel is Ballymena, Ballymena is Nobel!
        </Intro>
      </Container>
    </Introduction>

    <img src={FindUsImage} alt="Nobel Cafe" />
  </Layout>
)

export default FindUs

const Introduction = styled.section`
  ${tw`bg-purple-100 text-center py-10`}
`

const Intro = styled.p`
  ${tw`
    tracking-wide font-light block my-4 max-w-lg text-center mx-auto
  `}
`
