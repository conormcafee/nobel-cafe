import React from "react"
import { Heading } from "../../components/Typography"
import { allergenList } from "../../utils"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Allergens = ({ title }) => (
  <Wrapper>
    <Heading as="h4">{title}</Heading>
    <ol>
      {allergenList.map(allergen => (
        <li key={allergen.no}>
          {allergen.no}: {allergen.title}
        </li>
      ))}
    </ol>
  </Wrapper>
)

export default Allergens

const Wrapper = styled.section`
  ${tw`mb-10`};
`

Allergens.defaultProps = {
  title: "Allergens",
}
