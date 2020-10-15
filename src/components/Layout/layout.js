import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "../Header"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Footer } from "../Layout"

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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
