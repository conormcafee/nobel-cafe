import React from "react"
import {
  sideOrders,
  saucesAndSides,
  treats,
  breakfast,
  breakfastBap,
  porridge,
  takeaway,
  loadedChips,
  kidsMeals,
} from "./Takeaway.menu"
import { Container } from "../Layout"
import { Heading } from "../Typography"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Takeaway = () => {
  return (
    <>
      <MobileHeading>
        <Heading fontBold upperCase>
          Takeaway Menu
        </Heading>
      </MobileHeading>

      <Container>
        <MainOptions>
          <Aside>
            <BreakfastWarning>Served from 9am to 2pm</BreakfastWarning>
            <div style={{ padding: 24 }}>
              <div data-group="03">
                <Heading as="h3">Breakfast Items</Heading>
                <SubHeading hasBorder>
                  Each Item <span>70p</span>
                </SubHeading>
                <Box
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
                >
                  {breakfast.map((item, index) => (
                    <p style={{ marginBottom: 12 }}>{item}</p>
                  ))}
                </Box>
              </div>

              <div data-group="04">
                <Heading as="h3">Breakfast Bap</Heading>
                <SubHeading hasBorder>
                  <span>£3.50</span>
                </SubHeading>

                <Box>
                  <p>{breakfastBap}</p>
                </Box>
              </div>

              <div data-group="05">
                <Heading as="h3">Porridge</Heading>
                <SubHeading hasBorder>
                  <span>£3.50</span>
                </SubHeading>
                <Box>
                  {porridge.map(p => (
                    <p>{p}</p>
                  ))}
                </Box>
              </div>

              <div data-group="06">
                <Heading as="h3">Toasted Sourdough</Heading>
                <SubHeading hasBorder>
                  <span>£7.00</span>
                </SubHeading>
                <Box>
                  <p>With Avocado, 2 Lean Bacon & 2 Poached Eggs</p>
                </Box>
              </div>
            </div>
          </Aside>

          <div>
            <Box>
              {/* <Heading as="h3">Takeaway</Heading> */}

              <Grid>
                <Item highlight={true} noBorder={true}>
                  <SubHeading>
                    Chistmas Turkey & Ham <span>£8.95</span>
                  </SubHeading>
                  <p>
                    Traditional Turkey, Ham & Stuffing. Served with Seasonal
                    Vegetables, Roast & Mashed Potatoes, Gravy, Cranberry Sauce
                    & Chipolatas.
                  </p>
                </Item>
              </Grid>

              <SubHeading hasBorder={true}>
                Any Option Below <span>£4.95</span>
              </SubHeading>

              <Grid>
                {takeaway.map((item, index) => (
                  <Item key={index}>
                    <SubHeading>{item.name}</SubHeading>
                    <p>{item.description}</p>
                  </Item>
                ))}
              </Grid>
            </Box>

            <Grid>
              <Box>
                <Heading as="h3">Loaded Chips or Garlic Fries</Heading>
                <SubHeading hasBorder>
                  Any Option Below for <span>£5.95</span>
                </SubHeading>

                {loadedChips.map((item, index) => (
                  <div key={index}>
                    <SubHeading>{item.name}</SubHeading>
                    <p>{item.description}</p>
                  </div>
                ))}
              </Box>

              <Box>
                <Heading as="h3">Kids Meals</Heading>
                <SubHeading hasBorder>
                  Includes a Drink: <span>£4.00</span>
                </SubHeading>

                {kidsMeals.map((item, index) => (
                  <div key={index}>
                    <p>{item}</p>
                  </div>
                ))}
              </Box>
            </Grid>
          </div>
        </MainOptions>
      </Container>

      <Sides>
        <Container>
          <SidesGrid>
            <div data-group="06">
              <Heading as="h3">
                <b>Side Orders</b>
              </Heading>
              <SubHeading hasBorder>
                <span>£3.00</span>
              </SubHeading>

              {sideOrders.map((item, index) => (
                <div key={index}>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div data-group="07">
              <Heading as="h3">
                <b>Sauces and Dips</b>
              </Heading>
              <SubHeading hasBorder>
                <span>£1.00</span>
              </SubHeading>

              {saucesAndSides.map((item, index) => (
                <div key={index}>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div data-group="07">
              <Heading as="h3">
                <b>Treats</b>
              </Heading>
              <SubHeading hasBorder>
                <span>£2.00</span>
              </SubHeading>

              {treats.map((item, index) => (
                <div key={index}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </SidesGrid>
        </Container>
      </Sides>
    </>
  )
}

export default Takeaway

const MobileHeading = styled.div`
  text-align: center;
  margin-bottom: 12px;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const MainOptions = styled.section`
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-gap: 60px;
    grid-template-columns: 1fr 2fr;
  }
`

const SidesGrid = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const SubHeading = styled.h4`
  ${tw`font-normal mt-0 mb-2 uppercase tracking-wide font-black`}
  ${props =>
    props.hasBorder && tw`border-b-2 border-gray-400 pb-4 mb-4`}

  span {
    ${tw`text-green-600`}
  }
`

const Box = styled.div`
  ${tw`mb-12`}
`

const Item = styled.div`
  ${tw`py-2 pb-4 border-b`}
  ${props => (props.noBorder ? tw`border-transparent` : tw`border-gray-300`)}
  ${props =>
    props.highlight &&
    tw`border bg-gray-200 border-gray-300 p-4 mb-8 rounded-md`}
`

const Aside = styled.aside`
  ${tw`bg-gray-200 shadow-md mb-12 sm:mb-0`}
`

const Sides = styled.section`
  ${tw`bg-gray-200 mt-12`}
`

const BreakfastWarning = styled.p`
  ${tw`bg-green-600 text-white py-2 px-4 text-center font-black`}
`

const Grid = styled.div`
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr;
  }
`
