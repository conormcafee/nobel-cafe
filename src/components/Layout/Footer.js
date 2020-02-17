import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Heading } from "../Typography"
import { Container } from "../Layout"
import FB from "../../svg/facebook.svg"
import Insta from "../../svg/instagram.svg"
import Snap from "../../svg/snapchat.svg"
import NCLogo from "../../images/logo.png"

const socialChannels = [
  {
    title: "Like us on Facebook",
    icon: FB,
    link: "https://www.facebook.com/NobelBallymena/",
  },
  {
    title: "Follow us on Instagram",
    icon: Insta,
    link: "https://www.instagram.com/nobelcafe_ballymena",
  },
  {
    title: "Add us Snapchat",
    icon: Snap,
    link: "https://www.snapchat.com/add/nobel-cafe",
  },
]

const menu = [
  { title: "Menu", to: "/menu" },
  { title: "Videos", to: "/videos" },
  { title: "Jobs", to: "/jobs" },
  { title: "Find Us", to: "/find-us" },
]

const Footer = () => (
  <Wrapper>
    <Container>
      <Socials>
        <Boxes>
          {socialChannels.map((a, index) => (
            <Box href={a.link} target="_blank" key={index}>
              <div>
                <img src={a.icon} alt={a.title} />
                <Heading as="h5" upperCase={true}>
                  {a.title}
                </Heading>
              </div>
            </Box>
          ))}
        </Boxes>
      </Socials>
    </Container>

    <Container>
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
    </Container>
  </Wrapper>
)

export default Footer

const Wrapper = styled.footer`
  ${tw`
    bg-white py-10
  `}
`

const Socials = styled.aside`
  ${tw`
    bg-purple-100 shadow p-10 rounded-lg
  `}
`

const Boxes = styled.div`
  ${tw`
    flex flex-wrap -mx-5
  `}
`

const Box = styled.a`
  ${tw`
    w-full md:w-1/3 p-5
  `}

  > div {
    ${tw`
      flex
      flex-col
      items-center
      justify-center
      bg-white
      shadow
      p-10
      rounded-lg
      text-center
    `}
  }

  img {
    ${tw`
      w-16 mb-4
    `}
  }
`

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
