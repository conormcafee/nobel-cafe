import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { Sandwiches, Lunch, SidesAndSauces } from "../components"

export default function Template({ path, data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <div className="container pt-8 px-8 mx-auto">
        {path.includes("lunch") && (
          <Fragment>
            <Sandwiches data={frontmatter.sandwiches} />
            <Lunch data={frontmatter.lunch} />
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
          </Fragment>
        )}
      </div>
    </Layout>
  )
}

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
      }
    }
  }
`
