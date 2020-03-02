import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Button = ({ children, url, ghostButton }) => {
  return (
    <Fragment>
      {ghostButton ? (
        <GhostButton to={url}>{children}</GhostButton>
      ) : (
        <StyledButton to={url}>{children}</StyledButton>
      )}
    </Fragment>
  )
}

export default Button

const StyledButton = styled(Link)`
  ${tw`
      inline-flex items-center justify-center 
      h-12 px-4 
      text-white bg-purple-700 hover:bg-purple-900
      text-sm sm:text-base
       uppercase tracking-wide leading-tight 
      rounded shadow-lg
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
      text-white text-purple-700 hover:text-purple-900
      text-sm sm:text-base
       uppercase tracking-wide leading-tight
    `}
  transition: color 150ms ease-in-out;
`

Button.defaultProps = {
  url: "/",
  ghostButton: false,
}
