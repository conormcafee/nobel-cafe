import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Button } from "../Button"
import { Heading } from "../Typography"

const Hero = () => (
  <Main>
    <Aside>
      <Heading as="h1" upperCase={true}>
        Serving first class breakfast
      </Heading>
      <Intro>
        Nobel Café first opened in 1994, a long time ago. Since 1994 we have
        been serving first class breakfast and lunch to the people of Ballymena.
        Nobel is Ballymena, Ballymena is Nobel!
      </Intro>

      <Button url="/menu">Check out our menu</Button>
    </Aside>

    <Section>
      <HeroImageWrapper>
        <picture>
          <source
            srcSet="https://placehold.it/300x500/"
            media="(min-width: 768px)"
          />
          <HeroImage
            src="https://placehold.it/768x576"
            alt="Nobel Cafe Shopfront on Church St Ballymena"
          />
        </picture>
      </HeroImageWrapper>

      <HeroImageWrapper hasMarginTop={true}>
        <picture>
          <source
            srcSet="https://placehold.it/300x500"
            media="(min-width: 768px)"
          />
          <HeroImage
            src="https://placehold.it/768x576"
            alt="Nobel Cafe Shopfront on Church St Ballymena"
          />
        </picture>
      </HeroImageWrapper>

      <HeroImageWrapper>
        <picture>
          <source
            srcSet="https://placehold.it/300x500"
            media="(min-width: 768px)"
          />
          <HeroImage
            src="https://placehold.it/768x576"
            alt="Nobel Cafe Shopfront on Church St Ballymena"
          />
        </picture>
      </HeroImageWrapper>
    </Section>
  </Main>
)

export default Hero

const Main = styled.main`
  ${tw`
    mx-auto px-4 pt-8 lg:pt-16 pb-16 
  `}
  max-width: 1200px;
`

const Aside = styled.aside`
  ${tw`
    max-w-xl sm:text-center pr-16 mx-auto mb-8
  `}
`

const Section = styled.section`
  ${tw`
    flex flex-col md:flex-row md:items-center md:justify-center
  `}
`

const Intro = styled.p`
  ${tw`
    tracking-wide font-light block my-4
  `}
`

const HeroImageWrapper = styled.div`
  ${tw`
    md:px-5
  `}
  ${props => props.hasMarginTop && tw`md:mt-20`}
`

const HeroImage = styled.img`
  ${tw`
    rounded shadow-xl mb-10 md:mb-0
  `}
`
