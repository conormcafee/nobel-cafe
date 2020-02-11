import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const MenuItems = ({ children }) => <Items>{children}</Items>

const Items = styled.ul`
  ${tw`
    flex flex-wrap -mx-8
  `}
`

export default MenuItems
