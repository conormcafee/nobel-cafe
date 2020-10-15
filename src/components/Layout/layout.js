import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "../Header"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Footer } from "../Layout"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Main>
        <TakeoutBanner
          to="/menu/takeaway-menu"
          title="Nobel Cafe Takeaway Menu"
        >
          Looking for our Takeout Menu? Click Here
        </TakeoutBanner>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </Main>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${tw`font-base relative bg-white`}
`

const Main = styled.main`
  ${tw`
    mx-auto
  `}
`

const TakeoutBanner = styled(Link)`
  ${tw`
    font-black text-center text-lg 
    text-white bg-green-700 hover:text-green-900 
    py-2 shadow-md border-b-2 border-green-900 w-full block
  `}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
