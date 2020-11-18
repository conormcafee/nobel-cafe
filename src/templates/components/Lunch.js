import React from "react"
import { Heading } from "../../components/Typography"
import { MenuItems, MenuItem } from "../components"
// import { allergens } from "../../utils"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Lunch = ({ title, data }) => {
  const burgers = data.filter(a => a.item === "Burgers")
  const goujons = data.filter(a => a.item === "Goujons")
  const pasta = data.filter(a => a.item === "Pasta")
  const panFry = data.filter(a => a.item === "Pan Fry")
  const salad = data.filter(a => a.item === "Classic Caesar Salad")

  const renderContent = (data, title = "") => {
    if (data.length > 0)
      return (
        <>
          <Heading as="h5" fontBold={true}>
            {title}
          </Heading>
          <MenuItems>
            {data.map((lunch, index) => (
              <MenuItem key={index}>
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

      {renderContent(burgers, "Burgers")}
      {renderContent(goujons, "Goujons")}
      {renderContent(pasta, "Pasta")}
      {renderContent(panFry, "Pan Fry")}
      {renderContent(salad, "Classic Caesar Salad")}
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
    ${tw`mb-5 sm:text-center`}
  }
`
