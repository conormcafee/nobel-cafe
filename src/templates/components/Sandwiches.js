import React from "react"
import { Heading } from "../../components/Typography"
import { MenuItems, MenuItem, MenuFooter } from "../components"

const allergens = array =>
  array.map((a, i) => `${a}${array.length - 1 === i ? `` : `, `}`)

const Sandwiches = ({ data }) => (
  <div>
    <Heading as="h3">Sandwiches</Heading>

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
                with Chips & Dip £{sandwich.priceWithChips}
              </Heading>
              <Heading as="h5" textColor="purple">
                with Soup £{sandwich.priceWithSoup}
              </Heading>
            </MenuFooter>
          </MenuItem>
        ))}
      </MenuItems>
    )}
  </div>
)

export default Sandwiches

Sandwiches.defaultProps = {
  data: [],
}
