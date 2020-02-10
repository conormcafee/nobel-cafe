import React from "react"
import { Heading } from "../../components/Typography"
import { MenuItems, MenuItem } from "../components"
import { allergens } from "../../utils"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Lunch = ({ data }) => (
  <Wrapper>
    <Heading as="h3">Lunch</Heading>

    {data.length > 0 && (
      <MenuItems>
        {data.map((lunch, index) => (
          <MenuItem key={index}>
            <Heading as="h4">{lunch.item}</Heading>
            <Heading as="p" textColor="purple">
              {allergens(lunch.allergens)}
            </Heading>
            <span>{lunch.desc}</span>
            <Heading as="h5" textColor="purple">
              £{lunch.price}
            </Heading>
          </MenuItem>
        ))}
      </MenuItems>
    )}
  </Wrapper>
)

export default Lunch

Lunch.defaultProps = {
  data: [],
}

const Wrapper = styled.section`
  ${tw`my-10`}

  h3 {
    ${tw`mb-6`}
  }
`
