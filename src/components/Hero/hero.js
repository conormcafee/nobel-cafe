import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Heading } from "../Typography"

// import Shopfront from "../../images/hero/nobel-shopfront-desktop.jpg"

import Image01 from "../../images/nobel-01.jpg"
import Image02 from "../../images/nobel-02.jpg"
import Image03 from "../../images/nobel-03.jpg"
import Image04 from "../../images/nobel-04.jpg"
import Image05 from "../../images/nobel-05.jpg"
import Image06 from "../../images/nobel-06.jpg"
// import Image07 from "../../images/nobel-07.jpg"
// import Image08 from "../../images/nobel-08.jpg"
// import Image09 from "../../images/nobel-09.jpg"
// import Image10 from "../../images/nobel-10.jpg"
// import Image11 from "../../images/nobel-11.jpg"
// import Image12 from "../../images/nobel-12.jpg"

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
        <HeroImage isLandscape bg={Image01} />
      </Box>
      <Box>
        <HeroImage bg={Image03} />
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
        <HeroImage bg={Image02} />
      </Box>
    </Section>
    {/* Section 03 */}
    <Section>
      <Box>
        <HeroImage isLandscape bg={Image01} />
      </Box>
      <Box>
        <HeroImage bg={Image04} />
      </Box>
    </Section>
    {/* Section 04 */}
    <Section>
      <Box>
        <HeroImage bg={Image05} />
      </Box>
      <Box>
        <HeroImage isLandscape bg={Image06} />
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
  ${tw`bg-cover bg-center w-full`}

  @media only screen and (min-width: 768px) {
    border-top: ${props => (props.isLandscape ? `75px solid white` : `none`)};
    border-bottom: ${props =>
      props.isLandscape ? `75px solid white` : `none`};
    padding-top: 100%;
  }
`
