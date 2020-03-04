import React from "react"
import { Heading } from "../../components/Typography"
import { MenuItems, MenuItem } from "../components"
import { allergens } from "../../utils"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Kids = ({ data }) => (
  <Wrapper>
    <Heading as="h4" fontBold={true} textColor="purple">
      Kids
    </Heading>

    {data.length > 0 && (
      <MenuItems>
        {data.map((kid, index) => (
          <MenuItem key={index}>
            <Heading as="h5" fontBold={true}>
              {kid.item}
            </Heading>
            <Heading as="p" fontBold={true} textColor="purple">
              {allergens(kid.allergens)}
            </Heading>
            <span>{kid.desc}</span>
            <Heading as="h5" fontBold={true} textColor="purple">
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
  ${tw`mt-10 max-w-4xl mx-auto`}

  h4 {
    ${tw`mb-5 sm:mb-10 sm:text-center`}
  }
`
