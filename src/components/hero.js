import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import Button from "./button"

const Hero = () => (
  <Main>
    <Aside>
      <Heading>Serving first class breakfast</Heading>
      <Intro>
        Nobel Café first opened in 1994, a long time ago. Since 1994 we have
        been serving first class breakfast and lunch to the people of Ballymena.
        Nobel is Ballymena, Ballymena is Nobel!
      </Intro>

      <Button url="/menu">Check out our menu</Button>
    </Aside>

    <Section>
      <HeroImage
        src="https://placehold.it/300x500"
        alt="Nobel Cafe Shopfront on Church St Ballymena"
      />

      <HeroImage
        hasMarginTop
        src="https://placehold.it/300x500"
        alt="Nobel Cafe Shopfront on Church St Ballymena"
      />

      <HeroImage
        src="https://placehold.it/300x500"
        alt="Nobel Cafe Shopfront on Church St Ballymena"
      />
    </Section>
  </Main>
)

export default Hero

const Main = styled.main`
  ${tw`
    mx-auto px-4 pt-32 pb-16 
  `}
  max-width: 1200px;
`

const Aside = styled.aside`
  ${tw`
    max-w-xl text-center pr-16 mx-auto
  `}
`

const Section = styled.section`
  ${tw`
    flex flex-wrap items-center justify-center
  `}
`

const Heading = styled.h1`
  ${tw`
    font-heading font-black text-5xl uppercase leading-tight tracking-wide 
    mb-2
  `}
`

const Intro = styled.p`
  ${tw`
    tracking-wide font-light block my-4
  `}
`

const HeroImage = styled.img`
  ${tw`
    rounded shadow-xl mx-10
  `}
  ${props => props.hasMarginTop && tw`mt-20`}
`
