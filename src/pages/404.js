import React from "react"
import SEO from "../components/seo"
import { Container, Layout } from "../components/Layout"
import { Heading } from "../components/Typography"
import ReactMapboxGl, { Marker } from "react-mapbox-gl"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import Pin from "../svg/pin.svg"

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiY29ub3JtY2FmZWUiLCJhIjoiY2s2cXNzeDU3MDAyczNtbWNtYnBoZjJvdiJ9.Ic700Jbopy-ez0blTTm7wg",
})

const NotFound = () => (
  <Layout>
    <SEO title="Page Not Found" />

    <Introduction>
      <Container>
        <Heading as="h1" upperCase={true}>
          Page Not Found
        </Heading>

        <Intro>
          Nobel Café first opened in 1994, a long time ago. Since 1994 we have
          been serving first class breakfast and lunch to the people of
          Ballymena. Nobel is Ballymena, Ballymena is Nobel!
        </Intro>
      </Container>
    </Introduction>

    <MapBox>
      <Map
        // eslint-disable-next-line
        style={"mapbox://styles/conormcafee/ck6qsu8xu29l81ijomgghu0ow/draft"}
        center={[-6.2738876, 54.8658217]}
        zoom={[14]}
        boxZoom={false}
        scrollZoom={false}
        interactive={false}
        dragPan={false}
        containerStyle={{
          height: "100%",
          width: "100%",
        }}
      >
        <Marker coordinates={[-6.2738876, 54.8658217]} anchor="bottom">
          <img src={Pin} alt="Nobel Cafe Location" />
        </Marker>
      </Map>
    </MapBox>
  </Layout>
)

export default NotFound

const MapBox = styled.section`
  height: 80vh;
`
const Introduction = styled.section`
  ${tw`bg-purple-100 text-center py-10`}
`

const Intro = styled.p`
  ${tw`
    tracking-wide font-light block my-4 max-w-lg text-center mx-auto
  `}
`
