import React from "react"
import SEO from "../../components/seo"
import { Layout } from "../../components/Layout"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Container } from "../../components/Layout"
import { Heading } from "../../components/Typography"

const Desc = `Please call 028 2565 4302 to place an order.  Alternatively you can place your order at the cafe`

const sideOrders = [
  "Chips",
  "Skin on French Fries",
  "Garlic Fries",
  "Salt & Chilli Fries",
  "Kebab Fries",
  "Tobacco Onions",
  "Champ",
  "Mash",
]

const saucesAndSides = [
  "Gravy",
  "Pepper Sauce",
  "Curry Sauce",
  "Mayonaise",
  "Garlic Mayonaise",
  "BBQ Sauce",
  "Kebab Sauce",
  "Sweet Chilli Sauce",
]

const treats = [
  "Salted Caramel Brownie",
  "Caramel Square",
  "Mint Aero Square",
  "Raspberry Ruffle",
]

const breakfast = [
  "Sausage",
  "Bacon",
  "Fried Egg",
  "Poached Egg",
  "Beans",
  "Vegetable Roll",
  "Black Pudding",
  "White Pudding",
  "Diced Potatoes",
  "Soda Bread",
  "Potato Bread",
  "Pancake",
]

const breakfastBap = "Choose from 2 fillings from Sausage, Bacon and Egg"

const porridge = [
  "Fresh Fruit",
  "Honey",
  "Maple Syrup",
  "Cinnamon",
  "Nuts & Seeds",
]

const takeaway = [
  {
    name: "Steak Burger",
    description:
      "Hand Pressed Burger, Bacon, Cheese, Gem Lettuce, Tomato, Red Onion, Secret Mayo, Toasted Bun",
  },

  {
    name: "Chicken Burger",
    description:
      "Southern Fried Chicken Fillet, Bacon, Cheese, Gem Lettuce, Tomato, Red Onion, Mayo, Toasted Bun",
  },
  {
    name: "Chicken Goujons",
    description: "4 Cripsy Fried Chicken Fillets with a Sauce or Dip",
  },
  {
    name: "Salt & Chilli Goujons",
    description:
      "4 Fried Goujons, seasoned with our Salt & Chilli Spice & served with Garlic Mayo",
  },
  {
    name: "Sticky Chilli Chicken",
    description: "Crispy Fried Chicken, Sweet Chilli Sauce, Garlic Mayo",
  },
  {
    name: "Pan-Fried Chicken",
    description: "Seasonal Vegetables, Tobacco Onions, Choice of Sauce",
  },
  {
    name: "Fresh Cod",
    description: "Crispy Battered Cod, Homemade Tartare & Lemon",
  },
  {
    name: "Penne Pasta",
    description: "Chilli Steak or Chicken Penne Pasta",
  },
]

const loadedChips = [
  {
    name: "Southern Fried Chicken",
    description: "Tobacco Onions, Creamy Pepper Sauce",
  },
  {
    name: "Spice Box",
    description: "Salt & Chilli Chicken, Onions, Peppers, Garlic Mayo",
  },
  {
    name: "Creamy Chilli",
    description: "Steak or Chicken with Tobacco Onions",
  },
]

const kidsMeals = [
  "Small Fish and Chips",
  "2 Sausages and Chips",
  "2 Chicken Goujons and Chips",
]

const TakeawayMenu = () => (
  <Layout>
    <SEO title="Takeaway Menu" description={Desc} />

    <div
      style={{
        background: "#e6e6e6",
        paddingTop: 24,
        paddingBottom: 24,
        marginBottom: 30,
      }}
    >
      <Container>
        <Heading as="h2">Takeaway Menu</Heading>
        <SubHeading>Opening Hours</SubHeading>
        <p>Monday to Sunday</p>
        <p>08:00 - 12:00</p>

        <p>Tuesday to Sunday</p>
        <p>04:00 - 21:00</p>

        <Heading as="h2">Loyalty Card</Heading>
        <SubHeading>Buy 9 Takeaways get 10th Free!</SubHeading>
      </Container>
    </div>

    <Container>
      <section
        style={{ display: "grid", gridGap: 60, gridTemplateColumns: `2fr 1fr` }}
      >
        <div>
          <Box>
            <Heading as="h3">Takeaway</Heading>
            <SubHeading hasBorder={true}>
              Any Option Below <span>£4.95</span>
            </SubHeading>

            <div
              style={{
                display: "grid",
                gridGap: 30,
                gridTemplateColumns: `1fr 1fr`,
              }}
            >
              {takeaway.map((item, index) => (
                <Item key={index}>
                  <SubHeading>{item.name}</SubHeading>
                  <p>{item.description}</p>
                </Item>
              ))}
            </div>
          </Box>

          <div
            style={{
              display: "grid",
              gridGap: 30,
              gridTemplateColumns: `1fr 1fr`,
            }}
          >
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
          </div>
        </div>
        <Aside>
          <BreakfastWarning>Served from 8am to 12pm</BreakfastWarning>
          <div style={{ padding: 24 }}>
            <div data-group="03">
              <Heading as="h3">Breakfast Items</Heading>
              <SubHeading hasBorder>
                Each Item <span>70p</span>
              </SubHeading>
              <Box style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                {breakfast.map((item, index) => (
                  <p style={{ marginBottom: 12 }}>{item}</p>
                ))}
              </Box>
            </div>

            <div data-group="04">
              <Heading as="h3">Breakfast Bap</Heading>
              <SubHeading hasBorder>
                <span>£3.00</span>
              </SubHeading>

              <Box>
                <p>{breakfastBap}</p>
              </Box>
            </div>

            <div data-group="05">
              <Heading as="h3">Porridge</Heading>
              <SubHeading hasBorder>
                <span>£3.00</span>
              </SubHeading>
              <Box>
                <p>{porridge}</p>
              </Box>
            </div>
          </div>
        </Aside>
      </section>
    </Container>

    <Sides>
      <Container>
        <div
          style={{
            display: "grid",
            gridGap: 60,
            gridTemplateColumns: `1fr 1fr 1fr`,
            padding: `60px 0px`,
          }}
        >
          <div data-group="06">
            <Heading as="h3">Side Orders</Heading>
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
            <Heading as="h3">Sauces and Dips</Heading>
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
            <Heading as="h3">Treats</Heading>
            <SubHeading hasBorder>
              <span>£2.00</span>
            </SubHeading>

            {treats.map((item, index) => (
              <div key={index}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Sides>
  </Layout>
)

export default TakeawayMenu

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
  ${tw`py-2 pb-4 mb-2 border-b border-gray-300`}
`

const Aside = styled.aside`
  ${tw`bg-gray-200`}
`

const Sides = styled.section`
  ${tw`bg-gray-200 mt-12`}
`

const BreakfastWarning = styled.p`
  ${tw`bg-green-600 text-white py-2 px-4 text-center font-black`}
`
