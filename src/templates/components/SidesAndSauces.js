import React from "react"
import { Heading } from "../../components/Typography"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const SidesAndSauces = ({ customPrice, title, price, data }) => (
  <Wrapper>
    <Main>
      <Heading as="h4" fontBold={true}>
        {title}
      </Heading>
      {customPrice ? (
        <Heading as="h5" fontBold={true} textColor="purple">
          {price}
        </Heading>
      ) : (
        <Heading as="h5" fontBold={true} textColor="purple">
          £{price}
        </Heading>
      )}
      {data.length > 0 && (
        <List>
          {data.map((side, index) => (
            <ListItem key={index}>{side}</ListItem>
          ))}
        </List>
      )}
    </Main>
  </Wrapper>
)

export default SidesAndSauces

const Wrapper = styled.section`
  ${tw`p-5 w-full md:w-auto md:flex-1`}
`

const Main = styled.aside`
  ${tw`
    h-full bg-white rounded shadow p-5
  `}

  h5 {
    ${tw`mb-3`}
  }
`

const List = styled.ul`
  ${tw`flex flex-col flex-wrap`}
  max-width: 250px;
`

const ListItem = styled.li`
  /* ${tw`w-1/2`} */
`

SidesAndSauces.defaultProps = {
  title: "",
  price: 0,
  data: [],
}
