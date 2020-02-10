import React from "react"
import { Heading } from "../../components/Typography"
import { MenuItems, MenuItem } from "../components"

const Lunch = ({ data }) => (
  <div>
    <Heading as="h3">Lunch</Heading>

    {data.length > 0 && (
      <MenuItems>
        {data.map((lunch, index) => (
          <MenuItem key={index}>
            <span>{lunch.item}</span>
            <span>{lunch.allergens}</span>
            <span>{lunch.desc}</span>
            <span>£{lunch.price}</span>
          </MenuItem>
        ))}
      </MenuItems>
    )}
  </div>
)

export default Lunch

Lunch.defaultProps = {
  data: [],
}
