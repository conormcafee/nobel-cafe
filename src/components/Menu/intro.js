import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import Button from "../button"
import { Heading } from "../Typography"

const MenuIntro = ({ hasButton }) => {
  const data = useStaticQuery(graphql`
    query Menus {
      allMarkdownRemark(
        filter: { frontmatter: { path: { glob: "/menu/*" } } }
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              desc
            }
          }
        }
      }
    }
  `)
  return (
    <ColouredBackground>
      <Container>
        <Header>
          <aside>
            <Heading as="h2" upperCase={true}>
              What are you eating?
            </Heading>
            <Intro>
              Whats on your plate when you come into Nobel Cafe next? Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. In at lacus
              lacus. Mauris hendrerit metus ac volutpat lacinia.
            </Intro>
          </aside>

          {hasButton && <Button url="/menu">Check out our full menu</Button>}
        </Header>

        <Section>
          {data.allMarkdownRemark.edges.map((item, index) => (
            <MenuType key={index} shift={index === 1}>
              <MenuTitle>{item.node.frontmatter.title}</MenuTitle>
              <MenuText>{item.node.frontmatter.desc}</MenuText>
              <MenuLink to={item.node.frontmatter.path}>See Menu</MenuLink>
            </MenuType>
          ))}
        </Section>
      </Container>
    </ColouredBackground>
  )
}

export default MenuIntro

MenuIntro.defaultProps = {
  hasButton: false,
}

const ColouredBackground = styled.section`
  ${tw`
    flex
    bg-purple-100
    py-16
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
    md:flex flex-col justify-center items-center
    md:text-center
  `}
`

const Intro = styled.p`
  ${tw`
    max-w-lg tracking-wide font-light block mb-4
  `}
`

const Section = styled.section`
  ${tw`
    md:flex md:flex-row md:items-center md:justify-between mt-10 md:-mx-5
  `}
`

const MenuType = styled.div`
  ${tw`
    bg-white 
    border-b border-gray-200 
    shadow-xl
    p-8 
    mb-10
    md:mx-5
  `}
  ${props => props.shift && tw`md:mt-20`}
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
