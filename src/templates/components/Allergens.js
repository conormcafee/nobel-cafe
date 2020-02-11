import React from "react"
import { Heading } from "../../components/Typography"
import { allergenList } from "../../utils"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Allergens = ({ title }) => (
  <Wrapper>
    <Aside>
      <Heading as="h4">{title}</Heading>
      <List>
        {allergenList.map(allergen => (
          <ListItem key={allergen.no}>
            {allergen.no}: {allergen.title}
          </ListItem>
        ))}
      </List>
    </Aside>
  </Wrapper>
)

export default Allergens

const Wrapper = styled.section`
  ${tw`p-5 flex-1`}
`

const Aside = styled.aside`
  ${tw`
    bg-white rounded shadow p-5
  `}

  h4 {
    ${tw`text-center`}
  }
`

const List = styled.ol`
  ${tw`
    flex flex-wrap
  `}
`

const ListItem = styled.li`
  ${tw`
    w-1/2
  `}
`

Allergens.defaultProps = {
  title: "Allergens",
}
