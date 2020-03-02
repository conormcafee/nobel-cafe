import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Heading } from "../Typography"
import NCLogo from "../../images/logo.png"

const menu = [
  { title: "Menu", to: "/menu" },
  { title: "Videos", to: "/videos" },
  { title: "Jobs", to: "/jobs" },
  { title: "Find Us", to: "/find-us" },
]

const Footer = () => (
  <footer>
    <Main>
      <ul>
        {menu.map((a, index) => (
          <li key={index}>
            <Heading as="h5" upperCase={true}>
              <Link to={a.to}>{a.title}</Link>
            </Heading>
          </li>
        ))}
      </ul>
    </Main>
    <Logo src={NCLogo} alt="Nobel Cafe Logo" />
  </footer>
)

export default Footer

const Main = styled.main`
  ${tw`
    flex items-center justify-center pt-10 pb-5 text-center
  `}

  ul {
    ${tw`
      flex
    `}
  }

  li:not(:last-child) {
    ${tw`
      mr-6
    `}
  }
`

const Logo = styled.img`
  ${tw`
      w-32 mx-auto
    `}
`
