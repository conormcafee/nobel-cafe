import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Heading } from "../Typography"
import FB from "../../svg/facebook.svg"
import Insta from "../../svg/instagram.svg"
import Snap from "../../svg/snapchat.svg"

// import Shopfront from "../../images/hero/nobel-shopfront-desktop.jpg"
import Image07 from "../../images/nobel-07.jpg"
import Image08 from "../../images/nobel-08.jpg"
import Image09 from "../../images/nobel-09.jpg"
import Image10 from "../../images/nobel-10.jpg"
import Image11 from "../../images/nobel-11.jpg"
import Image12 from "../../images/nobel-12.jpg"
import { Container } from "../Layout"

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
    <Container>
      <Socials>
        <Heading as="h4" fontBold={true} newLine={true}>
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
        {[Image07, Image08, Image09, Image10, Image11, Image12].map(
          (a, index) => (
            <InstaBox key={index}>
              <InstaImg bg={a} />
            </InstaBox>
          )
        )}
      </InstaMock>
    </Container>
  </Wrapper>
)

export default Footer

const Wrapper = styled.footer`
  ${tw`bg-green-100`}
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
  ${tw`p-5 w-1/2 md:w-1/3 lg:w-1/6`}
`

const InstaImg = styled.div`
  background-image: url(${props => props.bg});
  padding-top: 100%;

  ${tw`
      w-full bg-cover bg-center
    `}
`
