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
                image {
                  childImageSharp {
                    fluid(maxWidth: 1600) {
                      src
                    }
                  }
                }
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
          <Section
            key={index}
            background={item.image.childImageSharp.fluid.src}
          >
            <Article className="bg-overlay">
              <Heading as="h2" upperCase={true} textColor="white">
                {item.heading}
              </Heading>
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

const Section = styled.section`
  background-image: url(${props => props.background});
  ${tw`
    md:bg-fixed bg-cover md:h-screen relative md:z-30
  `}
`

const Article = styled.article`
  ${tw`
    flex flex-col items-center justify-center
    text-center text-white
    h-full
    py-32
    px-32
  `}
`

const Intro = styled.p`
  ${tw`
    max-w-lg mx-auto
  `}
`
