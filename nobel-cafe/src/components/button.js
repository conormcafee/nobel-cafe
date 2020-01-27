import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Button = ({ children }) => <StyledButton to="/">{children}</StyledButton>

export default Button

const StyledButton = styled(Link)`
  ${tw`
      inline-flex items-center justify-center 
      h-12 px-6 
      text-white bg-purple-600 hover:bg-purple-700 
      font-heading font-bold uppercase tracking-wide leading-tight 
      rounded shadow
    `}
`
