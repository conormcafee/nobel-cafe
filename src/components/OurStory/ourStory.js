import React from "react"
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
    <Wrapper>
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
    </Wrapper>
  )
}

export default OurStory

OurStory.defaultProps = {
  background: DefaultImage,
  heading: "",
  text: "",
}

const Wrapper = styled.main`
  ${tw`py-16`}
`

const Section = styled.section`
  ${tw`relative py-16`}

  &:before,
  &:after {
    content: "";
    left: 50%;
    ${tw`
      h-8 sm:h-16 w-2 block bg-gray-300 absolute
    `}
  }

  &:before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }
`

const Article = styled.article`
  ${tw`
    flex flex-col items-center justify-center
    text-center
    py-2 px-4 sm:py-4
  `}
`

const Intro = styled.p`
  ${tw`
    max-w-lg mx-auto
  `}
`
