import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <div>
        <h1>{frontmatter.title}</h1>
        <ul>
          {frontmatter.menu.map(a => (
            <li>
              <span className="block">{a.item}</span>
              <span className="block">{a.desc}</span>
              {a.allergens && a.allergens.map(b => <span>{b}</span>)}
              <span className="block">{a.price}</span>
            </li>
          ))}
        </ul>
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
        menu {
          item
          desc
          allergens
          price
        }
      }
    }
  }
`
