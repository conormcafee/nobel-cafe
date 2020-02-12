import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { Layout, Container } from "../components/Layout"
import { Heading } from "../components/Typography"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

export default function Video({ data }) {
  const { allFile } = data
  const { nodes } = allFile

  return (
    <Layout>
      <SEO title="Videos" />

      <Introduction>
        <Container>
          <Heading as="h1" upperCase={true}>
            Videos
          </Heading>

          <Intro>
            Nobel Café first opened in 1994, a long time ago. Since 1994 we have
            been serving first class breakfast and lunch to the people of
            Ballymena. Nobel is Ballymena, Ballymena is Nobel!
          </Intro>
        </Container>
      </Introduction>

      <Container>
        <Videos>
          {nodes.map((video, index) => (
            <VideoElement key={index}>
              <Heading as="h4">
                {video.childMarkdownRemark.frontmatter.title}
              </Heading>

              <VideoContent
                key={index}
                dangerouslySetInnerHTML={{
                  __html: video.childMarkdownRemark.html,
                }}
              />
              <p>{video.childMarkdownRemark.frontmatter.desc}</p>
            </VideoElement>
          ))}
        </Videos>
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

const Videos = styled.section`
  ${tw`
    flex flex-wrap mt-10 pb-8 -mx-10
  `}
`

const VideoElement = styled.aside`
  ${tw`
    w-full md:w-1/2 px-10 mb-10
  `}
`

const VideoContent = styled.section`
  ${tw`
    my-5 bg-purple-100 shadow-lg p-5 rounded-lg
  `}

  .embedVideo-container {
    ${tw`
      relative overflow-hidden max-w-full
    `}
    padding-bottom: 56.25%;
    height: 0;
  }

  .embedVideo-container iframe,
  .embedVideo-container object,
  .embedVideo-container embed {
    ${tw`
      absolute top-0 left-0 w-full h-full
    `}
  }
`

export const pageQuery = graphql`
  query Videos {
    allFile(filter: { sourceInstanceName: { eq: "videos" } }) {
      nodes {
        childMarkdownRemark {
          html
          frontmatter {
            title
            desc
          }
        }
      }
    }
  }
`
