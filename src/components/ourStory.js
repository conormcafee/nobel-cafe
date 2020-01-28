import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import DefaultImage from "../images/nobel-shopfront.jpg"

const OurStory = ({ background, heading, text }) => (
  <Section background={background}>
    <Article className="bg-overlay">
      <Heading>{heading}</Heading>
      <Intro>{text}</Intro>
    </Article>
  </Section>
)

export default OurStory

OurStory.defaultProps = {
  background: DefaultImage,
  heading: "",
  text: "",
}

const Section = styled.section`
  background-image: url(${props => props.background});
  ${tw`
    bg-fixed bg-cover h-screen relative z-50
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
