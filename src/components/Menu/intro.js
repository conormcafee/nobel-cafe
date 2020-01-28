import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import Button from "../button"

const MenuTypes = [
  {
    title: "Breakfast Menu",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at lacus lacus. Mauris hendrerit metus ac volutpat lacinia.",
    link: "/",
  },
  {
    title: "Lunch Menu",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at lacus lacus. Mauris hendrerit metus ac volutpat lacinia.",
    link: "/",
  },
  {
    title: "Gluten Free Menu",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at lacus lacus. Mauris hendrerit metus ac volutpat lacinia.",
    link: "/",
  },
]

const MenuIntro = () => (
  <ColouredBackground>
    <Container>
      <Header>
        <aside>
          <Heading>What are you eating?</Heading>
          <Intro>
            Whats on your plate when you come into Nobel Cafe next? Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. In at lacus lacus.
            Mauris hendrerit metus ac volutpat lacinia.
          </Intro>
        </aside>

        <Button>Check out our full menu</Button>
      </Header>

      <Section>
        {MenuTypes.map((menu, index) => (
          <MenuType key={index} shift={index === 1}>
            <MenuTitle>{menu.title}</MenuTitle>
            <MenuText>{menu.intro}</MenuText>
            <MenuLink to={menu.link}>See Menu</MenuLink>
          </MenuType>
        ))}
      </Section>
    </Container>
  </ColouredBackground>
)

export default MenuIntro

const ColouredBackground = styled.section`
  ${tw`
    flex
    bg-purple-100
    py-32
  `}
`

const Container = styled.div`
  ${tw`
    px-4 mx-auto
  `}
  max-width: 1200px;
`

const Header = styled.header`
  ${tw`
    flex flex-col justify-center items-center
    text-center
  `}
`

const Heading = styled.h2`
  ${tw`
    font-heading font-black 
    text-3xl uppercase leading-tight tracking-wide
    mb-2
  `}
`

const Intro = styled.p`
  ${tw`
    max-w-lg tracking-wide font-light block mb-4
  `}
`

const Section = styled.section`
  ${tw`
    flex items-center justify-between -mx-10
  `}
`

const MenuType = styled.div`
  ${tw`
    bg-white border-b border-gray-200 
    shadow-xl
    p-8 mx-10 mb-10
  `}
  ${props => props.shift && tw`mt-20`}
`

const MenuTitle = styled.h3`
  ${tw`
    font-heading text-xl font-bold leading-tight tracking-wide mb-2
  `}
`

const MenuText = styled.p`
  ${tw`
    max-w-sm mb-4 font-light
  `}
`

const MenuLink = styled(Link)`
  ${tw`
    inline-flex items-center justify-center
    text-purple-600 hover:text-purple-400
    border-b-2 border-purple-400
    font-heading font-bold uppercase tracking-wide leading-tight
    pb-1
  `}
`
