import React from "react"
import SEO from "../../components/seo"
import { Layout } from "../../components/Layout"
// import styled from "@emotion/styled"
// import tw from "tailwind.macro"
import { Container } from "../../components/Layout"
// import { Heading } from "../../components/Typography"

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

    <Container>
      <section style={{ display: "grid", gridTemplateColumns: `2fr 1fr` }}>
        <div>
          <div data-group="01">
            <h2>Takeaway</h2>
            <h3>Any Option Below £4.95</h3>

            {takeaway.map((item, index) => (
              <div key={index}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div
            data-group="02"
            style={{
              paddingTop: 24,
              marginTop: 24,
              borderTop: `1px solid #e6e6e6`,
            }}
          >
            <h2>Loaded Chips or Garlic Fries</h2>
            <h3>Any Option Below for £5.95</h3>

            {loadedChips.map((item, index) => (
              <div key={index}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div
            data-group="03"
            style={{
              paddingTop: 24,
              marginTop: 24,
              borderTop: `1px solid #e6e6e6`,
            }}
          >
            <h2>Kids Meals</h2>
            <h3>Includes a Drink: £4.00</h3>

            {kidsMeals.map((item, index) => (
              <div key={index}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <aside>
          <div
            data-group="03"
            style={{
              paddingTop: 24,
              marginTop: 24,
              borderTop: `1px solid #e6e6e6`,
            }}
          >
            <h2>Breakfast Items</h2>
            <h3>Each Item 70p</h3>

            {breakfast.map((item, index) => (
              <div key={index}>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div
            data-group="04"
            style={{
              paddingTop: 24,
              marginTop: 24,
              borderTop: `1px solid #e6e6e6`,
            }}
          >
            <h2>Breakfast Bap</h2>
            <h3>£3.00</h3>

            <p>{breakfastBap}</p>
          </div>

          <div
            data-group="05"
            style={{
              paddingTop: 24,
              marginTop: 24,
              borderTop: `1px solid #e6e6e6`,
            }}
          >
            <h2>Porridge</h2>
            <h3>£3.00</h3>

            <p>{porridge}</p>
          </div>
        </aside>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: `1fr 1fr 1fr`,
          paddingTop: 24,
          marginTop: 24,
          borderTop: `1px solid #e6e6e6`,
        }}
      >
        <div data-group="06">
          <h2>Side Orders</h2>
          <h3>£3.00</h3>

          {sideOrders.map((item, index) => (
            <div key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div data-group="07">
          <h2>Sauces and Dips</h2>
          <h3>1.00</h3>

          {saucesAndSides.map((item, index) => (
            <div key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div data-group="07">
          <h2>Treats</h2>
          <h3>£2.00</h3>

          {treats.map((item, index) => (
            <div key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  </Layout>
)

export default TakeawayMenu
