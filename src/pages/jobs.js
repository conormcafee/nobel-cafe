import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { Layout, Container } from "../components/Layout"
import { Heading } from "../components/Typography"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Button } from "../components/Button"

export default function Video({ data }) {
  const { allFile } = data
  const { nodes } = allFile
  return (
    <Layout>
      <SEO title="Jobs" />

      <Introduction>
        <Container>
          <Heading as="h1" upperCase={true}>
            Jobs
          </Heading>

          <Intro>
            Nobel Café first opened in 1994, a long time ago. Since 1994 we have
            been serving first class breakfast and lunch to the people of
            Ballymena. Nobel is Ballymena, Ballymena is Nobel!
          </Intro>
        </Container>
      </Introduction>

      <Container>
        {nodes.map((job, index) => (
          <Fragment key={index}>
            <Heading>{job.childMarkdownRemark.frontmatter.title}</Heading>
            <Button url={job.childMarkdownRemark.frontmatter.path}>
              Go to Job
            </Button>
          </Fragment>
        ))}
      </Container>
    </Layout>
  )
}

const Introduction = styled.section`
  ${tw`bg-purple-100 text-center py-10`}
`

const Intro = styled.p`
  ${tw`
    tracking-wide font-light block my-4 max-w-lg text-center mx-auto
  `}
`

export const pageQuery = graphql`
  query Jobs {
    allFile(filter: { sourceInstanceName: { eq: "jobs" } }) {
      nodes {
        childMarkdownRemark {
          html
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
