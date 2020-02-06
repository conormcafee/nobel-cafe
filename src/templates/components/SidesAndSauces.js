import React from "react"
import { Heading } from "../../components/Typography"

const SidesAndSauces = ({ title, price, data }) => (
  <div>
    <Heading as="h3">
      {title} - £{price}
    </Heading>

    {data.length > 0 && (
      <ul>
        {data.map((side, index) => (
          <li key={index}>{side}</li>
        ))}
      </ul>
    )}
  </div>
)

export default SidesAndSauces

SidesAndSauces.defaultProps = {
  title: "",
  price: 0,
  data: [],
}
