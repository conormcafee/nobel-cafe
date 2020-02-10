import React from "react"
import { Heading } from "../../components/Typography"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const SidesAndSauces = ({ title, price, data }) => (
  <Wrapper>
    <Heading as="h4">{title}</Heading>
    <Heading as="h5" textColor="purple">
      £{price}
    </Heading>
    {data.length > 0 && (
      <List>
        {data.map((side, index) => (
          <ListItem key={index}>{side}</ListItem>
        ))}
      </List>
    )}
  </Wrapper>
)

export default SidesAndSauces

const Wrapper = styled.section`
  ${tw`mb-10`}
`

const List = styled.ul`
  ${tw`flex flex-wrap`}
  max-width: 250px;
`

const ListItem = styled.li`
  ${tw`w-1/2`}
`

SidesAndSauces.defaultProps = {
  title: "",
  price: 0,
  data: [],
}
