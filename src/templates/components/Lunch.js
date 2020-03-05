import React from "react"
import { Heading } from "../../components/Typography"
import { MenuItems, MenuItem } from "../components"
// import { allergens } from "../../utils"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Lunch = ({ title, data }) => (
  <Wrapper>
    <Heading as="h4" textColor="purple" fontBold={true}>
      {title}
    </Heading>

    {data.length > 0 && (
      <MenuItems>
        {data.map((lunch, index) => (
          <MenuItem key={index}>
            <Heading as="h5" fontBold={true}>
              {lunch.item}
            </Heading>
            {/* {lunch.allergens && (
              <Heading as="p" textColor="purple" fontBold={true}>
                {allergens(lunch.allergens)}
              </Heading>
            )} */}

            <p>{lunch.desc}</p>

            {lunch.addPrice && (
              <Heading as="h5" textColor="purple" fontBold={true}>
                Single - £{lunch.addPrice}
              </Heading>
            )}

            <Heading as="h5" textColor="purple" fontBold={true}>
              {lunch.addPrice && `Double - `}£{lunch.price}
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
  title: "Lunch",
}

const Wrapper = styled.section`
  ${tw`mt-10 max-w-4xl mx-auto`}

  h4 {
    ${tw`mb-5 sm:text-center`}
  }
`
