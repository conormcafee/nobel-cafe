import React from "react"
import { Heading } from "../../components/Typography"
import { MenuItems, MenuItem, MenuTitle } from "../components"

const Sandwiches = ({ data }) => (
  <div>
    <Heading as="h3">Sandwiches</Heading>

    {data.length > 0 && (
      <MenuItems>
        {data.map((sandwich, index) => (
          <MenuItem key={index}>
            <MenuTitle>{sandwich.item}</MenuTitle>
            <span>{sandwich.allergens}</span>
            <span>{sandwich.desc}</span>
            <span>with Chips & Dip £{sandwich.priceWithChips}</span>
            <span>with Soup £{sandwich.priceWithSoup}</span>
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
