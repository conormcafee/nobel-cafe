import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Container = ({ children }) => <Wrapper>{children}</Wrapper>

export default Container

const Wrapper = styled.div`
  ${tw`
    px-4 mx-auto
  `}
  max-width: 1200px;
`
