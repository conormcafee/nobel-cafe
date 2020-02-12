import React from "react"
import { Heading } from "../../components/Typography"
import { MenuItems, MenuItem } from "../components"
import { allergens } from "../../utils"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Lunch = ({ data }) => (
  <Wrapper>
    <Heading as="h3" textColor="purple" upperCase={true}>
      Lunch
    </Heading>

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
  ${tw`mt-10 max-w-4xl mx-auto`}

  h3 {
    ${tw`mb-5 sm:mb-10 sm:text-center`}
  }
`
