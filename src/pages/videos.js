import React from "react"
import SEO from "../components/seo"
import { Layout, Container } from "../components/Layout"
import { Heading } from "../components/Typography"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const description = `We love making videos at Nobel Café, have a look below at some of our favourites to date!  Have an idea of a great video we could make in the future, please let us know`

const videos = [
  {
    title: "We're Back!",
    iframe:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNobelBallymena%2Fvideos%2F3811324915560921%2F&show_text=0&width=560",
  },
  {
    title: "The Nobel Fry",
    iframe:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNobelBallymena%2Fvideos%2F445928015576157%2F&show_text=0&width=560",
  },
  {
    title: "Christmas Love",
    iframe:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNobelBallymena%2Fvideos%2F881046588730962%2F&show_text=0&width=560",
  },
  {
    title: "Nobel Elves",
    iframe:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNobelBallymena%2Fvideos%2F689900841178872%2F&show_text=0&width=560",
  },
  {
    title: "Nobel Baby!",
    iframe:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNobelBallymena%2Fvideos%2F642298362605787%2F&show_text=0&width=560",
  },
  {
    title: "Nobel Christmas",
    iframe:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNobelBallymena%2Fvideos%2F526979757470982%2F&show_text=0&width=560",
  },
]

export default function Video() {
  return (
    <Layout>
      <SEO title="Videos" description={description} />

      <Introduction>
        <Container>
          <Heading as="h2" fontBold={true}>
            Videos
          </Heading>

          <Intro>{description}</Intro>
        </Container>
      </Introduction>

      <Container>
        <Videos>
          {videos.map((video, index) => (
            <VideoElement key={index}>
              <Heading as="h4" fontBold={true}>
                {video.title}
              </Heading>
              <VideoIframe>
                <iframe
                  title={video.title}
                  src={video.iframe}
                  width="560"
                  height="315"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameborder="0"
                  allowTransparency="true"
                  allowFullScreen="true"
                ></iframe>
              </VideoIframe>
            </VideoElement>
          ))}
        </Videos>
      </Container>
    </Layout>
  )
}

const Introduction = styled.section`
  ${tw`bg-gray-200 text-center py-10`}
`

const Intro = styled.p`
  ${tw`
    tracking-wide font-light block my-4 max-w-lg text-center mx-auto
  `}
`

const Videos = styled.section`
  ${tw`
    flex flex-wrap mt-10 pb-8 -mx-10
  `}
`

const VideoElement = styled.aside`
  ${tw`
    w-full md:w-1/2 px-10 mb-10
  `}
`

const VideoIframe = styled.div`
  ${tw`
      relative overflow-hidden max-w-full
    `}
  padding-bottom: 56.25%;
  height: 0;

  & iframe {
    ${tw`
      absolute top-0 left-0 w-full h-full
    `}
  }
`
