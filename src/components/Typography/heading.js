import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

const colorSwitcher = color => {
  switch (color) {
    case "purple":
      return css(tw`text-purple-800`)
    case "white":
      return css(tw`text-white`)
    default:
      return css(tw`text-gray-700`)
  }
}

const Heading = ({ as, upperCase, textColor, children }) => (
  <Element as={as} upperCase={upperCase} css={colorSwitcher(textColor)}>
    {children}
  </Element>
)

export default Heading

const Element = styled.span`
  ${tw`font-heading font-black leading-tight mb-2`}
  ${props => props.as === "h1" && tw`text-2xl md:text-3xl lg:text-5xl`}
  ${props => props.as === "h2" && tw`text-xl md:text-2xl lg:text-4xl`}
  ${props => props.as === "h3" && tw`text-lg md:text-xl lg:text-3xl`}
  ${props => props.as === "h4" && tw`md:text-lg`}
  ${props => props.upperCase && tw`uppercase tracking-wide`}
`

Heading.defaultProps = {
  as: "h1",
  upperCase: false,
}
