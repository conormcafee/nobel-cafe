import React from "react"
import { Heading } from "../../components/Typography"
import { MenuItems, MenuItem, MenuFooter } from "../components"
import { allergens } from "../../utils"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Sandwiches = ({ data }) => (
  <Wrapper>
    <Heading as="h3" textColor="purple" upperCase={true}>
      Sandwiches
    </Heading>

    {data.length > 0 && (
      <MenuItems>
        {data.map((sandwich, index) => (
          <MenuItem key={index}>
            <Heading as="h4">{sandwich.item}</Heading>
            <Heading as="p" textColor="purple">
              {allergens(sandwich.allergens)}
            </Heading>
            <span>{sandwich.desc}</span>
            <MenuFooter>
              <Heading as="h5" textColor="purple">
                £{sandwich.priceWithChips} w/ Chips & Dip
              </Heading>
              <Heading as="h5" textColor="purple">
                £{sandwich.priceWithSoup} w/ Soup
              </Heading>
            </MenuFooter>
          </MenuItem>
        ))}
      </MenuItems>
    )}
  </Wrapper>
)

export default Sandwiches

Sandwiches.defaultProps = {
  data: [],
}

const Wrapper = styled.section`
  ${tw`mt-10 max-w-4xl mx-auto`}

  h3 {
    ${tw`mb-5 sm:mb-10 sm:text-center`}
  }
`
