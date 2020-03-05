import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Button = ({ children, url, ghostButton, external }) => {
  if (ghostButton) return <GhostButton to={url}>{children}</GhostButton>
  if (external) return <ExternalButton href={url}>{children}</ExternalButton>
  return <StyledButton to={url}>{children}</StyledButton>
}

export default Button

const StyledButton = styled(Link)`
  ${tw`
      inline-flex items-center justify-center 
      h-12 px-4 
      text-white bg-green-700 hover:bg-green-900
      text-sm sm:text-base
       uppercase tracking-wide leading-tight 
      rounded shadow-lg
      cursor-pointer
    `}
  transition: background-color 150ms ease-in-out;

  img {
    ${tw`
        w-8 mr-2
      `}
  }
`

const GhostButton = styled(Link)`
  ${tw`
      inline-flex items-center justify-center 
      text-white text-green-700 hover:text-green-900
      text-sm sm:text-base
       uppercase tracking-wide leading-tight
       cursor-pointer
    `}
  transition: color 150ms ease-in-out;
`

const ExternalButton = styled.a`
  ${tw`
      inline-flex items-center justify-center 
      h-12 px-4 
      text-white bg-green-700 hover:bg-green-900
      text-sm sm:text-base
       uppercase tracking-wide leading-tight 
      rounded shadow-lg
      cursor-pointer
    `}
  transition: background-color 150ms ease-in-out;

  img {
    ${tw`
        w-8 mr-2
      `}
  }
`

Button.defaultProps = {
  url: "/",
  ghostButton: false,
}
