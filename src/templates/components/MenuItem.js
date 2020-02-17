import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const MenuItem = ({ children, cols }) => <Item cols={cols}>{children}</Item>

MenuItem.defaultProps = {
  cols: 3,
}

const Item = styled.li`
  ${tw`
    w-full
    px-8
  `}
  ${props => props.cols === 2 && tw`w-1/2 lg:w-1/3 mb-4`}
  ${props => props.cols === 3 && tw`sm:w-1/2 lg:w-1/3 mb-10 md:mb-16`}

  p {
    ${tw`
      mb-2
    `}
  }
`

export default MenuItem
