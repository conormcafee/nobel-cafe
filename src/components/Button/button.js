import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Button = ({ children, url }) => (
  <StyledButton to={url}>{children}</StyledButton>
)

export default Button

const StyledButton = styled(Link)`
  ${tw`
      inline-flex items-center justify-center 
      h-12 px-4 
      text-white bg-green-700 hover:bg-green-700
      text-sm sm:text-base
      font-heading font-bold uppercase tracking-wide leading-tight 
      rounded shadow-lg
    `}

  img {
    ${tw`
        w-8 mr-2
      `}
  }
`

Button.defaultProps = {
  url: "/",
}
