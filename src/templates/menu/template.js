import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import { Layout, Container } from "../../components/Layout"
import {
  Sandwiches,
  Lunch,
  Kids,
  SidesAndSauces,
  Allergens,
} from "../components"
import { Heading } from "../../components/Typography"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import FoodIcon from "../../svg/food.svg"

export default function Template({ path, data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO title={path.includes("lunch") ? "Lunch Menu" : "Breakfast Menu"} />

      {path.includes("lunch") ? (
        <Fragment>
          <Introduction>
            <Container>
              <Heading as="h1" upperCase={true}>
                Lunch Menu
              </Heading>

              <Intro>
                Nobel Café first opened in 1994, a long time ago. Since 1994 we
                have been serving first class breakfast and lunch to the people
                of Ballymena. Nobel is Ballymena, Ballymena is Nobel!
              </Intro>
            </Container>
          </Introduction>

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
          />

          <Container>
            <Wrapper>
              <Sandwiches data={frontmatter.sandwiches} />

              <FoodMenuEnd>
                <img src={FoodIcon} alt="Sandwich Menu Ends Here" />
              </FoodMenuEnd>

              <Lunch data={frontmatter.lunch} />

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
                  price={frontmatter.sides[0].price}
                  data={frontmatter.sides[0].options}
                />
                <SidesAndSauces
                  title="Sauces"
                  price={frontmatter.sauces[0].price}
                  data={frontmatter.sauces[0].options}
                />
                <Allergens />
              </Flex>
            </Container>
          </Side>

          <Container>
            <Kids data={frontmatter.kids} />
            <FoodMenuEnd>
              <img src={FoodIcon} alt="Sandwich Menu Ends Here" />
            </FoodMenuEnd>
          </Container>
        </Fragment>
      ) : (
        <Fragment>
          <Introduction>
            <Container>
              <Heading as="h1" upperCase={true}>
                Breakfast Menu
              </Heading>

              <Intro>
                Nobel Café first opened in 1994, a long time ago. Since 1994 we
                have been serving first class breakfast and lunch to the people
                of Ballymena. Nobel is Ballymena, Ballymena is Nobel!
              </Intro>
            </Container>
          </Introduction>

          <Container>
            <Wrapper>
              <FoodMenuEnd>
                <img src={FoodIcon} alt="Sandwich Menu Ends Here" />
              </FoodMenuEnd>

              <FoodMenuEnd>
                <img src={FoodIcon} alt="Sandwich Menu Ends Here" />
              </FoodMenuEnd>
            </Wrapper>

            <Allergens />
          </Container>
        </Fragment>
      )}
    </Layout>
  )
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

const Introduction = styled.section`
  ${tw`bg-purple-100 text-center py-10`}
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
    bg-purple-100
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
  flex flex-wrap items-center
`}
`

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        sandwiches {
          item
          desc
          allergens
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
        menu {
          item
          desc
          allergens
          price
        }
        lunch {
          item
          allergens
          gf
          desc
          price
        }
        kids {
          item
          allergens
          gf
          desc
          price
        }
      }
    }
  }
`
