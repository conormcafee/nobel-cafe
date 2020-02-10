import React from "react"
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

export default function Template({ path, data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO title={path.includes("lunch") ? "Lunch Menu" : "Breakfast Menu"} />
      <Container>
        {path.includes("lunch") && (
          <Wrapper>
            <Food>
              <Sandwiches data={frontmatter.sandwiches} />
              <Lunch data={frontmatter.lunch} />
              <Kids data={frontmatter.kids} />
            </Food>

            <Side>
              <Heading as="h3">Sides & Sauces</Heading>
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
            </Side>
          </Wrapper>
        )}
      </Container>
    </Layout>
  )
}

const Wrapper = styled.main`
  ${tw`md:flex`}
`

const Food = styled.section`
  ${tw`flex-1 pr-10`}
`
const Side = styled.aside`
  ${tw`
    pt-10
    pl-10 
    shadow 
    bg-gray-100 border-l border-gray-200
    relative
  `}

  &:after {
    content: "";
    ${tw`
      absolute top-0 bottom-0 bg-gray-100
    `}
    left: 100%;
    width: 5000px;
  }

  h3 {
    ${tw`mb-6`}
  }
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
