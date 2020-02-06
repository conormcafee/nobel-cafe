import React from "react"
import { Heading } from "../../components/Typography"

const MenuTitle = ({ children }) => (
  <Heading as="h4" textColor="green-400">
    {children}
  </Heading>
)

export default MenuTitle
