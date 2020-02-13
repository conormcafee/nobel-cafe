import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { Layout, Container } from "../components/Layout"
import { Heading } from "../components/Typography"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Button } from "../components/Button"
import JobIcon from "../svg/job.svg"

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
        <Wrapper>
          {nodes.map((job, index) => (
            <Job key={index}>
              <Header>
                <img
                  src={JobIcon}
                  alt={job.childMarkdownRemark.frontmatter.jobTitle}
                />
                <div>
                  <Heading as="h4">
                    {job.childMarkdownRemark.frontmatter.jobTitle}
                  </Heading>
                  <Heading as="h5" textColor="purple" upperCase={true}>
                    {job.childMarkdownRemark.frontmatter.fullTime
                      ? "Full Time"
                      : "Part Time"}
                  </Heading>
                </div>
              </Header>

              <p>{job.childMarkdownRemark.frontmatter.intro}</p>

              <Button
                ghostButton={true}
                url={job.childMarkdownRemark.frontmatter.path}
              >
                Go to Job
              </Button>
            </Job>
          ))}
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Wrapper = styled.section`
  ${tw`
    py-10 -mx-10 flex flex-wrap
  `}
`

const Header = styled.header`
  ${tw`
    flex mb-6
  `}

  img {
    ${tw`
      w-16 mr-5
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

const Job = styled.aside`
  ${tw`
    w-full md:w-1/3 p-10
  `}

  p {
    ${tw`
      my-4
    `}
  }
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
            jobTitle
            fullTime
            intro
          }
        }
      }
    }
  }
`
