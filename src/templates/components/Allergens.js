import React from "react"
import { Heading } from "../../components/Typography"
// import { allergenList } from "../../utils"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Allergens = ({ title }) => (
  <Wrapper>
    <Aside>
      <Heading as="h4" fontBold={true}>
        {title}
      </Heading>
      <Heading as="h5">
        For any allergen advice please ask our friendly staff
      </Heading>
    </Aside>
  </Wrapper>
)

export default Allergens

const Wrapper = styled.section`
  ${tw`p-5 flex-1`}
`

const Aside = styled.aside`
  ${tw`
    bg-white rounded shadow p-5 h-full
  `}

  h4 {
    ${tw`text-center`}
  }
`

Allergens.defaultProps = {
  title: "Allergens",
}
