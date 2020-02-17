import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const MenuItems = ({ children, small }) => (
  <Items small={small}>{children}</Items>
)

MenuItems.defaultProps = {
  small: false,
}

const Items = styled.ul`
  ${tw`
    flex flex-wrap -mx-8
  `}

  ${props => props.small && tw`max-w-lg md:mx-auto`}
`

export default MenuItems
