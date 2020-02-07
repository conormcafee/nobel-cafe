import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const MenuItem = ({ children }) => <Item>{children}</Item>

const Item = styled.li`
  ${tw`
    w-full sm:w-1/2 md:w-1/3 lg:w-1/4 
    px-4 mb-8
  `}
`

export default MenuItem
