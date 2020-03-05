import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Heading } from "../Typography"
import { Container } from "../Layout"
import FoodIcon from "../../svg/food.svg"
import {
  Breakfast,
  Sandwiches,
  Lunch,
  Kids,
  SidesAndSauces,
  Allergens,
} from "../../templates/components"

const MenuIntro = () => {
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
              sandwiches {
                item
                desc
                allergens
                price
                priceWithChips
                priceWithSoup
              }
              soups {
                item
                allergens
                gf
              }
              sides {
                price
                options
              }
              sauces {
                price
                options
              }
              dips {
                price
                options
              }
              lunch {
                item
                allergens
                gf
                desc
                price
                addPrice
              }
              kids {
                item
                allergens
                gf
                desc
                price
              }
              fry {
                item
                extra
              }
              breakfastmenu {
                item
                desc
                price
                additional
              }
            }
          }
        }
      }
    }
  `)

  const breakfast = data.allMarkdownRemark.edges[0].node
  const lunch = data.allMarkdownRemark.edges[1].node

  return (
    <Fragment>
      <Introduction>
        <Container>
          <Heading as="h3" fontBold={true}>
            Breakfast Fry{" "}
            <span>
              from £3.95<sup>*</sup>
            </span>
          </Heading>

          <Intro>
            Complimentary<sup>*</sup> regular tea or coffee with 5 or more
            items.{" "}
            <Heading as="h5" fontBold={true} textColor="purple">
              Each item 79p*
            </Heading>
          </Intro>

          <Intro>
            Upgrade to cappuccino, latte or herbal tea.{" "}
            <Heading as="h5" fontBold={true} textColor="purple">
              £1.00 extra<sup>*</sup>
            </Heading>
          </Intro>

          <BG>
            <h5 as="h5">
              <sup>*</sup>Prices & Complimentary Tea/Coffee before 11:30am only
            </h5>
          </BG>
        </Container>
      </Introduction>

      <Container>
        <Wrapper>
          <Breakfast
            data={breakfast.frontmatter.fry ? breakfast.frontmatter.fry : []}
          />

          <FoodMenuEnd>
            <img src={FoodIcon} alt="Sandwich Menu Ends Here" />
          </FoodMenuEnd>

          <Lunch
            title="More Breakfast Options"
            data={
              breakfast.frontmatter.breakfastmenu
                ? breakfast.frontmatter.breakfastmenu
                : []
            }
          />

          <BG_WRAP>
            <BG>
              <h5 as="h5">Complimentary Tea/Coffee before 11:30am only</h5>
            </BG>
          </BG_WRAP>
        </Wrapper>
      </Container>

      <Introduction hasMarginTop={true}>
        <Container>
          <Heading as="h3" fontBold={true}>
            Lunch Menu
          </Heading>

          <Intro>Served from 11:30am</Intro>
        </Container>
      </Introduction>

      {/* Lunch */}
      <Fragment>
        <Container>
          <Wrapper>
            <Sandwiches
              data={
                lunch.frontmatter.sandwiches ? lunch.frontmatter.sandwiches : []
              }
            />

            <FoodMenuEnd>
              <img src={FoodIcon} alt="Sandwich Menu Ends Here" />
            </FoodMenuEnd>

            <Lunch
              data={lunch.frontmatter.lunch ? lunch.frontmatter.lunch : []}
            />

            <FoodMenuEnd>
              <img src={FoodIcon} alt="Sandwich Menu Ends Here" />
            </FoodMenuEnd>
          </Wrapper>
        </Container>

        <Side>
          <Container>
            <Flex>
              <SidesAndSauces
                title="Sides"
                price={lunch.frontmatter.sides[0].price}
                data={lunch.frontmatter.sides[0].options}
              />
              <SidesAndSauces
                title="Sauces"
                price={lunch.frontmatter.sauces[0].price}
                data={lunch.frontmatter.sauces[0].options}
              />
              <SidesAndSauces
                title="Dips"
                price={lunch.frontmatter.dips[0].price}
                data={lunch.frontmatter.dips[0].options}
              />
              <Allergens />
            </Flex>
          </Container>
        </Side>

        <Container>
          <Kids data={lunch.frontmatter.kids ? lunch.frontmatter.kids : []} />
          <FoodMenuEnd>
            <img src={FoodIcon} alt="Sandwich Menu Ends Here" />
          </FoodMenuEnd>
        </Container>
      </Fragment>
    </Fragment>
  )
}

export default MenuIntro

MenuIntro.defaultProps = {
  hasButton: false,
}

const Wrapper = styled.section`
  ${tw`
    mt-10
  `}

  h1 {
    ${tw`
      text-center
    `}
  }
`

const BG_WRAP = styled.div`
  ${tw`
    text-center mb-10
  `}
`

const BG = styled.div`
  ${tw`bg-green-700 inline-flex items-center justify-center px-4 py-2 rounded`}

  h5 {
    ${tw`
      text-white mb-0 text-xs
    `}
  }
`

const Introduction = styled.section`
  ${tw`bg-gray-200 text-center pt-6 pb-4`}
  ${props => props.hasMarginTop && tw`mt-10`}
`

const Intro = styled.p`
  ${tw`
    tracking-wide font-light block my-4 max-w-lg text-center mx-auto
  `}
`
const Side = styled.aside`
  ${tw` 
    mt-10
    py-10
    bg-gray-200
    relative
  `}

  h3 {
    ${tw`mb-6`}
  }
`

const FoodMenuEnd = styled.figure`
  ${tw`relative w-64 mx-auto`}

  &:before {
    content: "";
    ${tw`
      w-full
      h-1
      bg-gray-500
      rounded-lg
      block
      absolute
    `}
    top: 50%;
  }

  img {
    ${tw`
      w-16 bg-white mx-auto relative z-10
    `}
  }
`

const Flex = styled.section`
  ${tw`
  flex flex-wrap
`}
`
