import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import DefaultImage from "../../images/nobel-shopfront.jpg"
import { Heading } from "../Typography"

const OurStory = () => {
  const data = useStaticQuery(graphql`
    query OurStory {
      allFile(filter: { sourceInstanceName: { eq: "our-story" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              slides {
                heading
                text
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Fragment>
      {data.allFile.nodes[0].childMarkdownRemark.frontmatter.slides.map(
        (item, index) => (
          <Section key={index}>
            <Article>
              <Heading as="h2">{item.heading}</Heading>
              <Intro>{item.text}</Intro>
            </Article>
          </Section>
        )
      )}
    </Fragment>
  )
}

export default OurStory

OurStory.defaultProps = {
  background: DefaultImage,
  heading: "",
  text: "",
}

const Section = styled.section``

const Article = styled.article`
  ${tw`
    flex flex-col items-center justify-center
    text-center
    py-16
    px-4
  `}
`

const Intro = styled.p`
  ${tw`
    max-w-lg mx-auto
  `}
`
