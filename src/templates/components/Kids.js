import React from "react"
import { Heading } from "../../components/Typography"
import { MenuItems, MenuItem } from "../components"
import { allergens } from "../../utils"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Kids = ({ data }) => (
  <Wrapper>
    <Heading as="h3">Kids</Heading>

    {data.length > 0 && (
      <MenuItems>
        {data.map((kid, index) => (
          <MenuItem key={index}>
            <Heading as="h4">{kid.item}</Heading>
            <Heading as="p" textColor="purple">
              {allergens(kid.allergens)}
            </Heading>
            <span>{kid.desc}</span>
            <Heading as="h5" textColor="purple">
              £{kid.price}
            </Heading>
          </MenuItem>
        ))}
      </MenuItems>
    )}
  </Wrapper>
)

export default Kids

Kids.defaultProps = {
  data: [],
}

const Wrapper = styled.section`
  ${tw`my-10`}

  h3 {
    ${tw`mb-6`}
  }
`
