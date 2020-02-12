import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Button } from "../Button"
import { Heading } from "../Typography"

import Shopfront01 from "../../images/hero/nobel-shopfront-mobile-01.jpg"
import Shopfront02 from "../../images/hero/nobel-shopfront-mobile-02.jpg"
import Shopfront03 from "../../images/hero/nobel-shopfront-mobile-03.jpg"
import Shopfront from "../../images/hero/nobel-shopfront-desktop.jpg"

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
          <source srcSet={Shopfront01} media="(min-width: 768px)" />
          <HeroImage
            src={Shopfront}
            alt="Nobel Cafe Shopfront on Church St Ballymena"
          />
        </picture>
      </HeroImageWrapper>

      <HeroImageWrapper hasMarginTop={true} hideMobile={true}>
        <picture>
          <source srcSet={Shopfront02} media="(min-width: 768px)" />
          <HeroImage
            src={Shopfront}
            alt="Nobel Cafe Shopfront on Church St Ballymena"
          />
        </picture>
      </HeroImageWrapper>

      <HeroImageWrapper hideMobile={true}>
        <picture>
          <source srcSet={Shopfront03} media="(min-width: 768px)" />
          <HeroImage
            src={Shopfront}
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
    mx-auto px-4 pt-8 pb-16 
  `}
  max-width: 1200px;
`

const Aside = styled.aside`
  ${tw`
    max-w-sm md:max-w-xl text-center mx-auto mb-8
  `}
`

const Section = styled.section`
  ${tw`
    flex flex-col md:flex-row md:items-center md:justify-center
  `}
`

const Intro = styled.p`
  ${tw`
    tracking-wide font-light block my-4 mx-auto
  `}
`

const HeroImageWrapper = styled.div`
  ${tw`
    md:px-5
  `}
  ${props => props.hasMarginTop && tw`md:mt-20`}
  ${props => props.hideMobile && tw`hidden md:block`}
`

const HeroImage = styled.img`
  ${tw`
    rounded-lg shadow-xl mb-10 md:mb-0 border-2 border-gray-200
  `}
`
