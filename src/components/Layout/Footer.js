import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Heading } from "../Typography"
import FoodRating from "../../images/food-hygiene-rating.jpg"
import Logo from "../../images/logo.png"

const Footer = () => (
  <footer>
    <Main>
      <Box>
        <Heading as="h4" fontBold={true}>
          Visit Us
        </Heading>
        <p>102-104 Church Street</p>
        <p>Ballymena</p>
        <p>BT43 6DF</p>
      </Box>
      <Box>
        <Heading as="h4" fontBold={true}>
          We Are Open
        </Heading>
        <p>Monday - Saturday</p>
        <p>8am - 5pm</p>
      </Box>
      <Box>
        <Heading as="h4" fontBold={true}>
          Speak with Us
        </Heading>
        <ExternalLink href="tel:+442825654302" title="Call Us">
          028 256 54302
        </ExternalLink>
        <ExternalLink href="mailto:info@nobelcafe.co.uk" title="Email Us">
          info@nobelcafe.co.uk
        </ExternalLink>
      </Box>
    </Main>
    <Flex>
      <FooterImg src={Logo} alt="Nobel Cafe Logo" />

      <FooterImg src={FoodRating} alt="Nobel Cafe Hygine Rating" />
    </Flex>
  </footer>
)

export default Footer

const Main = styled.main`
  ${tw`
    flex flex-wrap items-start justify-center pt-5 sm:pt-10 pb-5 text-center
  `}

  ul {
    ${tw`
      flex
    `}
  }

  li:not(:last-child) {
    ${tw`
      mr-6
    `}
  }
`

const Box = styled.div`
  ${tw`w-full sm:w-1/3 p-4`}
`

const FooterImg = styled.img`
  ${tw`
      w-32 mx-2
    `}
`
const ExternalLink = styled.a`
  ${tw`block text-purple-600 hover:text-purple-400`}
`

const Flex = styled.div`
  ${tw`flex items-center justify-center mt-8 mb-32`}
`
