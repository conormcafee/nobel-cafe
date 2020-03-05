import React from "react"
import { Heading } from "../../components/Typography"
import { MenuItems, MenuItem, MenuFooter } from "../components"
// import { allergens } from "../../utils"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Sandwiches = ({ data }) => (
  <Wrapper>
    <Heading as="h4" textColor="purple" fontBold={true}>
      Sandwiches
    </Heading>

    {data.length > 0 && (
      <MenuItems>
        {data.map((sandwich, index) => (
          <MenuItem key={index}>
            <Heading as="h5" fontBold={true}>
              {sandwich.item}
            </Heading>
            {/* <Heading as="p" textColor="purple" fontBold={true}>
              {allergens(sandwich.allergens)}
            </Heading> */}
            <span>{sandwich.desc}</span>
            <MenuFooter>
              {sandwich.price && (
                <Heading as="h5" textColor="purple" fontBold={true}>
                  £{sandwich.price}
                </Heading>
              )}
              {sandwich.priceWithChips && (
                <Heading as="h5" textColor="purple" fontBold={true}>
                  £{sandwich.priceWithChips} w/ Chips & Dip
                </Heading>
              )}
              {sandwich.priceWithSoup && (
                <Heading as="h5" textColor="purple" fontBold={true}>
                  £{sandwich.priceWithSoup} w/ Soup
                </Heading>
              )}
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

  h4 {
    ${tw`mb-5 sm:mb-10 sm:text-center`}
  }
`
