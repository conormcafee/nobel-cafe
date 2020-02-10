import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const MenuFooter = ({ children }) => <Footer>{children}</Footer>

export default MenuFooter

const Footer = styled.footer`
  ${tw`
    mt-2  
  `}
`
