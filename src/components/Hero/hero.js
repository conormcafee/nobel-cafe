import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Heading } from "../Typography"

import Shopfront from "../../images/hero/nobel-shopfront-desktop.jpg"

const Hero = () => (
  <Main>
    <Aside>
      <Heading as="h1">
        The best place to kick off your day or just take a break and enjoy a
        <span> yummy breakfast</span>
      </Heading>
    </Aside>

    <Section>
      <Box>
        <HeroImage isLandscape bg={Shopfront} />
      </Box>
      <Box>
        <HeroImage bg={Shopfront} />
      </Box>
    </Section>
    {/* Section 02 */}
    <Section>
      <Box withText={true}>
        <Heading as="h2">
          Our Special for Today - <span>Breakfast!</span> All Day. Every Day.
        </Heading>
      </Box>
      <Box>
        <HeroImage bg={Shopfront} />
      </Box>
    </Section>
    {/* Section 03 */}
    <Section>
      <Box>
        <HeroImage isLandscape bg={Shopfront} />
      </Box>
      <Box>
        <HeroImage bg={Shopfront} />
      </Box>
    </Section>
  </Main>
)

export default Hero

const Main = styled.main`
  ${tw`
    mx-auto px-4 pt-8 pb-16 
  `}
  max-width: 1200px;
`

const Aside = styled.aside`
  ${tw`
    max-w-sm md:max-w-5xl text-center mx-auto mb-8
  `}
`

const Section = styled.section`
  ${tw`flex flex-wrap max-w-3xl mx-auto`}
`

const Box = styled.div`
  ${tw`
    flex w-full mb-10 md:mb-0 md:w-1/2 md:p-10
  `}

  ${props => props.withText && tw`items-center justify-center`}
`

const HeroImage = styled.div`
  background-image: url(${props => props.bg});
  padding-top: 56.26%;
  ${tw`bg-cover w-full`}

  @media only screen and (min-width: 768px) {
    border-top: ${props => (props.isLandscape ? `75px solid white` : `none`)};
    border-bottom: ${props =>
      props.isLandscape ? `75px solid white` : `none`};
    padding-top: 100%;
  }
`
