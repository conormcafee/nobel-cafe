import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Heading = ({ as, upperCase, textColor, children }) => (
  <Text as={as} upperCase={upperCase} textColor={textColor}>
    {children}
  </Text>
)

export default Heading

const Text = styled.span`
  ${tw`font-heading font-black leading-tight mb-2`}
  ${props => props.as === "h1" && tw`text-2xl md:text-3xl lg:text-5xl`}
  ${props => props.as === "h2" && tw`text-xl md:text-2xl lg:text-4xl`}
  ${props => props.as === "h3" && tw`text-lg md:text-xl lg:text-3xl`}
  ${props => props.as === "h4" && tw`md:text-lg`}
  ${props => props.upperCase && tw`uppercase tracking-wide`}
  ${props =>
    props.textColor ? tw`text-${props.textColor}` : tw`text-gray-700`}
`
Heading.defaultProps = {
  as: "h1",
  upperCase: false,
}
