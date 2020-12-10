import React from "react"
import { Heading } from "../../components/Typography"
import { MenuItems, MenuItem } from "../components"
// import { allergens } from "../../utils"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Lunch = ({ title, data, isActuallyLunch }) => {
  const christmas = data.filter(a => a.item === "Christmas Turkey & Ham")
  const burgers = data.filter(a => a.item === "Burgers")
  const goujons = data.filter(a => a.item === "Goujons")
  const pasta = data.filter(a => a.item === "Pasta")
  const panFry = data.filter(a => a.item === "Pan Fry")
  const salad = data.filter(a => a.item === "Classic Caesar Salad")

  const renderContent = (data, title = "") => {
    if (data.length > 0)
      return (
        <>
          <Heading as="h3" fontBold={true}>
            {title}
          </Heading>
          <MenuItems>
            {data.map((lunch, index) => (
              <MenuItem key={index}>
                <p>{lunch.desc}</p>
                <Heading as="h5" textColor="purple" fontBold={true}>
                  £{lunch.price}
                </Heading>
              </MenuItem>
            ))}
          </MenuItems>
        </>
      )

    return null
  }

  const renderBreakfast = data => {
    if (data.length > 0)
      return (
        <>
          <MenuItems>
            {data.map((lunch, index) => (
              <MenuItem key={index}>
                <Heading as="h5" fontBold={true}>
                  {lunch.item}
                </Heading>
                <p>{lunch.desc}</p>

                {lunch.addPrice && (
                  <Heading as="h5" textColor="purple" fontBold={true}>
                    Single - £{lunch.addPrice}
                  </Heading>
                )}

                <Heading as="h5" textColor="purple" fontBold={true}>
                  {lunch.addPrice && `Double - `}£{lunch.price}
                </Heading>
              </MenuItem>
            ))}
          </MenuItems>
        </>
      )

    return null
  }

  return (
    <Wrapper>
      <Heading as="h4" textColor="purple" fontBold={true}>
        {title}
      </Heading>
      {isActuallyLunch && (
        <Heading
          as="h5"
          textColor="purple"
          fontBold={true}
          style={{ textAlign: "center", marginTop: -10 }}
        >
          Sides Not Included
        </Heading>
      )}

      {renderContent(christmas, "Christmas Turkey & Ham")}
      {renderContent(burgers, "Burgers")}
      {renderContent(goujons, "Goujons")}
      {renderContent(pasta, "Pasta")}
      {renderContent(panFry, "Pan Fry")}
      {renderContent(salad, "Classic Caesar Salad")}

      {!isActuallyLunch && renderBreakfast(data)}
    </Wrapper>
  )
}

export default Lunch

Lunch.defaultProps = {
  data: [],
  title: "Lunch",
}

const Wrapper = styled.section`
  ${tw`mt-10 max-w-4xl mx-auto`}

  h4 {
    ${tw`mb-5 text-center`}
  }
`
