import React from "react"
import { Heading } from "../../components/Typography"
import { MenuItems, MenuItem } from "../components"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Breakfast = ({ title, data }) => (
  <Wrapper>
    <Heading as="h3" textColor="purple" upperCase={true}>
      {title}
    </Heading>

    <MenuItems small={true}>
      {data.map((breakkie, index) => (
        <MenuItem cols={2} key={index}>
          <Heading as="h5">
            {breakkie.item}
            {breakkie.extra && ` (£${breakkie.extra})`}
          </Heading>
        </MenuItem>
      ))}
    </MenuItems>
  </Wrapper>
)

export default Breakfast

Breakfast.defaultProps = {
  data: [],
  title: "Choose from",
}

const Wrapper = styled.section`
  ${tw`mt-10 max-w-4xl mx-auto`}

  h3 {
    ${tw`mb-5 sm:mb-10 sm:text-center`}
  }
`
