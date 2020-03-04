import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Heading } from "../Typography"
import FB from "../../svg/facebook.svg"
import Insta from "../../svg/instagram.svg"
import Snap from "../../svg/snapchat.svg"

import Shopfront from "../../images/hero/nobel-shopfront-desktop.jpg"

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

const Footer = () => (
  <Wrapper>
    <Socials>
      <Heading as="h4" newLine={true}>
        Follow us
      </Heading>
      <Heading as="h2" textColor="purple">
        #nobelcafe
      </Heading>
      <Boxes>
        {socialChannels.map((a, index) => (
          <Box href={a.link} target="_blank" key={index}>
            <img src={a.icon} alt={a.title} />
          </Box>
        ))}
      </Boxes>
    </Socials>

    <InstaMock>
      {[0, 1, 2, 3, 4, 5].map((a, index) => (
        <InstaBox key={index}>
          <img src={Shopfront} alt="Test" />
        </InstaBox>
      ))}
    </InstaMock>
  </Wrapper>
)

export default Footer

const Wrapper = styled.footer`
  ${tw`bg-gray-200`}
`

const Socials = styled.aside`
  ${tw`
    py-10 text-center
  `}
`

const Boxes = styled.div`
  ${tw`
    flex items-center justify-center mt-4
  `}
`

const Box = styled.a`
  img {
    ${tw`
      w-8 mx-4
    `}
  }
`

const InstaMock = styled.section`
  ${tw`flex flex-wrap`}
`

const InstaBox = styled.div`
  ${tw`p-5 w-1/6`}
`
