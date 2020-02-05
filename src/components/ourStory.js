import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import DefaultImage from "../images/nobel-shopfront.jpg"

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
              <Heading>{item.heading}</Heading>
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
    bg-fixed bg-cover h-screen relative z-30
  `}
`

const Article = styled.article`
  ${tw`
    flex flex-col items-center justify-center
    text-center text-white
    h-full
  `}
`

const Heading = styled.h3`
  ${tw`
    font-heading font-black text-3xl shadow
  `}
`

const Intro = styled.p`
  ${tw`
    max-w-lg mx-auto
  `}
`
